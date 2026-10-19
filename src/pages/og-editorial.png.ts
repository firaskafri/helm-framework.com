import type { APIRoute } from 'astro';
import sharp from 'sharp';
import artwork from '../assets/og-editorial.svg?raw';

/** Render the shared social artwork during the static build. */
export const GET: APIRoute = async () => {
  const image = await sharp(Buffer.from(artwork)).png().toBuffer();
  return new Response(new Uint8Array(image), {
    headers: { 'Content-Type': 'image/png' },
  });
};
