import type { APIRoute } from 'astro';
import artwork from '../../assets/og-editorial.svg?raw';
import { renderSocialImage } from '../../lib/socialImage';

export const GET: APIRoute = async () =>
  new Response(await renderSocialImage(artwork), {
    headers: { 'Content-Type': 'image/png' },
  });
