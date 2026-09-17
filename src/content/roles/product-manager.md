---
id: 'product-manager'
title: 'Product Manager'
subtitle: 'Make goals clear and help your team build what users need'
description: 'Help your team solve the right problems with AI agents: make goals clear, agree what good results look like, and check what users need.'
order: 7
publicationStatus: 'published'
frameworkVersion: '1.0.1'
createdAt: '2026-04-01'
lastModified: '2026-09-17'
evidenceReferences: []
category: 'product'
evolved_from: ['Product Manager', 'Product Owner', 'Business Analyst']
maps_to: 'Product Manager'
core_mission: 'Help the team solve a useful problem, make the expected result clear and check the effect on users after delivery.'
key_responsibilities:
  - 'Explain what to build and why during the Plan phase'
  - 'Write clear acceptance criteria that people and agents can use to check the result'
  - "Review agent output for product correctness: does the feature solve the user's problem?"
  - 'Choose the detail the task needs, including constraints and examples of acceptable results'
  - 'Track product outcome metrics (adoption, retention, satisfaction) alongside delivery metrics'
  - 'Review whether delivered work addresses the intended user need'
  - 'Discuss priorities with engineering, including feasibility, cost and trade-offs'
  - 'Participate in the Verify phase, validating that agent output meets product acceptance criteria before release'
competencies:
  - title: 'Precision requirements writing'
    description: 'Write requirements with enough context and examples for someone to implement and review them.'
    evolved_from: 'Writing detailed PRDs and user stories'
  - title: 'Product judgment at speed'
    description: 'Review priorities and quality when several agent-assisted changes are ready at once.'
    evolved_from: 'Product strategy and roadmap ownership'
  - title: 'Outcome orientation'
    description: 'Review user outcomes alongside delivery measures and explain what each measure can tell the team.'
    evolved_from: 'Backlog prioritization by business value'
  - title: 'Agent capability awareness'
    description: 'Know what agents do well and where human judgment must intervene, and shape requirements accordingly.'
  - title: 'Constraint-based thinking'
    description: 'Explain the requirements and limits a solution must respect, and specify steps where the task needs them.'
  - title: 'Data-informed iteration'
    description: 'Use the Learn phase to improve requirement templates and criteria based on what actually shipped and how users responded.'
    evolved_from: 'Managing stakeholder expectations'
no_longer_screen_for:
  - 'Document volume without evidence that the requirements helped the team'
  - 'Planning-tool expertise without examples of product decisions'
  - 'Status reporting without evidence of resolving questions or disagreements'
  - 'Backlog activity without an explanation of priorities and outcomes'
  - '"Experience with Agile/Scrum" as a differentiating qualification on its own'
interview_methods:
  - title: 'Requirements precision'
    description: '"Write acceptance criteria for a ''forgot password'' flow that an agent would execute against. What makes your criteria agent-executable versus vague?"'
  - title: 'Product judgment'
    description: '"An agent built a feature in two hours that satisfies every acceptance criterion. Adoption is flat. What do you investigate first?"'
  - title: 'Constraint definition'
    description: 'An agent will draft a pricing page. What facts, constraints, examples and review steps should its brief include?'
  - title: 'Velocity vs. direction'
    description: '"Your team shipped three times more features this quarter; NPS fell five points. Diagnose and propose a correction."'
  - title: 'Collaboration'
    description: '"The AI Architect says a feature is feasible but triples the token budget. The designer says the UX depends on it. Walk through your decision process."'
day_in_life: |
  Support reports that users are abandoning a recently released flow. It meets the written criteria, but its second step is confusing. You work with design and engineering to understand the problem and agree a change.

  For the next task, you include an example of the user’s goal and the confusing case. You review the result with the team, check what users do with it and update the brief where assumptions proved wrong.
helm_connection: |
  The [Product Manager](/leadership#product-manager) responsibilities contribute to **Plan** and **Verify** in the [operating loop](/practitioners#the-plan-execute-verify-ship-learn-cycle). Use the [Decision Rights Matrix](/leadership#decision-rights-matrix) to agree who owns priorities, requirements and release decisions.

  [Velocity Without Direction](/leadership#failure-mode-6-velocity-without-direction) and the [Product Outcome KPIs](/leadership#product-outcome-kpis) help frame questions about results. [Principle 2](/foundation#principle-2-redesign-dont-automate) asks the team to reconsider the work before adding agent steps.
---

<span id="the-shift"></span>

## Working with agents

Product managers help the team choose problems worth solving and explain what a useful result would look like. Agent-assisted delivery needs that context.

A request such as “make checkout better” leaves important choices open. Describe the user’s problem, relevant constraints and how the team will check whether the change helps.

Keep the brief as short as the task allows. Agree decision boundaries with engineering and design, and use findings from real work to improve the next brief.

<span id="what-the-traditional-job-description-looked-like"></span>

## Experience to discuss

Discuss a difficult product choice, how the person understood the problem and what they learned after delivery. Ask how they communicated with the team and used evidence to revisit a decision. Include agent-assisted examples where they fit the work.
