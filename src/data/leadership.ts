export interface OrgShiftData {
  number: number;
  title: string;
  description: string;
}

export const ORG_SHIFTS: OrgShiftData[] = [
  {
    number: 1,
    title: 'Workflows: Design for AI-first, not AI-assisted',
    description:
      'Stop asking "where can an agent help in this process?" Start asking "if we built this process from scratch with agents, what would it look like?" Redesign the workflow before automating it.',
  },
  {
    number: 2,
    title: 'Leadership: From directing execution to defining constraints',
    description:
      'Leaders stop specifying how work gets done and start defining what "good" looks like, what boundaries exist, and what must not happen. PMs write constraints and quality bars, not step-by-step specifications.',
  },
  {
    number: 3,
    title: 'Talent: From specialists to T-shaped integrators',
    description:
      'Individual contributors need breadth across the stack because agents blur layer boundaries. Hire and develop for judgment across domains, not just depth in one.',
  },
  {
    number: 4,
    title: 'Culture: Build continuous reinvention',
    description:
      'Tools, models, and patterns change quarterly. Build a culture where workflows are versioned and revisited, rules files are living documents, and "the way we do things" is explicitly up for revision.',
  },
  {
    number: 5,
    title: 'Structure: From functional teams to outcome-oriented pods',
    description:
      'Reorganize around outcomes (features, services, customer journeys) rather than functions (frontend, backend, QA). Each pod includes product roles alongside engineering roles.',
  },
  {
    number: 6,
    title: 'People systems: Measure impact, not output volume',
    description:
      'Agent-assisted teams will produce more PRs, more designs, more docs, more tests. None of these are meaningful measures of contribution. Measure product outcomes, quality, and decision quality.',
  },
];

export interface AdoptionPhase {
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
    number: 1,
    name: 'Contained Pilot',
    days: 'Days 1–30',
    goal: 'Establish baseline metrics, validate feasibility, build team confidence in a controlled environment.',
    activities: [
      'Select one repository with moderate complexity',
      'Define 3 repeatable task types (e.g., API endpoint, test generation, refactor)',
      'Measure baseline metrics: PR cycle time, change failure rate, test coverage, bug rate',
      'Set up basic guardrails: scope definition, CI as gate, senior review on all agent PRs',
      'Every team member runs at least one agent-assisted task',
      'Document what works, what fails, and what surprises',
    ],
    productNote: 'PM participates in defining task types. Designer reviews agent-generated UI. Baseline product metrics recorded.',
    exitCriteria: [
      'Baseline metrics recorded for comparison',
      'At least 10 agent-assisted tasks completed and reviewed',
      'No critical quality incidents from agent output',
      'Team can articulate which tasks agents handle well and which they don\'t',
      'Basic rules file created and shared across the team',
    ],
    riskMitigations: [
      'Senior review on 100% of agent PRs — no exceptions in Phase 1',
      'Start with low-risk, well-bounded tasks only',
      'If a quality incident occurs, pause and retrospect before continuing',
    ],
  },
  {
    number: 2,
    name: 'Expand Safely',
    days: 'Days 31–60',
    goal: 'Increase scope, introduce structured templates, and build the verification infrastructure.',
    activities: [
      'Expand to 2–3 repositories',
      'Create task templates for each repeatable pattern',
      'Introduce risk labels (low / medium / high) on every agent task',
      'Implement full quality guardrail layer (Layer 2)',
      'Begin implementing policy guardrails (Layer 3): secret scanning, branch protection',
      'Start tracking adoption KPIs: % PRs agent-assisted, CI first-pass rate',
      'Expand rules file based on Phase 1 lessons',
    ],
    productNote: 'PM creates acceptance criteria templates. Designer contributes design tokens and component specs. Begin tracking design compliance rate.',
    exitCriteria: [
      'Task templates exist for at least 3 common patterns',
      'Risk labeling applied to all agent tasks',
      'Quality guardrails (Layer 2) fully automated in CI',
      'Policy guardrails (Layer 3) partially implemented',
      'Adoption KPIs tracked weekly',
      'No increase in change failure rate compared to baseline',
    ],
    riskMitigations: [
      'Maintain senior review on medium and high risk tasks',
      'Low-risk tasks may move to sampling-based review (1 in 3)',
      'Weekly retrospective on agent output quality',
    ],
  },
  {
    number: 3,
    name: 'Standardize',
    days: 'Days 61–90',
    goal: 'Codify the operating model into an internal standard. Formalize governance. Train the full team.',
    activities: [
      'Publish internal "Agentic SOP" (operating loop, task matrix, review requirements, escalation)',
      'Implement remaining policy guardrails (Layer 3): PII filtering, relevance checking, moderation',
      'Add repo-level policy enforcement',
      'Train all team members on SOP, task templates, and rules files',
      'Conduct maturity self-assessment (Level 1–5) and set target for next quarter',
      'Establish evaluation framework beyond CI',
      'Define roles and decision rights',
    ],
    productNote: 'Product team trained on SOP alongside engineering. Product-specific KPIs added to dashboard. PM owns Plan phase. Designer owns design system compliance.',
    exitCriteria: [
      'Internal SOP is published and accessible to all team members',
      'All team members have completed SOP training',
      'Guardrail stack (Layers 1–4) fully operational',
      'Maturity self-assessment completed; current level agreed; target set',
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
    number: 4,
    name: 'Scale',
    days: 'Days 91–180',
    goal: 'Expand across teams. Build governance infrastructure. Move toward higher maturity levels.',
    activities: [
      'Roll out to additional teams and repositories',
      'Implement governance layer (Layer 5): agent registry, access control, cross-team observability',
      'Build shared skills/template library across teams',
      'Establish cost budgeting per team and per agent workflow',
      'Begin experimenting with Level 4 capabilities (background agents, async PRs)',
      'Publish organizational metrics dashboard',
      'Conduct cross-team retrospectives',
      'Evaluate dedicated role staffing',
    ],
    productNote: 'Product outcome metrics in org dashboard. Evaluate dedicated QA Engineer staffing. PM templates shared across teams. Design system fully instrumented.',
    exitCriteria: [
      'Multiple teams operating under the same SOP',
      'Governance layer (Layer 5) operational (minimum: registry + cost tracking)',
      'Shared skills library in use across teams',
      'Organizational KPI dashboard published and reviewed weekly',
      'Change failure rate stable or improved relative to baseline',
      'Quarterly maturity assessment shows progression',
      'Roles and decision rights scaled to match organizational breadth',
    ],
    riskMitigations: [
      'Do not skip Phase 3 before scaling — scaling without standards multiplies chaos',
      'Start Level 4 experiments in a single pod before expanding',
      'Monitor cost carefully during scale-out; token spend can increase non-linearly',
    ],
  },
];

export interface KpiMetric {
  name: string;
  measures: string;
  direction: 'increase' | 'decrease' | 'stable' | 'monitor';
}

export interface KpiCategory {
  id: string;
  name: string;
  metrics: KpiMetric[];
}

export const KPI_CATEGORIES: KpiCategory[] = [
  {
    id: 'delivery',
    name: 'Core Delivery',
    metrics: [
      { name: 'Lead time', measures: 'Time from issue opened to code merged', direction: 'decrease' },
      { name: 'PR review time', measures: 'Time from PR opened to approved', direction: 'decrease' },
      { name: 'Change failure rate', measures: '% of deployments causing incidents or rollbacks', direction: 'stable' },
      { name: 'Rollback frequency', measures: 'Number of rollbacks per deployment period', direction: 'stable' },
      { name: 'Escaped defects', measures: 'Bugs found in production per sprint', direction: 'decrease' },
      { name: 'Test coverage delta', measures: 'Change in test coverage over time', direction: 'increase' },
      { name: 'Deployment frequency', measures: 'How often the team deploys to production', direction: 'increase' },
    ],
  },
  {
    id: 'adoption',
    name: 'Adoption',
    metrics: [
      { name: '% PRs agent-assisted', measures: 'Proportion of PRs that involved agent execution', direction: 'monitor' },
      { name: '% PRs passing CI first run', measures: 'Quality of agent-generated code before human review', direction: 'increase' },
      { name: '% tasks within SLA', measures: 'Agent tasks completed within defined time/iteration bounds', direction: 'increase' },
      { name: 'Contribution split', measures: 'Ratio of agent-assisted vs. fully manual work', direction: 'monitor' },
      { name: 'Rules file update frequency', measures: 'How often the team\'s rules and templates are refined', direction: 'increase' },
      { name: 'Cost per agent task', measures: 'Average token/compute spend per completed task', direction: 'decrease' },
    ],
  },
  {
    id: 'product',
    name: 'Product Outcome',
    metrics: [
      { name: 'Feature adoption rate', measures: '% of users engaging with agent-built features', direction: 'increase' },
      { name: 'User satisfaction delta', measures: 'NPS/CSAT change for agent-assisted releases', direction: 'stable' },
      { name: 'Requirement accuracy', measures: '% of shipped features matching acceptance criteria on first pass', direction: 'increase' },
      { name: 'Design compliance rate', measures: '% of agent-generated UI matching design system', direction: 'increase' },
    ],
  },
  {
    id: 'quality',
    name: 'Quality',
    metrics: [
      { name: 'Review rejection rate', measures: '% of agent PRs rejected in code review', direction: 'decrease' },
      { name: 'Post-merge defect rate', measures: 'Bugs introduced by agent-generated code found after merge', direction: 'decrease' },
      { name: 'Evaluation coverage', measures: '% of agent output types covered by automated evaluation', direction: 'increase' },
      { name: 'Guardrail trigger rate', measures: 'How often guardrails catch issues before merge', direction: 'monitor' },
    ],
  },
];

export interface FailureMode {
  number: number;
  name: string;
  symptom: string;
  rootCause: string;
  mitigations: string[];
}

export const FAILURE_MODES: FailureMode[] = [
  {
    number: 1,
    name: 'Automation Theater',
    symptom: 'High volume of agent activity with minimal measurable business or delivery impact. Dashboards show "AI adoption" but nothing ships faster or better.',
    rootCause: 'Tasks selected for agents are easy-to-automate busywork rather than genuine bottlenecks. The team optimizes for agent-friendly tasks rather than high-impact tasks.',
    mitigations: [
      'Tie every agent workflow to a measurable delivery KPI',
      'Require a "so what?" test: if automated, what bottleneck does it remove?',
      'Review task selection criteria quarterly',
    ],
  },
  {
    number: 2,
    name: 'Review Bottlenecks',
    symptom: 'Agents generate PRs faster than the team can review them. PR queue grows. Merge latency increases.',
    rootCause: 'Agent output velocity exceeds the team\'s review capacity. Often caused by large, unfocused agent PRs.',
    mitigations: [
      'Enforce smaller PR scope (one concern per PR, bounded by task template)',
      'Tighten acceptance criteria so PRs are more focused',
      'Scale review capacity: train more team members',
      'Implement risk-based review: low-risk PRs get sampling-based review',
      'Consider review automation for mechanical aspects',
    ],
  },
  {
    number: 3,
    name: 'Silent Quality Drift',
    symptom: 'Code merges quickly. Sprint velocity looks good. But incident rate, bug reports, or customer complaints gradually climb.',
    rootCause: 'Verification gates are incomplete. Agent-generated code passes CI but introduces subtle issues not covered by tests.',
    mitigations: [
      'Expand evaluation coverage beyond unit tests (integration tests, performance benchmarks, architecture fitness functions)',
      'Track post-release defect rate specifically for agent-generated code',
      'Implement regular "agent output audits"',
      'Monitor change failure rate as an early warning signal',
    ],
  },
  {
    number: 4,
    name: 'Prompt Tribal Knowledge',
    symptom: 'One or two engineers get consistently better results from agents. The rest struggle with poor output and lose confidence.',
    rootCause: 'Effective agent interaction patterns are not captured and shared. Knowledge stays in individual heads.',
    mitigations: [
      'Convert individual prompts into shared task templates',
      'Maintain team-level rules files (not personal ones)',
      'Publish an internal "agentic SOP" with examples',
      'Pair programming sessions where skilled users demonstrate approach',
      'Make the Learn phase mandatory: every insight gets codified',
    ],
  },
  {
    number: 5,
    name: 'Governance Gap',
    symptom: 'Agent usage scales across teams, but nobody has a clear view of which agents exist, what they access, or what they cost.',
    rootCause: 'Governance infrastructure (Layer 5) was not built before scaling. Organizations skipped standardization.',
    mitigations: [
      'Implement governance layer before cross-team scaling',
      'Start with minimum viable governance: agent registry + cost tracking',
      'Add access control and audit trails as usage grows',
      'Assign a governance owner (AI Reliability or Platform Engineer)',
      'Review governance completeness quarterly',
    ],
  },
  {
    number: 6,
    name: 'Velocity Without Direction',
    symptom: 'Team ships 3x faster but product metrics (adoption, retention, satisfaction) don\'t improve or decline.',
    rootCause: 'Agent adoption accelerated delivery without improving problem selection. The team is building the wrong things faster.',
    mitigations: [
      'Tie agent task selection to product outcome metrics',
      'Require PM sign-off on every task plan',
      'Measure feature adoption and user satisfaction alongside delivery speed',
      'Apply "redesign, don\'t automate" to product discovery, not just delivery',
    ],
  },
];
