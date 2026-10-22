import type { APIRoute } from 'astro';
import artwork from '../assets/og-editorial.svg?raw';
import { renderSocialImage } from '../lib/socialImage';

/** Render the shared social artwork during the static build. */
export const GET: APIRoute = async () => {
  return new Response(await renderSocialImage(artwork), {
    headers: { 'Content-Type': 'image/png' },
  });
};
