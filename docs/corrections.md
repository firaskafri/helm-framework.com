# HELM Correction Register

Reviewed 2026-09-17. Owner: Firas Kafri. Status: all corrections below are **open**. This register records known issues; it does not implement new recommendations. See the [evidence register](/evidence) for source inspection and claim-level limitations.

## Compatibility policy

- **1.0.x:** technical repairs, provenance, explicit evidence labels and publishing improvements that preserve the recommendation itself.
- **Compatible minor release:** additive guidance and clarifications that preserve existing practice and references.
- **Breaking guidance change:** removal or reversal of a requirement, changed authority or a materially different assessment interpretation. Assign an appropriate major version and migration guidance before publication. A breaking release does not imply company-wide expansion.

HELM 1.1 is the planning workstream for these issues, not advance approval that every correction is minor-compatible. Final version impact requires review of the actual replacement text. A citation or an evidence label is not validation of a recommendation.

## C-01

**Applicability and workflow redesign**

- Canonical targets: Foundation principles 2 and 5; Practitioner anatomy/patterns; Leadership organizational model; role applicability.
- Issue: coding-agent delivery and runtime-agent product engineering are conflated; organizational redesign is generalized.
- Acceptance: explicit contexts, a usable one-workflow entry path, and conditional runtime infrastructure guidance.
- Evidence: enterprise commentary and provider guidance have differing contexts; see [organizational model](/evidence#org-model).
- Version impact: candidate minor for additive applicability guidance; removing mandatory reorganization language requires explicit compatibility review.

## C-02

**Autonomy versus operational maturity**

- Canonical target: `MATURITY_LEVELS` in `src/data/practitioners.ts` and its practitioner narrative.
- Issue: autonomy progression is used as a team maturity scale without validation.
- Acceptance: independent dimensions, evidence requirements, and a mapping from existing Levels 1–5.
- Version impact: potentially breaking assessment interpretation; migration required before replacement.

## C-03

**Exact least-adopted-member rule**

- Canonical targets: Foundation principle 6; Practitioner maturity reminder; Leadership maturity, engineering-manager authority and adoption equity; Engineering Manager role.
- Issue: a practitioner bottleneck example is promoted to an exact team-level formula.
- Acceptance: distinguish observed constraints from individual adoption; evaluate workflow bottlenecks using evidence.
- Version impact: replacement of an explicit rule is potentially breaking; preserve old references and explain interpretation changes.

## C-04

**Required responsibilities versus dedicated positions**

- Canonical targets: Leadership authorities/scaling path; QA/Evaluation Lead boundary; role guides.
- Issue: dedicated positions, headcounts and the QA split are prescribed more broadly than their supporting sources.
- Acceptance: responsibilities stay accountable; staffing depends on workload, context and risk; reconcile eight role guides with nine authorities.
- Version impact: relaxing explicit requirements requires compatibility review and migration notes.

## C-05

**Single owner versus paired owners**

- Canonical target: Leadership Decision Rights Matrix.
- Issue: several rows list paired owners under an explicit single-owner rule.
- Acceptance: identify one accountable decision owner, consulted specialists and required approvals for each row; test example decisions.
- Version impact: changes to authority may be breaking; record the owner/approval mapping.

## C-06

**Instructions, access controls and risk boundaries**

- Canonical targets: Foundation accountability/guardrails; Practitioner tool types, Guardrail Stack, task matrix and human-agent boundary; incident guidance in role pages.
- Issue: written scope is not an enforced sandbox; read-only access is not inherently low-risk; CI success does not establish complete verification.
- Acceptance: distinguish intent from enforcement, cover least privilege and sensitive data, and distinguish read-only incident support from production changes.
- Version impact: additive safeguards may be minor; changes to allowed autonomy or required controls require compatibility review.

## C-07

**Categorical claims about work and universal success**

- Canonical targets: Foundation introduction/principles; Practitioner anatomy and attribution priority; Roles introduction, universal competencies, role descriptions and hiring guidance.
- Issue: claims about all agents, past engineering work, most failures, obsolete skills and productivity multipliers exceed attached evidence.
- Acceptance: qualify prevalence and context, substantiate any numeric multiplier, and distinguish recommendation from description.
- Version impact: source qualifications can be patch-level; changing hiring or competency guidance requires a separately assigned version.

## C-08

**Statistics, quotations and causal explanations**

- Canonical target: Foundation principles 2, 4, 5 and 6.
- Issue: 14% readiness is unverified; the cancellation forecast needs an inspectable primary source; quoted commentary is presented as a team case; secondary company examples imply unsupported causality.
- Acceptance: exact source passages, dates, population, method, and forecast/correlation/causation distinctions; remove unsupported numbers if they cannot be verified.
- Version impact: evidence labeling is included in 1.0.1. Fact corrections need explicit review; any resulting change in recommendations follows the semantic compatibility policy.

## C-09

**KPI direction and interpretation**

- Canonical target: `KPI_CATEGORIES` and `KPI_SUCCESS_FORMULA` in `src/data/leadership.ts`.
- Issue: increasing test coverage or decreasing rejection rates is not inherently improvement. The formula and metric definitions are not validated performance instruments.
- Acceptance: define context, counter-metrics and evidence for interpretation; distinguish team delivery measures from individual assessment.
- Version impact: additive interpretation may be minor; changing metric definitions requires comparison/migration guidance.

## Change history

- 2026-09-17: Registered known semantic issues separately from 1.0.x repairs and linked evidence limitations. No correction is marked implemented.
