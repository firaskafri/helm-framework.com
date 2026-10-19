# Release history dates review — 2026-10-18

## Purpose and source

Help people reading HELM’s release history understand when work began and when
HELM first launched. The user confirmed October 2025 as the start and 1 April 2026
as the first launch. The existing audience purposes in
`scripts/public-audiences.json` cover this clarification.

Added a dated clarification in `src/data/updates.json` and regenerated
`CHANGELOG.md`. The note distinguishes those milestones from the existing
5 September 2026 first numbered release. Its October publication date records the
clarification, not the launch.

## Review and verification

- Reviewed `/changelog`, `/updates` and homepage highlights in a production preview
  at 1280×900 with JavaScript and 390×900 without JavaScript. Both dates are readable
  in all three places, with no horizontal overflow.
- Inspected desktop and mobile screenshots of Release History, including shared
  navigation and footer. Reviewed page descriptions, social descriptions and the
  published Updates RSS feed. The feed carries the same dates in its summary.
- Wording is short, factual and consistent with `docs/helm-voice.md`.
- `npm run check` passed formatting, lint, types, Updates validation, all 19 unit
  tests, production build, content/link checks and source safety. It stopped at
  `npm audit`: five dependency vulnerabilities (four high, one moderate), affecting
  devalue, http-cache-semantics, sharp, smol-toml and source-map-js. The full release
  gate remains blocked by that audit.
- Ran `npm run test:browser` separately: 52 passed, 44 configured skips. The runner
  restored the production build, which passed the public-content guardrail.
- `npm run check:updates -- --base origin/main` and `git diff --check` passed.
