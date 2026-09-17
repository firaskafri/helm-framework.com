# Audience-first publishing repair — 2026-09-17

Maintainer verification record; never render this document on the website.

## Scope and editorial decisions

- Removed `/corrections` and the shared evidence/review block, including metadata.
- Kept source inspection and unresolved semantic work in maintainer records.
- Replaced the public evidence register with further reading and four practical
  reading tips. Retired public claim/label sections rather than relabeling a long
  register. Guide and principle anchors remain stable.
- Simplified Foundation, selected guide introductions, role descriptions, and the
  public roadmap. Kept useful limitations beside the applicable guidance.
- Added mandatory audience/purpose records, an Astro build guard, contributor and
  agent instructions, a PR review checklist, and regression coverage.
- Preserved existing roadmap/shared-competency work in the working tree. This
  repair does not mark the cross-guide correction work complete.

## Rendered review

Visited Home, Foundation, Leadership, Practitioners, Roadmap, Further reading,
Updates, Release history, Roles, Engineering Manager, Product Manager, the skills
explorer, and Licensing in a local Chromium preview at 1280×900 and at 390×844
with JavaScript disabled. Inspected rendered headings, publication text, guidance
notes, and search descriptions; reviewed representative desktop/mobile screenshots
for Foundation, Leadership, Roadmap, Further reading, and Updates. Simplified the
Leadership introduction and reading page further after that review, then checked
the revised rendering. `/corrections` returns HTTP 404 locally.

The reader-facing update is part of `a-simpler-helm-roadmap` and remains a preview.
Internal source-review wording is absent from generated pages and feeds. Shared
publication information is now one line with the version and editorial date.

## Verification

- `npm run check` passed after the final website edits: format, lint, types,
  Updates synchronization, 19 unit tests, build/content guardrails, source safety,
  dependency audit, and browser checks.
- Production output: 20 HTML pages, 45 files. No correction-register or fixture
  route. No type warnings/errors; dependency audit reported zero vulnerabilities.
- Browser suite: 42 passed; 42 intentionally skipped by the existing cross-engine
  audit configuration. All-page responsive/accessibility coverage runs in
  Chromium; interaction and no-JavaScript coverage runs in all three engines.
- An earlier run collided with another local build. The successful run followed
  that process finishing. A separate WebKit test issue was fixed by waiting for
  font layout before measuring a scroll target; the assertion remains unchanged.
- `git diff --check` passed. No commit, push, or deployment was performed here.

The automated guard catches known publication failures. Future changes still
require the editorial review in `docs/public-publishing.md`; passing the guard
does not establish clarity, factual accuracy, or suitability for every reader.
