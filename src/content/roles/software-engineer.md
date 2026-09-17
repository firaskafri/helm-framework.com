---
id: 'software-engineer'
title: 'Software Engineer'
subtitle: 'Build, review and maintain software with AI agents'
description: 'Plan tasks for agents, review their code and take responsibility for the software you release.'
order: 1
publicationStatus: 'published'
frameworkVersion: '1.0.1'
createdAt: '2026-04-01'
lastModified: '2026-09-17'
evidenceReferences: []
category: 'engineering'
evolved_from: ['Frontend Engineer', 'Backend Engineer', 'Full-Stack Engineer']
maps_to: 'Product Engineer'
core_mission: 'Deliver useful software with agents while keeping the code understandable, tested and fit for the product.'
key_responsibilities:
  - 'Define task plans with clear scope, acceptance criteria, and constraints'
  - 'Run the Plan-Execute-Verify-Ship-Learn loop for scoped delivery tasks'
  - 'Review agent-generated code for architectural alignment, edge cases, and security'
  - 'Create and maintain task templates and agent instructions (rules files)'
  - 'Integrate agent output into the product, ensuring it meets UX and product standards'
  - 'Use test results to guide another attempt, then review the change'
  - 'Share useful lessons through examples, tests and task templates'
  - 'Collaborate with PM and Design to translate acceptance criteria into agent-executable plans'
competencies:
  - title: 'Context engineering'
    description: 'Give agents relevant context, clear constraints and examples of the result you need.'
  - title: 'Cross-layer code review'
    description: 'Understand how a change affects frontend, backend and infrastructure. Involve the right expertise when a part needs closer review.'
    evolved_from: 'Programming language and framework experience'
  - title: 'Architectural judgment'
    description: 'Recognize when a change conflicts with the architecture or creates security, reliability or maintenance problems.'
    evolved_from: 'Problem-solving and algorithm skills'
  - title: 'Quality evaluation at volume'
    description: 'Keep review thorough as output increases. Prioritize meaningful checks and keep the workload manageable.'
  - title: 'Product awareness'
    description: 'Check whether the change solves the user’s problem as well as meeting technical requirements.'
  - title: 'System thinking'
    description: 'Trace how a change affects dependencies, interfaces and behavior in use.'
    evolved_from: 'REST API and database experience'
no_longer_screen_for:
  - 'Whiteboard algorithm challenges disconnected from how the team actually ships'
  - 'Arbitrary years-of-experience gates tied to specific framework versions'
  - 'Raw speed of manual typing or line count as a proxy for seniority'
  - 'Syntax recall without examples of applying or checking that knowledge'
  - 'Specialist knowledge without evidence of working across relevant boundaries'
interview_methods:
  - title: 'Code review exercise'
    description: "Evaluate an agent-generated pull request for correctness, security, and fit with the system's architecture."
  - title: 'Task planning'
    description: 'Given a feature request, produce a plan that bounds agent work: scope, non-goals, acceptance criteria, and risk level.'
  - title: 'System design'
    description: 'Discuss decisions agents should not make alone: boundaries, ownership, failure modes, and evolution of the architecture.'
  - title: 'Judgment scenarios'
    description: 'Present flawed agent output and ask what is wrong, and how you would change instructions or rules to prevent recurrence.'
  - title: 'Debugging'
    description: 'Diagnose a subtle defect in agent-generated code that satisfies tests but fails under realistic edge conditions or integration pressure.'
day_in_life: |
  You review three changes prepared by an agent. One is ready. Another breaks sign-in in a case the tests missed, and the third addresses the wrong requirement. You request corrections and add a test for the sign-in failure.

  For the next task, you agree the scope and expected behavior with product and design. You give the agent that context, review its result and share an example of the requirement that was previously misunderstood.
helm_connection: |
  Use [Plan-Execute-Verify-Ship-Learn](/practitioners#the-plan-execute-verify-ship-learn-cycle) to organize the task and the [Task Classification Matrix](/practitioners#task-classification-matrix) to discuss its scope and risk. [Principle 3](/foundation#principle-3-agents-execute-humans-are-accountable) keeps the responsibility clear: people decide what to accept and release.
---

<span id="the-shift"></span>

## Working with agents

Agents can help draft implementations, refactor code and prepare tests. Engineers still need to understand the problem, the code and the system it runs in.

Before delegating, define the task and decide how to check it. Review the result for requirements, integration problems and failures that the agent’s tests may miss.

Keep practicing the coding and debugging skills needed to understand those changes. Take responsibility for what you accept, release and maintain.

<span id="what-the-traditional-job-description-looked-like"></span>

## Experience to discuss

Programming, API, database and framework experience can help someone understand and check an agent’s work. Ask for examples of planning a task, reviewing code and investigating a defect.

Choose examples relevant to the team and discuss the reasoning behind the work, alongside the result.
