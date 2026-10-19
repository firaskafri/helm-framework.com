import type { APIRoute } from 'astro';
import sharp from 'sharp';
import artwork from '../assets/og-editorial.svg?raw';
import wordmark from '../assets/helm-wordmark.svg?raw';

/** Render the shared social artwork during the static build. */
export const GET: APIRoute = async () => {
  const logo = await sharp(Buffer.from(wordmark))
    .resize({ width: 154 })
    .png()
    .toBuffer();
  const image = await sharp(Buffer.from(artwork))
    .composite([{ input: logo, left: 60, top: 48 }])
    .png()
    .toBuffer();
  return new Response(new Uint8Array(image), {
    headers: { 'Content-Type': 'image/png' },
  });
};
