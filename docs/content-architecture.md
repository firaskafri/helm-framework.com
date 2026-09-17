# HELM Content Architecture

This document maps each framework domain to its canonical repository source. Components render canonical records; they do not define framework guidance.

## Ownership Rules

- Markdown and MDX own narrative, explanations, and page composition.
- TypeScript data modules own structured records rendered by components. Update announcements are edited in JSON and exposed through a validated TypeScript module.
- Role Markdown frontmatter owns structured role-transformation data; each role body owns its transformation and hiring narrative.
- Other pages may summarize a canonical domain and link to it. They must not restate the complete record set.
- Entry IDs and semantic record IDs are stable public references. Renaming one requires an explicit compatibility decision.

## Guide Records and Principles

- Guide publication metadata and narrative: `src/content/docs/foundation.md`, `src/content/docs/practitioners.mdx`, and `src/content/docs/leadership.mdx`.
- Guide entry IDs and routes: `foundation` at `/foundation`, `practitioners` at `/practitioners`, and `leadership` at `/leadership`.
- Foundational principles: the `principles` frontmatter array in `src/content/docs/foundation.md`.
- Principle anchors: `principle-1-simplicity-first` through `principle-6-team-wide-adoption-over-individual-mastery`.

## Practitioner Models

`src/data/practitioners.ts` owns the following structured domains. `src/content/docs/practitioners.mdx` owns their introductions and page placement.

- Composition patterns and the pattern-selection rule: `COMPOSITION_PATTERNS` and `COMPOSITION_RULE`.
- Pattern decision tree: `PATTERN_DECISION_TREE`.
- Operating loop: `LOOP_PHASES`; phase IDs are the public anchors.
- Guardrail Stack: `GUARDRAIL_LAYERS`; layer IDs are the public anchors.
- Task Classification Matrix: `TASK_MATRIX`; cell IDs identify the nine boundedness and risk combinations.
- Maturity Model: `MATURITY_LEVELS`; level IDs are the public anchors.

## Leadership Models

`src/data/leadership.ts` owns the following structured domains. `src/content/docs/leadership.mdx` owns their introductions and page placement.

- Organizational shifts: `ORG_SHIFTS`; the complete model is anchored at `six-organizational-shifts`.
- Adoption roadmap: `ADOPTION_PHASES`; phase IDs are the public anchors.
- KPI Dashboard and success formula: `KPI_CATEGORIES` and `KPI_SUCCESS_FORMULA`; category IDs are the public anchors.
- Failure modes: `FAILURE_MODES`; failure-mode IDs are the public anchors.

The leadership-role definitions and Decision Rights Matrix remain canonical narrative in `src/content/docs/leadership.mdx`. They describe operating authority. They do not replace the role-transformation and hiring guides.

## Role Transformations

The eight files in `src/content/roles/` own role metadata, responsibilities, competencies, interview methods, day-in-the-life material, HELM relationships, and transformation narratives. Their entry IDs provide `/roles/{id}` routes and `/roles/competency-map#{id}` anchors.

`src/data/shared-competencies.ts` owns the current five shared competencies used by both the roles index and `/competencies`. `src/data/universal-competencies.ts` retains the earlier vocabulary for interpretation and migration; it is no longer rendered as a competing shared list. Role-specific competencies describe applications and specialist skills alongside the shared five.

## Shared Skills and Themed Examples

- `src/data/shared-competencies.ts` owns the five learning-oriented definitions/self-checks and twenty role-by-competency practice guides. Each guide combines two practical steps, one exercise and the existing illustrative example. All four themes supply the same five competency IDs.
- `/competencies` presents the explanations before `CompetencyExamples.astro` renders competency selection and role tabs. Theory anchors (`judgment` through `learning`) and theme anchors (`content`, `engineering`, `sales`, `account-management`) remain stable. Compound guide anchors such as `engineering-judgment` select both dimensions; theory-to-practice links preserve the active role with JavaScript and target the first role without it. Print and no-JavaScript views expose all guides.
- The optional learning resource does not replace the existing role-list IDs or publish a validated evaluation instrument. Design rationale, vocabulary mapping and the unfinished review method remain in `docs/shared-competency-evaluation.md`; public components never import that document.

Role-guide headings use plain reader-facing labels while preserving earlier fragment IDs. The role skills explorer groups the skills listed in a guide; its counts and percentages do not assess a person. `docs/editorial-review-2026-09-17.md` records the wording and interpretation decisions from the site-wide copy review.

## Evidence References

Each guide and role record has an `evidenceReferences` field containing external URLs cited by that entry. It may be empty when no external source is attached.

- `src/data/evidence.ts` owns evidence labels, major-claim records, source inspection findings, access attempts/dates, applicability and source history.
- `src/lib/sourceRegister.ts` derives stable source IDs and bibliography titles from canonical content; registration does not imply verification.
- These records are internal. `/evidence` owns a short reading list and practical reading tips. `EvidenceNote.astro` uses `src/data/reading-notes.ts` for plain-language explanations at the point of use; `PublicationInfo.astro` shows only version, preview status when relevant, and editorial date. The old public claim/label sections are retired along with the review register.
- `docs/corrections.md` owns semantic issues, canonical correction targets, acceptance checks and prospective version impacts. It has no website route.

## Reference pages and release material

- `src/data/updates.json` owns release/update announcements, dates, status, summaries and linked changes. `src/data/updates.ts` validates these records for `/updates`, homepage highlights and `/updates/rss.xml`.
- `CHANGELOG.md` is generated from the update registry by `npm run updates:sync`; `/changelog` renders it. The check rejects drift and requires a matching current-version release entry. `docs/updates.md` documents maintenance and CI change coverage.
- `src/pages/roadmap.astro` owns the short public roadmap; `LICENSE-CONTENT.md` owns `/licensing`. Never render the internal `ROADMAP.md` tracker as a website page.
- `ROADMAP.md` owns the simplicity-first scope, active work and publication criteria. `docs/roadmap-backlog.md` preserves parked ideas, work-item dispositions and maintenance notes; `docs/roadmap-history.md` preserves superseded plans, prior decisions and completed-work history.
- `src/data/site.ts` owns navigation, reference links, canonical origin and editorial date for static/reference pages.
- Content entry dates remain canonical for guides/roles. RSS and sitemap read those dates; build time never substitutes for an editorial date.
- Updates/changelog dates derive from visible update entries. The homepage uses the later of its editorial date and the latest visible update; the published-updates RSS excludes candidates and drafts.
- `docs/releases/1.0.1.md` records verification and publication readiness; `docs/deployment.md` owns the static deployment/runbook.
- Repeated interactive components accept an explicit unique `id`. Primary instances preserve canonical record anchors; repeated instances namespace their IDs through `componentIds`.
- `src/pages/checks/[fixture].astro` is emitted only during browser testing and excluded from production. `scripts/test-browser.mjs` restores the normal build after testing, including on failure.
- `scripts/public-audiences.json` records each public page's audience and useful purpose. `scripts/public-content-guard.mjs` enforces the source/output boundary on every Astro build. `AGENTS.md` and `docs/public-publishing.md` define the required editorial review.

## Publication Metadata

`src/data/framework.ts` owns the framework version, release state and content publication-state vocabulary. Release state is distinct from content availability. `src/content.config.ts` enforces the metadata contract for every guide and role entry:

- stable entry ID
- publication status
- framework version
- creation date
- modification date
- evidence references

The npm package version is independent from the framework version. Package releases track application code; framework releases track published guidance.
