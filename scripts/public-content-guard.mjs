import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as cheerio from 'cheerio';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const INTERNAL_WORDING = [
  /\bcorrection\s+register\b/i,
  /\b(?:claim|source)\s+register\b/i,
  /\bclaim[-\s]+level\b/i,
  /\b(?:source review|externally supported claim|unverified claim|evidence and limitations for this page)\b/i,
  /\b(?:proposed recommendation|unvalidated HELM extrapolation|versioned correction|diagnostic hypotheses)\b/i,
  /\bprovisional[-\s]+synthesis\b/i,
  /\bevidence[-\s]+review\s*(?:date|:)/i,
  /\b(?:canonical targets|acceptance checks|version impacts?)\b/i,
  /\b(?:source inspected|source inspection|access blocked|not yet inspected)\b/i,
  /\b(?:FND|V11|COMP|REV|C)-\d{2,3}\b/,
  /\b(?:TODO|FIXME|TBD)\b|\blorem ipsum\b/i,
  /\b(?:internal only|not for publication|not ready for publication|draft content)\b/i,
];
const INTERNAL_PATH =
  /(?:^|\/)(?:docs(?:\/|$)|corrections(?:[/.#?]|$)|(?:AGENTS|CONTRIBUTING|README|ROADMAP)\.md(?:$|[?#]))/i;
const TEXT_EXTENSIONS = new Set([
  '.html',
  '.xml',
  '.json',
  '.webmanifest',
  '.txt',
  '.md',
  '.mdx',
  '.svg',
]);
const ASSET_EXTENSIONS = new Set([
  '.js',
  '.css',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.avif',
  '.gif',
  '.ico',
  '.woff',
  '.woff2',
  '.ttf',
]);

function normalize(text) {
  return text
    .normalize('NFKC')
    .replace(/[\u200b-\u200d\ufeff]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function decoded(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function strings(value) {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === 'object')
    return Object.values(value).flatMap(strings);
  return [];
}

export function publicRoute(file) {
  const relative = file.replaceAll(path.sep, '/');
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/\/index\.html$/, '')}`;
}

/** Inspect all readable surfaces, including hidden panels and noindex pages. */
export function inspectPublicFile(
  file,
  source,
  audiences,
  { fixtures = false } = {},
) {
  const failures = [];
  const route = publicRoute(file);
  const extension = path.extname(file);
  const isFixture = route === '/checks/components';
  if (INTERNAL_PATH.test(decoded(route)))
    failures.push('maintainer material cannot be published');
  if (route.startsWith('/checks/') && !(fixtures && isFixture))
    failures.push('test fixtures cannot be released');
  if (extension === '.html' && !(fixtures && isFixture)) {
    const entry = audiences[route];
    if (
      !entry ||
      !normalize(entry.audience ?? '') ||
      !normalize(entry.purpose ?? '')
    ) {
      failures.push(
        'declare the intended reader and useful purpose in scripts/public-audiences.json',
      );
    }
  }
  if (ASSET_EXTENSIONS.has(extension)) return failures;
  if (!TEXT_EXTENSIONS.has(extension)) {
    failures.push(
      'unreviewed download type; add a content inspection before publishing it',
    );
    return failures;
  }

  const $ = cheerio.load(source);
  const copy = [];
  $('script[type="application/ld+json"]').each((_, element) => {
    try {
      copy.push(...strings(JSON.parse($(element).text())));
    } catch {
      failures.push('structured data must be valid JSON');
    }
  });
  $('meta').each((_, element) => {
    const node = $(element);
    if (
      node.attr('name') === 'helm:publication-status' &&
      node.attr('content') === 'draft'
    ) {
      failures.push('draft pages cannot be published');
    }
    copy.push(node.attr('content') ?? '');
  });
  if ($('[data-update-status="draft"]').length)
    failures.push('draft updates cannot be published');
  $(
    '[href], [src], [content], [alt], [title], [aria-label], [placeholder]',
  ).each((_, element) => {
    const node = $(element);
    for (const attribute of [
      'href',
      'src',
      'content',
      'alt',
      'title',
      'aria-label',
      'placeholder',
    ]) {
      const value = node.attr(attribute);
      if (value) copy.push(value);
    }
  });
  $('script, style').remove();
  copy.push($.root().text());
  // RSS can contain escaped HTML or CDATA. Decode its readable text as well.
  if (extension === '.xml') {
    const xml = cheerio.load(source, { xmlMode: true });
    copy.push(cheerio.load(xml.root().text()).root().text());
  }
  if (extension === '.json' || extension === '.webmanifest') {
    try {
      copy.push(...strings(JSON.parse(source)));
    } catch {
      failures.push('public JSON must be valid');
    }
  }
  for (const text of copy.map(normalize)) {
    for (const pattern of INTERNAL_WORDING) {
      const match = text.match(pattern);
      if (match)
        failures.push(`rewrite internal or unfinished wording: “${match[0]}”`);
    }
    const internal = decoded(text).match(INTERNAL_PATH);
    if (internal)
      failures.push(
        `remove references to maintainer documents or internal website paths: “${internal[0]}”`,
      );
  }
  return [...new Set(failures)];
}

export function inspectPublicSource(file, source, root = ROOT) {
  const failures = [];
  const imports = source.matchAll(
    /(?:\bfrom\s*|\bimport\s*(?:\(\s*)?)['"]([^'"]+)['"]/g,
  );
  for (const [, specifier] of imports) {
    const resolved = path.resolve(
      path.dirname(path.resolve(root, file)),
      specifier.split('?')[0],
    );
    const relative = path.relative(root, resolved).replaceAll(path.sep, '/');
    if (
      /^(?:docs\/|(?:AGENTS|CONTRIBUTING|README|ROADMAP)\.md$)/i.test(relative)
    )
      failures.push(
        `do not import maintainer document ${specifier} into public source`,
      );
  }
  return failures;
}

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map(async (entry) => {
        const file = path.join(directory, entry.name);
        return entry.isDirectory() ? filesIn(file) : [file];
      }),
    )
  ).flat();
}

function assertReady(failures) {
  if (failures.length)
    throw new Error(
      `Public-content guardrail rejected this build:\n${failures.map((item) => `- ${item}`).join('\n')}\nFollow docs/public-publishing.md; simplify or exclude the material before release.`,
    );
}

export async function checkPublicSources(root = ROOT) {
  const failures = [];
  for (const file of await filesIn(path.join(root, 'src'))) {
    if (!/\.(astro|[cm]?[jt]sx?|mdx?)$/.test(file)) continue;
    const relative = path.relative(root, file);
    const issues = inspectPublicSource(
      relative,
      await readFile(file, 'utf8'),
      root,
    );
    failures.push(...issues.map((issue) => `${relative}: ${issue}`));
  }
  assertReady(failures);
}

export async function checkPublicBuild(
  directory = path.join(ROOT, 'dist'),
  options = {},
) {
  const audiences = JSON.parse(
    await readFile(new URL('./public-audiences.json', import.meta.url), 'utf8'),
  );
  const failures = [];
  const files = await filesIn(directory);
  for (const file of files) {
    const relative = path.relative(directory, file);
    const source = TEXT_EXTENSIONS.has(path.extname(file))
      ? await readFile(file, 'utf8')
      : '';
    failures.push(
      ...inspectPublicFile(relative, source, audiences, options).map(
        (issue) => `${relative}: ${issue}`,
      ),
    );
  }
  assertReady(failures);
  console.log(
    `Public-content guardrail passed for ${files.length} files. Editorial review is also required.`,
  );
}

/** @returns {import('astro').AstroIntegration} */
export function publicContentGuard() {
  return {
    name: 'helm-public-content',
    hooks: {
      'astro:build:start': () => checkPublicSources(),
      'astro:build:done': ({ dir }) =>
        checkPublicBuild(fileURLToPath(dir), {
          fixtures: process.env.HELM_TEST_FIXTURES === '1',
        }),
    },
  };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
  await checkPublicSources();
  await checkPublicBuild();
}
