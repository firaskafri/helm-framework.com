/**
 * Name: HELM update-history unit coverage.
 * Description: Verifies validation, publication filtering, change coverage, and generated changelog behavior.
 * Assumptions: Structured update records are the canonical source for public release and update history.
 * Expectations: Invalid records fail closed while valid records produce stable, safe public output.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  assertUpdateCoverage,
  latestUpdateDate,
  publicUpdates,
  publishedUpdates,
  validateUpdates,
} from '../../src/lib/updates';
import { renderUpdateChangelog } from '../../src/lib/updateChangelog';

// Independent fixtures keep historical announcements free to evolve without rewriting the tests.
const record = {
  id: 'helm-1-0-1',
  kind: 'release',
  version: '1.0.1',
  status: 'release-candidate',
  date: '2026-09-17',
  updatedAt: '2026-09-17',
  title: 'Foundation hardening',
  summary: 'A verified candidate.',
  sections: [
    {
      heading: 'Changes',
      items: [
        {
          text: 'Improved guide access.',
          links: [
            { label: 'Maturity Model', href: '/practitioners#maturity-model' },
          ],
        },
      ],
    },
  ],
};
const records = [
  record,
  {
    ...record,
    id: 'helm-1-0-0',
    version: '1.0.0',
    status: 'published',
    date: '2026-09-05',
    updatedAt: '2026-09-05',
  },
];

const valid = () =>
  validateUpdates(structuredClone(records), '1.0.1', 'release-candidate');

/**
 * Name: Current release note requirement.
 * Description: Rejects missing, mismatched, and duplicate release records.
 * Assumptions: Each framework version has exactly one release entry matching its publication state.
 * Expectations: Invalid release coverage throws and unique matching records pass validation.
 */
test('release notes are required for the current version and state', () => {
  assert.throws(
    () => validateUpdates(records, '1.0.2', 'release-candidate'),
    /Missing release update/,
  );
  assert.throws(
    () => validateUpdates(records, '1.0.1', 'published'),
    /must match release state/,
  );
  const duplicate = structuredClone(records);
  duplicate.push(duplicate[0]);
  assert.throws(
    () => validateUpdates(duplicate, '1.0.1', 'release-candidate'),
    /IDs must be unique/,
  );
  duplicate[2] = { ...duplicate[2], id: 'another-release' };
  assert.throws(
    () => validateUpdates(duplicate, '1.0.1', 'release-candidate'),
    /one release entry/,
  );
});

/**
 * Name: Update field validation.
 * Description: Exercises invalid dates, incomplete notes, and unsafe link destinations.
 * Assumptions: Every public update has valid chronology, visible detail, and local or HTTPS links.
 * Expectations: Each malformed record is rejected before publication.
 */
test('updates reject impossible dates, incomplete notes and unsafe destinations', () => {
  for (const mutate of [
    (data: typeof records) => {
      data[0].date = '2026-02-30';
    },
    (data: typeof records) => {
      data[0].updatedAt = '2026-09-01';
    },
    (data: typeof records) => {
      data[0].sections[0].items[0].links = [];
    },
    (data: typeof records) => {
      data[0].summary = '';
    },
    (data: typeof records) => {
      data[0].sections[0].items[0].links[0].href = 'javascript:alert(1)';
    },
    (data: typeof records) => {
      data[0].sections[0].items[0].links[0].href = '//example.com';
    },
  ]) {
    const data = structuredClone(records);
    mutate(data);
    assert.throws(() => validateUpdates(data, '1.0.1', 'release-candidate'));
  }
});

/**
 * Name: Timeline visibility and ordering.
 * Description: Checks newest-first ordering and separates public history from RSS announcements.
 * Assumptions: Drafts are private and release candidates may be visible without being announced as published.
 * Expectations: Public and published selectors return stable records in descending date order.
 */
test('timeline is newest-first; drafts and candidates never become RSS announcements', () => {
  const data = structuredClone(records).reverse();
  data.push({
    ...records[0],
    id: 'future-draft',
    kind: 'update',
    status: 'draft',
    date: '2026-10-01',
    updatedAt: '2026-10-01',
  });
  const updates = validateUpdates(data, '1.0.1', 'release-candidate');
  assert.equal(updates[0].id, 'future-draft');
  assert.deepEqual(
    publicUpdates(updates).map(({ id }) => id),
    ['helm-1-0-1', 'helm-1-0-0'],
  );
  assert.deepEqual(
    publishedUpdates(updates).map(({ id }) => id),
    ['helm-1-0-0'],
  );
  assert.equal(latestUpdateDate(publicUpdates(updates)), '2026-09-17');
  assert.equal(data[0].id, 'helm-1-0-0');
});

/**
 * Name: Visitor-facing change coverage.
 * Description: Distinguishes meaningful published notes from timestamps, drafts, and internal-only files.
 * Assumptions: Public source changes need a linked visible update while tooling-only changes do not.
 * Expectations: Unexplained public changes fail and covered or exempt changes pass.
 */
test('visitor-facing diffs need meaningful visible notes; timestamp-only edits do not count', () => {
  const previous = valid();
  const current = valid();
  assert.throws(
    () =>
      assertUpdateCoverage(
        ['src/content/docs/foundation.md'],
        current,
        previous,
      ),
    /need a linked update/,
  );
  current[0].updatedAt = '2026-09-18';
  assert.throws(
    () => assertUpdateCoverage(['src/pages/index.astro'], current, previous),
    /need a linked update/,
  );
  current.push({
    ...current[0],
    id: 'draft-only',
    kind: 'update',
    status: 'draft',
  });
  assert.throws(
    () => assertUpdateCoverage(['src/lib/competencyMap.ts'], current, previous),
    /need a linked update/,
  );
  current[0].sections[0].items.push({
    text: 'Clarified a principle using new evidence.',
    links: [
      { label: 'Principle', href: '/foundation#principle-1-simplicity-first' },
    ],
  });
  assert.doesNotThrow(() =>
    assertUpdateCoverage(['src/content/docs/foundation.md'], current, previous),
  );
  assert.doesNotThrow(() =>
    assertUpdateCoverage(
      ['.github/workflows/quality.yml', 'tests/unit/updates.test.ts'],
      previous,
      previous,
    ),
  );
  assert.doesNotThrow(() =>
    assertUpdateCoverage(['src/data/updates.json'], previous, previous),
  );
  assert.doesNotThrow(() =>
    assertUpdateCoverage(['src/pages/updates/index.astro'], current, []),
  );
});

/**
 * Name: Generated changelog safety.
 * Description: Verifies release headings, canonical links, and escaping of literal Markdown-like content.
 * Assumptions: Changelog Markdown is generated only from validated update records.
 * Expectations: Links remain canonical and untrusted text cannot become raw HTML.
 */
test('changelog generation preserves release anchors, linked destinations and literal text', () => {
  const updates = valid();
  updates[0].title = '<script> [not a link]';
  const markdown = renderUpdateChangelog(updates, 'https://helmframework.com');
  assert.match(markdown, /## 1\.0\.1 — Release candidate/);
  assert.match(markdown, /## 1\.0\.0 — 2026-09-05/);
  assert.match(markdown, /https:\/\/helmframework\.com\/updates#helm-1-0-1/);
  assert.match(
    markdown,
    /https:\/\/helmframework\.com\/practitioners#maturity-model/,
  );
  assert.ok(markdown.includes('\\<script\\> \\[not a link\\]'));
  assert.ok(!markdown.includes('<script>'));
});
