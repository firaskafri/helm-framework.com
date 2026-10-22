import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import {
  outlineSocialArtwork,
  renderSocialImage,
} from '../../src/lib/socialImage';
import { pageMarkdown } from '../../scripts/agent-markdown.mjs';

test('social artwork outlines bundled glyphs before PNG rendering', async () => {
  const artwork = await readFile(
    new URL('../../src/assets/og-editorial.svg', import.meta.url),
    'utf8',
  );
  const outlined = await outlineSocialArtwork(artwork);
  assert.doesNotMatch(outlined, /<text\b/);
  assert.ok((outlined.match(/<path\b/g) ?? []).length >= 10);
  const metadata = await sharp(await renderSocialImage(artwork)).metadata();
  assert.equal(metadata.format, 'png');
  assert.equal(metadata.width, 1200);
  assert.equal(metadata.height, 630);
  await assert.rejects(
    outlineSocialArtwork('<text x="0" y="0" font-size="20">中</text>'),
    /lacks glyph/,
  );
});

test('Markdown retains rendered examples, limitations, tables, and source links', () => {
  const html = `<head>
    <link rel="canonical" href="https://helmframework.com/practitioners">
    <meta name="description" content="Practical guidance.">
    <meta property="article:modified_time" content="2026-09-17T00:00:00.000Z">
    </head><body><nav>Site navigation</nav><main id="main-content">
    <h1>Practitioner Guide</h1><div role="tablist"><button>Choose</button></div>
    <section hidden><h2>Illustrative example</h2><p>Check results; this is not a guarantee.</p>
    <a href="/foundation#principle-1-simplicity-first">Principles</a>
    <table><thead><tr><th>Task</th><th>Owner</th></tr></thead><tbody><tr><td>Review</td><td>Person</td></tr></tbody></table>
    </section><button aria-expanded="true" aria-controls="checks"><span>Operational checks</span><p>Review before sharing.</p></button>
    <div id="checks"><p>A person reviews the result.</p></div>
    <script>internalImplementation()</script></main></body>`;
  const markdown = pageMarkdown(html);
  assert.ok(markdown);
  assert.match(markdown, /^# Practitioner Guide/);
  assert.match(markdown, /Source: https:\/\/helmframework.com\/practitioners/);
  assert.match(markdown, /Updated: 2026-09-17/);
  assert.match(markdown, /## Illustrative example/);
  assert.match(markdown, /not a guarantee/);
  assert.match(markdown, /Operational checks/);
  assert.match(markdown, /Review before sharing/);
  assert.match(
    markdown,
    /\[Principles\]\(https:\/\/helmframework.com\/foundation#principle-1-simplicity-first\)/,
  );
  assert.match(markdown, /\| Review \| Person \|/);
  assert.doesNotMatch(
    markdown,
    /Site navigation|Choose|internalImplementation/,
  );
  assert.equal(
    pageMarkdown(
      html.replace('<head>', '<head><meta name="robots" content="noindex">'),
    ),
    undefined,
  );
});
