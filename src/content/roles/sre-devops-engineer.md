---
id: 'sre-devops-engineer'
title: 'SRE / DevOps Engineer'
subtitle: 'Monitor agent behavior, cost and recovery alongside service reliability'
description: 'Plan monitoring and recovery for agent-assisted systems, including incorrect outputs, repeated actions and unexpected costs.'
order: 4
publicationStatus: 'published'
frameworkVersion: '1.0.1'
createdAt: '2026-04-01'
lastModified: '2026-09-17'
evidenceReferences: []
category: 'engineering'
evolved_from:
  ['Site Reliability Engineer', 'DevOps Engineer', 'Infrastructure Engineer']
maps_to: 'AI Reliability Engineer'
core_mission: 'Own observability, cost measurement, failure recovery, and guardrail enforcement across both traditional infrastructure and agent operations.'
key_responsibilities:
  - 'Define and implement the Guardrail Stack (all five layers) in collaboration with the AI Architect'
  - 'Monitor cost per agent execution and investigate unexpected spending'
  - 'Build observability for agent operations: execution traces, token usage, failure rates, and latency per agent workflow'
  - 'Detect and recover from incorrect outputs, actions outside scope, repeated retries and cost overruns'
  - 'Run incident response for agent-related failures, including postmortems that improve guardrails, not only runbooks'
  - 'Implement and enforce policy guardrails: secret scanning, PII filtering, safety classification, and dependency policies'
  - 'Agree service-level objectives for agent tasks, including quality, response time and cost'
  - 'Enforce governance policies at runtime (Layer 5): monitor agent compliance with registry rules, access boundaries, and cost budgets; escalate violations'
competencies:
  - title: 'Agent failure mode expertise'
    description: 'Recognize incorrect outputs, repeated actions and scope errors that ordinary health checks may miss.'
  - title: 'Observability design'
    description: 'Monitor the quality and behavior of agent workflows as well as service availability.'
    evolved_from: 'SLA/SLO definition (availability and latency)'
  - title: 'Cost engineering'
    description: 'Attribute costs to workflows, set useful budget alerts and compare savings with any effect on quality.'
  - title: 'Guardrail implementation'
    description: 'Translating policy into automated enforcement, from secret scanning and PII detection to safety classification and dependency rules.'
  - title: 'Incident response for AI systems'
    description: 'Adapting detection, communication, and postmortem practice when the trigger is an agent workflow rather than a failed deploy.'
    evolved_from: 'Incident response and blameless postmortems'
  - title: 'Governance enforcement'
    description: 'Check access, ownership records and budgets during operation. Coordinate with the people who maintain the shared infrastructure.'
no_longer_screen_for:
  - 'Purely infrastructure-focused experience with no application-layer or data-flow awareness'
  - 'Expertise limited to container orchestration and CI/CD pipelines without ownership of behavioral or economic SLOs'
  - 'Incident response habits that assume deterministic failure modes and static blast-radius models'
  - 'Cost management confined to compute, storage, and network with no fluency in token economics and agent run patterns'
  - 'Monitoring strategies that stop at binary up/down checks and miss drift, abuse, and quality erosion'
interview_methods:
  - title: 'Incident scenario'
    description: '"An agent generated and merged a pull request overnight that passes all tests but introduced a subtle security vulnerability. Walk through your detection and response process."'
  - title: 'Observability design'
    description: '"Design the monitoring dashboard for a team running five different agent workflows. What metrics do you track? What alerts do you set?"'
  - title: 'Cost analysis'
    description: '"Agent costs increased three hundred percent this month. Walk through your investigation and mitigation approach."'
  - title: 'Guardrail design'
    description: '"Define the guardrail stack for an agent with access to a production database. Which layers do you implement, and in what order?"'
  - title: 'Failure mode analysis'
    description: '"List five ways an autonomous coding agent can fail that a traditional CI/CD pipeline would not catch."'
day_in_life: |
  A workflow passes its health checks, but its total cost has risen. You trace repeated calls to a tool that times out. You limit retries, confirm the workflow still completes useful tasks and add an alert for the total spending pattern.

  Later, you review an incident caused by a migration that failed on production data. You work with engineering on the fix, recovery steps and a test for the missing case, then update the runbook.
helm_connection: |
  The [AI Reliability Engineer](/leadership#ai-reliability-engineer) responsibilities connect to the [Guardrail Stack](/practitioners#the-guardrail-stack). Use the [Decision Rights Matrix](/leadership#decision-rights-matrix) to agree who can approve access, accept risk and decide on recovery.

  [Silent Quality Drift](/leadership#failure-mode-3-silent-quality-drift) and [Governance Gap](/leadership#failure-mode-5-governance-gap) describe problems to investigate. [Principle 4](/foundation#principle-4-guardrails-are-non-negotiable) asks teams to put appropriate limits and checks in place before expanding agent use.
---

<span id="the-shift"></span>

## Working with agents

Reliability work includes availability, performance and recovery. When agents interact with a system, also check what they can access, which actions they take and whether their results are useful.

A service can stay reachable while an agent repeatedly calls a failing tool or produces incorrect results. Choose monitoring that can reveal those problems and agree when a person should intervene.

Distinguish an agent helping investigate an incident from an agent allowed to change production. Each needs clear access limits, review and recovery arrangements.

<span id="what-the-traditional-job-description-looked-like"></span>

## Experience to discuss

Discuss monitoring, incident response and recovery using examples from relevant systems. Ask how the person would notice a failure, communicate its impact and check that the system has recovered. Add questions about agent behavior and cost when the role covers them.
