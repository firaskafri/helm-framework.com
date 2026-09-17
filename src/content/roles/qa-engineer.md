---
id: 'qa-engineer'
title: 'QA Engineer / SDET'
subtitle: 'Check agent output and the product people use'
description: 'Review agent output against its instructions and check whether the resulting product works for its users.'
order: 5
publicationStatus: 'published'
frameworkVersion: '1.0.1'
createdAt: '2026-04-01'
lastModified: '2026-09-17'
evidenceReferences: []
category: 'product'
evolved_from: ['QA Engineer', 'SDET', 'QA Lead', 'Test Engineer']
maps_to: 'QA Engineer + Evaluation Lead'
core_mission: 'Make sure the team checks both agent output and the resulting product, with clear ownership and follow-up for problems.'
key_responsibilities:
  - 'Evaluation Lead: Design evaluation suites for agent behavior that go beyond conventional unit and integration tests'
  - 'Evaluation Lead: Agree what acceptable output looks like for each workflow'
  - 'Evaluation Lead: Track quality over time and investigate changes'
  - 'Evaluation Lead: Make the agreed checks part of the release decision'
  - 'Evaluation Lead: Automate useful checks and identify where human review is still needed'
  - 'Evaluation Lead: Partner with the AI Architect on what "correct" means per task type'
  - 'QA Engineer: Translate acceptance criteria into testable assertions that reflect real user outcomes'
  - 'QA Engineer: Build or curate suites that stress UX regressions, accessibility, copy, and interaction quality'
  - 'QA Engineer: Monitor product-side drift: issues that clear agent evaluation but still violate user expectations'
  - 'QA Engineer: Coordinate with the Evaluation Lead so coverage spans both agent output and end-to-end product behavior'
  - 'QA Engineer: Review agent-generated UI for design-system fit, accessibility, and interaction quality'
  - 'QA Engineer: Check whether the result works for users during the Verify phase'
competencies:
  - title: 'Evaluation design'
    description: 'Choose meaningful examples and criteria for judging outputs that may have more than one acceptable answer.'
  - title: 'Drift detection'
    description: 'Notice changes in quality over time, including problems individual test runs can miss.'
  - title: 'Product judgment'
    description: 'Assessing experience quality beyond functional pass/fail.'
    evolved_from: 'Test plans and test cases'
  - title: 'Statistical thinking'
    description: 'Understand the limits of a sample and explain what the available evidence supports.'
  - title: 'Automation at scale'
    description: 'Build useful automated checks and plan the human review effort they leave.'
    evolved_from: 'Automation frameworks (Selenium, Cypress, Jest)'
  - title: 'Cross-functional communication'
    description: 'Turning quality signals into concrete, prioritized feedback for engineering and product.'
    evolved_from: 'Bug tracking and regression discipline'
no_longer_screen_for:
  - 'Test execution counts without examples of choosing and investigating meaningful checks'
  - 'Depth in a single framework without judgment about what to automate and why'
  - 'Quality defined only as absence of defects, ignoring intent and experience'
  - 'Assumptions that all code is human-written, reviewed at human cadence, and stable between releases'
  - 'Release checks without involvement in planning and reviewing the work'
interview_methods:
  - title: 'Evaluation design'
    description: 'An agent generates API endpoints. Design an evaluation suite that decides whether the output is production-ready. What do you measure beyond tests passing?'
  - title: 'Drift detection'
    description: 'CI is green on agent PRs, but customer bug reports are up ~15% month over month. How do you investigate?'
  - title: 'Product quality'
    description: 'An agent-built checkout passes all functional tests. What do you still verify? (Probe UX, accessibility, copy, edge cases, trust.)'
  - title: 'Threshold setting'
    description: 'For a task with no single right answer, how do you define "good enough"? Walk through your framework.'
  - title: 'Process design'
    description: 'For a team at Maturity Level 3, design the quality workflow. Where does evaluation run? Where does product QA run? How do they hand off and escalate?'
day_in_life: |
  **Output review:** A generated change passes its tests but mishandles an input missing from the test data. You add that case, explain the expected behavior and ask for a correction.

  **Product review:** A walkthrough reveals an unclear error message and a keyboard trap. You describe the user impact, agree fixes and add checks before release. The team reviews what both kinds of testing missed.
helm_connection: |
  The [Evaluation Lead](/leadership#evaluation-lead) and [QA Engineer](/leadership#qa-engineer) responsibilities contribute to [Layer 2: Quality](/practitioners#layer-2-quality-guardrails) and the [Verify](/practitioners#verify) phase. Agree how your team covers both kinds of review.

  Use [Silent Quality Drift](/leadership#failure-mode-3-silent-quality-drift) and the [KPI Dashboard](/leadership#kpi-dashboard) to investigate cases where test results and user experience disagree.
---

<span id="the-shift"></span>

## Working with agents

Agent-assisted delivery needs checks on the generated work and on the resulting product. Plan those checks with the people who will use their results.

**Agent output quality** asks whether the generated work follows its instructions and meets the relevant checks. **Product quality** asks whether the result works for users, including its behavior, clarity and accessibility.

HELM names these responsibilities **Evaluation Lead** and **QA Engineer**. They need clear ownership, but they need not be separate jobs in every team. Decide based on workload, expertise and risk.

<span id="what-the-traditional-job-description-looked-like"></span>

## Experience to discuss

Discuss how someone chooses tests, investigates conflicting signals and checks the experience of using a product. Use a relevant agent-generated example and ask what automated checks would miss and how they would handle that gap.
