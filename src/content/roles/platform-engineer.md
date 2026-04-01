---
title: "Platform / Infrastructure Engineer"
subtitle: "From CI/CD pipelines to agent infrastructure and governance at scale"
description: "Platform engineers managed CI/CD, container orchestration, and developer experience. A new layer now appears: model hosting, inference serving, agent registries, token budgets, and governance infrastructure."
order: 6
category: "engineering"
evolved_from: ["Platform Engineer", "Infrastructure Engineer", "DevOps Engineer"]
maps_to: "Platform Engineer"
core_mission: "Manage the infrastructure layer that enables reliable, cost-efficient, and governed agent operations at organizational scale."
key_responsibilities:
  - "Manage compute infrastructure for agent execution: model hosting, inference serving, and GPU allocation aligned to workload patterns"
  - "Optimize cost-efficiency at the infrastructure layer—right-sizing inference resources, caching strategies, and model routing so simple work does not pay flagship-model prices"
  - "Build and maintain the governance infrastructure (Layer 5): agent registry, access control systems, and cross-team observability"
  - "Own latency and reliability of model inference in production, including failover, capacity, and degradation paths that teams can reason about"
  - "Manage secrets, API keys, and secure agent-to-system connectivity so autonomous paths do not become unbounded trust"
  - "Build the shared skills and template library infrastructure that teams consume as a product, not as a pile of copy-pasted repos"
  - "Implement interoperability standards (MCP or equivalent) so agents and tools compose across platforms without one-off glue per team"
  - "Extend CI/CD pipelines to include agent-specific verification: evaluation suites, guardrail checks, and cost tracking wired into the same quality bar as code"
competencies:
  - title: "AI infrastructure"
    description: "Model hosting, inference optimization, GPU management, and the workload patterns that distinguish LLM serving from stateless web tiers."
  - title: "Governance engineering"
    description: "Registry, access control, and audit systems for autonomous operations, not only for human users and service accounts."
  - title: "Cost optimization"
    description: "Token-level cost tracking, routing for economic efficiency, and caching strategies tuned to generative workloads."
    evolved_from: "Monitoring and alerting for clusters and services"
  - title: "Platform thinking"
    description: "Treating infrastructure as a product engineering teams adopt; designing agent execution experience with the same rigor once applied to builds and deploys."
    evolved_from: "Developer tooling and inner-loop optimization"
  - title: "Security at the agent layer"
    description: "Secure connectivity between agents and production systems, secret lifecycle, and explicit boundaries when machines act with elevated scope."
  - title: "Scale engineering"
    description: "Systems that survive fleet-level agent operations across many teams and repositories without collapsing into tribal knowledge and shadow endpoints."
    evolved_from: "Kubernetes, cloud, and IaC at scale"
no_longer_screen_for:
  - "Infrastructure experience limited to traditional web application hosting"
  - "Platform work defined purely as \"keeping the build green\" without behavioral or economic SLOs"
  - "DevOps depth that never touches AI-specific infrastructure patterns"
  - "Cost management confined to cloud resource optimization with no literacy in token and inference economics"
  - "Designs that treat every workload as a stateless request"
interview_methods:
  - title: "Infrastructure design"
    description: "\"Design the infrastructure for a team running fifty agent executions per day across three repositories. What do you need?\""
  - title: "Cost modeling"
    description: "\"Model the infrastructure costs for an agent workflow that makes one hundred LLM calls per task, runs twenty tasks per day, and must scale to five teams. Where are the optimization opportunities?\""
  - title: "Governance design"
    description: "\"Design an agent registry that tracks which agents exist, what they can access, who owns them, and what they cost. What is your schema and access model?\""
  - title: "Security scenario"
    description: "\"An agent needs read-write access to a production database to run migration scripts. Design the access control and audit approach.\""
  - title: "Scale planning"
    description: "\"You are expanding from one team using agents to five. What infrastructure changes are required? What breaks first at scale?\""
day_in_life: |
  A team pings you: "We're onboarding three new agent workflows next week — what do we need?" You walk them through the registry: scoped credentials, cost budgets, owners on record. Then you tighten observability so their runs are attributable without slowing them down. Familiar platform work, new surface area.

  A cost spike catches your eye. One workflow keeps hitting the flagship model for routine tasks. You adjust routing so simple work lands on a smaller endpoint and the expensive path is reserved for cases that actually need it. Same instinct as right-sizing instances, applied to inference economics.

  You pair with the **Evaluation Lead** to wire their new evaluation suite into CI: guardrail checks and quality gates that run like tests, failures visible in the same place engineers already look. You close out reviewing weekly cost trends across the fleet and updating governance docs. The craft is familiar. The layer is new.
helm_connection: |
  In the [Leadership Guide](/leadership), the [Platform Engineer](/leadership#platform-engineer) is deliberately **optional early**—small teams can bootstrap—but **required at scale** when shared infrastructure, economics, and governance must hold for many agents and many owners. This role implements [Layer 5: Governance](/practitioners#layer-5-governance) of the [Guardrail Stack](/practitioners#the-guardrail-stack) as running systems: registry, access, audit, and cross-cutting visibility, not slide decks.

  Operationally, the role peaks at [Phase 4: Scale](/leadership#phase-4-scale-days-91-180) on the [Adoption Roadmap](/leadership#adoption-roadmap), when decentralized adoption needs a platform spine. It aligns with [Maturity Model Level 5: Orchestrated](/practitioners#level-5-orchestrated)—orchestration at organization scale assumes platform infrastructure for inference, interoperability, and governed execution. Finally, the [KPI Dashboard](/leadership#kpi-dashboard) depends on what you instrument: token and inference cost tracking, attribution by team and workflow, and trends that leadership can act on before spend or risk becomes a crisis.
---

## The Shift

You're still running clusters and pipelines. But a new layer landed on top: model hosting, inference serving, token budgets, agent registries, and governance infrastructure that didn't exist in the pre-LLM playbook. Platform engineers built the substrate others shipped on — CI/CD, container orchestration, cloud foundations, the inner loop that made teams productive. That work stays. Now you're also running the paths agents use to think, act, and spend.

Traditional developer experience meant fast builds, reliable deploys, sane defaults. **Agent execution experience** asks harder questions. How quickly can an agent start a run? How dependably does it reach tools and data? What does each execution cost in tokens and dollars? How do you attribute that cost across squads and repos? The **Platform Engineer** in HELM is optional when one team experiments. It becomes **critical at Phase 4 (Scale)** of the **Adoption Roadmap**, when fleet behavior and shared governance outgrow ad hoc scripts. That's where **Layer 5 (Governance)** of the **Guardrail Stack** stops being documentation and becomes infrastructure you operate: registry, access, audit, and cost visibility that hold under real load.

## What the Traditional Job Description Looked Like

Pure infrastructure. That was the spec. Kubernetes and a major cloud (AWS, GCP, or Azure). CI/CD pipeline design. Infrastructure as code (Terraform, Pulumi). Developer tooling. Monitoring and alerting for clusters and services. Success was measured in uptime, deploy frequency, and time-to-recovery. Nobody asked about inference latency curves, model routing, or who was allowed to run which agent against production.
