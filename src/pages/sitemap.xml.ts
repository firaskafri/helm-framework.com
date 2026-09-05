import type { APIRoute } from 'astro';
import { SITE_ORIGIN } from '../data/site';
import { loadDocs, loadRoles } from '../lib/content';

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.href.replace(/\/$/, '') ?? SITE_ORIGIN;
  const docs = await loadDocs();
  const roles = await loadRoles();

  const staticPaths = ['/', '/roles/', '/roles/competency-map/'];
  const docPaths = docs.map((d) => `/${d.id}/`);
  const rolePaths = roles.map((r) => `/roles/${r.id}/`);

  const urls = [...staticPaths, ...docPaths, ...rolePaths]
    .sort()
    .map((path) => `  <url><loc>${origin}${path}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
