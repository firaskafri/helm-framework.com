# Shared skills website update — 2026-09-17

Maintainer release review. The user requested remote publication and deployment after reviewing the competency explanations, themed examples and role-by-competency guides.

## Scope

- Simpler Foundation and guide wording, a reader-facing roadmap and further-reading page, and plain-language limitations in shared components.
- Twenty practice guides at `/competencies`, combining five shared competencies with content, engineering, sales and account-management examples. Each guide has practical steps, an illustrative example, an exercise and a self-check.
- Skill/role selection, preserved theory/role anchors, compound guide links, keyboard navigation, print and no-JavaScript access.
- Audience/purpose records and a build-time publishing guard keep maintainer documents and unfinished material out of pages, feeds and downloads.
- The `a-simpler-helm-roadmap` announcement is promoted to published in this deployment artifact. The framework baseline remains 1.0.1; this website update does not replace the tagged baseline or claim a validated evaluation method.

## Editorial and compatibility review

Reader-facing review is recorded in `public-publishing-2026-09-17.md` and `../shared-competency-evaluation.md`. The latest guide review covers desktop/mobile rendering, all twenty guide states, keyboard and deep-link behavior, shared navigation, descriptions, print and no-JavaScript access. Examples remain illustrative and the structured evaluation method remains planned.

The new learning resource retains the existing role-list records and identifiers. The Foundation wording changes and point-of-use qualifications are recorded in `../corrections.md`; coordinated changes to assessment interpretation remain open. The maintainer-only correction route is removed, while guide and principle anchors remain stable.

## Release verification

`npm run check` passed after the announcement promotion: formatting, lint, types, update consistency, 19 unit tests, production content/build guardrails, security and 52 browser checks. The 44 configured browser skips are duplicate non-Chromium audits. Require successful `quality` and `container` checks for the exact commit before advancing protected `main`. Deployment uses the clean exact Git revision and the existing self-hosted VM component release tooling.

The VM release manifest is the authoritative receipt for the source commit, immutable image, active release and rollback pointer. Confirm its release ID against the public `X-Montra-Release` header, then verify `/competencies#engineering-judgment`, published Updates/RSS, representative guide routes, sitemap and real 404 responses. Deployment success must be established from that receipt and live checks, not inferred from this review note.
