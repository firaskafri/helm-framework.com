import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';

const DIST_DIR = path.resolve('dist/client');
const SITE_ORIGIN = 'https://helmframework.com';

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
const filesByPublicPath = new Map();
const pagesByPublicPath = new Map();
const pageRecords = [];

for (const filePath of files) {
  const publicPaths = outputPaths(filePath);
  for (const publicPath of publicPaths) filesByPublicPath.set(publicPath, filePath);

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

  const pageRecord = { filePath, publicPath: publicPaths[0], $, ids, duplicateIds };
  pageRecords.push(pageRecord);
  for (const publicPath of publicPaths) pagesByPublicPath.set(publicPath, pageRecord);
}

const failures = [];

for (const page of pageRecords) {
  for (const duplicateId of page.duplicateIds) {
    failures.push(`${page.publicPath} contains duplicate id "#${duplicateId}"`);
  }

  page.$('a[href]').each((_, element) => {
    const href = page.$(element).attr('href');
    if (!href || href === '#') return;

    let url;
    try {
      url = new URL(href, new URL(page.publicPath, SITE_ORIGIN));
    } catch {
      failures.push(`${page.publicPath} contains malformed link "${href}"`);
      return;
    }

    if (url.origin !== SITE_ORIGIN) return;

    const targetPath = url.pathname;
    const targetFile = filesByPublicPath.get(targetPath);
    if (!targetFile) {
      failures.push(`${page.publicPath} links to missing route "${targetPath}"`);
      return;
    }

    if (!url.hash) return;

    const targetPage = pagesByPublicPath.get(targetPath);
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
