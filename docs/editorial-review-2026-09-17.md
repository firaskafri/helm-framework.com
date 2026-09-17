# HELM editorial and coherence review — 2026-09-17

Maintainer record. The user requested a direct review and revision of all public copy against `helm-voice.md`.

## Scope

- Home, Foundation, Practitioner Guide and Leadership Guide.
- Roles index, all eight role guides and the role skills explorer, including frontmatter descriptions, responsibilities, skill explanations, questions, examples and related guidance.
- Shared skills, all twenty practice guides and their selector labels.
- Roadmap, Further reading, Updates, Release history, Licensing and the 404 page.
- Shared navigation, cards, tables, interactive panels, reading notes, descriptions, structured data and feeds.

The review is editorial work. Existing build, content, accessibility and browser checks are used for verification; no voice detector or phrase-scanning software was added.

## Editorial decisions

1. Keep the six principles and five shared competencies consistent. Both the roles index and `/competencies` now use `src/data/shared-competencies.ts`. The old universal-competency module is retained only for interpreting earlier material.
2. Describe tasks, decisions, review and learning directly. Remove role-replacement predictions, claims about a person's value, unsupported productivity comparisons, dramatic fragments and repetitive framing.
3. Make role guides useful for discussing work. Headings now describe responsibilities, skills, experience and questions. Earlier fragment IDs remain available. The role skills explorer describes how a guide groups its skills; its counts do not imply a person's skill gap.
4. Carry limitations into the advice itself. Model descriptions, dates and team sizes are examples to adapt. People remain responsible for high-consequence decisions. Instructions alone do not enforce access, and passing automated checks does not establish readiness.
5. Keep a distinction between teams using coding agents and products that run agents. Hosting and inference responsibilities apply when the product needs them.
6. Keep the current September update consolidated and preserve the 1.0.0 historical dates. Source titles, citations, licenses and useful uncertainty remain intact.

## Wording examples

| Earlier wording                                  | Revised approach                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Engineers' value is no longer in production      | Explain the planning, coding, review and maintenance the role covers.                 |
| Every role undergoes the same transformation     | Ask who checks the work, where expertise is needed and whether the result helped.     |
| Entirely new competencies and genuine skill gaps | Describe additional skills in the guide without assuming what a person already knows. |
| The Success Formula                              | Read delivery measures together and check user outcomes and total effort.             |
| The plan is the contract that bounds execution   | Agree the task, then match tool access and execution limits to it.                    |

## Interpretation and compatibility

This pass includes factual qualifications and interpretation changes as well as tone edits. The changes are linked to C-01 through C-09 in `corrections.md` and must not be described as a wholly meaning-preserving patch:

- The unsupported least-member formula is withdrawn from current advice. Use observed workflow constraints; do not recompute past team ratings.
- Dedicated roles and team sizes are presented as examples. Responsibilities still need named people with time and authority.
- The decision table retains the same role participants but asks the team to name one accountable decision owner and required approvals. It does not grant an agent decision authority.
- Task-matrix high-risk examples now name human decisions; any supporting agent work needs a separate bounded task. Risk and access must be considered even for read-only work.
- KPI definitions and IDs remain comparable. Three direction labels now require interpretation rather than prescribing more coverage, more rule edits or fewer review rejections. The four-metric display is a discussion prompt, not a validated success formula.
- The five shared learning definitions replace the competing public six-item list. The old IDs and the mapping in `shared-competency-evaluation.md` preserve the earlier vocabulary; no individual assessments are converted.

Assign the appropriate framework version and migration note before publication. No deployment, validation of a scoring instrument or field trial is claimed by this editorial review.

## Verification

- Visited all 21 public HTML pages in a local Chromium preview at 1280×900, then at 390×900 with JavaScript disabled. Reviewed the rendered headings, descriptions and reading flow, including the full role and shared-skills content exposed without JavaScript. The completed review used the restored production build.
- Reviewed representative screenshots of the roles index, Software Engineer guide, Leadership Guide, QA guide, role skills explorer and a shared-skill practice guide. The revised headings, labels and long role names fit the layouts; there was no horizontal overflow.
- Inspected the published Updates feed. It retains one September 17 release entry and the September 5 baseline, with their original dates. Page descriptions and the generated changelog reflect the revised copy.
- `npm run check` passed: formatting, lint, types, Updates synchronization, 19 unit tests, production content/links, the existing public-content guard, security and 52 browser checks. The 44 browser skips are configured duplicate non-Chromium audits. The browser runner restored production output after its fixture build.
- Existing browser checks covered keyboard selection, direct links, print, no-JavaScript views, every shared-skill/role combination and interactive states. Content checks confirmed unique IDs and valid links, including the retained role-section anchors.
- `npm run check:updates -- --base origin/main` and `git diff --check` passed. The review changed copy and its canonical presentation, not the application's checks or test logic.
