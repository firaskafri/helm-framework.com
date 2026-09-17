import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { gzipSync } from 'node:zlib';
import sharp from 'sharp';

const DIST_DIR = path.resolve('dist');

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
  const relativePath = path
    .relative(DIST_DIR, filePath)
    .split(path.sep)
    .join('/');
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

  const pageRecord = {
    publicPath: filePublicPaths[0],
    $,
    ids,
    duplicateIds,
    bytes: Buffer.byteLength(html),
  };
  pageRecords.push(pageRecord);
  for (const publicPath of filePublicPaths)
    pagesByPublicPath.set(publicPath, pageRecord);
}

const failures = [];
const rootCanonicalUrl = pagesByPublicPath
  .get('/')
  ?.$('link[rel="canonical"]')
  .attr('href');
if (!rootCanonicalUrl) {
  throw new Error('Built home page must declare a canonical URL');
}
const siteOrigin = new URL(rootCanonicalUrl).origin;

for (const page of pageRecords) {
  if (page.$('main#main-content').length !== 1 || page.$('h1').length !== 1)
    failures.push(`${page.publicPath} needs exactly one main landmark and h1`);
  if (page.bytes > 400_000)
    failures.push(`${page.publicPath} exceeds the 400 KB HTML budget`);
  if (!page.$('meta[name="helm:framework-version"]').attr('content'))
    failures.push(`${page.publicPath} lacks a framework version`);
  page.$('script[type="application/ld+json"]').each((_, element) => {
    try {
      JSON.parse(page.$(element).text());
    } catch {
      failures.push(`${page.publicPath} has malformed JSON-LD`);
    }
  });
  page.$('[aria-controls], [aria-labelledby]').each((_, element) => {
    for (const attribute of ['aria-controls', 'aria-labelledby']) {
      for (const id of (page.$(element).attr(attribute) ?? '')
        .split(/\s+/)
        .filter(Boolean)) {
        if (!page.ids.has(id))
          failures.push(
            `${page.publicPath} has broken ${attribute} reference ${id}`,
          );
      }
    }
  });
  page
    .$(
      'script[src], link[rel="stylesheet"], meta[property="og:image"], meta[name="twitter:image"]',
    )
    .each((_, element) => {
      const node = page.$(element);
      const value =
        node.attr('src') ?? node.attr('href') ?? node.attr('content');
      if (!value) return;
      const url = new URL(value, siteOrigin);
      if (url.origin === siteOrigin && !publicPaths.has(url.pathname))
        failures.push(`${page.publicPath} references missing asset ${value}`);
    });
  for (const duplicateId of page.duplicateIds) {
    failures.push(`${page.publicPath} contains duplicate id "#${duplicateId}"`);
  }

  page.$('a[href]').each((_, element) => {
    const href = page.$(element).attr('href');
    if (!href || href === '#') return;

    let url;
    try {
      const canonicalUrl =
        page.$('link[rel="canonical"]').attr('href') ??
        new URL(page.publicPath, siteOrigin).href;
      url = new URL(href, canonicalUrl);
    } catch {
      failures.push(`${page.publicPath} contains malformed link "${href}"`);
      return;
    }

    if (url.origin !== siteOrigin) return;

    const isSameDocumentFragment = href.startsWith('#');
    const targetPath = url.pathname;
    if (!isSameDocumentFragment && !publicPaths.has(targetPath)) {
      failures.push(
        `${page.publicPath} links to missing route "${targetPath}"`,
      );
      return;
    }

    if (!url.hash) return;

    const targetPage = isSameDocumentFragment
      ? page
      : pagesByPublicPath.get(targetPath);
    const fragment = decodeURIComponent(url.hash.slice(1));
    if (!targetPage) {
      failures.push(
        `${page.publicPath} links to fragment on non-HTML route "${href}"`,
      );
      return;
    }
    if (!targetPage.ids.has(fragment)) {
      failures.push(`${page.publicPath} links to missing fragment "${href}"`);
    }
  });
}

const sitemap = cheerio.load(
  await readFile(path.join(DIST_DIR, 'sitemap.xml'), 'utf8'),
  { xmlMode: true },
);
const sitemapPaths = new Set();
sitemap('url').each((_, element) => {
  const node = sitemap(element);
  const url = new URL(node.find('loc').text());
  const page = pagesByPublicPath.get(url.pathname);
  sitemapPaths.add(url.pathname.replace(/\/$/, '') || '/');
  if (url.origin !== siteOrigin || !page) {
    failures.push(`Sitemap has invalid route ${url.href}`);
    return;
  }
  const modified = page
    .$('meta[property="article:modified_time"]')
    .attr('content')
    ?.slice(0, 10);
  if (node.find('lastmod').text() !== modified)
    failures.push(`Sitemap modification date disagrees with ${url.pathname}`);
});
for (const page of pageRecords) {
  if (page.$('meta[name="robots"]').attr('content')?.includes('noindex'))
    continue;
  if (!sitemapPaths.has(page.publicPath.replace(/\/$/, '') || '/'))
    failures.push(`Sitemap omits ${page.publicPath}`);
}
const feed = cheerio.load(
  await readFile(path.join(DIST_DIR, 'rss.xml'), 'utf8'),
  { xmlMode: true },
);
feed('item').each((_, element) => {
  const item = feed(element);
  const route = new URL(item.find('link').text()).pathname;
  const page = pagesByPublicPath.get(route);
  if (!page) {
    failures.push(`RSS links to missing route ${route}`);
    return;
  }
  if (
    item.find('dcterms\\:modified').text() !==
    page.$('meta[property="article:modified_time"]').attr('content')
  )
    failures.push(`RSS modification date disagrees with ${route}`);
  if (
    new Date(item.find('pubDate').text()).toISOString() !==
    page.$('meta[property="article:published_time"]').attr('content')
  )
    failures.push(`RSS publication date disagrees with ${route}`);
});
const image = await sharp(path.join(DIST_DIR, 'og-default.png')).metadata();

const updatesPage = pagesByPublicPath.get('/updates');
if (!updatesPage) throw new Error('The public updates page is required');
const announcementIds = [];
const updateRecords = new Map();
updatesPage.$('[data-update-id]').each((_, element) => {
  const item = updatesPage.$(element);
  const id = item.attr('data-update-id');
  updateRecords.set(id, {
    status: item.attr('data-update-status'),
    date: item.attr('data-update-date'),
    modified: item.attr('data-update-modified'),
  });
  if (item.attr('data-update-status') === 'published') announcementIds.push(id);
});
if (!updateRecords.size) failures.push('Updates page has no entries');
const updateFeed = cheerio.load(
  await readFile(path.join(DIST_DIR, 'updates/rss.xml'), 'utf8'),
  { xmlMode: true },
);
const feedIds = [];
updateFeed('item').each((_, element) => {
  const item = updateFeed(element);
  const url = new URL(item.find('link').text());
  const id = decodeURIComponent(url.hash.slice(1));
  const record = updateRecords.get(id);
  feedIds.push(id);
  if (
    url.origin !== siteOrigin ||
    url.pathname.replace(/\/$/, '') !== '/updates' ||
    !updatesPage.ids.has(id) ||
    record?.status !== 'published'
  ) {
    failures.push(
      `Updates RSS references a missing or unpublished announcement: ${url.href}`,
    );
    return;
  }
  if (
    new Date(item.find('pubDate').text()).toISOString().slice(0, 10) !==
      record.date ||
    item.find('dcterms\\:modified').text().slice(0, 10) !== record.modified
  )
    failures.push(`Updates RSS dates disagree with ${id}`);
});
if (JSON.stringify(feedIds) !== JSON.stringify(announcementIds))
  failures.push(
    'Updates RSS must contain every published entry in timeline order, and no candidates or drafts',
  );
for (const page of pageRecords) {
  if (page.$('meta[name="robots"]').attr('content')?.includes('noindex'))
    continue;
  if (!page.$('nav[aria-label="Main navigation"] a[href="/updates"]').length)
    failures.push(`${page.publicPath} is missing Updates in navigation`);
  if (!page.$('link[rel="alternate"][href="/updates/rss.xml"]').length)
    failures.push(
      `${page.publicPath} is missing the updates RSS discovery link`,
    );
}

if (image.format !== 'png' || image.width < 1200 || image.height < 630)
  failures.push('Default OG image must be a real PNG of at least 1200×630');
let javascriptBytes = 0;
let cssBytes = 0;
for (const file of files) {
  if (file.endsWith('.js'))
    javascriptBytes += gzipSync(await readFile(file)).length;
  if (file.endsWith('.css')) cssBytes += gzipSync(await readFile(file)).length;
}
if (javascriptBytes > 75_000 || cssBytes > 100_000)
  failures.push(
    `Static asset budget exceeded: JS ${javascriptBytes}, CSS ${cssBytes} gzip bytes`,
  );

if (failures.length > 0) {
  throw new Error(
    `Built content integrity failed:\n${formatFailures(failures)}`,
  );
}

console.log(
  `Built content integrity passed for ${pageRecords.length} HTML pages and ${files.length} generated files. JS: ${javascriptBytes} B gzip; CSS: ${cssBytes} B gzip.`,
);
