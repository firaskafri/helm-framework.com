import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE_FULL_NAME, SITE_NAME, SITE_ORIGIN } from '../data/site';
import { loadDocs, loadRoles } from '../lib/content';

const RSS_TITLE = `${SITE_NAME} — guides and roles`;
const RSS_DESCRIPTION = `${SITE_FULL_NAME}: foundation, practitioner and leadership guides, and AI-era role definitions.`;

export const GET: APIRoute = async (context) => {
  const site = context.site?.href ?? `${SITE_ORIGIN}/`;
  const docs = await loadDocs();
  const roles = await loadRoles();

  const docItems = docs.map((doc) => ({
    title: doc.data.subtitle,
    description: doc.data.description,
    link: `/${doc.id}`,
    pubDate: doc.data.createdAt,
    customData: `<dcterms:modified>${doc.data.lastModified.toISOString()}</dcterms:modified>`,
  }));

  const roleItems = roles.map((role) => ({
    title: role.data.subtitle,
    description: role.data.description,
    link: `/roles/${role.id}`,
    pubDate: role.data.createdAt,
    customData: `<dcterms:modified>${role.data.lastModified.toISOString()}</dcterms:modified>`,
  }));

  const items = [...docItems, ...roleItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime(),
  );

  return rss({
    title: RSS_TITLE,
    description: RSS_DESCRIPTION,
    site,
    items,
    trailingSlash: false,
    xmlns: { dcterms: 'http://purl.org/dc/terms/' },
    customData: '<language>en-us</language>',
  });
};
