export interface LoopPhase {
  id: string;
  label: string;
  ownerLabel: string;
  summary: string;
  details: string[];
}

export const LOOP_PHASES: LoopPhase[] = [
  {
    id: 'plan',
    label: 'Plan',
    ownerLabel: 'Product + Engineering',
    summary:
      'Before any agent touches code, define the contract that bounds execution.',
    details: [
      'Product defines: Goal, acceptance criteria, UX requirements',
      'Engineering defines: Scope, non-goals, risk level, constraints, verification method',
      'The plan is not a suggestion — it is the contract that bounds agent execution',
      'Without it, you get creative drift',
    ],
  },
  {
    id: 'execute',
    label: 'Execute',
    ownerLabel: 'Agents (monitored)',
    summary:
      'Agents work autonomously within the bounds set by the Plan phase.',
    details: [
      'Generate code, tests, documentation, or refactors',
      'Call tools as needed (data retrieval, API interactions, code execution)',
      'Iterate within the defined scope (run tests, fix failures, retry)',
      'Operate within configured iteration limits',
      "The human's role during execution is monitoring, not directing",
    ],
  },
  {
    id: 'verify',
    label: 'Verify',
    ownerLabel: 'Automated + Human',
    summary:
      'Automated and human checks before anything merges.',
    details: [
      'Automated: CI pipeline, static analysis, security scanning, coverage thresholds, policy checks',
      'Human — Engineering: code review, architecture alignment, edge case consideration',
      'Human — Product: acceptance review, UX review, copy review, accessibility check',
      'Review depth scales with risk level',
    ],
  },
  {
    id: 'ship',
    label: 'Ship',
    ownerLabel: 'Human decision',
    summary: 'Merge and deploy with full auditability and rollback capability.',
    details: [
      'Audit trail: what was generated, by which agent, reviewed by whom',
      'Rollback path: every deployment must be reversible within a defined SLA',
      'Post-merge monitoring: watch for anomalies in error rates and latency',
      'Diff review: ensure merged code matches what was reviewed',
    ],
  },
  {
    id: 'learn',
    label: 'Learn',
    ownerLabel: 'Whole team',
    summary:
      'After shipping, codify the lessons so each cycle makes the next one better.',
    details: [
      'Update rules files: add rules to prevent recurrence of manual corrections',
      'Refine task templates: tighten plans that were ambiguous',
      'Update evaluation criteria: add checks the verify step missed',
      'Share across the team: convert successful patterns into shared templates and SOPs',
      'This is "compounding engineering" — without Learn, you get repetition instead of improvement',
    ],
  },
];

export interface GuardrailLayer {
  number: number;
  name: string;
  parenthetical: string;
  purpose: string;
  items: { element: string; description: string; example?: string }[];
}

export const GUARDRAIL_LAYERS: GuardrailLayer[] = [
  {
    number: 1,
    name: 'Scope',
    parenthetical: 'task boundary enforcement',
    purpose:
      'Prevent agents from drifting beyond their assigned task — the most common failure mode in practice.',
    items: [
      { element: 'Target', description: 'Specific files, directories, or systems the agent may touch', example: 'src/api/users/, payments_table' },
      { element: 'Non-goals', description: 'What the agent must NOT change', example: '"Do not modify authentication logic"' },
      { element: 'Acceptance criteria', description: 'Concrete definition of "done"', example: '"All tests pass, endpoint returns 200 with valid payload"' },
      { element: 'Allowed dependencies', description: 'What the agent may import or call', example: '"No new external packages without approval"' },
      { element: 'Max iterations', description: 'Upper bound on agent execution cycles', example: '20 tool calls, 10 minutes wall time' },
    ],
  },
  {
    number: 2,
    name: 'Quality',
    parenthetical: 'code and output correctness',
    purpose:
      'Enforce code and output correctness through automated checks before any human review.',
    items: [
      { element: 'Formatting & linting', description: 'Enforce style consistency (Black, ESLint, Prettier, etc.)' },
      { element: 'Type checking', description: 'Static type verification (mypy, TypeScript strict mode)' },
      { element: 'Unit & integration tests', description: 'Existing test suite must pass; new code must include tests' },
      { element: 'Static analysis', description: 'Security scanning, dependency vulnerability checks' },
      { element: 'Coverage thresholds', description: 'No regressions in test coverage' },
      { element: 'Design system compliance', description: 'Agent-generated UI follows the component library and design tokens' },
      { element: 'Accessibility standards', description: 'WCAG compliance checks on generated interfaces' },
    ],
  },
  {
    number: 3,
    name: 'Policy',
    parenthetical: 'safety and compliance',
    purpose:
      'Enforce safety, compliance, and organizational rules that automated quality checks cannot catch.',
    items: [
      { element: 'No secret exposure', description: 'Automated secret scanning in pre-commit and CI', example: 'Credentials leaking into repositories' },
      { element: 'PII filtering', description: 'LLM-based or regex-based PII detection on outputs', example: 'Privacy violations in generated content' },
      { element: 'Safety classification', description: 'Detect prompt injection, jailbreak attempts', example: 'System exploitation' },
      { element: 'Relevance classification', description: 'Flag off-topic or out-of-scope agent behavior', example: 'Scope drift and waste' },
      { element: 'Moderation', description: 'Content safety checks on agent outputs', example: 'Harmful or inappropriate generated content' },
      { element: 'Dependency policy', description: 'Block unsafe dependency upgrades or additions', example: 'Supply chain attacks' },
      { element: 'Branch policy', description: 'No direct pushes to main/protected branches', example: 'Unreviewed code reaching production' },
    ],
  },
  {
    number: 4,
    name: 'Human Decision',
    parenthetical: 'judgment and accountability',
    purpose:
      'Ensure humans retain authority over decisions that agents must not make autonomously.',
    items: [
      { element: 'Architecture', description: 'System design, technology choices, data model changes' },
      { element: 'Risk acceptance', description: 'Shipping known tradeoffs, accepting technical debt' },
      { element: 'Release timing', description: 'When code goes to production' },
      { element: 'Incident response', description: 'Rollback decisions, postmortem actions' },
      { element: 'Security-critical changes', description: 'Authentication, authorization, encryption' },
      { element: 'Cost commitments', description: 'Actions with financial impact above defined thresholds' },
    ],
  },
  {
    number: 5,
    name: 'Governance',
    parenthetical: 'fleet-level controls',
    purpose:
      'Fleet-level controls for managing agents at organizational scale.',
    items: [
      { element: 'Registry', description: 'Single source of truth tracking all agents, their capabilities, owners, and status' },
      { element: 'Access control', description: 'Role-based permissions determining which agents can access which systems and data' },
      { element: 'Observability', description: 'Unified monitoring across all agents — execution traces, cost tracking, error rates, latency' },
      { element: 'Interoperability', description: 'Standards for agents to work across platforms and teams (e.g., Model Context Protocol)' },
      { element: 'Audit trail', description: 'Complete record of agent actions, decisions, and outcomes for compliance and debugging' },
      { element: 'Cost budgeting', description: 'Per-agent and per-team token/compute budgets with alerts and hard limits' },
    ],
  },
];

export interface CompositionPattern {
  number: number;
  name: string;
  description: string;
  whenToUse: string;
  example: string;
}

export const COMPOSITION_PATTERNS: CompositionPattern[] = [
  {
    number: 1,
    name: 'Prompt Chaining',
    description: 'Decompose a task into a fixed sequence of steps. Each LLM call processes the output of the previous one. Programmatic gates between steps validate intermediate results.',
    whenToUse: 'Task can be cleanly decomposed into fixed subtasks. You trade latency for accuracy by making each call simpler.',
    example: 'Generate marketing copy, then translate it. Write an outline, validate it against criteria, then write the full document.',
  },
  {
    number: 2,
    name: 'Routing',
    description: 'Classify the input and direct it to a specialized handler. Each route has its own optimized prompt and tools.',
    whenToUse: 'Distinct categories that are better handled separately. Classification can be done accurately.',
    example: 'Customer service — route general questions, refund requests, and technical support to different downstream processes.',
  },
  {
    number: 3,
    name: 'Parallelization',
    description: 'Run subtasks simultaneously and aggregate results. Two variants: Sectioning (independent subtasks) and Voting (same task, multiple perspectives).',
    whenToUse: 'Subtasks are independent (sectioning) or you need multiple perspectives (voting).',
    example: 'One model processes the user query while another screens for safety. Multiple prompts review code for vulnerabilities; flag if any finds a problem.',
  },
  {
    number: 4,
    name: 'Evaluator-Optimizer',
    description: 'One LLM generates a response. Another evaluates it and provides feedback. Loop until quality criteria are met.',
    whenToUse: 'Clear evaluation criteria exist, and iterative refinement provides measurable improvement.',
    example: 'Literary translation with a critic loop. Complex search tasks requiring multiple rounds of analysis.',
  },
  {
    number: 5,
    name: 'Single Agent Loop',
    description: 'A single LLM with tools operates in a loop until an exit condition is met (final output, no tool calls, error, or max iterations). The fundamental agent pattern.',
    whenToUse: 'Dynamic decision-making about which tools to call and in what order, but complexity does not warrant splitting across multiple agents.',
    example: 'A coding agent that reads files, writes code, runs tests, and iterates until tests pass.',
  },
  {
    number: 6,
    name: 'Orchestrator-Workers',
    description: 'A central LLM dynamically breaks down tasks, delegates to worker LLMs, and synthesizes results. Unlike parallelization, subtasks are not pre-defined.',
    whenToUse: 'Complex tasks where you cannot predict the number or nature of subtasks in advance.',
    example: 'A coding product that determines which files need changing and dispatches changes to workers.',
  },
  {
    number: 7,
    name: 'Manager (Agents-as-Tools)',
    description: 'A central "manager" agent calls specialized agents as tools. The manager retains control and context, synthesizing outputs into a unified interaction.',
    whenToUse: 'You want a single agent maintaining central control and user interaction while delegating specialized work.',
    example: 'A manager agent that calls translator agents for Spanish, French, and Italian, synthesizing all results for the user.',
  },
  {
    number: 8,
    name: 'Decentralized Handoff',
    description: 'Agents operate as peers, handing off full execution control to one another based on specialization. No central coordinator.',
    whenToUse: 'You don\'t need central control or synthesis. Each specialized agent can fully take over the interaction.',
    example: 'A triage agent hands off entirely to technical support, sales, or order management. The receiving agent owns the conversation.',
  },
];

export interface PatternDecisionNode {
  start: string;
  ifFails: string;
  thenConsider: string;
}

export const PATTERN_DECISION_TREE: PatternDecisionNode[] = [
  { start: 'Single LLM call with good prompting', ifFails: 'Output quality insufficient', thenConsider: 'Prompt Chaining or Evaluator-Optimizer' },
  { start: 'Prompt Chaining', ifFails: 'Task decomposition isn\'t fixed', thenConsider: 'Single Agent Loop' },
  { start: 'Single Agent Loop', ifFails: 'Too many tools (>15) or overlapping concerns', thenConsider: 'Manager or Orchestrator-Workers' },
  { start: 'Single Agent Loop', ifFails: 'Distinct categories with different handling', thenConsider: 'Routing + specialized agents' },
  { start: 'Manager pattern', ifFails: 'Central agent bottlenecks; specialists need full autonomy', thenConsider: 'Decentralized Handoff' },
];

export interface TaskMatrixCell {
  boundedness: 'well-bounded' | 'semi-bounded' | 'open-ended';
  risk: 'low' | 'medium' | 'high';
  agentRole: string;
  description: string;
  engineeringExamples: string[];
  productExamples: string[];
}

export const TASK_MATRIX: TaskMatrixCell[] = [
  {
    boundedness: 'well-bounded', risk: 'low',
    agentRole: 'Agent-driven',
    description: 'Automated verification. Sampling review.',
    engineeringExamples: ['API endpoints and CRUD features', 'Code formatting, linting, and style fixes', 'Documentation and changelog generation'],
    productExamples: ['Copy and microcopy generation within brand guidelines', 'Test case generation from acceptance criteria', 'Competitive analysis summaries from public data'],
  },
  {
    boundedness: 'well-bounded', risk: 'medium',
    agentRole: 'Agent-driven',
    description: 'Automated + human verification.',
    engineeringExamples: ['Frontend component generation and cleanup', 'Test generation for existing business logic', 'Migration scripts and repetitive refactors'],
    productExamples: ['PRD drafts from user research notes', 'User story decomposition from high-level requirements', 'Design-to-code translation using design system components'],
  },
  {
    boundedness: 'well-bounded', risk: 'high',
    agentRole: 'Agent-assisted',
    description: 'Human-led with agent drafts. Full review.',
    engineeringExamples: ['Security-adjacent feature implementation', 'Payment flow modifications', 'Data model changes with migration'],
    productExamples: ['User-facing copy with legal/compliance implications', 'Onboarding flow changes affecting activation metrics'],
  },
  {
    boundedness: 'semi-bounded', risk: 'low',
    agentRole: 'Agent-driven',
    description: 'With human plan review.',
    engineeringExamples: ['Exploratory refactors with clear goals', 'Performance optimization within defined bounds'],
    productExamples: ['Feature spec elaboration from brief outline', 'Design exploration within existing system'],
  },
  {
    boundedness: 'semi-bounded', risk: 'medium',
    agentRole: 'Agent-assisted',
    description: 'Human review mandatory.',
    engineeringExamples: ['Cross-service integration work', 'Complex business logic implementation'],
    productExamples: ['Multi-step workflow redesign', 'New feature prototyping within constraints'],
  },
  {
    boundedness: 'semi-bounded', risk: 'high',
    agentRole: 'Human-led',
    description: 'Agent may draft, human designs and reviews.',
    engineeringExamples: ['Auth system modifications', 'Infrastructure security hardening'],
    productExamples: ['Pricing model implementation', 'Compliance-critical workflow changes'],
  },
  {
    boundedness: 'open-ended', risk: 'low',
    agentRole: 'Human-led',
    description: 'With agent support for research/exploration.',
    engineeringExamples: ['Technology evaluation and prototyping', 'Architecture documentation drafts'],
    productExamples: ['Market research synthesis', 'Competitive landscape analysis'],
  },
  {
    boundedness: 'open-ended', risk: 'medium',
    agentRole: 'Human-led',
    description: 'Agent provides options, human decides.',
    engineeringExamples: ['Novel architecture decisions', 'Performance-sensitive distributed systems'],
    productExamples: ['Product strategy options analysis', 'User research synthesis and insight generation'],
  },
  {
    boundedness: 'open-ended', risk: 'high',
    agentRole: 'Human only',
    description: 'Agent excluded.',
    engineeringExamples: ['Incident response and production debugging', 'Security breach investigation'],
    productExamples: ['Product strategy and roadmap prioritization', 'Brand voice definition and tone calibration', 'Pricing and packaging decisions'],
  },
];

export interface MaturityDimension {
  dimension: string;
  details: string;
}

export interface MaturityLevel {
  level: number;
  name: string;
  description: string;
  signal: string;
  dimensions: MaturityDimension[];
  assessmentCriteria: string[];
  failureMode: string;
}

export const MATURITY_LEVELS: MaturityLevel[] = [
  {
    level: 1,
    name: 'Assisted',
    description: 'AI provides suggestions that developers accept, modify, or reject. The developer drives all decisions and execution.',
    signal: '"We use Copilot for suggestions"',
    dimensions: [
      { dimension: 'Capabilities', details: 'Tab completion, inline suggestions, single-turn Q&A, code explanation' },
      { dimension: 'Tools', details: 'GitHub Copilot, ChatGPT, basic AI-assisted IDE features' },
      { dimension: 'Human role', details: 'Full control. AI is a passive tool.' },
      { dimension: 'Agent autonomy', details: 'None. Every output requires explicit human action.' },
      { dimension: 'Product dimension', details: 'PMs and designers use AI for ad-hoc tasks (drafting docs, brainstorming). No integration with engineering workflows.' },
      { dimension: 'Risk profile', details: 'Low. Developer reviews every suggestion.' },
    ],
    assessmentCriteria: [
      'Developers use AI for suggestions but control all execution',
      'No structured prompting or context engineering',
      'No shared rules or templates for AI usage',
      'AI usage is individual, not team-standardized',
    ],
    failureMode: 'Over-trust of suggestions without review; cargo-cult coding.',
  },
  {
    level: 2,
    name: 'Structured',
    description: 'AI operates within structured contexts. Teams use dedicated AI IDEs, maintain rules files, and follow defined prompting patterns.',
    signal: '"We have rules files and task templates"',
    dimensions: [
      { dimension: 'Capabilities', details: 'Multi-turn agent interactions, context-aware generation, file editing, multi-file changes' },
      { dimension: 'Tools', details: 'Cursor, Claude Code, Windsurf, AI IDEs with agent mode' },
      { dimension: 'Human role', details: 'Defines context, reviews output, makes all commit/merge decisions' },
      { dimension: 'Agent autonomy', details: 'Executes within a single session under human supervision' },
      { dimension: 'Product dimension', details: 'PMs use structured templates for acceptance criteria. Designers contribute design tokens as agent instructions.' },
      { dimension: 'Risk profile', details: 'Low-to-moderate. Human reviews all output before it reaches the codebase.' },
    ],
    assessmentCriteria: [
      'Team uses AI IDEs with structured context (rules files, project-level instructions)',
      'Shared task templates exist for common operations',
      'All AI-generated output goes through standard code review',
      'Team has basic conventions for when and how to use AI tools',
    ],
    failureMode: 'Prompt tribal knowledge (only some team members know effective patterns).',
  },
  {
    level: 3,
    name: 'Integrated',
    description: 'AI agents are integrated into the development lifecycle through automated feedback loops. CI serves as the verification layer.',
    signal: '"Agents iterate on CI feedback; rules improve each cycle"',
    dimensions: [
      { dimension: 'Capabilities', details: 'Agent runs tests, interprets failures, iterates to fix. CI-as-verification. Automated evaluation.' },
      { dimension: 'Tools', details: 'AI IDE + CI integration + automated eval suites + MCP integrations + shared skills libraries' },
      { dimension: 'Human role', details: 'Defines plans and acceptance criteria. Reviews against criteria. Owns architecture and risk decisions.' },
      { dimension: 'Agent autonomy', details: 'Executes multi-step tasks and self-corrects based on automated feedback.' },
      { dimension: 'Product dimension', details: 'PM acceptance criteria feed directly into agent task plans. Design system compliance automated in CI.' },
      { dimension: 'Risk profile', details: 'Moderate. Automated checks catch most issues. Human review remains mandatory for medium/high risk.' },
    ],
    assessmentCriteria: [
      'Agents iterate based on CI/test feedback without human intervention in the loop',
      'Rules files and templates are updated after each cycle (compounding engineering)',
      'Evaluation coverage is explicitly tracked and improving',
      'Guardrail stack (all 5 layers) is operational',
      'Team measures agentic adoption KPIs',
    ],
    failureMode: 'Silent quality drift if eval coverage is incomplete. Over-reliance on passing CI without understanding what\'s tested.',
  },
  {
    level: 4,
    name: 'Autonomous',
    description: 'Agents operate in the background, working on tasks asynchronously. Humans define tasks and review results.',
    signal: '"Agents raise PRs overnight that we review in the morning"',
    dimensions: [
      { dimension: 'Capabilities', details: 'Background agents. Overnight PRs. Multi-repository operations. Batch task processing. Parallel agent execution.' },
      { dimension: 'Tools', details: 'Background agent runners (Claude Code background, Codex, custom pipelines). Git worktree isolation.' },
      { dimension: 'Human role', details: 'Defines task batches. Reviews completed PRs. Approves merges. Monitors agent fleet health.' },
      { dimension: 'Agent autonomy', details: 'High within bounded tasks. Agents work unsupervised for extended periods.' },
      { dimension: 'Product dimension', details: 'Agents autonomously generate PRDs from user data; PMs review outputs. Design reviews shift to auditing at scale.' },
      { dimension: 'Risk profile', details: 'Elevated. Unsupervised execution means errors may compound before detection.' },
    ],
    assessmentCriteria: [
      'Agents produce PRs asynchronously (not just in interactive sessions)',
      'Human review happens after completion, not during execution',
      'Cost tracking and budgeting is active per agent and per team',
      'Execution traces provide full visibility into agent reasoning and actions',
      'Incident response protocol exists for agent-caused failures',
    ],
    failureMode: '"Confident mistakes" — agents follow stale rules without understanding original tradeoffs. Cost overruns from uncapped execution.',
  },
  {
    level: 5,
    name: 'Orchestrated',
    description: 'Multiple agents coordinate in parallel, managed by orchestration systems.',
    signal: '"An orchestrator dispatches work across a fleet of agents"',
    dimensions: [
      { dimension: 'Capabilities', details: 'Multi-agent coordination. Agent fleet management. Cross-team agent sharing. Agent-to-agent communication.' },
      { dimension: 'Tools', details: 'Custom orchestration platforms. Agent registries. Multi-agent frameworks. Internal skills marketplaces.' },
      { dimension: 'Human role', details: 'Defines objectives and constraints at the system level. Manages the agent fleet. Reviews aggregate output.' },
      { dimension: 'Agent autonomy', details: 'Very high. Orchestrator coordinates; individual agents execute specialized tasks. System-level decisions still human-owned.' },
      { dimension: 'Product dimension', details: 'End-to-end workflows span from user research to shipped feature with agent execution at each stage.' },
      { dimension: 'Risk profile', details: 'High. Emergent behavior from agent interactions. Coordination failures. Cost multiplication.' },
    ],
    assessmentCriteria: [
      'An orchestrator coordinates multiple agents working on related tasks',
      'Agents are shared and reused across teams (internal skills marketplace)',
      'Fleet-level observability tracks all agents, costs, and outcomes in one view',
      'Governance framework (registry, access control, audit) is fully operational',
      'The organization can articulate and enforce policies across the agent fleet',
    ],
    failureMode: 'Coordination failures between agents. Emergent behaviors not covered by individual agent guardrails.',
  },
];
