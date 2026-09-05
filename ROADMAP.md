# HELM Product Roadmap

**Status:** Active planning document
**Last updated:** 2026-09-05
**Roadmap owner:** Firas Kafri
**Review cadence:** Weekly during active delivery; monthly otherwise
**Current focus:** Establish the versioned baseline, clarify applicability, address credibility-critical contradictions, and test a minimal operating kit on one documented workflow

## Purpose

This document tracks HELM's evolution from a reference framework into a practical implementation system. It is the source of truth for product direction, release scope, progress, and roadmap decisions.

HELM already explains the target operating model through principles, practitioner guidance, leadership guidance, and role definitions. The next releases must close the gap between understanding HELM and applying it inside a real team.

## Product Direction

HELM vNext will help teams:

1. Assess their current operating maturity using evidence rather than self-perception.
2. Redesign real workflows around appropriate human and agent responsibilities.
3. Transition existing people into changed roles without relying on generic job descriptions.
4. Run repeatable operating practices using concrete templates and artifacts.
5. Learn from documented implementations and feed those findings back into the framework.

The near-term audience is Product and Engineering teams using coding agents to develop software. HELM should help them control quality, cost, and accountability in an existing workflow. Start with one workflow. No reorganization required.

Building products whose runtime behavior depends on agents is a separate applicability context: model hosting, inference reliability, conversational evaluations, and specialized agent-platform staffing become relevant when the product requires them, rather than as prerequisites for every team adopting coding agents.

Broader company applicability is a candidate direction. Function packs require demonstrated user need, documented work, and validation before publication; remaining focused on software product teams is a valid outcome.

The public framework and HELM Studio remain separate products:

- **HELM Framework** teaches the model and provides public tools and templates.
- **HELM Studio** validates evidence, facilitates diagnostics, and supports implementation.

## Primary Users and Jobs

- **Team leaders and transformation owners:** assess current operations, choose a safe next step, redesign workflows, and manage role transitions.
- **Practitioners:** plan, execute, verify, and improve agent-assisted work using concrete contracts and templates.
- **People managers and hiring teams:** define changed responsibilities, evaluate capability gaps, and transition existing people fairly.
- **Framework maintainers and implementation partners:** apply one canonical model, record evidence, and feed validated lessons back into HELM.

Every public feature must serve at least one of these jobs. HELM Studio buyers may enter through the framework, but sales conversion is not the framework site's primary job.

## Roadmap Principles

- Add implementation depth before adding more conceptual breadth.
- Start from observed work, not existing job titles.
- Let teams adopt a minimal operating kit before considering role transitions or reorganization.
- Require accountable responsibilities; add dedicated positions only when workload and risk justify them.
- Separate execution autonomy from operational maturity.
- Make infrastructure expansion conditional on a real consumer or demonstrated maintenance problem.
- Separate candidate function-neutral concepts from validated function-specific guidance; do not generalize prematurely.
- Mark field observations clearly; do not present one company's practice as universal.
- Preserve a static-first architecture until a real requirement justifies backend complexity.
- Keep every framework concept in one canonical, typed source.
- Treat accessibility, testing, content integrity, and publishing metadata as release requirements.

## Progress Summary

- [x] Define the initial HELM framework and publish the Foundation, Practitioner, Leadership, and Roles sections.
- [x] Add interactive reference components for patterns, guardrails, task classification, maturity, adoption, KPIs, failure modes, and competencies.
- [x] Establish the vNext direction and this roadmap.
- [x] Snapshot and publish the current framework as HELM 1.0.0.
- [ ] Harden the technical and content foundation.
- [ ] Release the minimal operating kit, conceptual corrections, and first approved pilot report.
- [ ] Validate the Role Transition Protocol and Specification Chain as evidence justifies follow-on work.
- [ ] Release the evidence-based maturity assessment.
- [ ] Extend implementation evidence and publish an additional function pack if demand and validation justify it.
- [ ] Decide whether broader company scope is warranted and, if approved, validate and release HELM 2.0.

## Version Baseline and Release Map

The current public framework predates formal versioning. Before feature work is published, snapshot the current framework as **HELM 1.0.0** and align page metadata, release notes, and repository tags to that baseline. Any existing machine-readable exports must agree; creating a new export is not a baseline prerequisite.

The application package uses an independent technical version. Framework releases describe published guidance; package releases describe the Astro application. The HELM 1.0.0 baseline therefore retains application package version `0.0.1`.

The release sequence is:

1. **HELM 1.0.x — Foundation Hardening:** repair content ownership, quality controls, accessibility, publishing, and deployment without changing the framework's intended meaning.
2. **HELM 1.1 — Minimal Operating Kit and Pilot:** publish a small usable kit, compatible conceptual corrections, and an approved pilot report. Retain broader role-transition and Specification Chain work as evidence-led follow-on scope.
3. **HELM 1.2 — Evidence-Based Assessment:** assess teams using the stable work-classification, evidence, and action definitions tested in the pilot.
4. **HELM 1.3 — Evidence and Function Packs:** deepen implementation evidence; add a function pack only when demand and validation justify expansion.
5. **HELM 2.0 — Candidate Company Operating Model:** consider broader scope only if it serves demonstrated needs and external evidence satisfies the release gates.

Research and design may overlap across releases. Publication follows stable dependencies, but a full transition system, wholesale content migration, and new exports do not block the first kit. Follow-on transition work receives a release assignment only after pilot review.

Version labels beyond the baseline remain subject to the documented compatibility policy. Semantic corrections cannot ship as meaning-preserving 1.0.x repairs. Record each correction's version impact before publication; breaking changes require an appropriate version and migration guidance, even if company-wide scope is never pursued.

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

| ID | Priority | Work item | Release | Status | Owner | Target review | Completion evidence |
|---|---|---|---|---|---|---|---|
| RM-001 | P0 | Establish the vNext roadmap | Planning | Done | Firas | 2026-09-05 | `ROADMAP.md` |
| VER-001 | P0 | Snapshot the current public framework | HELM 1.0.0 | Done | Firas | 2026-09-05 | `framework-v1.0.0`, `CHANGELOG.md`, and publication metadata |
| FND-001 | P0 | Inventory canonical concepts and actual sources | HELM 1.0.x | Done | Firas | 2026-09-05 | `docs/content-architecture.md` and `npm run check:content` |
| FND-002 | P0 | Record the current quality and accessibility baseline | HELM 1.0.x | Ready | Firas | Next roadmap review | Baseline report with reproducible checks |
| V11-001 | P0 | Capture the Phoenix feature-development workflow end to end | HELM 1.1 | Ready | Firas | Next roadmap review | Evidence-backed current-state workflow |
| FND-003 | P0 | Establish claim provenance and evidence labels | HELM 1.0.x | Ready | Firas | Next roadmap review | Source register, evidence labels, and unsupported-claim inventory |
| V11-002 | P0 | Audit applicability and conceptual contradictions | HELM 1.1 planning | Ready | Firas | Next roadmap review | Correction register with canonical targets, acceptance checks, and version impacts |
| V11-003 | P1 | Test a minimal operating kit on one workflow | HELM 1.1 | Blocked | Firas | Next roadmap review | V11-001 workflow and safety review required; then editable kit and non-author usability findings |
| V11-004 | P1 | Publish the first approved pilot report | HELM 1.1 | Blocked | Firas | Next roadmap review | V11-003 pilot required; then approved baseline, total-effort results, limitations, and retrospective |

When an item enters **In progress**, its target review must be a specific date. Add or split tracker rows when a work item cannot be reviewed as one coherent change.

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

1. Snapshot the current public framework as HELM 1.0.0 while recording content ownership, quality, and evidence baselines.
2. Repair demonstrated content-integrity problems and build quality gates. Conditional infrastructure work stays off the critical path unless a documented dependency requires it.
3. Capture the Phoenix workflow and audit conceptual contradictions in parallel with hardening.
4. Test the minimal kit after recording a baseline, owners, and safety boundaries. Private pilot research need not wait for site hardening; public HELM 1.1 publication requires the HELM 1.0.x exit criteria, applicable corrections, and an approved pilot report.
5. Use pilot findings to select follow-on transition artifacts. HELM 1.2 depends on stable classification, evidence, and recommendation definitions, not completion of every role-transition template.
6. HELM 1.3 builds on the first report; any additional function pack requires both demand and approved validation evidence.
7. Broader HELM 2.0 scope remains optional and blocked until its demand decision and all release gates are satisfied.

---

## HELM 1.0.x — Foundation Hardening

**Objective:** Make the existing framework maintainable, testable, accessible, and genuinely single-source before expanding it.

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

- [ ] Define evidence labels that distinguish a proposed recommendation, author observation, participant report, measured result, and externally supported claim.
- [ ] Record source provenance for major claims and recommendations, including unsupported claims that need qualification or removal.
- [ ] Maintain a source register with access date, claim linkage, applicability, and replacement history.
- [ ] Check quoted statistics against their sources and distinguish correlation, forecasts, and causal claims.
- [ ] Publish a framework changelog and visible version, evidence-state, and freshness information.
- [ ] Route changes to a recommendation's meaning through the conceptual-corrections workstream; evidence labeling alone does not validate the recommendation.

### Conditional infrastructure backlog

These items remain accepted work. Schedule them only when a named consumer or documented maintenance problem justifies the effort; they do not block the pilot or starter-kit release.

- [ ] Move remaining principles, patterns, guardrails, maturity levels, adoption phases, roles, and citations into typed content collections where the ownership inventory demonstrates a benefit.
- [ ] Complete the migration to MDX composition of canonical records where existing sources cannot maintain integrity.
- [ ] Generate machine-readable JSON exports when an assessment, integration, or distribution consumer requires them.

### Quality gates

- [ ] Record the current build, type, link, accessibility, performance, and browser baseline.
- [ ] Add formatting, linting, TypeScript, and `astro check` scripts.
- [ ] Add unit tests for existing content transforms and structured-data helpers; test scoring logic when the assessment introduces it.
- [ ] Add content-integrity tests for duplicate IDs, ordering, links, anchors, and required evidence.
- [ ] Add browser tests for keyboard navigation, no-JavaScript fallbacks, and critical responsive paths.
- [ ] Add automated accessibility checks.
- [ ] Add dependency, secret, and unsafe-content checks appropriate to the static publishing pipeline.
- [ ] Add pull-request CI that runs all quality gates and a production build.

### Publishing and interface repairs

- [ ] Choose and document one static-first deployment path.
- [ ] Remove runtime deployment dependencies unless a dynamic feature requires them.
- [ ] Fix mobile-menu Escape behavior.
- [ ] Fix active-heading tracking for both rendered tables of contents.
- [ ] Make interactive controls instance-scoped and safely reusable.
- [ ] Ensure substantive content remains available when JavaScript fails.
- [ ] Match the loaded serif font to the configured design token.
- [ ] Add a real default Open Graph image.
- [ ] Use one canonical source for the production origin.
- [ ] Publish accurate modification dates in pages, RSS, and the sitemap.
- [ ] Sanitize or otherwise constrain rendered frontmatter HTML before accepting external contributors or CMS content.
- [ ] Add licensing and contribution documentation.

### Exit criteria

- [ ] The content ownership map matches the repository.
- [ ] All published framework records pass validation appropriate to their canonical source; a single storage format is not required.
- [ ] Major claims have a recorded source or explicit unsupported/provisional status, with semantic corrections tracked separately.
- [ ] Pull requests cannot merge with failed type, content, accessibility, test, or build checks.
- [ ] Core content and navigation remain usable without JavaScript.
- [ ] Deployment contains no unexplained runtime layer.

---

## HELM 1.1 — Minimal Operating Kit and Pilot

**Objective:** Help a software product team apply HELM to one existing workflow, measure the full delivery effort, and choose a justified next step without requiring new job titles or a reorganization.

### Minimal operating kit

- [ ] Provide a current-state map for one workflow, including handoffs and exceptions.
- [ ] Provide a task execution contract with scope, non-goals, acceptance criteria, constraints, and stop conditions.
- [ ] Provide a risk and verification checklist covering consequences, reversibility, permissions, sensitive data, and required checks.
- [ ] Provide a responsibility and decision-owner worksheet using existing team members.
- [ ] Provide a baseline measurement sheet and retrospective/learning log.
- [ ] Make the kit downloadable, editable, and usable without an account.
- [ ] Lead the public entry point with a concrete first action and link to the relevant framework guidance.

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
- [ ] Publish correction rationale and migration notes under the appropriate framework version; defer incompatible changes to an explicitly versioned release rather than hiding them in 1.0.x.

### First pilot and publication evidence

- [ ] Define the publication boundary for the Phoenix or Salalem implementation before collecting publishable evidence.
- [ ] Record the baseline, task mix, observation period, and comparison method before the intervention.
- [ ] Test the kit with a participant who did not author it and record ambiguity, missing context, and completion time.
- [ ] Measure planning, execution, review, rework, tool costs, escaped defects, and product outcomes where observable; distinguish elapsed time from human effort.
- [ ] Include failed tasks, abandoned approaches, adjustments, uncertainty, and unresolved questions.
- [ ] Obtain approval for names, metrics, quotations, and confidential operating details before publication.
- [ ] Publish the first approved pilot report with baseline, intervention, results, limitations, and lessons; anonymize only with approval.
- [ ] Link findings to canonical practices and record which kit or framework decisions they changed.
- [ ] Choose follow-on artifacts based on observed friction; stop or redesign the intervention if benefits do not justify its total cost.

### Exit criteria

- [ ] A non-author participant can use the minimal kit on one workflow without undocumented help or an org-chart change.
- [ ] Task boundaries, accountable decision owners, verification, and safe stopping conditions are explicit.
- [ ] The kit is downloadable, editable, and linked from relevant framework sections.
- [ ] Applicable conceptual corrections have evidence-status labels, version-impact decisions, and migration notes where needed.
- [ ] An approved pilot report includes total delivery effort, failures, limitations, and comparison with the baseline.
- [ ] The retrospective has changed at least one kit element or framework recommendation.
- [ ] Follow-on work is explicitly selected, deferred, or rejected based on pilot findings.

### Follow-on scope: Role Transition Protocol and Specification Chain

The following work remains planned for validation after the minimal kit. It is not a prerequisite for HELM 1.1. Assign selected items to a release in the active tracker after pilot review; only definitions actually consumed by HELM 1.2 become assessment dependencies.

The Specification Chain remains Product and Engineering specific: product context, PRD, architecture, testing, implementation, and release evidence. Its artifacts need demonstrated use. The Role Transition Protocol is a candidate general method whose broader applicability requires later evidence.

### Role Transition Protocol

- [ ] Capture the Phoenix feature-development workflow from initial context through production and learning.
- [ ] Define how to observe and document the current workflow.
- [ ] Separate decisions, execution, verification, knowledge, handoffs, and exceptions.
- [ ] Define one canonical work-classification schema shared by role transition, task classification, and assessment.
- [ ] Classify activities by boundedness, consequence, reversibility, evaluability, context availability, and data sensitivity.
- [ ] Assign each activity to human-owned, agent-executed, agent-assisted, or eliminated work.
- [ ] Define role boundaries, decision rights, escalation paths, and required artifacts.
- [ ] Define a transition sequence: shadow, co-own, own, and audit.
- [ ] Define capability-gap assessment and training requirements.
- [ ] Define a post-transition review using operational and outcome evidence.
- [ ] Define how affected employees participate in workflow discovery, role design, and transition review.
- [ ] Define exception handling for work that does not fit the target role split.

### Specification Chain

- [ ] Define the relationship between product context, PRD, architecture, testing plan, implementation, and release evidence.
- [ ] Specify the owner and approval boundary for every artifact.
- [ ] Define the minimum contract required before agent execution begins.
- [ ] Define how implementation discoveries update upstream artifacts.
- [ ] Define how the chain operates when different people own product, architecture, engineering, and quality.
- [ ] Connect the chain explicitly to Plan-Execute-Verify-Ship-Learn.

### Follow-on public toolkit

Reuse the minimal kit's workflow map, responsibility worksheet, execution contract, verification checklist, and learning log. Add the following artifacts only where pilot evidence justifies them:

- [ ] Role charter and job-description template
- [ ] Capability-gap assessment
- [ ] 30/60/90-day transition plan
- [ ] Agent-ready PRD template
- [ ] Architecture decision record
- [ ] Testing-plan template
- [ ] Knowledge-transfer and exception register
- [ ] Public entry points for understanding HELM, redesigning a workflow, transitioning a role, and finding the relevant toolkit

### Worked examples

- [ ] Publish a Product Manager transition example.
- [ ] Publish a QA Engineer and Evaluation Lead transition example.
- [ ] Clarify why the leadership model contains nine operational roles while the role collection begins from eight traditional-role pages.
- [ ] Decide whether Evaluation Lead requires a dedicated role guide.
- [ ] Pilot the protocol with someone who did not author it and record ambiguities, missing context, and completion time.

### Follow-on protocol validation gates

Apply these gates before publishing the selected transition protocol; they do not block the minimal kit.

- [ ] A team can complete the protocol without consulting undocumented knowledge.
- [ ] Every protocol step produces a named artifact or decision.
- [ ] At least two worked examples demonstrate materially different transition shapes.
- [ ] The templates are downloadable, editable, and linked from the relevant framework sections.
- [ ] A real implementation retrospective has changed at least one part of the protocol.

---

## HELM 1.2 — Evidence-Based Assessment

**Objective:** Replace informal maturity self-labeling with a practical assessment that produces an evidence-backed action plan.

### Assessment model

- [ ] Separate maturity into independent dimensions:
  - Workflow readiness
  - Context and documentation
  - Agent execution
  - Verification and evaluation
  - Human decision controls
  - Governance and observability
  - Team capability
  - Outcome measurement
- [ ] Define evidence requirements for every score.
- [ ] Remove vendor adoption as a proxy for operational maturity.
- [ ] Apply the corrected distinction between execution autonomy and operational maturity; do not award maturity merely for adopting more agents or orchestration.
- [ ] Map the existing Levels 1–5 to the new dimensions and decide explicitly what is retained, reframed, or deprecated.
- [ ] Publish migration guidance so existing references to a HELM level remain interpretable.
- [ ] Define how the weakest critical-path dimension affects the overall recommendation.
- [ ] Represent confidence and unknown evidence without converting uncertainty into a precise score.
- [ ] Define assessment applicability by team type, company size, and function.
- [ ] Validate scoring against observed team behavior.

### Assessment experience

- [ ] Build a guided, accessible questionnaire.
- [ ] Let users record supporting evidence and unknowns.
- [ ] Produce a maturity profile rather than only one organization-wide level.
- [ ] Identify the weakest critical-path dimension.
- [ ] Recommend the next three actions.
- [ ] Generate a 90-day action outline with readiness gates.
- [ ] Support local export without requiring an account.
- [ ] Make local-only data handling explicit and prevent sensitive assessment content from entering analytics.
- [ ] Explain the boundary between the public assessment and a facilitated HELM Studio Diagnostic.

### Task classification update

- [ ] Preserve the understandable boundedness-and-risk matrix.
- [ ] Formalize and extend the work-classification fields tested in the HELM 1.1 kit as the shared schema for assessment and follow-on role transition.
- [ ] Add decision gates for reversibility, objective verification, context sufficiency, permissions, and data sensitivity.
- [ ] Generate a recommended autonomy level and required guardrails.
- [ ] Test the classifier against real engineering, product, content, and operational tasks.

### Exit criteria

- [ ] Every score is traceable to evidence or explicitly marked unknown.
- [ ] Mixed-maturity teams receive a dimensional profile rather than a misleading single label.
- [ ] Recommendations map to canonical HELM practices and templates.
- [ ] The assessment works with keyboard navigation and without account creation.
- [ ] Scoring and recommendation rules have automated tests.

---

## HELM 1.3 — Evidence and Function Packs

**Objective:** Deepen evidence from software product teams and investigate additional functions only where users demonstrate a need.

### Evidence expansion

The evidence baseline begins in HELM 1.0.x, and the first approved pilot report is required for HELM 1.1. This release extends that work rather than starting it.

- [ ] Publish additional case studies using the established provenance, publication-approval, and measurement requirements.
- [ ] Follow up on the first pilot to test whether benefits persist and identify ongoing review and maintenance costs.
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
- [ ] At least one public case study includes limitations and measured outcomes.
- [ ] Any additional function pack has demonstrated demand and has been tested against real work; otherwise record deferral and release evidence improvements alone.
- [ ] Framework and Studio remain clearly differentiated.

---

## HELM 2.0 — Candidate Company Operating Model

**Objective:** Decide whether broader company scope solves a demonstrated problem better than continued depth for software product teams. Expansion is optional. Evidence may favor staying focused.

### Release gates

- [ ] Document user demand, expected benefit, maintenance capacity, and the decision to pursue broader company scope.
- [ ] The Role Transition Protocol has been used by multiple teams.
- [ ] At least one implementation is outside Salalem.
- [ ] Documented variations show which elements are universal and which are context-specific.
- [ ] The assessment produces credible recommendations across different team shapes.
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

Company-wide HELM 2.0 scope remains provisional until the release gates are satisfied. A decision to stay focused on software product teams is a valid product outcome; version numbers alone do not commit HELM to broader applicability.

---

## Cross-Cutting Validation and Measurement

These requirements apply to HELM 1.0.x and every later release. Their placement here avoids repeating them inside each milestone; it does not defer them until HELM 2.0.

### Research and validation

- [ ] Maintain a research register containing the question, method, participants, evidence, finding, and resulting decision.
- [ ] Separate author observation, participant report, measured outcome, and external research.
- [ ] Test protocols and templates with intended users who did not help write them.
- [ ] Run usability checks on assessment comprehension, terminology, navigation, and exports.
- [ ] Record negative findings and abandoned approaches, not only successful implementations.
- [ ] Revalidate high-impact guidance when model capabilities, regulations, or operating assumptions materially change.
- [ ] Provide a visible feedback route for corrections and implementation reports.

### Success measures

Baselines must be recorded before targets are set. Targets belong in the active tracker once measurement is reliable.

- **Practical utility:** users can complete a protocol, produce the expected artifacts, and identify a justified next action.
- **Assessment integrity:** scores are evidence-backed, uncertainty remains visible, and repeated assessments are explainable.
- **Implementation outcomes:** compare lead time, quality, failure rate, and product outcomes against an agreed baseline while accounting for planning, execution, review, rework, and tool costs. Faster generation alone does not establish a delivery benefit.
- **Content trust:** major claims have provenance, links remain valid, and freshness reviews happen on schedule.
- **Product usability:** completion, abandonment, template usage, search success, accessibility defects, and user-reported confusion are monitored.
- **Framework learning:** field evidence produces traceable confirmations, revisions, or deprecations.

Avoid optimizing for page views, assessment completion, downloads, or agent usage without evidence that teams made better decisions or achieved better outcomes.

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

## Decision Log

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

## Update Log

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
