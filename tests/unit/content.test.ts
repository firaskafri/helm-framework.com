import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  assertConsecutiveOrder,
  assertRequiredIds,
  assertUniqueIds,
  assertNonEmpty,
} from '../../src/lib/contentIntegrity';
import {
  buildBreadcrumbList,
  buildWebPageJsonLd,
  serializeJsonLd,
} from '../../src/lib/jsonLd';
import {
  resolveOgImage,
  resolveSiteOrigin,
} from '../../src/lib/resolveSiteOrigin';
import { renderSafeMarkdown } from '../../src/lib/safeMarkdown';
import { gapPercent, toRoleView } from '../../src/lib/competencyMap';
import { componentIds } from '../../src/lib/componentIds';
import type { CollectionEntry } from 'astro:content';

test('content integrity rejects missing, duplicated and nonconsecutive records', () => {
  assert.throws(() => assertNonEmpty('x', []), /empty/);
  assert.throws(
    () => assertUniqueIds('x', [{ id: 'a' }, { id: 'a' }]),
    /duplicate/,
  );
  assert.throws(() => assertRequiredIds('x', ['a'], ['b']), /missing/);
  for (const orders of [
    [1, 1],
    [0, 1],
    [1, 3],
  ])
    assert.throws(() => assertConsecutiveOrder('x', orders), /consecutive/);
  const orders = [3, 1, 2];
  assertConsecutiveOrder('x', orders);
  assert.deepEqual(orders, [3, 1, 2]);
});

test('frontmatter Markdown retains useful formatting and rejects active content', async () => {
  const html = await renderSafeMarkdown(
    '**Useful** [guide](/foundation)\n\n<script>alert(1)</script><img src=x onerror=alert(1)><a href="javascript:alert(1)">bad</a><iframe src="https://example.com"></iframe>',
  );
  assert.match(html, /<strong>Useful<\/strong>/);
  assert.match(html, /href="\/foundation"/);
  assert.doesNotMatch(html, /script|onerror|javascript:|iframe|<img/);
});

test('structured data retains publication dates and cannot escape script context', () => {
  const value = buildWebPageJsonLd({
    headline: '</ScRiPt><script>alert(1)</script>',
    description: 'a',
    url: 'https://example.com/a',
    homeUrl: 'https://example.com/',
    version: '1.0.1',
    dateModified: new Date('2026-09-17'),
  });
  const serialized = serializeJsonLd(value);
  assert.doesNotMatch(serialized, /</);
  assert.deepEqual(JSON.parse(serialized), value);
  assert.equal(value.dateModified, '2026-09-17T00:00:00.000Z');
  assert.deepEqual(
    (
      buildBreadcrumbList([{ name: 'Home', url: '/' }]).itemListElement as {
        position: number;
      }[]
    ).map((item) => item.position),
    [1],
  );
});

test('canonical URLs prefer production configuration and resolve OG defaults', () => {
  const site = new URL('https://helmframework.com/');
  assert.equal(
    resolveSiteOrigin(site, new URL('http://localhost:4321/a')),
    site,
  );
  assert.equal(
    resolveSiteOrigin(undefined, new URL('http://localhost:4321/a')).href,
    'http://localhost:4321/',
  );
  assert.equal(
    resolveOgImage(undefined, site),
    'https://helmframework.com/og-default.png',
  );
  assert.equal(
    resolveOgImage('custom.png', site),
    'https://helmframework.com/custom.png',
  );
});

test('role transforms distinguish evolved skills from new skills without mutating source', () => {
  const entry = {
    id: 'example',
    data: {
      category: 'engineering',
      title: 'Example',
      evolved_from: ['Old'],
      maps_to: 'New',
      subtitle: 'Story',
      competencies: [
        { title: 'Review', description: 'a', evolved_from: 'Reading' },
        { title: 'Context', description: 'b' },
      ],
      no_longer_screen_for: ['Typing'],
    },
  } as CollectionEntry<'roles'>;
  const view = toRoleView(entry);
  assert.equal(view.evolved[0].was, 'Reading');
  assert.equal(view.gaps[0].title, 'Context');
  assert.equal(gapPercent(view), 50);
  assert.equal(gapPercent({ ...view, evolved: [], gaps: [] }), 0);
  assert.equal(entry.data.competencies.length, 2);
});

test('repeated components namespace IDs while canonical anchors remain stable', () => {
  assert.equal(componentIds('patterns').record('routing'), 'routing');
  assert.equal(
    componentIds('patterns', 'second').record('routing'),
    'second-routing',
  );
});
