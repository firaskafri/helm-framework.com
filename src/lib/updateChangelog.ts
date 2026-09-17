import { publicUpdates, statusLabel, updateUrl, type Update } from './updates';

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
    'What has changed in HELM’s guidance and resources, why it matters for your team, and where to explore it. Entries marked “Release candidate” preview an upcoming release.',
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
        : `## ${update.date} — ${escapeText(update.title)}`,
      `${link(update.title, updateUrl(update))} · ${update.status === 'published' ? 'Published' : 'Prepared'} ${update.date}.${update.updatedAt !== update.date ? ` Updated ${update.updatedAt}.` : ''}`,
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
