# HELM Content Architecture

This document maps each framework domain to its canonical repository source. Components render canonical records; they do not define framework guidance.

## Ownership Rules

- Markdown and MDX own narrative, explanations, and page composition.
- TypeScript data modules own structured records rendered by interactive components.
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

Each guide and role record has an `evidenceReferences` field. It contains external URLs already cited by that entry and may be empty when no source is currently attached. Claim-level linkage, evidence labels, access dates, and replacement history belong to the Evidence baseline workstream.

## Publication Metadata

`src/data/framework.ts` owns the framework version and publication-state vocabulary. `src/content.config.ts` enforces the metadata contract for every guide and role entry:

- stable entry ID
- publication status
- framework version
- creation date
- modification date
- evidence references

The npm package version is independent from the framework version. Package releases track application code; framework releases track published guidance.
