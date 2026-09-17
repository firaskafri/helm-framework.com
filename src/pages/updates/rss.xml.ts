import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { UPDATES } from '../../data/updates';
import { SITE_NAME, SITE_ORIGIN } from '../../data/site';
import { publishedUpdates, updateUrl } from '../../lib/updates';

export const GET: APIRoute = ({ site }) =>
  rss({
    title: `${SITE_NAME} — updates`,
    description:
      'Published HELM releases, guidance changes, corrections, and improvements.',
    site: site ?? SITE_ORIGIN,
    trailingSlash: false,
    xmlns: { dcterms: 'http://purl.org/dc/terms/' },
    customData: '<language>en-us</language>',
    items: publishedUpdates(UPDATES).map((update) => ({
      title: `${update.title} — HELM ${update.version}`,
      description: update.summary,
      link: updateUrl(update),
      pubDate: new Date(update.date),
      customData: `<dcterms:modified>${new Date(update.updatedAt).toISOString()}</dcterms:modified>`,
    })),
  });
