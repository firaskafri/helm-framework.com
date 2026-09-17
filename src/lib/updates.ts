import { z } from 'astro/zod';
import { PUBLICATION_STATUSES } from '../data/framework';

const text = z
  .string()
  .trim()
  .min(1)
  .refine((value) => !/[\r\n]/.test(value), 'Use a single line of text');
const date = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const parsed = new Date(`${value}T00:00:00Z`);
    return (
      Number.isFinite(parsed.getTime()) &&
      parsed.toISOString().slice(0, 10) === value
    );
  }, 'Use a real calendar date');
const link = z
  .object({
    label: text,
    href: text.refine((value) => {
      if (/[\s\\<>]/.test(value)) return false;
      if (value.startsWith('/') && !value.startsWith('//')) return true;
      try {
        const url = new URL(value);
        return url.protocol === 'https:' && !url.username && !url.password;
      } catch {
        return false;
      }
    }, 'Link to a site path or an HTTPS URL'),
  })
  .strict();

export const updateSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    kind: z.enum(['release', 'update']),
    version: z.string().regex(/^\d+\.\d+\.\d+$/),
    status: z.enum(PUBLICATION_STATUSES),
    date,
    updatedAt: date,
    title: text,
    summary: text,
    sections: z
      .array(
        z
          .object({
            heading: text,
            items: z
              .array(z.object({ text, links: z.array(link).min(1) }).strict())
              .min(1),
          })
          .strict(),
      )
      .min(1),
  })
  .strict()
  .refine(
    (entry) => entry.updatedAt >= entry.date,
    'updatedAt must be on or after date',
  );

export type Update = z.infer<typeof updateSchema>;

export function validateUpdates(
  input: unknown,
  version: string,
  state: string,
): Update[] {
  const updates = z.array(updateSchema).min(1).parse(input);
  if (new Set(updates.map(({ id }) => id)).size !== updates.length)
    throw new Error('Update IDs must be unique');
  const releases = updates.filter(({ kind }) => kind === 'release');
  if (new Set(releases.map(({ version }) => version)).size !== releases.length)
    throw new Error('Each framework version must have one release entry');
  const current = releases.find((entry) => entry.version === version);
  if (!current) throw new Error(`Missing release update for HELM ${version}`);
  if (current.status !== state)
    throw new Error(
      `Update status for HELM ${version} must match release state ${state}`,
    );
  return [...updates].sort(
    (a, b) =>
      b.date.localeCompare(a.date) ||
      b.updatedAt.localeCompare(a.updatedAt) ||
      a.id.localeCompare(b.id),
  );
}

export function publicUpdates(updates: Update[]): Update[] {
  return updates.filter(({ status }) => status !== 'draft');
}

export function publishedUpdates(updates: Update[]): Update[] {
  return updates.filter(({ status }) => status === 'published');
}

export function latestUpdateDate(updates: Update[]): string {
  return updates.reduce(
    (latest, entry) => (entry.updatedAt > latest ? entry.updatedAt : latest),
    '',
  );
}

export function updateUrl(update: Pick<Update, 'id'>): string {
  return `/updates#${update.id}`;
}

export function statusLabel(status: Update['status']): string {
  return status
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

/** CI requires meaningful notes when visitors' content or interface changes. */
export function assertUpdateCoverage(
  files: string[],
  updates: Update[],
  previous: Update[],
): void {
  const visible = files.filter(
    (file) =>
      /^(src\/(content|data|pages|components|layouts|styles|lib)\/|ROADMAP\.md$|LICENSE-CONTENT\.md$|docs\/corrections\.md$)/.test(
        file,
      ) &&
      !file.startsWith('src/pages/checks/') &&
      file !== 'src/data/updates.json',
  );
  if (!visible.length) return;
  const before = new Map(previous.map((entry) => [entry.id, entry]));
  const meaningful = (entry: Update) => ({
    ...entry,
    date: undefined,
    updatedAt: undefined,
  });
  const documented = updates.some((entry) => {
    if (entry.status === 'draft') return false;
    const old = before.get(entry.id);
    return (
      !old ||
      (entry.updatedAt >= old.updatedAt &&
        JSON.stringify(meaningful(entry)) !== JSON.stringify(meaningful(old)))
    );
  });
  if (!documented)
    throw new Error(
      `Visitor-facing changes need a linked update in src/data/updates.json. Add a note or amend the current candidate entry, then run npm run updates:sync. Changed paths: ${visible.join(', ')}`,
    );
}
