import {
  publicUpdates,
  statusLabel,
  updateDateLabel,
  updateUrl,
  type Update,
} from './updates';

function escapeText(text: string): string {
  return text.replace(/[\\`*_[\]<>#]/g, '\\$&');
}

/** Repository readers and the website get the same notes and absolute destinations. */
export function renderUpdateChangelog(
  updates: Update[],
  origin: string,
): string {
  const link = (label: string, href: string) =>
    `[${escapeText(label)}](${new URL(href, origin).href.replaceAll('(', '%28').replaceAll(')', '%29')})`;
  return [
    '# HELM Release History',
    '<!-- Generated from src/data/updates.json. Run npm run updates:sync; edit the source, not this file. -->',
    'What has changed in HELM’s guidance and resources, why it matters for your team, and where to explore it. Entries marked “Preview” describe upcoming changes.',
    `Browse ${link('the latest updates', '/updates')} or ${link('subscribe to published updates via RSS', '/updates/rss.xml')}.`,
    ...publicUpdates(updates).flatMap((update) => [
      update.kind === 'release'
        ? `## ${update.version} — ${
            update.status === 'published'
              ? update.date
              : statusLabel(update.status)
                  .toLowerCase()
                  .replace(/^./, (letter) => letter.toUpperCase())
          }`
        : `## ${updateDateLabel(update)} — ${escapeText(update.title)}`,
      update.kind === 'milestone'
        ? link(update.title, updateUrl(update))
        : `${link(update.title, updateUrl(update))} · ${update.status === 'published' ? 'Published' : 'Prepared'} ${update.date}.${update.updatedAt !== update.date ? ` Updated ${update.updatedAt}.` : ''}`,
      escapeText(update.summary),
      ...update.sections.flatMap((section) => [
        `### ${escapeText(section.heading)}`,
        section.items
          .map(
            (item) =>
              `- ${escapeText(item.text)} ${item.links.map(({ label, href }) => link(label, href)).join(' · ')}`,
          )
          .join('\n'),
      ]),
    ]),
    '',
  ].join('\n\n');
}
