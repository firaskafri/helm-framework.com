---
id: 'foundation'
title: 'Foundation'
subtitle: 'Six simple principles for working with AI agents.'
description: 'Start with six practical principles for people and teams working with AI agents.'
order: 1
audience: 'everyone'
publicationStatus: 'published'
frameworkVersion: '1.0.1'
createdAt: '2026-04-01'
lastModified: '2026-09-17'
evidenceReferences:
  - 'https://www.anthropic.com/engineering/building-effective-agents'
  - 'https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents'
  - 'https://www.bcg.com/publications/2026/scaling-ai-requires-new-processes-not-just-new-tools'
  - 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage'
  - 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-agentic-organization-contours-of-the-next-paradigm-for-the-ai-era'
  - 'https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/agentic-ai-strategy.html'
  - 'https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html'
  - 'https://www.gartner.com/en/articles/top-technology-trends-2026'
  - 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/'
  - 'https://www.chronoinnovation.com/resources/ai-agents-team-structure'
  - 'https://www.bassimeledath.com/blog/levels-of-agentic-engineering'
  - 'https://vibecoding.app/blog/agentic-engineering-for-software-teams'
principles:
  - id: 'principle-1-simplicity-first'
    number: 1
    title: 'Simplicity First'
    quote: 'Start with the simplest solution possible. Only increase complexity when it demonstrably improves outcomes.'
  - id: 'principle-2-redesign-dont-automate'
    number: 2
    title: "Redesign, Don't Automate"
    quote: 'Rethink the work before adding AI. Simplify steps and focus on the result you need.'
  - id: 'principle-3-agents-execute-humans-are-accountable'
    number: 3
    title: 'Agents Execute, Humans Are Accountable'
    quote: 'Agents can help with tasks. People remain responsible for decisions and results.'
  - id: 'principle-4-guardrails-are-non-negotiable'
    number: 4
    title: 'Guardrails Are Non-Negotiable'
    quote: 'Set limits and checks before giving agents more work or freedom.'
  - id: 'principle-5-structure-over-tooling'
    number: 5
    title: 'Structure Over Tooling'
    quote: 'Agree who owns the work, who checks it, and who decides. Tools cannot make those choices for you.'
  - id: 'principle-6-team-wide-adoption-over-individual-mastery'
    number: 6
    title: 'Team-Wide Adoption Over Individual Mastery'
    quote: 'Help the whole team learn how to use and review agent work, rather than relying on a few experts.'
---

## Foundational Principles

HELM helps people work with AI agents while keeping people responsible for the results. These six principles give your team a shared starting point.

Use the [Practitioner Guide](/practitioners) for day-to-day work and the [Leadership Guide](/leadership) to help your team get started and learn together.

### Principle 1: Simplicity First

Start with the simplest approach that could work. A clear request with the right background information may be enough.

If the task needs several steps, try a repeatable workflow. Give an agent more freedom only when the task needs it and you can check the result. Add more agents only when they make the work better.

**Try it:** choose one task and compare the result, time, and effort before adding more complexity.

### Principle 2: Redesign, Don't Automate

Before asking an agent to follow your current process, look at the result you need. Which steps help? Which create unnecessary work? Some workflows need a small change; others may benefit from a fresh approach.

**Try it:** sketch one workflow with your team. Simplify it first, then decide where an agent could help.

### Principle 3: Agents Execute, Humans Are Accountable

An agent can carry out tasks and prepare drafts. People remain responsible for decisions and results. Use these examples to agree how work is shared:

| Agents Can Help With                       | Humans Remain Responsible For            |
| ------------------------------------------ | ---------------------------------------- |
| First drafts of text, code, or designs     | What the work needs to achieve           |
| Routine steps with clear instructions      | Which work is suitable to delegate       |
| Ideas for checks and tests                 | Whether the result is good enough to use |
| Summaries and options to support decisions | Final decisions and their consequences   |

**Try it:** before delegating a task, name the person who will check it and decide whether it is ready. Make sure the agent can stop and ask for help when it reaches a limit.

### Principle 4: Guardrails Are Non-Negotiable

Guardrails are the limits and checks that help prevent mistakes. Put them in place before giving agents more work or freedom.

HELM’s [five-layer checklist](/practitioners#the-guardrail-stack) asks what the agent can access, how work is checked, which rules apply, when a person must decide, and how the team keeps track of what happened.

**Try it:** agree what the agent may read or change, restrict its access accordingly, and decide what must be checked before sharing the result. Written instructions alone do not restrict access.

### Principle 5: Structure Over Tooling

Tools cannot resolve unclear responsibilities. Agree who owns the work, who reviews it, and who makes the final decision. You may be able to do this within your existing team.

**Try it:** pick one recurring decision and name its owner. Make sure everyone knows whom to ask when work gets stuck.

### Principle 6: Team-Wide Adoption Over Individual Mastery

Agent work still moves through a team. If only a few people know how to create or review it, handoffs can become difficult. Help people learn together without treating one person’s skill level as a score for the whole team.

**Try it:** share one useful example, review it together, and choose a skill to practice. Make time for questions and support.

---

## Further Reading

These articles offer practical advice, surveys, and authors’ experiences. They can help you explore the ideas further; they do not guarantee results for your team.

- [_Building Effective Agents_](https://www.anthropic.com/engineering/building-effective-agents) — Anthropic
- [_A Practical Guide to Building Agents_](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents) — OpenAI
- [_Scaling AI Requires New Processes_](https://www.bcg.com/publications/2026/scaling-ai-requires-new-processes-not-just-new-tools) — BCG
- [_Seizing the Agentic AI Advantage_](https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage) — McKinsey
- [_The Agentic Organization_](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-agentic-organization-contours-of-the-next-paradigm-for-the-ai-era) — McKinsey
- [_Agentic AI Strategy_](https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/agentic-ai-strategy.html) — Deloitte
- [_State of AI in the Enterprise 2026_](https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html) — Deloitte
- [_Top Strategic Technology Trends 2026_](https://www.gartner.com/en/articles/top-technology-trends-2026) — Gartner
- [_Cloud Adoption Framework_](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/) — Microsoft
- [_Building AI Agents Without Organizational Chaos_](https://www.chronoinnovation.com/resources/ai-agents-team-structure) — Chrono Innovation
- [_The 8 Levels of Agentic Engineering_](https://www.bassimeledath.com/blog/levels-of-agentic-engineering) — Eledath
- [_Agentic Engineering for Software Teams_](https://vibecoding.app/blog/agentic-engineering-for-software-teams) — vibecoding.app

---

## Where to Go Next

These six principles are the foundation. The rest of HELM puts them to work:

- **[Practitioner Guide](/practitioners)** — Choose tasks, set limits, check results, and learn from the work.
- **[Leadership Guide](/leadership)** — Agree responsibilities, support learning, and review team results.
- **[Role Guides](/roles)** — Discuss how responsibilities and skills may change in your role.
