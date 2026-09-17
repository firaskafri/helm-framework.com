import type { APIRoute } from 'astro';
import { SITE_ORIGIN, SITE_UPDATED_AT, REFERENCE_LINKS } from '../data/site';
import { loadDocs, loadRoles } from '../lib/content';
import { UPDATES_LAST_MODIFIED } from '../data/updates';

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.href.replace(/\/$/, '') ?? SITE_ORIGIN;
  const docs = await loadDocs();
  const roles = await loadRoles();

  const staticPaths = [
    '/',
    '/competencies',
    '/roles',
    '/roles/competency-map',
    ...REFERENCE_LINKS.map(({ href }) => href),
  ].map((path) => ({
    path,
    modified:
      path === '/updates' || path === '/changelog'
        ? UPDATES_LAST_MODIFIED
        : path === '/' && UPDATES_LAST_MODIFIED > SITE_UPDATED_AT
          ? UPDATES_LAST_MODIFIED
          : SITE_UPDATED_AT,
  }));
  const docPaths = docs.map((d) => ({
    path: `/${d.id}`,
    modified: d.data.lastModified.toISOString().slice(0, 10),
  }));
  const rolePaths = roles.map((r) => ({
    path: `/roles/${r.id}`,
    modified: r.data.lastModified.toISOString().slice(0, 10),
  }));

  const urls = [...staticPaths, ...docPaths, ...rolePaths]
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(
      ({ path, modified }) =>
        `  <url><loc>${origin}${path}</loc><lastmod>${modified}</lastmod></url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
