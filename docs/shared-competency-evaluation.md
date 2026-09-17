# Shared Competencies — Design and Evaluation Notes

**Owner:** Firas Kafri · **Updated:** 2026-09-17 · **Stage:** COMP-002 learning examples; evaluation method and cross-role trials still open.

## Five shared competencies

Judgment, Communication, Evaluation, Ownership and Learning. Their canonical short explanations and themed examples are in [`src/data/shared-competencies.ts`](../src/data/shared-competencies.ts), rendered at `/competencies`. This file owns the research/mapping record and the planned evaluation method, not a duplicate public guide.

**Why five:** choosing, communicating, checking, following through and improving are distinct behaviors. Good checking does not itself demonstrate follow-through. Simplicity and outcome focus belong within Judgment and Evaluation; collaboration appears in Communication, Ownership and Learning. Add a dimension only if trials reveal an important gap.

Evidence can come from existing briefs, reviews, decisions or retrospectives. Missing evidence is not weak performance: consider opportunity and support. This is a proposed development aid; no scoring scale or formal performance-rating suitability is established.

## Selection rationale

Principle numbers refer to [Foundation](../src/content/docs/foundation.md). These are HELM's design mappings, not a validated competency model.

| Competency    | HELM principles                                      | Relevant source input                                                                               |
| ------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Judgment      | 1: simplicity; 2: rethink work; 3: accountability    | A: Delegation; B: simplest approach and justified complexity.                                       |
| Communication | 5: responsibilities; 6: team capability              | A: Description; B: clear instructions. Human handoffs are HELM's extension.                         |
| Evaluation    | 3: accountability; 4: checks                         | A: Discernment; B: testing and human review; C: verification.                                       |
| Ownership     | 3: accountability; 4: boundaries; 5: decision rights | A: Diligence; C: task stewardship. HELM supplies escalation and follow-through expectations.        |
| Learning      | 2: improve work; 6: learn together                   | B: measure and iterate. Individual practice and sharing are HELM proposals grounded in principle 6. |

Sources inspected **2026-09-17**:

- **A — [AI Fluency: Framework & Foundations](https://www.anthropic.com/ai-fluency/overview)**, Anthropic with Joseph Feller and Rick Dakan. The URL redirects to the public course overview, whose curriculum lists Delegation, Description, Discernment and Diligence. Only the overview was inspected. This is a conceptual comparison, not evidence of workplace evaluation reliability.
- **B — [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)**, Anthropic, 2024. The inspected engineering article recommends simplicity, checks, feedback and iteration for agent systems. Its application to shared human competencies is HELM's interpretation.
- **C — [The Impact of Generative AI on Critical Thinking](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/)**, Lee et al., CHI 2025. The inspected publication page and abstract describe a survey of 319 knowledge workers and shifts toward verification, response integration and task stewardship. The full paper was not reviewed. Self-reports and associations do not establish causation or validate this set.

## Mapping from the existing shared list

The earlier list is preserved in [`src/data/universal-competencies.ts`](../src/data/universal-competencies.ts). Following the site-wide editorial alignment, both public shared-skills presentations use the five definitions in `src/data/shared-competencies.ts`. The table below retains the mapping for interpreting older guidance.

| Existing ID                       | Proposed evaluation treatment                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `context-engineering`             | Communication: retain context-setting and include human handoffs.                                                                                                               |
| `agent-output-evaluation`         | Evaluation: retain checking behavior without the unsupported “most critical skill” claim.                                                                                       |
| `architectural-boundary-judgment` | Judgment: express delegation decisions across roles, including when to involve expertise.                                                                                       |
| `cross-layer-fluency`             | Exclude full-stack proficiency as a shared requirement. Recognizing limits and involving others fit Judgment and Communication. Technical proficiency remains context-specific. |
| `outcome-orientation`             | Judgment selects the goal; Evaluation checks against it.                                                                                                                        |
| `continuous-learning-disposition` | Learning: assess practice, feedback and sharing rather than personality or frequency of tool adoption.                                                                          |

Ownership makes principle 3 explicit; it was not a separate item in the old list.

**Compatibility decision:** the optional learning page expands the five competencies already proposed in the roadmap. It does not rename or replace the existing role-list records, change decision authority, or introduce assessment scores. New lesson anchors have their own IDs. Replacing the published role list would change requirements and needs a major-version decision and migration under C-07. Preserve old IDs for interpretation; this mapping does not convert earlier assessments.

The later editorial pass consolidates the public shared list around the agreed five competencies. It retains the earlier data and identifiers for reference and leaves role-specific skill records separate. See `editorial-review-2026-09-17.md` for the publication and compatibility implications; no earlier assessments are converted.

**Next:** REV-001 develops the structured evaluation prompts and evidence choices. COMP-003/REV-002 test whether people can distinguish the behaviors, identify evidence and choose a useful next step. Editorial approval of illustrative examples is not a substitute for these trials.

## Presentation decision — 2026-09-17

### Role-by-competency practice guides

The owner asked for guidance for someone who wants to improve a particular competency in their role. COMP-005 extends the same page with a competency selector, two practical steps and one small exercise per role/competency. It reuses the twenty approved examples and adds a shared self-check for each competency. These are suggested practice activities, not validated training outcomes or a scoring rubric.

The content follows the same principle/source mapping above. Judgment guides make the outcome, alternatives and delegation boundary explicit; Communication guides improve task briefs and handoffs; Evaluation guides use independent evidence; Ownership guides follow commitments through; Learning guides test a change and share what was learned. Role-specific application does not change the shared competency definitions.

Compound links such as `/competencies#engineering-judgment` open the matching role and skill. Existing theory and role anchors remain supported. The page shows one guide at a time when enhanced and all guides for print or no-JavaScript reading.

#### Practice-guide review — 2026-09-17

- COMP-005 is complete locally. Reviewed the twenty guides for concrete actions, role relevance and consistency with the shared definitions. Each contains two practical steps, an illustrative example, a next-task exercise and the competency's shared self-check. The content offers suggested practice without claiming training effectiveness or assessment validity.
- Reviewed desktop and mobile screenshots, the Engineering/Judgment and Account Management/Evaluation journeys, preview wording and direct guide links. The page fits 1280/768/390/320 widths. No-JavaScript reading exposes all twenty guides, forty steps and twenty exercises; theory links and role jump links remain usable.
- Nine targeted browser checks passed across Chromium, Firefox and WebKit, covering every skill/role combination, role-preserving practice links, compound and legacy fragments, Back/Forward/reload behavior, malformed fragments, print and no-JavaScript access. Chromium accessibility checks cover all twenty guide states.
- Full `npm run check` passed: 19 unit tests, 52 browser checks, formatting, lint, types, update consistency, production content/links, the public-content guard and security. The 44 browser skips are the configured duplicate non-Chromium audits. The audience purpose and search/social description now describe choosing a skill and role; candidate Updates coverage is synchronized. Production output was restored after browser tests.

The owner reviewed scenarios for content, engineering, sales and account management in the conversation and approved simple theory followed by interactive role-based examples. One learning page presents five definitions and one scenario per theme, with an example for every competency. The data contract keeps the same competency set across themes. No separate role standards or function packs are introduced.

All situations are explicitly illustrative, including the unsupported 50% cost-saving claim caught in the content example. Business-team examples are teaching scenarios, not evidence of tested applicability in those functions. The page offers a brief discussion prompt; the formal development-review method remains open.

### Presentation review — 2026-09-17

- COMP-002 is complete as locally implemented and reviewed learning material. The owner-approved scenarios cover the same five competencies in all four themes. Canonical text is in `src/data/shared-competencies.ts`; the structured evaluation and participant trials remain open.
- Reviewed the rendered explanations and all scenario text, desktop and mobile screenshots, navigation, role-page discovery, roadmap and Updates links, social/search descriptions, print and no-JavaScript availability. At 1280/768/390/320 widths the page fits; without JavaScript all four themes and twenty examples remain readable. Examples and the pending evaluation method are labeled plainly.
- `npm run check` passed: formatting, lint, types, update synchronization, 19 unit tests, production build/content checks, public-content guardrail, security and 49 browser checks. The 44 skips are configured duplicate route/state audits outside Chromium. Keyboard selection, deep links, every role state, print and no-JavaScript behavior passed across Chromium, Firefox and WebKit. This successful run closes the earlier local full-browser verification follow-up recorded below.
- `npm run check:updates -- --base origin/main` passed. The candidate announcement remains excluded from published RSS; the sitemap includes `/competencies`. Production output was restored after browser fixtures. No deployment or cross-role field validation is claimed.

## Selection review — 2026-09-17

COMP-001 is complete as a proposed selection, with all six existing IDs mapped and source/applicability limits recorded. The evaluation itself is not field-tested or ready to publish.

- The public roadmap summarizes the plan for people following HELM; the draft and review details stay in this maintainer file. The existing candidate Updates note links to the plan.
- Inspected `/roadmap`, `/updates`, `/changelog` and the homepage at desktop and mobile without JavaScript, including shared navigation, descriptions and preview wording. Roadmap screenshots were reviewed. The candidate is absent from published RSS.
- Formatting, lint, types, 19 unit tests, update coverage, production content/links, the public-content guard and security checks passed. Isolated Chromium accessibility/responsive checks passed for roadmap, updates and changelog at 1280/390/320 widths.
- The full browser run did not pass cleanly during concurrent publishing work: 37 passed, 42 skipped and 5 failed, including missing shared artifacts/fixtures and a WebKit table-of-contents check. A later attempt confirmed the usual test-server port was occupied; the three affected-page checks above used a separate port and output directory. Full-suite verification remains a release follow-up, not evidence about competency validity.
