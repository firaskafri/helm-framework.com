# HELM Product Roadmap

- **Updated:** 2026-09-17
- **Owner:** Firas Kafri
- **Focus:** Keep HELM simple; develop a lightweight shared competency evaluation.

## Product Direction

HELM is a concise guiding document for people and teams working with AI agents. It helps them decide how to work, what humans own, and what they need to learn together. The initial context is product and engineering teams.

Additions are limited to **shared competency evaluation for AI-assisted work** and, optionally, **a short playbook tried in one pilot**. HELM Studio remains a separate facilitated service.

## Simplicity First

Every enhancement must make HELM easier to understand or use:

- Simplify, consolidate or remove before adding material.
- Keep guidance brief and link to existing explanations.
- Use the smallest useful set of behaviors, prompts and examples.
- Keep an addition only if readers can evaluate or apply the guidance more easily.

## Now, Next, and Later

| Horizon                         | Outcome                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------- |
| **Now — simplify and maintain** | Clarify existing guidance, fix contradictions and reconcile the release record.           |
| **Next — shared evaluation**    | One short, evidence-based evaluation of shared competencies for working with AI agents.   |
| **Optional — apply the guide**  | A short playbook, tested through one workflow pilot if practical instructions are needed. |

## Shared Competencies and Development

Build one **Shared Competency Evaluation** for reflection, feedback and development across roles. Include the definitions it needs in the same resource.

- Start from HELM's existing shared competencies and relevant evidence; reconcile terminology and preserve IDs or explain changes.
- Use five proposed competencies: **Judgment, Communication, Evaluation, Ownership and Learning**. The [shared-skills page](/competencies) explains them through illustrative role-based examples; the [design note](docs/shared-competency-evaluation.md) records source rationale, vocabulary mapping and the planned evaluation method.
- For each competency, ask: **What does good look like? What example supports the evaluation? What should I practice next?** Allow insufficient evidence and account for the person's opportunities to demonstrate the behavior.
- Try the language with people in different roles. Compare independent evaluations of the same examples, simplify confusing prompts, and check that the discussion produces a useful next step.

**Ready to publish when:** a non-author can use the short resource to explain an evaluation and choose a development action; cross-role feedback has informed revisions. Include a worked example and the limits of what was tested. Keep individual feedback private. The first version is provisional and development-focused; role-specific evaluation and formal performance-rating applicability are outside this scope.

This work can start independently of a workflow pilot.

## Work Redesign Kit and Pilot

**Optional; a decision to proceed is still open.** If readers need help applying HELM, draft a short playbook around the existing [Plan-Execute-Verify-Ship-Learn loop](/practitioners#the-plan-execute-verify-ship-learn-cycle):

1. Choose one workflow and its intended outcome; identify steps to simplify.
2. Agree agent work, human ownership, checks, access boundaries and when to stop.
3. Try it and record what to keep, change or stop, including effort, quality and learning.

Use an existing ticket or document. One non-author pilot tests whether the playbook is useful and understandable; Phoenix is a candidate. Keep any approved account short, include failures and limitations, and simplify or drop the playbook if it adds unnecessary work. Keeping the current workflow is a valid result.

## Active Work Tracker

Firas owns delivery. Keep one enhancement in progress at a time alongside necessary maintenance. Set a review date when starting work and name participants before a trial.

**COMP-005 — Done:** Twenty compact role-by-competency practice guides implemented at `/competencies`, reusing its definitions and examples. Owner: Firas. Completed: 2026-09-17. Practical steps, exercises, self-checks and skill/role navigation are verified; see the [guide review](docs/shared-competency-evaluation.md#practice-guide-review--2026-09-17).

| ID       | Work and completion evidence                                                                                                                                                                            | Status    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FND-004  | Reconcile 1.0.1's published metadata with tag, deployment and smoke-test evidence in the release report.                                                                                                | In review |
| V11-002  | Simplify and correct existing guidance through the correction register; record version impact. Highest maintenance priority.                                                                            | Ready     |
| COMP-001 | Selected five proposed competencies; source, principle and compatibility mapping in the [working draft](docs/shared-competency-evaluation.md). Completed 2026-09-17.                                    | Done      |
| COMP-002 | Simple definitions and twenty themed examples implemented at /competencies; [editorial and browser review](docs/shared-competency-evaluation.md#presentation-review--2026-09-17). Completed 2026-09-17. | Done      |
| REV-001  | Draft the evaluation prompts, evidence choices and next-step prompt in the same resource.                                                                                                               | Ready     |
| COMP-003 | Try the language across roles and record revisions; name participants before starting.                                                                                                                  | Ready     |
| REV-002  | After REV-001 and COMP-003, trial evaluation consistency and usefulness; resolve guidance it relies on.                                                                                                 | Blocked   |
| REV-003  | After REV-002, publish the short evaluation with its definitions, example and evidence limits.                                                                                                          | Blocked   |

These are steps toward one resource. COMP-003 and REV-002 may share a session when their prerequisites are met. Deferred IDs and completed work remain in the [backlog](https://github.com/firaskafri/helm-framework.com/blob/main/docs/roadmap-backlog.md) and [history](https://github.com/firaskafri/helm-framework.com/blob/main/docs/roadmap-history.md).

## Guidance Corrections and Dependencies

The [Correction Register](docs/corrections.md) tracks open issues. Prioritize expectations used in evaluation: maturity/adoption, staffing, ownership and KPI interpretation. Correct unsupported claims and clarify controls in the existing text. Resolve the guidance an evaluation or pilot actually uses before its trial or publication; drafting can proceed in parallel.

## Work, Skills, and Team Adaptation

The separate adaptation guide is deferred. Relevant ownership and learning prompts belong in the shared evaluation or optional playbook.

## Later and Conditional Work

Additional guides, role-specific evaluation, diagnostic software, function packs and company-wide expansion are outside the current scope. Earlier ideas are [parked](https://github.com/firaskafri/helm-framework.com/blob/main/docs/roadmap-backlog.md); reactivating them requires an explicit scope decision.

## Version Baseline and Release Map

HELM 1.0.0 remains the baseline. Site metadata marks 1.0.1 published; FND-004 tracks the incomplete verification record. Earlier 1.1/1.2/1.3 scope assignments are superseded. Assign the next version from ready work and its compatibility impact. The application version remains independent.

### Compatibility policy

Patch releases preserve meaning; minor releases add compatible guidance; major releases change existing requirements, authority or assessment interpretation. Preserve stable references and explain migration where needed. Qualify urgent misleading guidance while its correction is prepared.

## Release and Maintenance Rules

Record completion evidence separately from publication. Use the existing checks and procedures in `CONTRIBUTING.md`, `docs/updates.md` and `docs/deployment.md`. Keep the tracker current, record scope decisions and add linked Updates notes.

## Decisions and Update Log

**2026-09-17 — Help readers develop a competency:** Add a skill-first entry point and practical role-specific guidance to the existing Shared skills page. The twenty guides reuse the same five definitions and illustrative examples; they teach practice rather than assign role-specific scores. COMP-005 owns the presentation and content work; evaluation-method trials remain separate.

**2026-09-17 — Simple theory, role-based examples:** Owner reviewed the content, engineering, sales and account-management scenarios and requested an interactive presentation on HELM. `/competencies` is the single reader-facing home for the explanations, illustrative examples and eventual evaluation. The learning material can be shared after editorial/interface review; COMP-003 and REV-002 still own cross-role and evaluation-method trials. Broader function packs and role-specific scoring remain outside scope.

**2026-09-17 — Shared competency selection:** Start with Judgment, Communication, Evaluation, Ownership and Learning. Keep simplicity, outcomes and collaboration within these five behaviors. The [selection and review record](docs/shared-competency-evaluation.md) preserves source limits and the mapping from existing competencies; cross-role trials and the evaluation method remain open.

**2026-09-17 — Simplicity-first scope:** Owner direction narrows additions to shared evaluation and a possible short playbook/pilot. Competency definitions support the evaluation; separate competency and adaptation guides are deferred. This supersedes the earlier parallel-output roadmap. Prior decisions and completion records remain in [history](https://github.com/firaskafri/helm-framework.com/blob/main/docs/roadmap-history.md).
