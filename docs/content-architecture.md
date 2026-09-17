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

`src/data/universal-competencies.ts` separately owns the shared competency set shown on the roles index. Role-specific competencies may specialize that shared vocabulary without redefining the universal list.

## Evidence References

Each guide and role record has an `evidenceReferences` field containing external URLs cited by that entry. It may be empty when no external source is attached.

- `src/data/evidence.ts` owns evidence labels, major-claim records, source inspection findings, access attempts/dates, applicability and source history.
- `src/lib/sourceRegister.ts` derives stable source IDs and bibliography titles from canonical content; registration does not imply verification.
- `/evidence` renders this register; `PublicationInfo.astro` and `EvidenceNote.astro` expose the same records at the point of use.
- `docs/corrections.md` owns semantic issues, canonical correction targets, acceptance checks and prospective version impacts; `/corrections` renders it.

## Reference pages and release material

- `src/data/updates.json` owns release/update announcements, dates, status, summaries and linked changes. `src/data/updates.ts` validates these records for `/updates`, homepage highlights and `/updates/rss.xml`.
- `CHANGELOG.md` is generated from the update registry by `npm run updates:sync`; `/changelog` renders it. The check rejects drift and requires a matching current-version release entry. `docs/updates.md` documents maintenance and CI change coverage.
- `ROADMAP.md` owns `/roadmap`; `LICENSE-CONTENT.md` owns `/licensing`.
- `ROADMAP.md` owns current Now/Next/Later priorities, active work, dependencies and release gates. `docs/roadmap-backlog.md` owns retained conditional work and continuing requirements; `docs/roadmap-history.md` preserves the pre-refresh plan, prior decisions and completed-work history.
- `src/data/site.ts` owns navigation, reference links, canonical origin and editorial date for static/reference pages.
- Content entry dates remain canonical for guides/roles. RSS and sitemap read those dates; build time never substitutes for an editorial date.
- Updates/changelog dates derive from visible update entries. The homepage uses the later of its editorial date and the latest visible update; the published-updates RSS excludes candidates and drafts.
- `docs/releases/1.0.1.md` records verification and publication readiness; `docs/deployment.md` owns the static deployment/runbook.
- Repeated interactive components accept an explicit unique `id`. Primary instances preserve canonical record anchors; repeated instances namespace their IDs through `componentIds`.
- `src/pages/checks/[fixture].astro` is emitted only during browser testing and excluded from production. `scripts/test-browser.mjs` restores the normal build after testing, including on failure.

## Publication Metadata

`src/data/framework.ts` owns the framework version, release state and content publication-state vocabulary. Release state is distinct from content availability. `src/content.config.ts` enforces the metadata contract for every guide and role entry:

- stable entry ID
- publication status
- framework version
- creation date
- modification date
- evidence references

The npm package version is independent from the framework version. Package releases track application code; framework releases track published guidance.
