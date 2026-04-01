// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Keep in sync with SITE_ORIGIN in src/data/site.ts
export default defineConfig({
  site: 'https://helmframework.com',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
