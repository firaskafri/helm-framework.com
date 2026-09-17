/** Plain-language tips shown beside the relevant guidance, never review records. */
const READING_NOTES: Record<string, string> = {
  'fnd-guardrails':
    'Use the five layers as a starting checklist. Written instructions alone do not restrict access, and passing automated checks does not guarantee the work is ready.',
  'agent-anatomy':
    'These five parts are a simple way to understand an agent. Products combine them differently; check which parts your task actually needs.',
  workflows:
    'A workflow follows steps you define. An agent chooses steps as it goes. Compare the quality, cost, and time needed for your task before choosing.',
  'tool-risk':
    'Reading data can still expose private information. Consider what each tool can see or change, who could be affected, and whether a mistake can be undone.',
  patterns:
    'These patterns are starting points. Their complexity depends on your task, so try a simple option and check the result before adding more.',
  'operating-loop':
    'Try the loop on one task, then discuss what helped and what to change. It is a suggested working practice, not a promise of faster delivery.',
  classification:
    'Use the examples to start a discussion. Before delegating, check the agent’s access, the possible consequences, and what your checks might miss.',
  maturity:
    'Use the levels to discuss working practices, not to score people. More independent agent work does not automatically mean better work, and one person’s level is not a tested measure of the whole team.',
  'org-model':
    'Start with one workflow and clear responsibilities. Using agents does not by itself mean you need to reorganize your team.',
  staffing:
    'The roles and team sizes are examples to adapt. Decide who covers each responsibility based on your work; each responsibility need not be a separate job.',
  'decision-rights':
    'Where the table names two roles, agree who makes the final decision and who must be consulted before you use it. The table alone does not settle that choice.',
  adoption:
    'The dates and targets are examples for planning, not deadlines or proof that a team is ready. Move forward when your team can check the work reliably.',
  kpis: 'Use the measures to ask questions about team results. More tests or fewer rejected drafts can have several explanations; neither proves improvement on its own.',
  failures:
    'These examples suggest things to investigate. They are not measured results or proof that one cause explains your team’s experience.',
  'role-guidance':
    'Adapt the responsibilities and skills to the work your team does. The questions and example day support discussion and learning; they are not a scoring system for people.',
  'competency-percentages':
    'The percentages describe the skills listed in each guide. They do not measure a person’s ability, readiness, or skill gap.',
};

export function readingNote(id: string): string {
  const note = READING_NOTES[id];
  if (!note) throw new Error(`Missing reader-facing explanation: ${id}`);
  return note;
}
