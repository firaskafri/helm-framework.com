/**
 * Name: Public-content release guard coverage.
 * Description: Verifies that generated HELM surfaces remain audience-ready and exclude maintainer material.
 * Assumptions: Every production route is declared and every readable build artifact is inspected before release.
 * Expectations: Internal, unfinished, undeclared, and unsafe content fails closed while clear audience copy passes.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  inspectPublicFile,
  inspectPublicSource,
} from '../../scripts/public-content-guard.mjs';

const audiences = {
  '/': { audience: 'New readers', purpose: 'Choose a useful guide.' },
};
const inspect = (source: string) =>
  inspectPublicFile('index.html', source, audiences);

/**
 * Name: Internal wording rejection.
 * Description: Exercises visible, hidden, metadata, structured-data, accessible-label, and link surfaces.
 * Assumptions: Obscure, collapsed, or noindex content remains publicly accessible.
 * Expectations: Every maintainer-oriented phrase or destination is rejected.
 */
test('internal material is rejected on every public reading surface', () => {
  for (const source of [
    '<h1>HELM Correction Register</h1>',
    '<summary>Evidence and limitations for this page</summary>',
    '<p>Five-level maturity model — Proposed recommendation.</p>',
    '<meta name="robots" content="noindex"><h1>Correction Register</h1>',
    '<details><summary>More</summary>Evidence: provisional synthesis with claim-level labels.</details>',
    '<meta name="description" content="Evidence review: 2026-09-17">',
    '<meta property="og:description" content="Canonical targets and acceptance checks">',
    '<img alt="FND-004 release evidence" src="/picture.png">',
    '<span aria-label="TODO: finish this page"></span>',
    '<noscript>Source inspected; access blocked</noscript>',
    '<script type="application/ld+json">{"description":"Claim register"}</script>',
    '<a href="/corrections#c-01">More</a>',
    '<a href="/docs/corrections.md" download>Download</a>',
    '<a href="/%63orrections">More</a>',
  ])
    assert.ok(inspect(source).length > 0, source);
});

/**
 * Name: Feed and download inspection.
 * Description: Checks RSS, JSON, Markdown, maintainer paths, and unknown download types.
 * Assumptions: Public files can expose internal material outside rendered HTML pages.
 * Expectations: Unsafe text artifacts and unreviewed binary types are rejected.
 */
test('feeds and text downloads cannot leak maintainer material', () => {
  for (const [file, source] of [
    [
      'rss.xml',
      '<rss><channel><item><description><![CDATA[<p>Correction Register</p>]]></description></item></channel></rss>',
    ],
    [
      'updates/rss.xml',
      '<rss><description>&lt;p&gt;claim-level labels&lt;/p&gt;</description></rss>',
    ],
    ['guide.json', '{"summary":"Provisional synthesis"}'],
    ['guide.md', '# HELM\n\nTODO: finish this'],
    ['docs/corrections.md', '# Notes'],
    ['ROADMAP.md', '# Our plan'],
    ['unreviewed.pdf', ''],
  ])
    assert.ok(inspectPublicFile(file, source, audiences).length > 0, file);
});

/**
 * Name: Audience declaration requirement.
 * Description: Validates route ownership, useful purpose, draft metadata, and draft update handling.
 * Assumptions: Every public page needs an explicitly intended reader regardless of discoverability.
 * Expectations: Missing audience context and draft publication markers block the build.
 */
test('new pages require a reader and purpose, even if hidden from search', () => {
  assert.ok(
    inspectPublicFile(
      'new/index.html',
      '<meta name="robots" content="noindex">',
      audiences,
    ).length,
  );
  assert.ok(
    inspectPublicFile('index.html', '<h1>Welcome</h1>', {
      '/': { audience: '', purpose: '' },
    }).length,
  );
  assert.ok(
    inspect('<meta name="helm:publication-status" content="draft">').length,
  );
  assert.ok(
    inspect('<article data-update-status="draft">Not ready</article>').length,
  );
});

/**
 * Name: Browser fixture isolation.
 * Description: Separates the one explicit browser-test route from production output.
 * Assumptions: Test builds may need a known fixture that must never survive into a release.
 * Expectations: Production rejects all fixtures and test mode permits only the declared route.
 */
test('production rejects browser fixtures; test mode permits only the known fixture route', () => {
  assert.ok(
    inspectPublicFile(
      'checks/components/index.html',
      '<h1>Components</h1>',
      audiences,
    ).length,
  );
  assert.deepEqual(
    inspectPublicFile(
      'checks/components/index.html',
      '<h1>Components</h1>',
      audiences,
      { fixtures: true },
    ),
    [],
  );
  assert.ok(
    inspectPublicFile('checks/other/index.html', '', audiences, {
      fixtures: true,
    }).length,
  );
});

/**
 * Name: Reader-friendly qualification acceptance.
 * Description: Confirms simple examples, honest limitations, and planned-resource wording remain publishable.
 * Assumptions: Audience clarity must not erase uncertainty or useful specialist guidance.
 * Expectations: Plain, actionable, accurately qualified copy passes the guard.
 */
test('plain limitations, planned resources, and useful specialist explanations pass', () => {
  assert.deepEqual(
    inspect(
      '<h1>Start with one task</h1><p>This is an example, not a measured result. We’re planning a short playbook.</p><p>Automated checks help catch errors, but they do not prove the work is ready.</p>',
    ),
    [],
  );
});

/**
 * Name: Maintainer import boundary.
 * Description: Prevents public source from importing repository planning and review documents.
 * Assumptions: Public licensing and canonical guide content are intentional exceptions.
 * Expectations: Maintainer-document imports fail while approved public sources remain allowed.
 */
test('website imports cannot turn repository planning and reviews into pages', () => {
  for (const source of [
    "import { Content } from '../../docs/corrections.md';",
    "import { Content } from '../../ROADMAP.md';",
    "const page = await import('../../docs/releases/1.0.1.md?raw');",
    "export { Content } from '../../CONTRIBUTING.md';",
  ])
    assert.ok(
      inspectPublicSource('src/pages/test.astro', source).length,
      source,
    );
  assert.deepEqual(
    inspectPublicSource(
      'src/pages/test.astro',
      "import { Content } from '../../LICENSE-CONTENT.md';",
    ),
    [],
  );
  assert.deepEqual(
    inspectPublicSource(
      'src/pages/test.astro',
      "import { Content } from '../content/docs/foundation.md';",
    ),
    [],
  );
});
