import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';

const DIST_DIR = path.resolve('dist/client');

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
    }),
  );
  return nestedFiles.flat();
}

function outputPaths(filePath) {
  const relativePath = path.relative(DIST_DIR, filePath).split(path.sep).join('/');
  const publicPath = `/${relativePath}`;

  if (relativePath === 'index.html') return ['/'];
  if (!relativePath.endsWith('/index.html')) return [publicPath];

  const directoryPath = `/${relativePath.slice(0, -'/index.html'.length)}`;
  return [directoryPath, `${directoryPath}/`];
}

function formatFailures(failures) {
  return failures.map((failure) => `- ${failure}`).join('\n');
}

const files = await listFiles(DIST_DIR);
const publicPaths = new Set();
const pagesByPublicPath = new Map();
const pageRecords = [];

for (const filePath of files) {
  const filePublicPaths = outputPaths(filePath);
  for (const publicPath of filePublicPaths) publicPaths.add(publicPath);

  if (!filePath.endsWith('.html')) continue;

  const html = await readFile(filePath, 'utf8');
  const $ = cheerio.load(html);
  const ids = new Set();
  const duplicateIds = new Set();

  $('[id]').each((_, element) => {
    const id = $(element).attr('id');
    if (!id) return;
    if (ids.has(id)) duplicateIds.add(id);
    ids.add(id);
  });

  const pageRecord = { publicPath: filePublicPaths[0], $, ids, duplicateIds };
  pageRecords.push(pageRecord);
  for (const publicPath of filePublicPaths) pagesByPublicPath.set(publicPath, pageRecord);
}

const failures = [];
const rootCanonicalUrl = pagesByPublicPath.get('/')?.$('link[rel="canonical"]').attr('href');
if (!rootCanonicalUrl) {
  throw new Error('Built home page must declare a canonical URL');
}
const siteOrigin = new URL(rootCanonicalUrl).origin;

for (const page of pageRecords) {
  for (const duplicateId of page.duplicateIds) {
    failures.push(`${page.publicPath} contains duplicate id "#${duplicateId}"`);
  }

  page.$('a[href]').each((_, element) => {
    const href = page.$(element).attr('href');
    if (!href || href === '#') return;

    let url;
    try {
      const canonicalUrl =
        page.$('link[rel="canonical"]').attr('href') ?? new URL(page.publicPath, siteOrigin).href;
      url = new URL(href, canonicalUrl);
    } catch {
      failures.push(`${page.publicPath} contains malformed link "${href}"`);
      return;
    }

    if (url.origin !== siteOrigin) return;

    const isSameDocumentFragment = href.startsWith('#');
    const targetPath = url.pathname;
    if (!isSameDocumentFragment && !publicPaths.has(targetPath)) {
      failures.push(`${page.publicPath} links to missing route "${targetPath}"`);
      return;
    }

    if (!url.hash) return;

    const targetPage = isSameDocumentFragment ? page : pagesByPublicPath.get(targetPath);
    const fragment = decodeURIComponent(url.hash.slice(1));
    if (!targetPage) {
      failures.push(`${page.publicPath} links to fragment on non-HTML route "${href}"`);
      return;
    }
    if (!targetPage.ids.has(fragment)) {
      failures.push(`${page.publicPath} links to missing fragment "${href}"`);
    }
  });
}

if (failures.length > 0) {
  throw new Error(`Built content integrity failed:\n${formatFailures(failures)}`);
}

console.log(
  `Built content integrity passed for ${pageRecords.length} HTML pages and ${files.length} generated files.`,
);
