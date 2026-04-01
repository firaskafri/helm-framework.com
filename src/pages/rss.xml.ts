import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE_FULL_NAME, SITE_NAME, SITE_ORIGIN } from '../data/site';

const RSS_TITLE = `${SITE_NAME} — guides and roles`;
const RSS_DESCRIPTION = `${SITE_FULL_NAME}: foundation, practitioner and leadership guides, and AI-era role definitions.`;

/** Stable feed dates until content frontmatter gains explicit `pubDate` fields. */
const FEED_PUB_DATE = new Date('2026-04-01T00:00:00.000Z');

export const GET: APIRoute = async (context) => {
  const site = context.site?.href ?? `${SITE_ORIGIN}/`;
  const docs = await getCollection('docs');
  const roles = await getCollection('roles');

  const docItems = docs.map((doc) => ({
    title: doc.data.subtitle,
    description: doc.data.description,
    link: `/${doc.id}`,
    pubDate: doc.data.lastModified ?? FEED_PUB_DATE,
  }));

  const roleItems = roles.map((role) => ({
    title: role.data.subtitle,
    description: role.data.description,
    link: `/roles/${role.id}`,
    pubDate: role.data.lastModified ?? FEED_PUB_DATE,
  }));

  const items = [...docItems, ...roleItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime(),
  );

  return rss({
    title: RSS_TITLE,
    description: RSS_DESCRIPTION,
    site,
    items,
    customData: '<language>en-us</language>',
  });
};
