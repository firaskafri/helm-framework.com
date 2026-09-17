import {
  assertConsecutiveOrder,
  assertNonEmpty,
  assertUniqueIds,
} from '../lib/contentIntegrity';

export interface OrgShiftData {
  id: string;
  number: number;
  title: string;
  description: string;
}

export const ORG_SHIFTS: OrgShiftData[] = [
  {
    id: 'organizational-shift-1',
    number: 1,
    title: 'Workflows: Simplify before adding agents',
    description:
      'Start with the result you need. Remove unnecessary steps, then decide where an agent could help. A small change may be enough.',
  },
  {
    id: 'organizational-shift-2',
    number: 2,
    title: 'Leadership: Agree goals, limits and decisions',
    description:
      'Make the expected result, constraints and decision owner clear. Include detailed steps when the task needs them, and give the team room to use its expertise.',
  },
  {
    id: 'organizational-shift-3',
    number: 3,
    title: 'Skills: Connect expertise across the work',
    description:
      'Help people understand the parts of a task they need to review. Involve specialists when a change reaches beyond that knowledge.',
  },
  {
    id: 'organizational-shift-4',
    number: 4,
    title: 'Learning: Review and improve together',
    description:
      'Review working practices when tasks, tools or results change. Share useful lessons and remove instructions that no longer help.',
  },
  {
    id: 'organizational-shift-5',
    number: 5,
    title: 'Structure: Make handoffs and ownership clear',
    description:
      'Agree who owns the result across product, engineering and quality work. Try a different team arrangement when an observed handoff or responsibility problem warrants it.',
  },
  {
    id: 'organizational-shift-6',
    number: 6,
    title: 'Measurement: Review outcomes, quality and effort',
    description:
      'Use delivery counts to understand activity, alongside evidence about user outcomes, quality and effort. Avoid treating agent use or output volume as a measure of a person’s ability.',
  },
];

export interface AdoptionPhase {
  id: string;
  number: number;
  name: string;
  days: string;
  goal: string;
  activities: string[];
  productNote: string;
  exitCriteria: string[];
  riskMitigations: string[];
}

export const ADOPTION_PHASES: AdoptionPhase[] = [
  {
    id: 'phase-1-contained-pilot-days-1-30',
    number: 1,
    name: 'Contained Pilot',
    days: 'Days 1–30',
    goal: 'Try one workflow and record what changes for delivery and the people doing the work.',
    activities: [
      'Select one repository with moderate complexity',
      'Choose a small set of repeatable tasks, such as a local prototype, test or refactor',
      'Measure baseline metrics: PR cycle time, change failure rate, test coverage, bug rate',
      'Agree scope, restrict access, protect sensitive data and name a reviewer for agent changes',
      'Give participants a chance to try relevant tasks with support',
      'Document what works, what fails, and what surprises',
    ],
    productNote:
      'PM participates in defining task types. Designer reviews agent-generated UI. Baseline product metrics recorded.',
    exitCriteria: [
      'Baseline metrics recorded for comparison',
      'Representative tasks reviewed, with enough evidence to explain the next decision',
      'No critical quality incidents from agent output',
      "Team can articulate which tasks agents handle well and which they don't",
      'Basic rules file created and shared across the team',
    ],
    riskMitigations: [
      'A named, capable person reviews each agent change during the pilot',
      'Start with low-risk, well-bounded tasks only',
      'If a quality incident occurs, pause, investigate and agree what must change before continuing',
    ],
  },
  {
    id: 'phase-2-expand-safely-days-31-60',
    number: 2,
    name: 'Expand Safely',
    days: 'Days 31–60',
    goal: 'Increase scope, introduce structured templates, and build the verification infrastructure.',
    activities: [
      'Expand to 2–3 repositories',
      'Create task templates for each repeatable pattern',
      'Introduce risk labels (low / medium / high) on every agent task',
      'Implement full quality guardrail layer (Layer 2)',
      'Review existing policy controls, including secrets, branch protection and access, for the expanded work',
      'Start tracking adoption KPIs: % PRs agent-assisted, CI first-pass rate',
      'Expand rules file based on Phase 1 lessons',
    ],
    productNote:
      'PM creates acceptance criteria templates. Designer contributes design tokens and component specs. Begin tracking design compliance rate.',
    exitCriteria: [
      'Task briefs cover the recurring work chosen for this trial',
      'Risk labeling applied to all agent tasks',
      'Quality guardrails (Layer 2) fully automated in CI',
      'Policy controls cover the data and actions in the expanded workflow',
      'Adoption KPIs tracked weekly',
      'No increase in change failure rate compared to baseline',
    ],
    riskMitigations: [
      'Maintain senior review on medium and high risk tasks',
      'Change review depth only when risk, verification coverage and observed results support it',
      'Weekly retrospective on agent output quality',
    ],
  },
  {
    id: 'phase-3-standardize-days-61-90',
    number: 3,
    name: 'Standardize',
    days: 'Days 61–90',
    goal: 'Make useful practices repeatable and help the team learn them.',
    activities: [
      'Write a short standard operating procedure (SOP) covering task planning, checks, ownership and escalation',
      'Review policy controls for the workflow, including personal-data handling and output checks where applicable',
      'Add repo-level policy enforcement',
      'Train all team members on SOP, task templates, and rules files',
      'Discuss current practices using the five levels and choose a useful improvement',
      'Establish evaluation framework beyond CI',
      'Define roles and decision rights',
    ],
    productNote:
      'Product team trained on SOP alongside engineering. Product-specific KPIs added to dashboard. PM owns Plan phase. Designer owns design system compliance.',
    exitCriteria: [
      'Internal SOP is published and accessible to all team members',
      'The people doing and reviewing the work understand the procedure and know where to ask for help',
      'Guardrail stack (Layers 1–4) fully operational',
      'The team can explain its working practices and the next improvement to try',
      'Evaluation framework exists beyond CI',
      'Decision rights are documented',
    ],
    riskMitigations: [
      'Ensure SOP is a living document, not a one-time artifact',
      'Schedule quarterly SOP reviews',
      'Assign an SOP owner responsible for updates',
    ],
  },
  {
    id: 'phase-4-scale-days-91-180',
    number: 4,
    name: 'Scale',
    days: 'Days 91–180',
    goal: 'Extend practices to other teams when the results and support capacity justify it.',
    activities: [
      'Roll out to additional teams and repositories',
      'Implement governance layer (Layer 5): agent registry, access control, cross-team observability',
      'Share useful task examples, instructions and templates across teams',
      'Establish cost budgeting per team and per agent workflow',
      'Begin experimenting with Level 4 capabilities (background agents, async PRs)',
      'Publish organizational metrics dashboard',
      'Conduct cross-team retrospectives',
      'Evaluate dedicated role staffing',
    ],
    productNote:
      'Product outcome metrics in org dashboard. Evaluate dedicated QA Engineer staffing. PM templates shared across teams. Design system fully instrumented.',
    exitCriteria: [
      'Multiple teams operating under the same SOP',
      'Governance layer (Layer 5) operational (minimum: registry + cost tracking)',
      'Teams can find and use the shared task examples and instructions',
      'Organizational KPI dashboard published and reviewed weekly',
      'Change failure rate stable or improved relative to baseline',
      'Review shows whether expanded use is helping and what needs to change',
      'Roles and decision rights scaled to match organizational breadth',
    ],
    riskMitigations: [
      'Check that responsibilities, working practices and support are clear before expanding',
      'Start Level 4 experiments in a single pod before expanding',
      'Monitor cost carefully during scale-out; token spend can increase non-linearly',
    ],
  },
];

export interface KpiMetric {
  id: string;
  name: string;
  measures: string;
  direction: 'increase' | 'decrease' | 'stable' | 'monitor';
}

export interface KpiCategory {
  id: string;
  order: number;
  name: string;
  metrics: KpiMetric[];
}

export const KPI_CATEGORIES: KpiCategory[] = [
  {
    id: 'core-delivery-kpis',
    order: 1,
    name: 'Core Delivery',
    metrics: [
      {
        id: 'lead-time',
        name: 'Lead time',
        measures: 'Time from issue opened to code merged',
        direction: 'decrease',
      },
      {
        id: 'pr-review-time',
        name: 'PR review time',
        measures: 'Time from PR opened to approved',
        direction: 'decrease',
      },
      {
        id: 'change-failure-rate',
        name: 'Change failure rate',
        measures: '% of deployments causing incidents or rollbacks',
        direction: 'stable',
      },
      {
        id: 'rollback-frequency',
        name: 'Rollback frequency',
        measures: 'Number of rollbacks per deployment period',
        direction: 'stable',
      },
      {
        id: 'escaped-defects',
        name: 'Escaped defects',
        measures: 'Bugs found in production per sprint',
        direction: 'decrease',
      },
      {
        id: 'test-coverage-delta',
        name: 'Test coverage delta',
        measures: 'Change in test coverage over time',
        direction: 'monitor',
      },
      {
        id: 'deployment-frequency',
        name: 'Deployment frequency',
        measures: 'How often the team deploys to production',
        direction: 'increase',
      },
    ],
  },
  {
    id: 'adoption-kpis',
    order: 2,
    name: 'Adoption',
    metrics: [
      {
        id: 'agent-assisted-prs',
        name: '% PRs agent-assisted',
        measures: 'Proportion of PRs that involved agent execution',
        direction: 'monitor',
      },
      {
        id: 'ci-first-pass-rate',
        name: '% PRs passing CI first run',
        measures:
          'Share of first CI runs that pass; interpretation depends on the checks and task mix',
        direction: 'increase',
      },
      {
        id: 'tasks-within-sla',
        name: '% tasks within SLA',
        measures: 'Agent tasks completed within defined time/iteration bounds',
        direction: 'increase',
      },
      {
        id: 'contribution-split',
        name: 'Contribution split',
        measures: 'Ratio of agent-assisted vs. fully manual work',
        direction: 'monitor',
      },
      {
        id: 'rules-file-update-frequency',
        name: 'Rules file update frequency',
        measures: "How often the team's rules and templates are refined",
        direction: 'monitor',
      },
      {
        id: 'cost-per-agent-task',
        name: 'Cost per agent task',
        measures: 'Average token/compute spend per completed task',
        direction: 'decrease',
      },
    ],
  },
  {
    id: 'product-outcome-kpis',
    order: 3,
    name: 'Product Outcome',
    metrics: [
      {
        id: 'feature-adoption-rate',
        name: 'Feature adoption rate',
        measures: '% of users engaging with agent-built features',
        direction: 'increase',
      },
      {
        id: 'user-satisfaction-delta',
        name: 'User satisfaction delta',
        measures: 'NPS/CSAT change for agent-assisted releases',
        direction: 'stable',
      },
      {
        id: 'requirement-accuracy',
        name: 'Requirement accuracy',
        measures:
          '% of shipped features matching acceptance criteria on first pass',
        direction: 'increase',
      },
      {
        id: 'design-compliance-rate',
        name: 'Design compliance rate',
        measures: '% of agent-generated UI matching design system',
        direction: 'increase',
      },
    ],
  },
  {
    id: 'quality-kpis',
    order: 4,
    name: 'Quality',
    metrics: [
      {
        id: 'review-rejection-rate',
        name: 'Review rejection rate',
        measures: '% of agent PRs rejected in code review',
        direction: 'monitor',
      },
      {
        id: 'post-merge-defect-rate',
        name: 'Post-merge defect rate',
        measures: 'Bugs introduced by agent-generated code found after merge',
        direction: 'decrease',
      },
      {
        id: 'evaluation-coverage',
        name: 'Evaluation coverage',
        measures: '% of agent output types covered by automated evaluation',
        direction: 'increase',
      },
      {
        id: 'guardrail-trigger-rate',
        name: 'Guardrail trigger rate',
        measures: 'How often guardrails catch issues before merge',
        direction: 'monitor',
      },
    ],
  },
];

export const KPI_SUCCESS_FORMULA = [
  'lead-time',
  'deployment-frequency',
  'change-failure-rate',
  'escaped-defects',
] as const;

export interface FailureMode {
  id: string;
  number: number;
  name: string;
  symptom: string;
  rootCause: string;
  mitigations: string[];
}

export const FAILURE_MODES: FailureMode[] = [
  {
    id: 'failure-mode-1-automation-theater',
    number: 1,
    name: 'Automation Theater',
    symptom:
      'Agent activity increases without a clear improvement in delivery or user outcomes.',
    rootCause:
      'The selected tasks may not address an important problem, or the benefit may be offset by review and rework.',
    mitigations: [
      'Tie every agent workflow to a measurable delivery KPI',
      'Require a "so what?" test: if automated, what bottleneck does it remove?',
      'Review task selection criteria quarterly',
    ],
  },
  {
    id: 'failure-mode-2-review-bottlenecks',
    number: 2,
    name: 'Review Bottlenecks',
    symptom:
      'Agents generate PRs faster than the team can review them. PR queue grows. Merge latency increases.',
    rootCause:
      "Agent output velocity exceeds the team's review capacity. Often caused by large, unfocused agent PRs.",
    mitigations: [
      'Enforce smaller PR scope (one concern per PR, bounded by task template)',
      'Tighten acceptance criteria so PRs are more focused',
      'Scale review capacity: train more team members',
      'Implement risk-based review: low-risk PRs get sampling-based review',
      'Consider review automation for mechanical aspects',
    ],
  },
  {
    id: 'failure-mode-3-silent-quality-drift',
    number: 3,
    name: 'Silent Quality Drift',
    symptom:
      'Changes merge quickly while incidents, bug reports or customer complaints increase.',
    rootCause:
      'The checks may be missing important cases. Compare the reported problems with what is actually tested.',
    mitigations: [
      'Expand evaluation coverage beyond unit tests (integration tests, performance benchmarks, architecture fitness functions)',
      'Track post-release defect rate specifically for agent-generated code',
      'Implement regular "agent output audits"',
      'Monitor change failure rate as an early warning signal',
    ],
  },
  {
    id: 'failure-mode-4-prompt-tribal-knowledge',
    number: 4,
    name: 'Prompt Tribal Knowledge',
    symptom:
      'One or two engineers get consistently better results from agents. The rest struggle with poor output and lose confidence.',
    rootCause:
      'Effective agent interaction patterns are not captured and shared. Knowledge stays in individual heads.',
    mitigations: [
      'Convert individual prompts into shared task templates',
      'Maintain team-level rules files (not personal ones)',
      'Publish an internal "agentic SOP" with examples',
      'Pair programming sessions where skilled users demonstrate approach',
      'Use the Learn phase to share useful findings and remove unhelpful instructions',
    ],
  },
  {
    id: 'failure-mode-5-governance-gap',
    number: 5,
    name: 'Governance Gap',
    symptom:
      'Agent usage scales across teams, but nobody has a clear view of which agents exist, what they access, or what they cost.',
    rootCause:
      'Shared records, ownership or controls may not have kept up with the work. Check where visibility or responsibility is missing.',
    mitigations: [
      'Implement governance layer before cross-team scaling',
      'Start with clear ownership, appropriate access, useful activity records and cost tracking',
      'Review access controls and audit records before adding more workflows or teams',
      'Assign a governance owner (AI Reliability or Platform Engineer)',
      'Review governance completeness quarterly',
    ],
  },
  {
    id: 'failure-mode-6-velocity-without-direction',
    number: 6,
    name: 'Velocity Without Direction',
    symptom:
      'Delivery speeds up, but adoption, retention or customer satisfaction does not improve.',
    rootCause:
      'The work may not address the intended user problem. Check the evidence behind the priorities and what happened after release.',
    mitigations: [
      'Tie agent task selection to product outcome metrics',
      'Require PM sign-off on every task plan',
      'Measure feature adoption and user satisfaction alongside delivery speed',
      'Apply "redesign, don\'t automate" to product discovery, not just delivery',
    ],
  },
];

const leadershipCollections = [
  ['Organizational shifts', ORG_SHIFTS],
  ['Adoption phases', ADOPTION_PHASES],
  ['KPI categories', KPI_CATEGORIES],
  ['Failure modes', FAILURE_MODES],
] as const;

for (const [label, records] of leadershipCollections) {
  assertNonEmpty(label, records);
  assertUniqueIds(label, records);
}

assertConsecutiveOrder(
  'Organizational shifts',
  ORG_SHIFTS.map(({ number }) => number),
);
assertConsecutiveOrder(
  'Adoption phases',
  ADOPTION_PHASES.map(({ number }) => number),
);
assertConsecutiveOrder(
  'KPI categories',
  KPI_CATEGORIES.map(({ order }) => order),
);
assertConsecutiveOrder(
  'Failure modes',
  FAILURE_MODES.map(({ number }) => number),
);

const kpiMetrics = KPI_CATEGORIES.flatMap(({ metrics }) => metrics);
assertNonEmpty('KPI metrics', kpiMetrics);
assertUniqueIds('KPI metrics', kpiMetrics);

const kpiMetricIds = new Set(kpiMetrics.map(({ id }) => id));
for (const metricId of KPI_SUCCESS_FORMULA) {
  if (!kpiMetricIds.has(metricId)) {
    throw new Error(
      `KPI success formula references unknown metric "${metricId}"`,
    );
  }
}
