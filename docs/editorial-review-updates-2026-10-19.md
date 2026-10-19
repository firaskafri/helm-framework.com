# Dated Updates entries review — 19 October 2026

## Reader and purpose

People using HELM should be able to find its start and first public launch in the
Updates page’s dated list. The user requested historical entries and suggested
draft wording rather than a separate introductory timeline. The `/updates`
purpose in `scripts/public-audiences.json` now includes those milestones.

## Content and source

- Added “Initial draft” for October 2025 and “First public launch” for 1 April 2026
  in `src/data/updates.json`, after the September 2026 release in newest-first order.
  These dates were confirmed by the user and recorded in the 18 October review.
- Preserved month precision for the start instead of inventing a day. Historical
  milestones have no framework version, publication badge or October update label
  in the public list. They describe completed history, not unpublished draft copy.
- Amended the existing start-and-launch update with links to both dated entries.
  Regenerated `CHANGELOG.md` from the same canonical source to keep history coherent.
- The RSS feed continues to contain the four published announcements, including
  the amended clarification. Historical milestones do not become backdated RSS
  announcements. The built-content check enforces this distinction.
- Search, social and structured page descriptions mention HELM’s start and launch.
  The homepage still shows the same two latest updates.

## Rendered review

Reviewed the production build at `http://127.0.0.1:4322` at 1280 × 900 and
390 × 900, including the mobile view with JavaScript disabled. Inspected full-page
screenshots and the two dated cards, navigation and footer. Both dates and titles
are readable; the historical cards fit the existing update list. There is no
horizontal overflow or separate “How HELM began” section.

Also checked the generated Release History, homepage highlights, the four-item
Updates RSS feed, and matching search/social descriptions. The text is short,
factual and consistent with `docs/helm-voice.md`. The page is ready to share with
its intended readers.

Local screenshot evidence is under
`/var/folders/00/wqxj_ckd3gd5jbrbgy0d000h0000gn/T/opencode/helm-dated-updates-*.png`.
These review artifacts are outside the website output.

## Verification

- `npm run check` passed formatting, lint, Astro diagnostics, Updates consistency,
  all 20 unit tests, the production build, public-content and built-content checks,
  source safety, dependency audit (zero vulnerabilities), and browser checks.
- Browser checks: 59 passed; 46 configured engine-specific skips. The runner
  restored the production build after checking component fixtures.
- A focused rendered review verified milestone ordering, exact date precision,
  omitted version and badge labels, mobile/no-JavaScript visibility, descriptions,
  generated history and RSS contents.
- `npm run check:updates -- --base HEAD` and `git diff --check` passed.
