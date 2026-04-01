import type { APIRoute } from 'astro';
import { SITE_ORIGIN } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? new URL(SITE_ORIGIN).origin;
  const body = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
