---
id: 'platform-engineer'
title: 'Platform / Infrastructure Engineer'
subtitle: 'Provide dependable shared tools for agent-assisted work'
description: 'Help teams run agent workflows with appropriate access, reliable infrastructure and clear information about cost and usage.'
order: 6
publicationStatus: 'published'
frameworkVersion: '1.0.1'
createdAt: '2026-04-01'
lastModified: '2026-09-17'
evidenceReferences: []
category: 'engineering'
evolved_from:
  ['Platform Engineer', 'Infrastructure Engineer', 'DevOps Engineer']
maps_to: 'Platform Engineer'
core_mission: 'Provide shared infrastructure that teams can use reliably, with clear access, ownership and cost controls.'
key_responsibilities:
  - 'Manage the execution infrastructure the product needs, including model hosting when applicable'
  - 'Compare resource sizing, caching and model routing using both cost and output quality'
  - 'Build and maintain the governance infrastructure (Layer 5): agent registry, access control systems, and cross-team observability'
  - 'Own latency and reliability of model inference in production, including failover, capacity, and degradation paths that teams can reason about'
  - 'Manage credentials and connections so each agent has only the access it needs'
  - 'Provide a maintainable way for teams to share useful instructions and templates'
  - 'Use common tool interfaces where they reduce integration and maintenance work'
  - 'Extend CI/CD pipelines to include agent-specific verification: evaluation suites, guardrail checks, and cost tracking wired into the same quality bar as code'
competencies:
  - title: 'AI infrastructure'
    description: 'Model hosting, inference optimization, GPU management, and the workload patterns that distinguish LLM serving from stateless web tiers.'
  - title: 'Governance engineering'
    description: 'Registry, access control, and audit systems for autonomous operations, not only for human users and service accounts.'
  - title: 'Cost optimization'
    description: 'Token-level cost tracking, routing for economic efficiency, and caching strategies tuned to generative workloads.'
    evolved_from: 'Monitoring and alerting for clusters and services'
  - title: 'Platform thinking'
    description: 'Understand what teams need from shared tools, make those tools usable and respond to feedback.'
    evolved_from: 'Developer tooling and inner-loop optimization'
  - title: 'Security at the agent layer'
    description: 'Secure connectivity between agents and production systems, secret lifecycle, and explicit boundaries when machines act with elevated scope.'
  - title: 'Scale engineering'
    description: 'Plan shared capacity, ownership and operating support as more teams use agent workflows.'
    evolved_from: 'Kubernetes, cloud, and IaC at scale'
no_longer_screen_for:
  - 'Hosting experience without discussion of the workloads this role will support'
  - 'Build success without evidence about behavior, reliability or cost in use'
  - 'Tool expertise without examples of supporting the teams who use it'
  - 'Cost savings without checking the effect on quality and reliability'
  - 'Design assumptions that do not fit long-running or stateful agent tasks'
interview_methods:
  - title: 'Infrastructure design'
    description: '"Design the infrastructure for a team running fifty agent executions per day across three repositories. What do you need?"'
  - title: 'Cost modeling'
    description: '"Model the infrastructure costs for an agent workflow that makes one hundred LLM calls per task, runs twenty tasks per day, and must scale to five teams. Where are the optimization opportunities?"'
  - title: 'Governance design'
    description: '"Design an agent registry that tracks which agents exist, what they can access, who owns them, and what they cost. What is your schema and access model?"'
  - title: 'Security scenario'
    description: '"An agent needs read-write access to a production database to run migration scripts. Design the access control and audit approach."'
  - title: 'Scale planning'
    description: '"You are expanding from one team using agents to five. What infrastructure changes are required? What breaks first at scale?"'
day_in_life: |
  A team is adding an agent workflow. You help it set access limits, record the owner and agree a budget. You check that monitoring can attribute each run and its costs to the workflow.

  Another workflow is expensive to run. You compare a smaller model on representative tasks before changing its routing. With the people reviewing its outputs, you check whether the cheaper option meets the same requirements.
helm_connection: |
  The [Platform Engineer](/leadership#platform-engineer) responsibilities support [Layer 5: Governance](/practitioners#layer-5-governance). Use [Phase 4: Scale](/leadership#phase-4-scale-days-91-180) to review shared infrastructure and support before expanding to more teams.

  The [KPI Dashboard](/leadership#kpi-dashboard) helps organize cost and usage information. Agree how those measures will guide decisions about the platform.
---

<span id="the-shift"></span>

## Working with agents

Platform engineers provide tools and infrastructure that teams share. Agent-assisted work may need execution environments, credentials, usage records and cost controls. Products that host their own models may also need inference infrastructure.

Start from the workloads and support people actually need. Check whether teams can run tasks, reach the right tools and understand the cost without gaining unnecessary access. Decide whether dedicated staffing is useful based on the ongoing work.

<span id="what-the-traditional-job-description-looked-like"></span>

## Experience to discuss

Discuss how someone has made shared services useful and dependable. Where agent workflows are part of the job, include questions about access, long-running tasks, cost and support. Model-hosting expertise is relevant when the product requires it.
