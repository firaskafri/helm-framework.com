import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

/** Derive clean text from the published page, including rendered guide components. */
export function pageMarkdown(html) {
  const $ = cheerio.load(html);
  if ($('meta[name="robots"]').attr('content')?.includes('noindex')) return;
  const canonical = $('link[rel="canonical"]').attr('href');
  if (!canonical) throw new Error('Markdown source needs a canonical URL');
  const main = $('main#main-content');
  const title = main.find('h1').first().text().trim();
  const description = $('meta[name="description"]').attr('content');
  const modified = $('meta[property="article:modified_time"]')
    .attr('content')
    ?.slice(0, 10);
  main.find('h1').first().remove();
  main.find('details').each((_, element) => {
    if ($(element).find('nav').length) $(element).remove();
  });
  // Accordion buttons contain the section name and sometimes its symptom.
  main.find('button[aria-expanded][aria-controls]').each((_, element) => {
    $(element).replaceWith(`<div>${$(element).html()}</div>`);
  });
  main
    .find(
      'script, style, button, select, label[for], [role="tablist"], nav, .sr-only, svg',
    )
    .remove();
  main.find('span').each((_, element) => {
    $(element).after(' ');
  });
  main.find('a[href]').each((_, element) => {
    const node = $(element);
    node.attr('href', new URL(node.attr('href'), canonical).href);
  });
  const markdown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
  });
  markdown.use(gfm);
  return `# ${title}\n\n> ${description}\n\nSource: ${canonical}\nUpdated: ${modified}\nLicense: https://creativecommons.org/licenses/by-sa/4.0/\n\n${markdown.turndown(main.html())}\n`;
}

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) => {
        const file = path.join(directory, entry.name);
        return entry.isDirectory()
          ? htmlFiles(file)
          : file.endsWith('.html')
            ? [file]
            : [];
      }),
    )
  ).flat();
}

export function agentMarkdown() {
  return {
    name: 'helm-agent-markdown',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        for (const file of await htmlFiles(root)) {
          const markdown = pageMarkdown(await readFile(file, 'utf8'));
          if (!markdown) continue;
          const relative = path.relative(root, file);
          const output = relative.replace(/\.html$/, '.md');
          await writeFile(path.join(root, output), markdown);
        }
      },
    },
  };
}
