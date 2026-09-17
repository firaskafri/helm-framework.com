# HELM Framework Changelog

Framework releases are independent from the Astro application package version.

## 1.0.1 — 2026-09-17

Published after the recorded release gates passed and the self-hosted VM
deployment path replaced the Docker Hub publication pipeline.

### Foundation hardening

- Added claim-level evidence labels, source inspection history, access-failure records and an unsupported-claim inventory at [Evidence and Sources](/evidence).
- Recorded semantic issues separately in the [Correction Register](/corrections). Existing recommendations and canonical anchors retain their baseline meaning.
- Added visible framework version, release/evidence state, editorial dates and evidence-review dates. RSS and sitemap now preserve content modification dates.
- Fixed mobile-menu Escape behavior, table-of-contents synchronization, reduced-motion behavior, text contrast, narrow-screen tables and keyboard interactions.
- Made substantive guide and competency content available without JavaScript and in print; made repeated components independently operable with unique IDs.
- Sanitized rendered role frontmatter and escaped embedded JSON-LD.
- Added formatting, lint, type, unit, browser, accessibility, content, source-safety and dependency gates, with required-check configuration for GitHub.
- Upgraded the build dependencies, removed the Node runtime adapter and sessions, and added an unprivileged static nginx image.
- Published code/content licensing, contribution guidance and canonical roadmap/changelog pages.

### Deployment compatibility

The static artifact is now directly in `dist/`. The Docker serving port changes from **80 to 8080**. The Astro application package remains `0.0.1`; framework version and release state are maintained independently.

### Known limitations

- Evidence labels expose provisional and unverified claims; they do not validate the framework. The planned 1.1 pilot and conceptual corrections remain outstanding.
- Quality and container checks passed in [GitHub Actions](https://github.com/firaskafri/helm-framework.com/actions/runs/35206062832). Release tagging and production verification remain explicit steps; see `docs/releases/1.0.1.md` and `docs/deployment.md`.
- Automated accessibility checks are not an independent screen-reader or production-performance audit.

## 1.0.0 — 2026-09-05

HELM 1.0.0 records the existing public framework before semantic corrections.

### Included

- Foundation guide and six principles
- Practitioner patterns, Guardrail Stack, operating loop, task matrix, and maturity model
- Leadership operating model, authority definitions, adoption roadmap, KPI dashboard, and failure modes
- Eight role-transformation and hiring guides
- Universal competency reference

### Baseline Improvements

- Added stable content and concept identifiers.
- Added publication status, framework version, creation date, modification date, and evidence-reference metadata.
- Documented canonical ownership and independent package versioning.
- Added deterministic collection, route, link, anchor, and DOM ID validation.

### Limitations

- Evidence references identify sources already attached to each entry. Claim-level provenance, evidence labels, access dates, and replacement history remain part of the Evidence baseline workstream.
- Known questions about applicability, maturity, decision ownership, role requirements, and enforceable controls remain in the HELM 1.1 correction workstream.
- No machine-readable framework export is part of this release.

The Astro application package remains at version `0.0.1`.
