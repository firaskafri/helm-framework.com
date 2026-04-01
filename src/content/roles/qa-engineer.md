---
title: "QA Engineer / SDET"
subtitle: "The role that splits in two — one judges the agent, the other judges the product"
description: "Traditional QA owned all quality. In the AI era, there are two distinct quality surfaces: agent output correctness and product correctness. These require different skills, tools, and perspectives."
order: 5
category: "product"
evolved_from: ["QA Engineer", "SDET", "QA Lead", "Test Engineer"]
maps_to: "QA Engineer + Evaluation Lead"
core_mission: "Own quality across two surfaces — agent output correctness (Evaluation Lead) and product correctness from the user's perspective (QA Engineer) — ensuring both are covered without gaps or duplication."
key_responsibilities:
  - "Evaluation Lead: Design evaluation suites for agent behavior that go beyond conventional unit and integration tests"
  - "Evaluation Lead: Define passing thresholds and quality bars per agent workflow so \"green\" means something operational"
  - "Evaluation Lead: Track quality metrics over time to catch drift early — before it shows up as customer pain or rework"
  - "Evaluation Lead: Enforce evaluation as a precondition to ship: no green eval, no merge"
  - "Evaluation Lead: Build automated evaluation that can validate agent output without defaulting to human-in-the-loop"
  - "Evaluation Lead: Partner with the AI Architect on what \"correct\" means per task type"
  - "QA Engineer: Translate acceptance criteria into testable assertions that reflect real user outcomes"
  - "QA Engineer: Build or curate suites that stress UX regressions, accessibility, copy, and interaction quality"
  - "QA Engineer: Monitor product-side drift: issues that clear agent evaluation but still violate user expectations"
  - "QA Engineer: Coordinate with the Evaluation Lead so coverage spans both agent output and end-to-end product behavior"
  - "QA Engineer: Review agent-generated UI for design-system fit, accessibility, and interaction quality"
  - "QA Engineer: Own \"does it work for the user?\" at every Verify phase of the operating loop"
competencies:
  - title: "Evaluation design"
    description: "Defining eval suites for non-deterministic or open-ended output — where \"correct\" is graded, not always unique."
  - title: "Drift detection"
    description: "Spotting gradual degradation that no single PR or green build exposes."
  - title: "Product judgment"
    description: "Assessing experience quality beyond functional pass/fail."
    evolved_from: "Test plans and test cases"
  - title: "Statistical thinking"
    description: "Setting thresholds, confidence, and sampling when binary gates mislead."
  - title: "Automation at scale"
    description: "Infrastructure that keeps up with high-volume agent output without drowning the team in manual review."
    evolved_from: "Automation frameworks (Selenium, Cypress, Jest)"
  - title: "Cross-functional communication"
    description: "Turning quality signals into concrete, prioritized feedback for engineering and product."
    evolved_from: "Bug tracking and regression discipline"
no_longer_screen_for:
  - "Manual test execution as the primary value proposition"
  - "Depth in a single framework without judgment about what to automate and why"
  - "Quality defined only as absence of defects, ignoring intent and experience"
  - "Assumptions that all code is human-written, reviewed at human cadence, and stable between releases"
  - "QA as a final gate after development, disconnected from the continuous Build-Verify rhythm"
interview_methods:
  - title: "Evaluation design"
    description: "An agent generates API endpoints. Design an evaluation suite that decides whether the output is production-ready. What do you measure beyond tests passing?"
  - title: "Drift detection"
    description: "CI is green on agent PRs, but customer bug reports are up ~15% month over month. How do you investigate?"
  - title: "Product quality"
    description: "An agent-built checkout passes all functional tests. What do you still verify? (Probe UX, accessibility, copy, edge cases, trust.)"
  - title: "Threshold setting"
    description: "For a task with no single right answer, how do you define \"good enough\"? Walk through your framework."
  - title: "Process design"
    description: "For a team at Maturity Level 3, design the quality workflow. Where does evaluation run? Where does product QA run? How do they hand off and escalate?"
day_in_life: |
  **Evaluation Lead:** Overnight metrics show pass rates holding, but you notice something. A class of edge cases never appears in eval data at all. Coverage looks fine because nobody's testing for the thing that hasn't happened yet. You tighten scenarios and thresholds with the AI Architect. Later, you block a merge where eval green-lighted structurally valid code that violates architectural rules for that service. Agent correctness alone doesn't make something product-ready.

  **QA Engineer:** A new feature built mostly by agents passes all functional tests. You walk it anyway. The flow obeys the design system but feels wrong — step order, unclear error states, keyboard traps. Tests don't catch "feels wrong." You do. You file crisp, user-centered issues and update assertions so the next cycle catches the class of failure, not just the instance.

  **Both:** You sync on coverage. Where did eval stop and product QA pick up? What slipped through both? How do today's findings change tomorrow's criteria? Two disciplines, each deep enough to stand alone, wired together to protect the whole system.
helm_connection: |
  This page maps directly to [QA Engineer](/leadership#qa-engineer) and [Evaluation Lead](/leadership#evaluation-lead) in the HELM [Leadership Guide](/leadership), including the explicit split of ownership: agent output correctness versus product correctness. In the [Practitioner Guide](/practitioners), that split lands in [Layer 2: Quality Guardrails](/practitioners#layer-2-quality-guardrails): evaluations and product checks are guardrails, not optional polish. Operationally, both roles anchor the [Verify](/practitioners#verify) phase of the HELM [operating loop](/practitioners#the-plan-execute-verify-ship-learn-cycle) — evaluation before merge and integration, product QA before release confidence.

  [Failure Mode 3: Silent Quality Drift](/leadership#failure-mode-3-silent-quality-drift) is the shared enemy: metrics look fine while experience and agent behavior erode. The [KPI Dashboard](/leadership#kpi-dashboard)'s **Quality** section should reflect both surfaces — agent-eval health and product-quality signals — so leadership sees drift before it becomes a narrative crisis. HELM treats quality as infrastructure for human-first execution; splitting QA into Evaluation Lead and QA Engineer is how that infrastructure stays honest in the AI era.
---

## The Shift

Traditional QA held a single mandate: own quality end to end. Test plans, automation suites, regression cycles, bug triage, release sign-off. One craft, one lens. Does the software behave as specified before it reaches users?

That single lens can't cover what agents produce. Two quality surfaces now sit on top of each other. **Agent output quality**: is the code, copy, or design the agent generated instruction-faithful, structurally sound, and fit to enter the product pipeline? **Product quality**: does what ships actually serve the user — correct behavior, accessible interfaces, coherent experience? The first asks whether the machine did its job well enough to merit scrutiny. The second asks whether the result deserves the user's trust.

Different questions. Different tools. Different mental models. HELM makes the line explicit: **the Evaluation Lead owns agent output correctness; the QA Engineer owns product correctness.** One judges the agent. The other judges the product. Collapsing both into one overloaded job description is how teams end up with gaps in both.

## What the Traditional Job Description Looked Like

The assumption was baked into the org chart: "quality" is one column. One person, one playbook. Postings asked for test plans and test cases, automation framework proficiency (Selenium, Cypress, Jest), CI/CD integration, bug tracking discipline, and SDLC fluency. Technical correctness and user-facing quality were treated as the same problem. They aren't.
