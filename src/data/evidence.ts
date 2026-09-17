import { assertUniqueIds } from '../lib/contentIntegrity';

export const EVIDENCE_REVIEW_DATE = '2026-09-17';
export const EVIDENCE_LABELS = {
  proposed: {
    title: 'Proposed recommendation',
    description:
      'HELM guidance requiring application and validation in context. A related citation does not validate the full recommendation.',
  },
  'author-observation': {
    title: 'Author observation',
    description:
      'A documented observation by the HELM author, with context, date and limitations.',
  },
  'participant-report': {
    title: 'Participant report',
    description:
      'A participant’s attributed account, with permission and context; not independently measured.',
  },
  'measured-result': {
    title: 'Measured result',
    description:
      'A result with a baseline, method, observation period, task mix and limitations.',
  },
  'externally-supported': {
    title: 'Externally supported claim',
    description:
      'The linked source was inspected and supports the specific statement. The source’s method and applicability still limit the claim.',
  },
  unverified: {
    title: 'Unverified claim',
    description:
      'The wording, attribution, number or inference has not been substantiated. Do not treat it as established evidence.',
  },
  illustrative: {
    title: 'Illustrative example',
    description:
      'A teaching scenario or proposed target, not an observed implementation or measured result.',
  },
} as const;

export type EvidenceLabel = keyof typeof EVIDENCE_LABELS;
export interface EvidenceClaim {
  id: string;
  title: string;
  label: EvidenceLabel;
  kind:
    | 'recommendation'
    | 'survey'
    | 'forecast'
    | 'commentary'
    | 'example'
    | 'definition';
  targets: string[];
  sources: string[];
  finding: string;
  correction?: string;
}

const anthropic =
  'https://www.anthropic.com/engineering/building-effective-agents';
const openai =
  'https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents';
const deloitte =
  'https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html';
const mckinsey =
  'https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage';
const gartner =
  'https://www.gartner.com/en/articles/top-technology-trends-2026';
const chrono =
  'https://www.chronoinnovation.com/resources/ai-agents-team-structure';
const eledath =
  'https://www.bassimeledath.com/blog/levels-of-agentic-engineering';

export interface SourceReview {
  attemptedAt: string;
  accessedAt: string | null;
  status: 'reviewed' | 'access-blocked';
  applicability: string;
  finding: string;
  history: { date: string; action: string }[];
}

const reviewed = (applicability: string, finding: string): SourceReview => ({
  attemptedAt: EVIDENCE_REVIEW_DATE,
  accessedAt: EVIDENCE_REVIEW_DATE,
  status: 'reviewed',
  applicability,
  finding,
  history: [
    {
      date: EVIDENCE_REVIEW_DATE,
      action: 'Initial claim-level review; existing URL retained.',
    },
  ],
});

/** Retrieval failures and absent reviews are explicit; registration never implies verification. */
export const SOURCE_REVIEWS: Record<string, SourceReview> = {
  [anthropic]: reviewed(
    'Provider engineering experience with LLM workflows and agent applications.',
    'Supports simple composable patterns and the workflow/agent distinction. It does not validate HELM’s complete eight-pattern ordering or universal success language.',
  ),
  [deloitte]: reviewed(
    'Survey of 3,235 leaders at AI-leading organizations in 24 countries, August–September 2025.',
    'The 2026 landing page reports one in five with mature autonomous-agent governance. The 14% deployment-readiness statement was not located on that page. Findings are self-reported, not a causal test of HELM.',
  ),
  [mckinsey]: reviewed(
    'June 13, 2025 enterprise report citing a March 2025 AI survey.',
    'The report states nearly eight in ten use gen AI and a similar proportion report no significant bottom-line impact. Workflow redesign is its interpretation/recommendation, not a controlled causal result.',
  ),
  [chrono]: reviewed(
    'January 15, 2026 consultancy commentary about building AI products.',
    'The week-three/week-five/week-six wording appears in the article. No named team, study method or measured case is supplied. Staffing recommendations address AI-product construction and cannot establish universal coding-agent staffing requirements.',
  ),
  [eledath]: reviewed(
    'March 10, 2026 practitioner article, updated March 11, about AI-assisted coding.',
    'Contains eight levels, a multiplayer-effect example, Cowork in 10 days and a secondary account of Block’s 100+ skills. Does not establish the exact least-member formula or a causal explanation for company outcomes.',
  ),
  [gartner]: {
    attemptedAt: EVIDENCE_REVIEW_DATE,
    accessedAt: null,
    status: 'access-blocked',
    applicability:
      'Technology-trends article; suitability for the specific cancellation forecast remains unverified.',
    finding:
      'HTTP 403 during review. The forecast, attribution year and causal wording need a directly inspectable primary source.',
    history: [
      {
        date: EVIDENCE_REVIEW_DATE,
        action:
          'Retrieval blocked; retained original citation and recorded correction C-08. No silent source replacement.',
      },
    ],
  },
};

export const EVIDENCE_CLAIMS: EvidenceClaim[] = [
  {
    id: 'fnd-simplicity',
    title: 'Simplicity First',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/foundation#principle-1-simplicity-first'],
    sources: [anthropic],
    finding:
      'Anthropic supports choosing simpler designs based on observed engineering experience. HELM’s progression is guidance; the assertion that these principles underpin every successful implementation is unverified.',
    correction: 'C-07',
  },
  {
    id: 'fnd-redesign',
    title: 'Redesign, Don’t Automate',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/foundation#principle-2-redesign-dont-automate'],
    sources: [mckinsey, deloitte],
    finding:
      'Workflow redesign is supported as a recommendation in enterprise commentary. It is not evidence that every workflow requires redesign or that most failures have a single cause.',
    correction: 'C-01',
  },
  {
    id: 'stat-readiness',
    title: '14% agentic deployment readiness',
    label: 'unverified',
    kind: 'survey',
    targets: ['/foundation#principle-2-redesign-dont-automate'],
    sources: [deloitte],
    finding:
      'The exact 14% figure, population and explanation were not located on the inspected landing page. Full report/primary-claim verification is outstanding; treat this baseline statistic as unverified.',
    correction: 'C-08',
  },
  {
    id: 'stat-adoption',
    title: 'Nearly 80% adoption and limited bottom-line impact',
    label: 'externally-supported',
    kind: 'survey',
    targets: ['/foundation#principle-2-redesign-dont-automate'],
    sources: [mckinsey],
    finding:
      'The June 2025 report states both proportions and cites its March 2025 survey. These are enterprise self-reports. The following “because” explanation is the report’s interpretation, not demonstrated causation.',
  },
  {
    id: 'fnd-accountability',
    title: 'Agents Execute, Humans Are Accountable',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/foundation#principle-3-agents-execute-humans-are-accountable'],
    sources: [anthropic, openai],
    finding:
      'HELM’s normative allocation of accountability and its human/agent ownership table. Related provider guidance is not validation of every categorical boundary.',
    correction: 'C-06',
  },
  {
    id: 'fnd-guardrails',
    title: 'Guardrails Are Non-Negotiable',
    label: 'proposed',
    kind: 'recommendation',
    targets: [
      '/foundation#principle-4-guardrails-are-non-negotiable',
      '/practitioners#the-guardrail-stack',
    ],
    sources: [anthropic, openai],
    finding:
      'The five-layer stack is HELM’s synthesis. Its completeness and mandatory scaling threshold have not been validated by a HELM pilot.',
    correction: 'C-06',
  },
  {
    id: 'stat-cancellation',
    title: 'Over 40% canceled or failed by 2027',
    label: 'unverified',
    kind: 'forecast',
    targets: ['/foundation#principle-4-guardrails-are-non-negotiable'],
    sources: [gartner],
    finding:
      'A forecast, not an observed failure rate. The cited trends URL returned 403; the exact forecast, publication year and attribution to insufficient risk controls remain unverified.',
    correction: 'C-08',
  },
  {
    id: 'fnd-structure',
    title: 'Structure Over Tooling',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/foundation#principle-5-structure-over-tooling'],
    sources: [chrono, deloitte],
    finding:
      'Clear ownership is a recommendation. The baseline claim that most failures are structural, and that the anecdote is the default trajectory, has no prevalence evidence.',
    correction: 'C-07',
  },
  {
    id: 'quote-chrono',
    title: 'Week-three/week-five/week-six quotation',
    label: 'externally-supported',
    kind: 'commentary',
    targets: ['/foundation#principle-5-structure-over-tooling'],
    sources: [chrono],
    finding:
      'The quotation is present in the linked article. Its presentation as “one team’s experience” is not substantiated by case details; it is consultancy commentary rather than a documented participant report.',
    correction: 'C-08',
  },
  {
    id: 'stat-governance',
    title: 'One in five with mature agent governance',
    label: 'externally-supported',
    kind: 'survey',
    targets: ['/foundation#principle-5-structure-over-tooling'],
    sources: [deloitte],
    finding:
      'The 2026 landing page states this finding. Sample: 3,235 leaders in 24 countries at AI-leading organizations, surveyed August–September 2025. This is self-reported governance maturity, not a universal population estimate.',
  },
  {
    id: 'fnd-team',
    title: 'Team-Wide Adoption Over Individual Mastery',
    label: 'proposed',
    kind: 'recommendation',
    targets: [
      '/foundation#principle-6-team-wide-adoption-over-individual-mastery',
      '/practitioners#maturity-model',
      '/leadership#maturity-model',
    ],
    sources: [eledath],
    finding:
      'The multiplayer effect is practitioner commentary. The exact claim that team maturity equals its least-adopted critical-path member is an unvalidated HELM extrapolation.',
    correction: 'C-03',
  },
  {
    id: 'story-shipping',
    title: 'Cowork in 10 days and Block’s 100+ skills',
    label: 'unverified',
    kind: 'commentary',
    targets: [
      '/foundation#principle-6-team-wide-adoption-over-individual-mastery',
    ],
    sources: [eledath],
    finding:
      'Both numbers appear as secondary accounts in Eledath’s article. Primary company evidence and the causal claim that team-wide adoption explains the outcomes have not been verified.',
    correction: 'C-08',
  },
  {
    id: 'agent-anatomy',
    title: 'Five-component agent anatomy',
    label: 'proposed',
    kind: 'definition',
    targets: ['/practitioners#agent-anatomy'],
    sources: [anthropic, openai],
    finding:
      'A HELM teaching taxonomy. “Every agent” and “five core components” are not established universal requirements. Model names are examples, not evaluated recommendations.',
    correction: 'C-07',
  },
  {
    id: 'workflows',
    title: 'Workflows versus agents',
    label: 'externally-supported',
    kind: 'definition',
    targets: ['/practitioners#workflows-vs-agents'],
    sources: [anthropic],
    finding:
      'Anthropic explicitly distinguishes predefined code paths from model-directed processes. The claim it was “first articulated” there and every cost/predictability comparison are not established by this source review.',
    correction: 'C-07',
  },
  {
    id: 'tool-risk',
    title: 'Tool types and risk labels',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/practitioners#tool-types'],
    sources: [openai],
    finding:
      'Classification and risk assignments are proposed guidance. Read-only access can expose sensitive information; the blanket low-risk wording is pending correction.',
    correction: 'C-06',
  },
  {
    id: 'patterns',
    title: 'Eight composition patterns and selection guide',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/practitioners#composition-patterns'],
    sources: [anthropic, openai],
    finding:
      'The providers describe related patterns. HELM’s eight-pattern set and simplest-to-most-complex ordering are a synthesis, not a validated universal ordering.',
  },
  {
    id: 'operating-loop',
    title: 'Plan-Execute-Verify-Ship-Learn',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/practitioners#the-operating-loop'],
    sources: [eledath],
    finding:
      'A proposed repeatable operating practice. No HELM implementation outcome is claimed; the 1.1 pilot will test practical utility and total effort.',
  },
  {
    id: 'classification',
    title: 'Task matrix and human-agent boundary',
    label: 'proposed',
    kind: 'recommendation',
    targets: [
      '/practitioners#task-classification-matrix',
      '/practitioners#the-human-agent-boundary',
    ],
    sources: [],
    finding:
      'The nine-cell matrix, examples and CI-based boundary are HELM guidance. The matrix is not a validated risk classifier; permission, consequence and verification gaps are tracked for correction.',
    correction: 'C-06',
  },
  {
    id: 'maturity',
    title: 'Five-level maturity model',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/practitioners#maturity-model', '/leadership#maturity-model'],
    sources: [eledath],
    finding:
      'HELM adapts eight individual-practice levels into five team levels. The resulting dimensions, thresholds and failure modes have not been validated as a maturity instrument.',
    correction: 'C-02',
  },
  {
    id: 'org-model',
    title: 'Vertical pods and six organizational shifts',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/leadership#organizational-model'],
    sources: [chrono, mckinsey],
    finding:
      'Proposed organizational guidance. Existing roles, cross-functional work and workflow constraints require context; an agent does not by itself establish a need to reorganize.',
    correction: 'C-01',
  },
  {
    id: 'staffing',
    title: 'Nine authorities, dedicated positions and scaling counts',
    label: 'proposed',
    kind: 'recommendation',
    targets: [
      '/leadership#roles-with-explicit-authority',
      '/leadership#scaling-path',
    ],
    sources: [chrono],
    finding:
      'Role authorities and the 7–8/12–16 staffing examples are HELM proposals. The source focuses on runtime AI products; the staffing counts are not empirically established minima.',
    correction: 'C-04',
  },
  {
    id: 'decision-rights',
    title: 'Decision Rights Matrix',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/leadership#decision-rights-matrix'],
    sources: [chrono],
    finding:
      'The matrix is a proposed governance tool. Paired owners conflict with the surrounding single-owner rule; the accountable-owner/approval distinction requires a versioned correction.',
    correction: 'C-05',
  },
  {
    id: 'adoption',
    title: '180-day adoption roadmap',
    label: 'illustrative',
    kind: 'example',
    targets: ['/leadership#adoption-roadmap'],
    sources: [],
    finding:
      'The days, task counts, review percentages and exit criteria are proposed planning targets. They are not a measured time-to-adoption benchmark or validated safety thresholds.',
  },
  {
    id: 'kpis',
    title: 'KPI dashboard and success formula',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/leadership#kpi-dashboard'],
    sources: [],
    finding:
      'HELM’s metric definitions, directions and formula are recommendations, not validated causal indicators. Review rejection and coverage require contextual interpretation; no increase/decrease target establishes individual performance.',
    correction: 'C-09',
  },
  {
    id: 'failures',
    title: 'Six failure modes and mitigations',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/leadership#six-failure-modes'],
    sources: [],
    finding:
      'Diagnostic hypotheses and example symptoms, including 3x delivery speed. No prevalence, causal certainty or measured effectiveness is established.',
  },
  {
    id: 'role-guidance',
    title: 'Role transformations, competencies and hiring guidance',
    label: 'proposed',
    kind: 'recommendation',
    targets: ['/roles'],
    sources: [],
    finding:
      'The eight role guides and universal competency list are HELM proposals. Statements about traditional work, necessary role changes and abandoned hiring criteria require contextual validation. Day-in-the-life and interview examples are illustrative.',
    correction: 'C-07',
  },
  {
    id: 'role-speed',
    title: '3–10x output and 10x execution claims',
    label: 'unverified',
    kind: 'commentary',
    targets: ['/roles/engineering-manager', '/roles/product-manager'],
    sources: [],
    finding:
      'No source, measurement method or comparison is attached to these role-description multipliers. They must not be interpreted as promised or observed productivity gains.',
    correction: 'C-07',
  },
  {
    id: 'competency-percentages',
    title: 'Competency explorer percentages',
    label: 'illustrative',
    kind: 'example',
    targets: ['/roles/competency-map'],
    sources: [],
    finding:
      'Percentages count editorially classified competencies in each role guide. They do not measure a person’s skill gap, readiness, proficiency or proportion of work.',
  },
];

assertUniqueIds('Evidence claims', EVIDENCE_CLAIMS);
for (const claim of EVIDENCE_CLAIMS) {
  if (!claim.finding || !claim.targets.length)
    throw new Error(`Incomplete evidence claim: ${claim.id}`);
  if (
    claim.label === 'externally-supported' &&
    !claim.sources.some((url) => SOURCE_REVIEWS[url]?.status === 'reviewed')
  ) {
    throw new Error(`Supported claim lacks a reviewed source: ${claim.id}`);
  }
}

export function claimsForPage(path: string): EvidenceClaim[] {
  const normalized = path.replace(/\/$/, '') || '/';
  return EVIDENCE_CLAIMS.filter((claim) =>
    claim.targets.some(
      (target) =>
        target.split('#')[0] === normalized ||
        (target === '/roles' && normalized.startsWith('/roles/')),
    ),
  );
}
