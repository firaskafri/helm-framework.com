# HELM Product Roadmap

- **Status:** Active planning document
- **Last updated:** 2026-09-17
- **Roadmap owner:** Firas Kafri
- **Review cadence:** Weekly during active delivery; monthly otherwise
- **Current focus:** Close 1.0.1 publication, correct the guidance people rely on, and advance workflow practice and shared competencies in parallel.

## Product Direction

HELM helps product and engineering teams adapt how they work with AI agents: what agents can usefully do, what people should do and own, what people need to learn, and how the team improves together.

The next practical outputs are a small operating kit, shared competencies expressed as observable behaviors, and a useful development-review method. Start with existing tickets, work examples and team conversations. Add an artifact only when it helps someone make a decision.

The initial context remains software product teams using coding agents. Role-independent competencies apply across roles within that context; broader applicability needs its own evidence. Runtime-agent product engineering, function packs and company-wide expansion retain their separate applicability and demand requirements.

The public framework provides guidance and reusable artifacts. HELM Studio remains a separate facilitated implementation service.

## Now, Next, and Later

| Horizon                               | Outcome                                                                            | What makes it ready                                                                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Now — close the release**           | Publish the 1.0.1 hardening and Updates work                                       | Current changes committed and reviewed, checks pass for the release commit, tagging/deployment and public smoke tests recorded |
| **Now — clarify expectations**        | Correct guidance that affects ownership, maturity, risk and judgments about people | Replacement wording, evidence, compatibility decisions and migration notes where needed                                        |
| **Next — work practice**              | Small operating kit and one documented workflow trial                              | A non-author can use it; the account includes total effort, quality, learning needs, failures and a justified next step        |
| **Next — shared competencies**        | Draft shared definitions, behavioral examples and a cross-role comprehension trial | People in different roles can understand the expectations and identify relevant evidence                                       |
| **Then — adaptation and development** | Team adaptation guidance and a trialed Shared Competency Development Review        | Each artifact passes its own trial and produces an actionable responsibility, learning or development decision                 |
| **Later, if useful**                  | Guided diagnostic, additional evidence and function-specific guidance              | Demonstrated user need, an adequate existing method, and capacity to maintain it                                               |

The work-practice and shared-competency tracks can start independently. The Phoenix pilot can supply examples; it is not a prerequisite for researching, drafting or testing shared competencies. Workflow results and review-method reliability require different evidence.

## Implementation, Validation, and Publication

| Area                                       | Implementation                             | Validation                                                                     | Publication                                   |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------- |
| HELM 1.0.0 baseline                        | Complete                                   | Baseline checks recorded                                                       | Published as `framework-v1.0.0`               |
| 1.0.1 hardening in PR #11                  | Complete                                   | Local and GitHub quality/container checks passed                               | Review, merge, tagging and deployment pending |
| Updates mechanism                          | Complete locally                           | Registry, change coverage, generated content and browser checks passed locally | Commit, updated CI and publication pending    |
| Guidance corrections                       | Register exists; replacement guidance open | Acceptance checks and version impacts still to resolve                         | Pending                                       |
| Workflow kit and pilot                     | Planned                                    | Not yet field-tested                                                           | Pending                                       |
| Shared competencies and development review | Planned below                              | No review-method validation claimed                                            | Pending                                       |

Implementation status does not imply field validation or publication. The [Updates page](/updates) records announcements; `docs/releases/1.0.1.md` records hardening verification. The already implemented version/evidence display, changelog, correction route, navigation and Updates feed are release work, not new expansion features.

## Version Baseline and Release Map

Framework releases describe published guidance. The application package has an independent technical version, currently `0.0.1`.

| Planning target      | Scope                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **1.0.0**            | Published baseline, preserved for interpretation and comparison                                                               |
| **1.0.1**            | Meaning-preserving hardening and linked updates; candidate awaiting publication                                               |
| **1.1**              | Work Redesign Kit and Pilot, with the guidance corrections it consumes                                                        |
| **1.2**              | Shared Competencies and Development, alongside Work, Skills, and Team Adaptation; separately testable and publishable outputs |
| **1.3, conditional** | Practical Diagnostic, only when users need help choosing a next action                                                        |
| **Unassigned**       | Broader validation, formal performance-rating applicability, function packs and company-level guidance                        |

Shared-competency design starts in the **Next** horizon even though its publication target is 1.2. Neither 1.2 output requires completion of the other. Freeze each release's scope from ready, validated work and explicitly move unfinished scope rather than making every artifact a mutual blocker.

### Compatibility policy

The compatibility contract covers recommendation meaning, decision rights, assessment interpretation, stable identifiers and artifact contracts.

- **Patch:** meaning-preserving repairs that leave existing decisions and references interpretable.
- **Minor:** additive guidance or optional artifacts that preserve existing interpretations and contracts.
- **Major:** changes that invalidate an existing requirement, authority, maturity interpretation or other contract.

Labels beyond the baseline are planning targets, not commitments about compatibility or dates. Resolve version impact before publishing each correction. If a breaking change requires 2.0, relabel subsequent targets before scope freeze; a major version does not imply company-wide expansion. Urgent harmful guidance needs a visible qualification or withdrawal while its versioned correction is prepared.

## Active Work Tracker

Existing work-item IDs are preserved. Firas owns delivery; actual trial participants and reviewers must be named in the relevant work note before a trial starts. **Ready** permits work to start once capacity and a specific review date are assigned; it does not assert that a trial is booked.

| ID       | Priority | Work item                                                             | Target            | Status    | Owner | Dependency / completion evidence                                                                                                              |
| -------- | -------- | --------------------------------------------------------------------- | ----------------- | --------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| RM-002   | P1       | Refresh roadmap around parallel work practice and shared competencies | Planning          | Done      | Firas | 2026-09-17; active roadmap, retained backlog/history, linked update; local content and targeted browser/accessibility checks passed           |
| FND-004  | P1       | Complete publication of hardening and Updates                         | 1.0.1             | In review | Firas | PR #11 and release report; include local Updates changes, verify current CI, then record tag/deployment/smoke tests                           |
| V11-002  | P0       | Resolve credibility-critical guidance and classify corrections        | Version by impact | Ready     | Firas | Prioritized dependencies below; evidence and acceptance checks in the correction register                                                     |
| V11-001  | P1       | Describe one Phoenix workflow as it works today                       | 1.1               | Ready     | Firas | Named workflow and participant; existing work records, owners, effort, learning needs and sharing limits                                      |
| V11-005  | P1       | Agree how to run the workflow pilot                                   | 1.1               | Blocked   | Firas | V11-001; record access, ownership, stopping conditions and comparison in the same work note                                                   |
| V11-003  | P1       | Test the small operating kit                                          | 1.1               | Blocked   | Firas | V11-001 and V11-005; non-author trial, before/after account and retain/revise/reject decision                                                 |
| V11-004  | P1       | Publish the approved pilot account                                    | 1.1               | Blocked   | Firas | V11-003 and applicable corrections; permission for published details and explicit limitations                                                 |
| COMP-001 | P1       | Research and reconcile the shared competency model                    | 1.2 design now    | Ready     | Firas | Research-to-competency mapping, existing universal-competency mapping, applicability and compatibility decisions                              |
| COMP-002 | P1       | Draft Shared Competencies guide and behavior examples                 | 1.2               | Blocked   | Firas | COMP-001; proposed definitions, observable behaviors, examples and evidence prompts for the planned `/competencies` page                      |
| COMP-003 | P1       | Trial competency language and evidence examples across roles          | 1.2               | Blocked   | Firas | COMP-002; non-author feedback from different roles, ambiguities and resulting revisions                                                       |
| COMP-004 | P1       | Publish the Shared Competencies guide                                 | 1.2               | Blocked   | Firas | COMP-003 and applicable corrections; canonical definitions, examples, evidence limits and cross-links; independent of the review-method trial |
| REV-001  | P1       | Draft a Shared Competency Development Review                          | 1.2               | Blocked   | Firas | COMP-002; reflection/feedback worksheet, behavior anchors, insufficient-evidence handling and development actions; can overlap COMP-003       |
| REV-002  | P1       | Trial and revise the development review                               | 1.2               | Blocked   | Firas | COMP-003, REV-001 and resolved expectations used by the review; compare independent judgments on shared examples and test usefulness          |
| REV-003  | P1       | Publish the provisional development-review method                     | 1.2               | Blocked   | Firas | REV-002; worked examples, applicability limits, editable artifacts and links to the canonical competency guide                                |
| V12-001  | P1       | Draft Work, Skills, and Team Adaptation guidance                      | 1.2               | Ready     | Firas | Existing work and research can seed the draft; incorporate pilot lessons when available                                                       |
| V12-002  | P1       | Try adaptation guidance in a real team review                         | 1.2               | Blocked   | Firas | V12-001 and applicable corrections; a non-author reaches a responsibility or learning decision with an owner and check-back point             |

Keep at most **three** P0/P1 items In progress. Close release work, then use capacity for corrections, the workflow baseline/pilot, and shared-competency design. The adaptation draft is ready but is selected within the same capacity limit. Record estimated effort and maintenance cost before committing an item to a release; move an item to In progress only with a specific review date.

Completed implementation records **RM-001, VER-001, FND-001, FND-002, FND-003 and FND-005** are retained with evidence in the [history](https://github.com/firaskafri/helm-framework.com/blob/main/docs/roadmap-history.md), `docs/quality-baseline.md`, `docs/releases/1.0.1.md`, and `docs/updates.md`. Their publication state is shown separately above.

## Guidance Corrections and Dependencies

The [Correction Register](/corrections) owns the replacement targets and acceptance checks. Source labels are in [Evidence and Sources](/evidence). Replacement guidance is still open.

1. **Expectations used to judge people:** prioritize maturity/autonomy and least-member claims (C-02/C-03), staffing assumptions (C-04), decision ownership (C-05), and KPI interpretation (C-09).
2. **The workflow pilot's operating boundaries:** resolve applicability, accountable ownership and enforceable safeguards used by that pilot (C-01/C-05/C-06).
3. **Credibility repairs:** qualify unsupported categorical claims, statistics, quotations and causal explanations (C-07/C-08) as independently reviewable changes.

Drafting and research can proceed while corrections are prepared. A published artifact or evaluative trial must resolve the expectations it actually uses. Document that dependency explicitly; the entire correction register or a replacement maturity instrument is not a prerequisite for every artifact. Urgent safety or credibility issues take priority within these groups.

## Work Redesign Kit and Pilot

**Question:** Can a team use HELM to improve one real workflow and explain the consequences for delivery and people?

- [ ] Prepare a work brief: scope, non-goals, acceptance criteria, constraints and stopping conditions.
- [ ] Add a check-and-owner list: agent work, human checks/ownership, permissions, sensitive data and approvals.
- [ ] Add a before/after note: handoffs, total effort including review/rework, quality, tool cost where available, learning needs and a next action.
- [ ] Use these sections in an existing ticket or document; make a reusable version editable and accessible without an account.
- [ ] Have someone other than the author use the kit on an agreed workflow; include failed attempts and unnecessary steps.
- [ ] Publish an approved account of what happened, what to retain/revise/reject, and its limitations. Released task capacity alone is not evidence of removable headcount.

**Publication gate:** A non-author can use the kit without hidden instructions; ownership and safe stopping are clear; one approved example covers delivery and people impacts, failures and unknowns. A justified decision to keep the current approach counts. The shared-competency trial is independent of this gate.

## Shared Competencies and Development

**Question:** Can people across roles understand shared working expectations, recognize supporting evidence, and use feedback to develop?

### Competency foundation

- [ ] Define the scope as shared skills and working behaviors across roles in product/engineering teams. Express culture through observable actions, rather than personality or similarity to a manager.
- [ ] Map relevant research and existing HELM principles to each proposed competency; state what is proposed, externally supported or observed.
- [ ] Reconcile the existing `src/data/universal-competencies.ts` vocabulary with the proposed model, preserving IDs or documenting compatibility/migration decisions.
- [ ] Examine the proposed areas of judgment, accountability, clarity/context sharing, collaboration, learning/adaptability, and outcome focus/simplicity. This is a research shortlist, not an approved replacement competency set.
- [ ] Draft definitions, observable behaviors, worked examples and evidence prompts for a standalone Shared Competencies guide.
- [ ] Trial comprehension with non-authors in different roles, including individual contributors and managers. Record confusing language and revise it. A Phoenix workflow result is useful input, not a required starting condition.

**Guide publication gate:** Definitions are reconciled with existing HELM vocabulary, cross-role feedback has informed revisions, and examples and evidence limits are explicit. The guide can publish after its own checks; the later development-review trial does not block it.

### First review method

The first output is a **Shared Competency Development Review**: what someone demonstrates, what evidence supports that view, and what they should practice next. It assesses shared behaviors; team operating maturity and role-specific delivery results are separate context.

- [ ] Define behaviorally anchored descriptions and an explicit insufficient-evidence option. Account for opportunity, constraints and reasonable support.
- [ ] Provide a lightweight self-reflection, peer-input and manager-discussion worksheet, plus a development-action template.
- [ ] Ask reviewers to assess the same examples independently, compare reasoning and disagreements, and revise ambiguous anchors.
- [ ] Trial whether a real conversation produces a useful development action with support, an owner and a check-back point. Include participant feedback on clarity and fairness.
- [ ] Publish worked examples, evidence limits and the contexts tested. Keep actual individual feedback private unless publication is explicitly agreed.

**Publication gate:** Cross-role comprehension and the review trial are documented; examples demonstrate how evidence supports an assessment; missing evidence is distinguishable from weak performance; disagreements have informed revisions; a non-author can reach an actionable development plan. Publish with a provisional evidence label. These trials do not establish suitability for formal performance ratings, compensation or promotion decisions; that applicability remains separately evidence-gated.

## Work, Skills, and Team Adaptation

**Question:** Does a team need to change its responsibilities, learning arrangements or handoffs as capabilities change?

- [ ] Draft from existing work and research; use workflow-pilot lessons when available.
- [ ] Cover what agents can do reliably, who does/checks/approves/owns work, exception handling, and what people need to learn or keep practicing.
- [ ] Include junior learning, retained judgment, recovery without agents, workload and time for development.
- [ ] Try the smallest reversible responsibility or team-boundary change that addresses an observed need; retaining the current arrangement is valid.
- [ ] Test the guide in a real team review with a non-author and publish one approved responsibility or learning example, with an owner and check-back point.

**Publication gate:** A non-author reaches a clear next action without undocumented help; the example states responsibilities, learning needs and observation limits. A local field-tested guide can ship with those limits. Its publication does not wait for a competency-review product or a specific Phoenix report if another suitable real-work example supplies the evidence.

## Later and Conditional Work

The [retained backlog](https://github.com/firaskafri/helm-framework.com/blob/main/docs/roadmap-backlog.md) preserves unfinished supporting artifacts, the Specification Chain, optional diagnostic/scoring work, broader validation, function packs, company scope, operations and regional readiness.

- **Diagnostic:** First establish that readers struggle to choose a next action and test advice manually. Automate only an already useful method; scoring is optional.
- **Formal performance-rating applicability:** Require its own evidence about interpretation, reviewer consistency, context and consequences. A workflow pilot or development conversation alone does not establish that applicability.
- **Expansion:** Additional contexts need demonstrated demand, work examples and maintenance capacity. More role pages, templates, accounts, certification or Studio conversion work stay conditional.

## Release and Maintenance Rules

Keep task state, validation evidence and publication state distinct. Task states remain Backlog, Ready, In progress, Blocked, In review, Done and Deferred. Done requires the named artifact/decision, appropriate checks and validation evidence, synchronized references, and a recorded completion link; it does not by itself mean deployed.

For each release, select applicable gates: compatibility decisions, relevant non-author trials, evidence labels, accessibility/content/security/build checks, coherent updates, and a correction/rollback path. Use `docs/deployment.md`, `docs/updates.md` and `CONTRIBUTING.md` for the existing operational procedures. The [backlog](https://github.com/firaskafri/helm-framework.com/blob/main/docs/roadmap-backlog.md) holds remaining maintenance requirements, not a mandatory process for every adopting team.

Watch four immediate risks: inherited rules distort reviews (V11-002); evidence creates false precision (COMP-003/REV-002); workload blocks trials (name participants and respect capacity); and automation erodes learning opportunities (V12-001/V12-002). The complete risk register remains in the backlog. Reassess rather than silently carry old statuses forward.

## Decisions and Update Log

### 2026-09-17 — Refresh priorities and actual dependencies

- Make shared competencies an explicit parallel workstream; COMP-001 can start alongside workflow observation and corrections.
- Separate workflow utility, cross-role competency comprehension, development-review usefulness, and broader performance-rating applicability. Each needs its own evidence.
- Keep Work, Skills, and Team Adaptation as a practical output; drafting can begin from existing work, with pilot findings incorporated as available.
- Target a provisional development-review method first. Version labels remain provisional until compatibility is decided; ready outputs can be published independently.
- Separate implemented, validated and published status. Reconcile existing hardening/discovery work rather than scheduling it again as expansion.
- Preserve earlier decisions, completed work and the full pre-refresh plan in [roadmap history](https://github.com/firaskafri/helm-framework.com/blob/main/docs/roadmap-history.md). Retain unfinished conditional work in [the backlog](https://github.com/firaskafri/helm-framework.com/blob/main/docs/roadmap-backlog.md). This decision supersedes the earlier pilot-first dependency and relegation of shared competencies to unspecified follow-on work.
- Record this refresh in the shared Updates/changelog source. Local update coverage, generated-content checks and targeted roadmap/updates/changelog browser checks passed; publication remains part of the release work.

### Maintaining this roadmap

Update the date and current focus, record real tracker states and evidence, assign review dates to active work, and add a dated decision when scope or dependencies change. Keep unfinished work in the active tracker or retained backlog, preserve stable IDs, and add a linked note to `src/data/updates.json` before regenerating the changelog. Archive superseded history rather than allowing it to override the current release map.
