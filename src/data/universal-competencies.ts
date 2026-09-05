import {
  assertConsecutiveOrder,
  assertNonEmpty,
  assertUniqueIds,
} from '../lib/contentIntegrity';

export const UNIVERSAL_COMPETENCIES = [
  {
    id: 'context-engineering',
    order: 1,
    title: 'Context Engineering',
    description:
      'Structuring prompts, rules files, and task plans that produce high-quality agent output. The quality of the input determines the quality of the output.',
  },
  {
    id: 'agent-output-evaluation',
    order: 2,
    title: 'Agent Output Evaluation',
    description:
      'Reading, reviewing, and judging work you did not produce, at volume, without rubber-stamping. The most critical skill in the AI era.',
  },
  {
    id: 'architectural-boundary-judgment',
    order: 3,
    title: 'Architectural Boundary Judgment',
    description:
      'Knowing what agents should and should not do. Drawing the line between agent-executable tasks and human-led decisions.',
  },
  {
    id: 'cross-layer-fluency',
    order: 4,
    title: 'Cross-Layer Fluency',
    description:
      'Working across the full stack because agents do not respect layer boundaries. A single agent action can span frontend, backend, and infrastructure.',
  },
  {
    id: 'outcome-orientation',
    order: 5,
    title: 'Outcome Orientation',
    description:
      'Measuring success by product impact, not production volume. When agents multiply output, the only meaningful metric is whether users are better off — not how many PRs merged or stories closed.',
  },
  {
    id: 'continuous-learning-disposition',
    order: 6,
    title: 'Continuous Learning Disposition',
    description:
      'Tools, models, and patterns change quarterly. The ability to unlearn, relearn, and adapt is a core competency, not a nice-to-have.',
  },
] as const;

assertNonEmpty('Universal competencies', UNIVERSAL_COMPETENCIES);
assertUniqueIds('Universal competencies', UNIVERSAL_COMPETENCIES);
assertConsecutiveOrder(
  'Universal competencies',
  UNIVERSAL_COMPETENCIES.map(({ order }) => order),
);
