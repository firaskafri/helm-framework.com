# HELM Product Roadmap

**Status:** Active planning document
**Last updated:** 2026-09-17
**Roadmap owner:** Firas Kafri
**Review cadence:** Weekly during active delivery; monthly otherwise
**Current focus:** Try a small kit on one real workflow, fix misleading guidance, and learn what changes for the people doing the work
**Release work:** HELM 1.0.1 hardening is verified locally and on GitHub; PR #11 awaits review, merge and production publication

## Purpose

This document tracks HELM's evolution from a reference framework into a practical implementation system. It is the source of truth for product direction, release scope, progress, and roadmap decisions.

HELM already describes an operating model through principles, practitioner guidance, leadership guidance, and role definitions. The next releases must turn that reference into a tested method for continually adapting work, skills, jobs, and teams, rather than prescribing a final organizational shape.

## Product Direction

HELM helps teams answer five practical questions as AI changes their work:

1. What can agents usefully do now?
2. What should people still do, check, and own?
3. What do people need to learn or keep practicing?
4. Does the team need to change how it works or who owns what?
5. What worked, what did not, and what should we try next?

The near-term audience is Product and Engineering teams using coding agents to develop software. Start with one workflow and measure delivery outcomes alongside changes to human work and learning. No reorganization is required to start; there is no assumption that existing roles must remain unchanged.

Do not depend on an AGI timeline. Try capabilities on real work rather than treat announcements as proof. Share local lessons as local lessons, not a universal job model.

### Keep it practical

Use existing tickets, pull requests, and retrospectives wherever possible. Start with one short work brief, a check-and-owner list, and a before/after note; these can live in the same document. Add a field, template, metric, or process only when it helps someone make a real decision. A useful field-tested guide can ship with clear limitations; it does not need a research program behind it.

The detailed lists below are a delivery backlog, not a process every adopting team must follow. For a release, select the relevant work and apply its exit criteria. Safety, privacy, honest claims, and a working accessible product remain requirements; optional research, infrastructure, and organizational work do not become gates by default.

Building products whose runtime behavior depends on agents is a separate applicability context: model hosting, inference reliability, conversational evaluations, and specialized agent-platform staffing become relevant when the product requires them, rather than as prerequisites for every team adopting coding agents.

Broader company applicability is a candidate direction. Function packs require demonstrated user need, documented work, and validation before publication; remaining focused on software product teams is a valid outcome.

The public framework and HELM Studio remain separate products:

- **HELM Framework** teaches the model and provides public tools and templates.
- **HELM Studio** validates evidence, facilitates diagnostics, and supports implementation.

## Primary Users and Jobs

- **Team leaders and transformation owners:** test capability changes, redesign workflows, and decide whether responsibilities, team interfaces, or staffing mix should change.
- **Practitioners:** execute and verify agent-assisted work, participate in redesign, and develop the judgment and recovery skills their work requires.
- **People managers and hiring teams:** revise responsibilities and development paths, preserve learning opportunities, and support fair transitions and redeployment.
- **Framework maintainers and implementation partners:** apply one canonical model, record evidence, and feed validated lessons back into HELM.

Every public feature must serve at least one of these jobs. HELM Studio buyers may enter through the framework, but sales conversion is not the framework site's primary job.

## Roadmap Principles

- Start from real work, not new job titles or an org chart.
- Keep the kit small; reuse existing tools and documents.
- Try changes before prescribing them, and say where the lessons came from.
- Keep human ownership, safe stopping conditions, and learning opportunities clear.
- More agents do not automatically mean a better team; keeping the current approach is a valid outcome.
- Add roles, infrastructure, and broader scope only when needed.
- Keep the site static-first and structured content single-source.
- Preserve accessibility, testing, privacy, and honest publishing.

## Progress Summary

- [x] Define the initial HELM framework and publish the Foundation, Practitioner, Leadership, and Roles sections.
- [x] Add interactive reference components for patterns, guardrails, task classification, maturity, adoption, KPIs, failure modes, and competencies.
- [x] Establish the vNext direction and this roadmap.
- [x] Snapshot and publish the current framework as HELM 1.0.0.
- [ ] Harden the technical and content foundation.
- [ ] Release the work redesign kit, conceptual corrections, and first approved pilot report covering delivery and people impacts.
- [ ] Turn pilot lessons into a short Work, Skills, and Team Adaptation guide and try it in a team review.
- [ ] Build a simple diagnostic only if users need help choosing their next action.
- [ ] Validate selected Specification Chain artifacts only where implementation evidence justifies them.
- [ ] Extend implementation evidence and publish an additional function pack if demand and validation justify it.
- [ ] Decide whether broader company scope is warranted and, if approved, validate and assign it a release.

## Version Baseline and Release Map

The formerly unversioned public framework has been snapshotted as **HELM 1.0.0**, with publication metadata, release notes, and the `framework-v1.0.0` repository tag. Any existing machine-readable exports must agree with their published framework version; creating a new export is not a baseline prerequisite.

The application package uses an independent technical version. Framework releases describe published guidance; package releases describe the Astro application. The HELM 1.0.0 baseline therefore retains application package version `0.0.1`.

The delivery sequence is below. Labels beyond 1.0.0 are planning targets, not compatibility decisions or calendar commitments:

1. **HELM 1.0.x — Foundation Hardening:** repair content ownership, quality controls, accessibility, publishing, and deployment without changing the framework's intended meaning.
2. **HELM 1.1 — Work Redesign Kit and Pilot:** publish a small usable kit, compatible conceptual corrections, and an approved report covering delivery effort, responsibility changes, and human capability impacts.
3. **HELM 1.2 - Work, Skills, and Team Adaptation:** publish a short guide to changing responsibilities and learning needs, tried in a real team review.
4. **HELM 1.3 - Practical Diagnostic, if needed:** help users choose a next action from the kit and guide; start without a scoring system.
5. **Conditional expansion — Evidence and Function Packs:** continue implementation research throughout delivery; assign expansion a release only when demand, validation, and capacity justify it.
6. **Candidate Company Operating Model — Unassigned:** consider broader scope only if it serves demonstrated needs and external evidence satisfies the release gates.

Work can overlap. The first kit does not wait for a full adaptation guide, content migration, or exports. The guide follows the pilot; the diagnostic follows only if users need it. Multiple teams and formal scoring studies are not prerequisites for a clearly labeled first guide.

### Compatibility policy

The compatibility contract covers published recommendation meaning, decision rights, assessment interpretation, and stable identifiers or artifact contracts, not just application APIs.

- **Patch:** meaning-preserving repairs, such as broken links or rendering fixes, that leave existing decisions and artifacts interpretable.
- **Minor:** additive guidance or optional artifacts that do not invalidate existing recommendations, responsibilities, scores, or references.
- **Major:** changes that invalidate those interpretations or contracts, such as redefining an existing maturity level or replacing a mandatory staffing rule with a conflicting recommendation.

Record the rationale, affected sources, migration guidance, and release assignment for each conceptual correction before publication. Semantic corrections cannot ship as meaning-preserving 1.0.x repairs. If a milestone contains breaking changes, relabel it and subsequent targets before scope freeze; HELM 2.0 is available for necessary breaking corrections and is not reserved for company-wide expansion. Urgent harmful guidance requires a visible warning or withdrawal while the versioned correction is prepared.

---

## Execution Model

Roadmap releases are outcome-gated rather than date-gated. A release receives calendar dates only after its critical work has an owner and available capacity.

### Status definitions

- **Backlog:** Accepted work that is not sequenced.
- **Ready:** Scope and completion evidence are clear; work can start.
- **In progress:** An owner and target review date are recorded.
- **Blocked:** A named dependency or decision prevents progress.
- **In review:** Implementation is complete and release evidence is being checked.
- **Done:** Completion evidence is linked and the relevant exit criteria pass.
- **Deferred:** Intentionally outside the active sequence, with the reason recorded.

### Priority definitions

- **P0:** Blocks the current release or protects framework credibility.
- **P1:** Required for the release but does not block every other workstream.
- **P2:** Valuable after release requirements are secured.

### Active work tracker

| ID      | Priority | Work item                                                      | Release           | Status    | Owner | Target review       | Completion evidence                                                                                                                         |
| ------- | -------- | -------------------------------------------------------------- | ----------------- | --------- | ----- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| RM-001  | P0       | Establish the vNext roadmap                                    | Planning          | Done      | Firas | 2026-09-05          | `ROADMAP.md`                                                                                                                                |
| VER-001 | P0       | Snapshot the current public framework                          | HELM 1.0.0        | Done      | Firas | 2026-09-05          | `framework-v1.0.0`, `CHANGELOG.md`, and publication metadata                                                                                |
| FND-001 | P0       | Inventory canonical concepts and actual sources                | HELM 1.0.x        | Done      | Firas | 2026-09-05          | `docs/content-architecture.md` and `npm run check:content`                                                                                  |
| V11-001 | P0       | Describe one Phoenix workflow as it works today                | HELM 1.1          | Ready     | Firas | Next roadmap review | Short note using existing tickets: work, effort, owners, and what people need to know; agree what can be shared                             |
| V11-002 | P0       | Resolve credibility-critical guidance and classify corrections | HELM 1.1 planning | Ready     | Firas | Next roadmap review | Correction register covering autonomy, staffing, ownership, safeguards, source provenance, acceptance checks, and compatibility decisions   |
| FND-002 | P0       | Record the quality baseline and publication blockers           | HELM 1.0.x        | Done      | Firas | 2026-09-17          | `npm run check`: 8 unit and 39 browser checks validated; `docs/quality-baseline.md` and `docs/releases/1.0.1.md`                            |
| FND-003 | P1       | Complete claim provenance and evidence labels                  | HELM 1.0.x        | Done      | Firas | 2026-09-17          | 28 claim records, source register, `/evidence`, `docs/corrections.md`; build and provenance checks pass; semantic fixes remain with V11-002 |
| FND-004 | P1       | Complete static publishing, licenses and release verification  | HELM 1.0.x        | In review | Firas | 2026-09-17          | PR #11; GitHub run 35206062832 quality/container checks pass; `docs/releases/1.0.1.md`; merge and production publication pending            |
| V11-005 | P1       | Agree how to run the pilot safely                              | HELM 1.1          | Blocked   | Firas | Next roadmap review | V11-001 required; record owners, access limits, stop conditions, and what to compare in the same work note                                  |
| V11-003 | P1       | Test the work redesign kit on one workflow                     | HELM 1.1          | Blocked   | Firas | Next roadmap review | V11-001 and V11-005 required; then editable kit, before/after work map, and non-author usability findings                                   |
| V11-004 | P1       | Publish the first approved pilot report                        | HELM 1.1          | Blocked   | Firas | Next roadmap review | V11-003 required; then approved delivery and people-impact findings, limitations, and retain/revise/reject decisions                        |
| V12-001 | P1       | Write a short team adaptation guide from pilot lessons         | HELM 1.2          | Blocked   | Firas | Pilot review        | V11-003 required; one worked example and prompts for responsibilities, skills, and next steps                                               |
| V12-002 | P1       | Try the guide in a real team review                            | HELM 1.2          | Blocked   | Firas | Guide review        | V12-001 required; someone other than the author can use it, and confusion is fixed or clearly noted                                         |

When an item enters **In progress**, its target review must be a specific date. Add or split tracker rows when a work item cannot be reviewed as one coherent change.

### Immediate priority order

1. Describe one real workflow and what people currently do (V11-001).
2. Resolve credibility-critical guidance and its compatibility decisions (V11-002), including the urgent provenance subset of FND-003.
3. Review and publish the verified hardening candidate (FND-004); quality, evidence and container checks pass.

Keep no more than three items active. Finish required hardening alongside the pilot as capacity permits. The questionnaire, more role pages, comprehensive templates, function packs, and Studio conversion work can wait. Cosmetic repairs and optional infrastructure must not delay trying the kit; public release gates still apply.

### Capacity and spend controls

- Keep no more than three P0/P1 items In progress at once.
- Do not start work without an owner, completion evidence, and target review.
- Estimate delivery effort and ongoing maintenance before committing a feature to a release.
- Record approved external costs for research, legal review, translation, hosting, analytics, and specialist testing.
- Reduce scope before weakening release gates when capacity is constrained.

### Work-item definition of done

A roadmap item is Done only when:

1. Its output exists in the canonical location.
2. Automated checks appropriate to the change pass.
3. Accessibility, privacy, security, and content provenance have been considered.
4. Validation evidence or the reason validation is unnecessary is recorded.
5. Documentation, cross-links, and any existing machine-readable exports remain consistent.
6. Completion evidence is added to the active tracker.
7. Relevant decisions, risks, and release notes are updated.

### Critical path and parallel work

1. Preserve the completed HELM 1.0.0 baseline and content ownership map; record the remaining quality and evidence baselines.
2. Describe the Phoenix workflow and what people currently do, fix misleading guidance, and address publication-blocking defects within available capacity.
3. Test the work redesign kit after approving measurement, participation, owners, and safety boundaries. Private research need not wait for site hardening; public HELM 1.1 publication requires the HELM 1.0.x exit criteria, applicable corrections, and an approved pilot report.
4. Turn pilot lessons into HELM 1.2's short guide and try it in a real team review. Publish the worked example and its limits; additional teams can extend the evidence later.
5. Build HELM 1.3's diagnostic only if users struggle to choose their next action. Test the advice manually before adding a questionnaire or scores.
6. Continue implementation evidence throughout delivery. Function packs require demand, maintenance capacity, and approved validation; Specification Chain additions require observed friction.
7. Broader company scope remains optional and unassigned until its demand decision and release gates are satisfied. Breaking corrections can require a major version independently of that expansion.

---

## HELM 1.0.x — Foundation Hardening

**Objective:** Make the existing framework maintainable, testable, accessible, and genuinely single-source before expanding it.

**1.0.1 candidate status (2026-09-17):** Repository implementation passes local and GitHub quality/container gates. Checkmarks below record verified implementation; merge and production publication remain tracked by FND-004. See [PR #11](https://github.com/firaskafri/helm-framework.com/pull/11) and `docs/releases/1.0.1.md`. The conditional infrastructure backlog remains demand-gated.

### Content architecture

- [x] Tag and document the current public framework as the HELM 1.0.0 baseline before semantic content changes.
- [x] Document whether the application package version follows or remains independent from the framework version.
- [x] Inventory every canonical concept and its actual source.
- [x] Repair demonstrated duplication and ownership conflicts using the existing typed sources where adequate.
- [x] Make MDX reference canonical records wherever duplicated structured data currently causes drift.
- [x] Add stable IDs, publication status, framework version, creation date, modification date, and evidence references.
- [x] Validate unique ordering, non-empty required collections, cross-references, links, and anchors.
- [x] Update the README so its source-of-truth documentation matches the implementation.

### Evidence baseline

- [x] Define evidence labels that distinguish a proposed recommendation, author observation, participant report, measured result, and externally supported claim.
- [x] Record source provenance for major claims and recommendations, including unsupported claims that need qualification or removal.
- [x] Maintain a source register with access date, claim linkage, applicability, and replacement history.
- [x] Check quoted statistics against their sources and distinguish correlation, forecasts, and causal claims. Retrieval failures and unresolved figures are explicitly marked unverified.
- [x] Implement the public framework changelog and visible version, evidence-state, and freshness information; production publication is tracked by FND-004.
- [x] Route changes to a recommendation's meaning through the conceptual-corrections workstream; evidence labeling alone does not validate the recommendation.

### Conditional infrastructure backlog

These items remain accepted work. Schedule them only when a named consumer or documented maintenance problem justifies the effort; they do not block the pilot or starter-kit release.

- [ ] Move remaining principles, patterns, guardrails, maturity levels, adoption phases, roles, and citations into typed content collections where the ownership inventory demonstrates a benefit.
- [ ] Complete the migration to MDX composition of canonical records where existing sources cannot maintain integrity.
- [ ] Generate machine-readable JSON exports when an assessment, integration, or distribution consumer requires them.

### Quality gates

- [x] Record the current build, type, link, accessibility, performance, and browser baseline.
- [x] Add formatting, linting, TypeScript, and `astro check` scripts.
- [x] Add unit tests for existing content transforms and structured-data helpers; scoring tests remain a requirement when an assessment introduces scoring.
- [x] Add content-integrity tests for duplicate IDs, ordering, links, anchors, and required evidence.
- [x] Add browser tests for keyboard navigation, no-JavaScript fallbacks, and critical responsive paths.
- [x] Add automated accessibility checks.
- [x] Add dependency, secret, and unsafe-content checks appropriate to the static publishing pipeline.
- [x] Add pull-request CI that runs all quality gates and a production build; GitHub run 35206062832 passed both required jobs.

### Publishing and interface repairs

- [x] Choose and document one static-first deployment path.
- [x] Remove runtime deployment dependencies unless a dynamic feature requires them.
- [x] Fix mobile-menu Escape behavior.
- [x] Fix active-heading tracking for both rendered tables of contents.
- [x] Make interactive controls instance-scoped and safely reusable.
- [x] Ensure substantive content remains available when JavaScript fails.
- [x] Match the loaded serif font to the configured design token.
- [x] Verify and retain the existing real default Open Graph image; enforce its dimensions and availability.
- [x] Use one canonical source for the production origin.
- [x] Generate accurate modification dates in pages, RSS, and the sitemap; production publication is tracked by FND-004.
- [x] Sanitize or otherwise constrain rendered frontmatter HTML before accepting external contributors or CMS content.
- [x] Add licensing and contribution documentation.

### Exit criteria

- [x] The content ownership map matches the repository.
- [x] All framework records in the candidate pass validation appropriate to their canonical source; a single storage format is not required.
- [x] Major claims have a recorded source or explicit unsupported/provisional status, with semantic corrections tracked separately.
- [x] Required GitHub checks block merging with failed type, content, accessibility, test, build or container checks; strict enforcement including administrators confirmed by API readback.
- [x] Core content and navigation remain usable without JavaScript.
- [x] Static deployment contains no unexplained runtime layer; remote container smoke tests passed.
- [ ] Complete merge, tagging and the production publication steps in `docs/deployment.md`.

---

## HELM 1.1 - Work Redesign Kit and Pilot

**Objective:** Help one team try a better way of working with agents and show what changed for delivery and the people doing the work.

### Minimal operating kit

- [ ] A short work brief: scope, non-goals, acceptance criteria, constraints, and when to stop.
- [ ] A check-and-owner list: what agents do, who checks and owns the result, permissions, sensitive data, and required approvals.
- [ ] A before/after note: work and handoffs, time including review and rework, quality, what people need to learn, and what to do next.
- [ ] Make these editable and usable without an account, with a concrete first action linked from the site.

These can be sections in an existing ticket or document, not three new forms. Record what was observed and what is still a guess; do not try to measure long-term career outcomes in the first pilot.

### Conceptual corrections and applicability

This work changes guidance and is separate from meaning-preserving foundation repairs. Maintain a correction register with the affected canonical sources, evidence, acceptance checks, and compatibility decision; split implementation into reviewable tracker items before work starts.

- [ ] Distinguish teams using coding agents from teams building runtime-agent products throughout the guidance.
- [ ] Separate execution autonomy from operational maturity; a well-controlled single-agent workflow can be operationally mature.
- [ ] Replace the exact least-adopted-member rule with an evidence-based assessment of workflow bottlenecks and critical-path capability.
- [ ] Make accountable responsibilities mandatory while making dedicated positions and the QA/Evaluation Lead split conditional on workload and risk.
- [ ] Resolve paired owners in the single-owner decision matrix by distinguishing the accountable decision owner from consulted specialists and required approvals.
- [ ] Distinguish behavioral instructions from sandboxing, least-privilege access, network restrictions, and protected approval boundaries.
- [ ] Treat access controls for sensitive systems as baseline safeguards; distinguish read-only incident assistance from authority to change production.
- [ ] Qualify categorical claims about past engineering work, typing speed, universal success patterns, and mandatory role changes.
- [ ] Reframe fixed role destinations as context-dependent options; distinguish task automation from job elimination and capability announcements from locally demonstrated readiness.
- [ ] Publish correction rationale and migration notes under the appropriate framework version; defer incompatible changes to an explicitly versioned release rather than hiding them in 1.0.x.

### Try it on real work

- [ ] Pick one Phoenix or Salalem workflow, involve the people doing it, and agree safety and sharing limits before starting.
- [ ] Note how comparable work is done today and which tools are used. Use existing delivery records; label estimates and missing information.
- [ ] Have someone other than the author use the kit. Note confusing instructions, failed attempts, and unnecessary steps.
- [ ] Compare total effort, review/rework, quality, and tool cost where available. Ask what changed in responsibilities, workload, and learning; do not equate time saved with removable headcount.
- [ ] Publish a short approved account: what we tried, what happened, what did not work, and what we would keep or change. Get permission for company details and quotations.
- [ ] Choose a next step and a sensible time to revisit it. Stop or simplify if the kit adds more work than value.

### Exit criteria

- [ ] Someone other than the author can use the editable kit without hidden instructions or an org-chart change.
- [ ] Ownership, checks, and safe stopping conditions are clear; applicable guidance corrections are versioned and explained.
- [ ] One approved worked example shows before/after delivery and people impacts, including failures and unknowns.
- [ ] The team can explain what to keep or change next. Keeping the current approach is allowed.

---

## HELM 1.2 - Work, Skills, and Team Adaptation

**Objective:** Help a team update responsibilities and learning needs as agents change its work, without requiring a new operating model or HR program.

This replaces the larger Role Transition Protocol with a short guide based on the pilot. Use it in an existing retrospective or planning conversation when the tools, work, or team change.

### What the guide covers

- [ ] What agents can now do reliably, what still needs people, and what work has appeared or disappeared.
- [ ] Who does, checks, approves, and owns the work; what happens when it goes wrong.
- [ ] What people need to learn or keep practicing, including how juniors learn and how the team catches mistakes or recovers without agents.
- [ ] Whether a handoff, responsibility, or team boundary needs changing. Try the smallest reversible change first; do not assume a new job title or smaller team is the answer.
- [ ] One next action, an owner, and when to check back. Include the affected people and make time for learning.

### Try and publish

- [ ] Use the guide in a real team review with someone other than the author; fix confusing or unnecessary steps.
- [ ] Publish one worked example showing a responsibility or learning decision; a justified decision not to change anything also counts.

### Exit criteria

- [ ] A non-author can use the guide to reach a clear next action without undocumented help.
- [ ] The example covers responsibilities, learning needs, and limits of what was observed.
- [ ] The guide is accessible and editable, and any proposed change has an owner and a check-back point.

One local example is enough for a first release labeled as field-tested in that context. Testing other teams and longer-term outcomes stays in the evidence backlog, not on this release's critical path.

### Conditional supporting artifacts

The larger protocol's unfinished work remains optional. Pull an item into delivery only when the small kit or guide proves insufficient; do not build the full set first.

- [ ] Shared work-classification schema covering boundedness, consequence, reversibility, evaluability, context, and data sensitivity, if multiple tools need it
- [ ] Staged responsibility trials, exception handling, and formal capability checks for workflows whose risk requires them
- [ ] Longer-term development, junior progression, coaching, workload, and redeployment guidance based on actual team needs
- [ ] Role charter and job-description template
- [ ] Downloadable capability-gap assessment based on the validated method
- [ ] 30/60/90-day transition plan
- [ ] Agent-ready PRD template
- [ ] Architecture decision record
- [ ] Testing-plan template
- [ ] Knowledge-transfer and exception register
- [ ] Public entry points for understanding HELM, redesigning a workflow, transitioning a role, and finding the relevant toolkit
- [ ] Product Manager transition example, if observed work justifies that framing
- [ ] QA Engineer and Evaluation Lead transition example, without presupposing a dedicated role split
- [ ] Clarification of why the leadership model contains nine operational roles while the role collection begins from eight traditional-role pages
- [ ] Decision on whether Evaluation Lead requires a dedicated role guide

### Conditional Specification Chain

The Specification Chain remains Product and Engineering specific: product context, PRD, architecture, testing, implementation, and release evidence. Add artifacts only to address observed friction; the complete chain does not block adaptation validation.

- [ ] Define the relationship between product context, PRD, architecture, testing plan, implementation, and release evidence.
- [ ] Specify the owner and approval boundary for every artifact.
- [ ] Define the minimum contract required before agent execution begins, reusing the kit's work brief.
- [ ] Define how implementation discoveries update upstream artifacts.
- [ ] Define how the chain operates when different people own product, architecture, engineering, and quality.
- [ ] Connect the chain explicitly to Plan-Execute-Verify-Ship-Learn.

---

## HELM 1.3 - Practical Diagnostic, if Needed

**Objective:** Help a reader choose a useful next action when the kit and guide alone are not enough.

Do not build this just because it appears on the roadmap. First see whether users struggle to choose their next step, and try a few questions manually. A short decision guide may be sufficient; a maturity score is not required.

### Minimum scope

- [ ] Confirm a real user need and test the questions against actual workflow examples.
- [ ] Ask only enough to suggest up to three next actions linked to the kit or guide; allow unknowns and no change.
- [ ] Keep answers local, make the interaction accessible, and support export without an account.
- [ ] Explain where the advice comes from, its limits, and how it differs from a facilitated Studio service.
- [ ] Test decision rules, including missing information and risky work; never infer employability or staffing cuts from answers.

### Exit criteria

- [ ] Intended users can choose and explain a relevant next step using it.
- [ ] Advice points to existing guidance, states uncertainty, and passes tested example cases.
- [ ] Accessibility and applicable data-handling checks pass. Advice is checked against real examples; automated rule tests are required only when decision logic is implemented in software.

### Optional assessment backlog

The previous assessment scope is retained here, not required for the first diagnostic. Add it only if a simpler decision guide fails to meet a demonstrated need.

- [ ] Dimensional maturity covering workflow, context, execution, verification, human decisions, governance, team capability, and outcomes, without treating vendor adoption or more agents as maturity
- [ ] Evidence requirements, unknowns, confidence, and observed-work tests for any scoring introduced
- [ ] Explicit mapping and migration guidance for existing Levels 1-5 before changing their meaning
- [ ] Critical-path recommendations and a 90-day action outline, if users need them
- [ ] Extended boundedness-and-risk classifier covering reversibility, verification, context, permissions, and sensitive data, with autonomy and guardrail recommendations tested on real tasks
- [ ] Shared classification fields and applicability checks across team sizes and functions, when those consumers exist

---

## Conditional Expansion - Evidence and Function Packs

**Objective:** Deepen evidence from software product teams and investigate additional functions only where users demonstrate a need.

**Release assignment:** Unassigned. Evidence collection continues through the pilot, adaptation, and diagnostic milestones. Function packs and discovery enhancements are later conditional scope, not prerequisites for those milestones.

### Evidence expansion

The first pilot and team review provide initial examples. Later evidence should add useful lessons, not delay those releases or repackage their findings as new validation.

- [ ] Publish additional case studies using the established provenance, publication-approval, and measurement requirements.
- [ ] Follow up on the first pilot to test whether benefits persist and identify ongoing review and maintenance costs.
- [ ] Try a materially different workflow or team and publish a second worked example before claiming broader applicability.
- [ ] Document which findings confirm, revise, or deprecate framework guidance.
- [ ] Seek independent implementation evidence and record differences from the original environment.

### Function packs

- [ ] Define the minimum schema for a function pack.
- [ ] Use software Product and Engineering as the initial pack and label its validation status from actual evidence.
- [ ] Select the first additional function only when documented demand, operating evidence, and maintenance capacity support it.
- [ ] Publish the first additional pack if its validation gates pass; Content and Media remains a candidate.
- [ ] Keep Customer Operations and Business Operations provisional until their workflows are documented and tested.
- [ ] Add a global glossary, concept index, and cross-function discovery path.
- [ ] Validate navigation and terminology with readers who are new to HELM.

### Search and evidence discovery

- [ ] Add global search across concepts, roles, tools, evidence, and templates.
- [ ] Add related-concept links generated from canonical relationships.
- [ ] Make framework version, evidence state, and last review visible without overwhelming the reading experience.
- [ ] Publish the roadmap, changelog, correction route, and release notes from durable navigation.

### HELM Studio bridge

- [ ] Add a restrained framework-to-Studio path once the Studio offer is live.
- [ ] Publish the difference between self-service tools and facilitated services.
- [ ] Add case-study and evidence links without turning the framework site into a sales site.

### Exit criteria

- [ ] Major recommendations state their evidence status.
- [ ] At least one newly approved case study or longitudinal follow-up adds evidence beyond previously released reports, including measured outcomes, limitations, and its effect on guidance.
- [ ] Any additional function pack has demonstrated demand and has been tested against real work; otherwise record deferral and release evidence improvements alone.
- [ ] Framework and Studio remain clearly differentiated.

---

## Candidate Company Operating Model - Unassigned

**Objective:** Decide whether broader company scope solves a demonstrated problem better than continued depth for software product teams. Expansion is optional. Evidence may favor staying focused.

### Release gates

- [ ] Document user demand, expected benefit, maintenance capacity, and the decision to pursue broader company scope.
- [ ] The Work, Skills, and Team Adaptation guide has been used by multiple teams.
- [ ] At least one implementation is outside Salalem.
- [ ] Documented variations show which elements are universal and which are context-specific.
- [ ] The work and team-adaptation guidance has been used successfully across different team shapes, with limitations documented.
- [ ] Product and Engineering plus at least two additional function packs meet evidence requirements.
- [ ] Case studies include measurable outcomes and implementation limitations.
- [ ] Public framework content and HELM Studio delivery use the same canonical model.

### Candidate scope

- [ ] Company-level workflow redesign guidance
- [ ] Cross-function dependency mapping
- [ ] Organization-wide maturity profile
- [ ] Function-pack interoperability
- [ ] Portfolio-level governance and measurement
- [ ] Versioned, machine-readable framework distribution

Company-wide scope remains provisional until the release gates are satisfied. Assign a version only after approving scope and reviewing compatibility. A decision to stay focused on software product teams is a valid product outcome; HELM 2.0 may instead be needed earlier for breaking guidance corrections.

---

## Cross-Cutting Validation and Measurement

Use these checks where relevant to the feature being shipped. They are not a requirement to run every research method or collect every metric for every release. Existing work notes and retrospectives are sufficient unless a specific decision needs more.

### Learn from use

- [ ] Keep a short note of what was tried, by whom, what happened, and what changed. Distinguish observations, user reports, measurements, and external claims.
- [ ] Have intended users try the relevant guide, template, navigation, or export; include failures and confusing steps.
- [ ] Revisit advice when tools, risks, or operating assumptions change. Do not turn a short pilot into a claim about long-term careers or whole industries.
- [ ] Provide a visible route for corrections and implementation feedback.

### Success measures

For the first pilot, use a before/after comparison of effort and quality plus a conversation about responsibilities and learning. Use estimates when necessary, label them, and do not manufacture precision. The following are questions to draw from as needed, not a mandatory dashboard:

- **Practical utility:** users can apply the kit or guide and identify a useful next action.
- **Assessment integrity:** scores are evidence-backed, uncertainty remains visible, and repeated assessments are explainable.
- **Implementation outcomes:** compare lead time, quality, failure rate, and product outcomes against an agreed baseline while accounting for planning, execution, review, rework, and tool costs. Faster generation alone does not establish a delivery benefit.
- **People and teams:** are responsibilities clearer, is workload reasonable, and do people have time to learn and retain the judgment needed to check and recover from mistakes?
- **Content trust:** major claims have provenance, links remain valid, and freshness reviews happen on schedule.
- **Product usability:** completion, abandonment, template usage, search success, accessibility defects, and user-reported confusion are monitored.
- **Framework learning:** field evidence produces traceable confirmations, revisions, or deprecations.

Avoid optimizing for page views, assessment completion, downloads, agent usage, or the number of reorganizations without evidence that teams made better decisions or achieved better outcomes. Collect people-impact evidence proportionately and with agreed access boundaries, not as individual surveillance.

### Analytics and feedback

- [ ] Define the minimum analytics events needed to evaluate user journeys.
- [ ] Avoid collecting assessment answers, company-sensitive content, or personal data by default.
- [ ] Publish analytics and consent behavior in the privacy notice.
- [ ] Define retention, deletion, and access rules before any server-side collection begins.
- [ ] Review qualitative feedback alongside behavioral analytics.

---

## Privacy, Security, Legal, and Responsible Use

- [ ] Classify data handled by every interactive feature.
- [ ] Keep assessments local-first unless server storage has an approved purpose.
- [ ] Threat-model any future authentication, persistence, uploads, integrations, or generated reports before implementation.
- [ ] Prevent secrets, personal data, client-confidential details, and proprietary source material from entering examples, telemetry, or case studies.
- [ ] Define safe rendering and contribution boundaries for Markdown, MDX, links, and generated HTML.
- [ ] Add dependency review, software provenance, and an incident-reporting path.
- [ ] Publish terms, privacy information, framework licensing, content licensing, and trademark guidance before commercial cross-linking.
- [ ] Define how users challenge an assessment result and how HELM communicates uncertainty and limitations.
- [ ] Review applicable employment, discrimination, privacy, and AI-governance obligations before publishing hiring or role-transition instruments for a jurisdiction.
- [ ] Keep individual capability and career-development evidence private by default; agree access and retention before research collection and obtain approval for any publication.
- [ ] Prohibit automated employment decisions based on HELM scores or task exposure; require accountable human review, affected-person participation, and applicable safeguards for workforce changes.

---

## Performance, Reliability, and Operations

- [ ] Define performance budgets for page weight, JavaScript, images, and Core Web Vitals.
- [ ] Validate structured data, social previews, feeds, sitemap output, redirects, and canonical URLs in release checks.
- [ ] Use reproducible builds, pinned dependencies, deployment provenance, and recoverable release artifacts.
- [ ] Document hosting ownership, domain and DNS ownership, deployment access, backup expectations, and rollback procedures.
- [ ] Monitor public availability and broken critical journeys without collecting sensitive content.
- [ ] Define a support and incident path for broken assessments, incorrect framework guidance, security reports, and publishing failures.
- [ ] Record operating and maintenance cost as part of feature review.

---

## Accessibility, Localization, and Regional Readiness

- [ ] Set WCAG 2.2 AA as the public-interface baseline.
- [ ] Test keyboard, screen-reader, zoom, contrast, reduced-motion, print, and no-JavaScript behavior.
- [ ] Keep canonical IDs language-neutral so translated content preserves references and exports.
- [ ] Establish an English editorial source and a reviewed translation workflow.
- [ ] Validate terminology rather than translating role and governance language literally.
- [ ] Assess demand and capacity for Arabic before committing a release.
- [ ] When Arabic is approved, support RTL layout, Arabic search, localized metadata, and bilingual artifact exports.
- [ ] Test examples against Jordan and GCC organizational contexts without implying regional uniformity.

---

## Release and Lifecycle Governance

### Release states

Framework material moves through **Draft**, **Field test**, **Release candidate**, **Published**, and **Deprecated**. Public pages must show the applicable framework version and evidence state.

### Release requirements

- [ ] Scope is frozen and unfinished work is moved explicitly.
- [ ] Milestone exit criteria are satisfied with linked evidence.
- [ ] Required user validation is complete.
- [ ] Adaptation guidance states its tested capability conditions, people impacts, applicability limits, and reassessment triggers; uncertainty and no-change findings remain visible.
- [ ] Automated quality, accessibility, security, content-integrity, and build checks pass.
- [ ] Privacy, legal, evidence, and editorial reviews are complete where applicable.
- [ ] Release notes describe additions, changes, removals, limitations, and known issues.
- [ ] Breaking changes include migration guidance and stable redirects or aliases.
- [ ] Any published machine-readable exports and human-readable pages represent the same version; new exports require a documented consumer.
- [ ] A rollback or correction path exists for harmful, inaccurate, or broken guidance.

### Maintenance policy

- [ ] Assign a review interval and maintainer to every published framework area.
- [ ] Flag stale material automatically when its review date passes.
- [ ] Deprecate concepts visibly before removal.
- [ ] Preserve versioned records so case studies and assessments remain interpretable.
- [ ] Review vendor examples separately from vendor-neutral framework guidance.
- [ ] Link material capability changes or regressions to the affected work, skill, and responsibility guidance and its next validation decision.

---

## Risk Register

- **R1 — Over-generalizing from Salalem | High | Open:** require external validation and label provisional guidance.
- **R2 — Framework and Studio become indistinguishable | High | Open:** maintain separate user journeys, claims, and conversion boundaries.
- **R3 — Assessment creates false precision | High | Open:** require evidence, expose uncertainty, and test scoring against observed behavior.
- **R4 — Scope expands faster than evidence | High | Open:** enforce release gates, function-pack criteria, and Explicitly Deferred.
- **R5 — Canonical content drifts across MDX, TypeScript, exports, and services | High | Open:** enforce one owner per concept, test existing representations, and migrate storage only where evidence justifies it.
- **R6 — Claims, examples, or role guidance become stale | Medium | Open:** assign review intervals, evidence dates, and deprecation rules.
- **R7 — Sensitive company or employee information leaks through assessments or case studies | High | Open:** remain local-first, minimize collection, and require publication approval.
- **R8 — Maintenance capacity cannot sustain the roadmap | High | Open:** limit active work, assign owners before starting, and sequence by P0 credibility risk.
- **R9 — Licensing or contributor rights remain ambiguous | Medium | Open:** publish framework, content, code, trademark, and contribution terms.
- **R10 — Regional or translated guidance misrepresents local practice | Medium | Open:** use reviewed localization and regional validation.
- **R11 — Internal contradictions undermine credibility | High | Open:** track conceptual corrections separately from technical hardening and document their evidence and version impacts.
- **R12 — Adoption overhead exceeds delivery benefit | High | Open:** test the minimal kit without reorganization and measure total effort before adding artifacts, staffing, or infrastructure.
- **R13 - Role prescriptions outlive capability assumptions | High | Open:** use scheduled and event-triggered local evaluations; preserve evidence-backed no-change and rollback options rather than prescribe permanent successor jobs.
- **R14 - Automation erodes expertise and junior development | High | Open:** track learning opportunities, protected practice, retained judgment, and recovery capability through adaptation reviews.
- **R15 - Task savings become unsupported workforce decisions | High | Open:** distinguish released capacity from sustainable staffing changes; require people-impact evidence, consultation, and accountable human approval.
- **R16 - Diagnostic automation precedes useful advice | High | Open:** establish user need and try the advice manually before building a questionnaire or scores.

Review risk status during every roadmap review. Add a trigger, owner, and mitigation task to the active tracker when a risk becomes imminent.

---

## Explicitly Deferred

These items are outside the current roadmap unless evidence creates a concrete need:

- Additional foundational principles
- A large collection of static role pages without transition workflows
- User accounts, cloud dashboards, or a general-purpose SaaS platform
- Certification programs or practitioner communities
- Automated claims that HELM applies identically to every company function
- A framework rewrite away from Astro
- Complex personalization that cannot be justified by the public assessment
- A universal runtime-agent platform or specialized staffing prescription for all coding-agent adopters
- Mandatory company-wide expansion without documented demand
- AGI arrival forecasts, universal future-job catalogs, or automatic staffing recommendations derived from capability benchmarks

The questionnaire, additional role guides, comprehensive Specification Chain templates, function packs, and Studio conversion work remain retained later or conditional scope in their sections, not immediate delivery priorities.

## Decision Log

Entries preserve decision history. Later decisions supersede earlier ones, including the final simplification decision below. The current release map and tracker govern execution.

### 2026-09-17 — Prepare a meaning-preserving 1.0.1 hardening release

The release adds explicit evidence status and source limitations while preserving the baseline recommendations. Semantic corrections remain in their own register with version-impact review. The shared-competency proposal remains follow-on work, not part of hardening.

### 2026-09-17 — Adopt static nginx serving and enforced quality checks

Remove the Node adapter and sessions; build static files and serve them with an unprivileged nginx image on port 8080. Pin image digests and workflow actions. Require `quality` and `container` checks on an up-to-date branch, including administrators. The existing Docker publisher waits for successful main-branch checks and a published release state.

### 2026-09-17 — License content and code separately

Owner selected CC BY 4.0 for original framework content and MIT for website code/technical documentation. Third-party rights remain separate, and the licenses grant no trademark endorsement rights.

### 2026-09-05 — Implementation depth comes first

The next release will prioritize role transition, assessment, templates, and evidence instead of expanding the conceptual framework.

### 2026-09-05 — Keep the framework and Studio distinct

The framework remains educational and tool-oriented. HELM Studio provides facilitated validation and implementation services.

### 2026-09-05 — Keep Astro and remain static-first

The existing stack is sufficient. Runtime infrastructure will be added only when an approved feature requires authenticated or server-side behavior.

### 2026-09-05 — Expand through evidence-gated function packs

The core may become function-neutral, but new function guidance will be published only after real workflows have been documented and tested.

### 2026-09-05 — Use dimensional maturity

Future assessments will describe maturity across independent dimensions and will not infer maturity from tool adoption alone.

### 2026-09-05 — Gate releases by evidence

Roadmap versions are released when their exit criteria and validation requirements pass. Calendar commitments are assigned only to owned active work.

### 2026-09-05 — Keep assessment data local-first

The public assessment will not require accounts or server-side answer storage. Any future collection requires an explicit purpose, privacy review, and retention policy.

### 2026-09-05 — Establish HELM 1.0.0 before feature releases

The current public framework will become the versioned 1.0.0 baseline. Foundation hardening ships as compatible 1.0.x work before HELM 1.1 is published.

### 2026-09-05 — Version framework and application independently

Framework versions describe published HELM guidance. The npm package retains its independent technical version, so the HELM 1.0.0 baseline does not change package version `0.0.1`.

### 2026-09-05 — Validate Product and Engineering before generalizing

HELM 1.1's Specification Chain remains Product and Engineering specific. Only the Role Transition Protocol elements supported by later function evidence may move into the function-neutral core.

### 2026-09-05 — Start with coding-agent delivery and a minimal kit

The near-term audience is software product teams using coding agents. The first practical release lets a team try one workflow with its existing staff. Broader transition work remains available for evidence-led follow-on releases.

### 2026-09-05 — Establish evidence before expansion

Provenance and evidence labels begin during foundation hardening. HELM 1.1 requires an approved pilot report covering total delivery effort and failures. This advances the earlier evidence-publication sequence from HELM 1.3.

### 2026-09-05 — Separate conceptual corrections from technical hardening

Audit applicability, autonomy, bottleneck claims, staffing, decision ownership, and enforceable safeguards. Meaning-changing corrections receive explicit version-impact decisions and migration notes; they cannot be disguised as compatible 1.0.x repairs.

### 2026-09-05 — Keep infrastructure off the pilot critical path

Correctness, accessibility, source ownership, and appropriate tests remain release gates. Wholesale collection migration and new exports require a demonstrated maintenance problem or named consumer.

### 2026-09-05 — Treat broader company scope as a candidate

Function packs and company-wide guidance require demonstrated need as well as validation. Continuing to deepen HELM for software product teams remains an acceptable direction.

### 2026-09-05 - Make continuous adaptation the core promise

HELM will help teams continually redesign work, skills, jobs, and team interfaces as locally demonstrated AI capabilities and business needs change. Product and Engineering remains the initial validation context. No reorganization is required to begin, but existing roles are not assumed permanent. AGI timing and benchmark performance are not staffing evidence.

### 2026-09-05 - Validate adaptation before automating diagnosis

The first kit now measures changes to human work and capability alongside delivery. Work, Skills, and Team Adaptation becomes the core milestone targeting HELM 1.2; the evidence-backed diagnostic moves to the 1.3 planning target. This supersedes the earlier optional Role Transition Protocol sequencing. Repeated reviews and a materially different context must validate the protocol before diagnostic implementation.

### 2026-09-05 - Prioritize workflow evidence and credibility

The first three work packages are the workflow and human capability baseline, credibility-critical guidance, and the quality baseline with publication blockers. Complete remaining provenance and required hardening alongside approved private research as capacity permits. Additional role pages, comprehensive Specification Chain templates, function packs, and Studio conversion work remain lower priority, without weakening public release gates.

### 2026-09-05 - Treat development and workforce impacts as outcomes

Learning opportunities, retained judgment and recovery, junior progression, workload, and fair transitions are part of operational sustainability. Reuse the kit's existing artifacts to record these impacts. Released task capacity does not by itself establish removable headcount, and HELM scores must not automate employment decisions.

### 2026-09-05 - Accept evidence-backed retention and separate versioning from expansion

Validation must produce traceable retain/revise/reject decisions, not mandatory changes. Later evidence releases must add new implementation findings. Function packs and company-wide scope become unassigned conditional expansion; HELM 2.0 is not reserved for broader applicability. Apply the compatibility policy to semantic corrections and relabel planning targets when breaking changes require it.

### 2026-09-05 - Keep the product practical

Replace the large adaptation protocol with a short team guide, and combine the starter kit into three sections that can live in existing work documents. One real use and a clear account of its limits are enough for a first field-tested release; multiple-context and longitudinal studies move to later evidence work. A diagnostic is conditional on user need, and scoring is optional. This supersedes the earlier repeated-validation gates, not the focus on changing skills and responsibilities or the safety and publishing requirements.

## Update Log

### 2026-09-17

- Captured the pre-hardening build, dependency and accessibility baseline.
- Implemented and locally verified formatting, lint, type, unit, browser, accessibility, content and source-safety gates; dependency audit is clean.
- Added 28 major-claim records, source retrieval history, evidence labels and the semantic correction register. Unverified statistics and causal inferences remain explicitly identified.
- Added public evidence/correction/changelog/roadmap/licensing routes and consistent visible and machine-readable dates.
- Repaired navigation, contrast, responsive tables, progressive enhancement, print, reduced motion, unsafe frontmatter rendering and repeated component IDs.
- Selected static nginx deployment, pinned dependencies/actions/images, documented port migration and rollback, and connected Docker publication to successful checks.
- Applied required GitHub checks and verified the repository setting by API readback.
- Recorded 1.0.1 as a release candidate; remote workflow/container verification and production publication remain outstanding.
- Merged the newer adaptation-focused roadmap from main while retaining hardening progress and evidence.
- Verified GitHub run 35206062832: both quality and container jobs passed. FND-004 is in review; merge and production publication remain outstanding.

### 2026-09-05

- Created the roadmap.
- Recorded the vNext product direction.
- Added foundation hardening, HELM 1.1, 1.2, 1.3, and 2.0 milestones.
- Added release gates, deferred scope, and the decision log.
- Audited the roadmap for execution gaps.
- Added ownership, status, priority, active-work, dependency, and definition-of-done controls.
- Added user validation, success measurement, analytics, privacy, security, legal, accessibility, localization, lifecycle, and risk coverage.
- Added capacity, spend, performance, reliability, operations, discovery, and maintenance controls.
- Linked the roadmap from the repository README.
- Clarified the 1.0.0 baseline, release order, and publication dependencies.
- Resolved the scope boundary between the Product and Engineering Specification Chain and the candidate function-neutral transition method.
- Required one shared classification schema and an explicit migration path from the current maturity levels.
- Added the HELM 1.0.0 snapshot as the first tracked release task and aligned the current focus with the work-in-progress limit.
- Separated framework versioning from the application's technical package version pending an explicit policy.
- Narrowed near-term applicability to teams using coding agents to develop software.
- Replaced the first practical release's full-transition dependency with a minimal operating kit and approved pilot report.
- Retained broader transition work as follow-on scope with separate validation gates.
- Advanced evidence labels and provenance to foundation hardening and required full-effort pilot measurement.
- Added a conceptual-corrections workstream with compatibility and migration decisions.
- Moved wholesale content migration and new exports to conditional infrastructure work.
- Updated tracker dependencies, assessment prerequisites, release gates, and risks to match the lighter entry path.
- Made additional function packs and broader company scope conditional on demand as well as validation.
- Published the HELM 1.0.0 content architecture baseline with stable metadata and identifiers.
- Added the canonical ownership map and independent package-version policy.
- Added deterministic collection, route, link, anchor, and DOM ID validation.
- Reframed product direction around continuous adaptation of work, skills, jobs, and teams without assuming an AGI timeline.
- Updated the current focus and tracker to prioritize the human capability baseline, credibility-critical corrections, and publication-blocking quality work.
- Expanded the first pilot with before-and-after work maps, learning and workload evidence, released-capacity decisions, and reassessment triggers.
- Promoted Work, Skills, and Team Adaptation to the 1.2 planning target and moved the diagnostic to 1.3 after repeated validation.
- Retained Specification Chain artifacts and role examples as conditional supporting work; removed release assignments from optional function and company expansion.
- Defined compatibility rules, separated major versions from company-wide scope, and required new evidence for later evidence releases.
- Replaced forced-change validation gates with justified retain/revise/reject decisions and added people-impact measures, safeguards, and risks.
- Simplified the kit and adaptation guide, moved extensive validation and scoring to optional backlog, and clarified that delivery checklists are not a mandatory adoption process.

## How to Maintain This Tracker

For every roadmap update:

1. Change **Last updated** and **Current focus** at the top.
2. Update the Active Work Tracker with priority, status, owner, target review, and completion evidence.
3. Mark completed checklist items with `[x]`.
4. Keep incomplete items as `[ ]`; do not delete unfinished work.
5. Review dependencies, success measures, and open risks.
6. Add scope or sequencing decisions to the Decision Log.
7. Add a dated entry to the Update Log describing what changed.
8. Move ideas outside approved scope to Explicitly Deferred instead of silently expanding a release.
