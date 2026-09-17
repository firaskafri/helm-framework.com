// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { SITE_ORIGIN } from './src/data/site.ts';
import { unified } from '@astrojs/markdown-remark';
import { rehypeAccessibleContent } from './src/lib/rehypeAccessibleContent.ts';
import { publicContentGuard } from './scripts/public-content-guard.mjs';

export default defineConfig({
  site: SITE_ORIGIN,
  output: 'static',
  integrations: [mdx(), publicContentGuard()],
  markdown: {
    processor: unified({ rehypePlugins: [rehypeAccessibleContent] }),
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rolldownOptions: {
        onLog(level, log, handler) {
          // Astro consumes this generated content-asset marker before bundling.
          // Its loss as a JS directive is expected; all other warnings remain visible.
          if (
            log.code === 'MODULE_LEVEL_DIRECTIVE' &&
            log.message.includes('"use astro:head-inject"')
          )
            return;
          handler(level, log);
        },
      },
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
