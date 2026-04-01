---
title: "SRE / DevOps Engineer"
subtitle: "From monitoring infrastructure to monitoring the machines that monitor the machines"
description: "SREs monitored uptime, managed infrastructure, and responded to incidents. These responsibilities remain, but expand to an entirely new failure surface: agent operations — hallucinations, cost spirals, scope drift, and silent quality degradation."
order: 4
category: "engineering"
evolved_from: ["Site Reliability Engineer", "DevOps Engineer", "Infrastructure Engineer"]
maps_to: "AI Reliability Engineer"
core_mission: "Own observability, cost measurement, failure recovery, and guardrail enforcement across both traditional infrastructure and agent operations."
key_responsibilities:
  - "Define and implement the Guardrail Stack (all five layers) in collaboration with the AI Architect"
  - "Monitor cost per agent execution and flag unsustainable patterns before they become budget crises"
  - "Build observability for agent operations: execution traces, token usage, failure rates, and latency per agent workflow"
  - "Manage failure detection and recovery for agent-specific failure modes—hallucination, scope drift, retry spirals, and cost overruns"
  - "Run incident response for agent-related failures, including postmortems that improve guardrails, not only runbooks"
  - "Implement and enforce policy guardrails: secret scanning, PII filtering, safety classification, and dependency policies"
  - "Define SLOs for agent operations—cost per task, success rate, latency bounds—alongside traditional infrastructure SLOs"
  - "Enforce governance policies at runtime (Layer 5): monitor agent compliance with registry rules, access boundaries, and cost budgets; escalate violations"
competencies:
  - title: "Agent failure mode expertise"
    description: "Understanding how agents fail differently from deterministic software: stochastic outputs, plausible mistakes, cost multiplication, and scope drift that bypasses conventional tests."
  - title: "Observability design"
    description: "Building monitoring for non-deterministic operations where identical inputs do not guarantee identical outputs, and where \"green\" infra can mask behavioral failure."
    evolved_from: "SLA/SLO definition (availability and latency)"
  - title: "Cost engineering"
    description: "Token-level cost tracking, budget alerting, chargeback or showback discipline, and optimization for AI workloads without starving legitimate use."
  - title: "Guardrail implementation"
    description: "Translating policy into automated enforcement, from secret scanning and PII detection to safety classification and dependency rules."
  - title: "Incident response for AI systems"
    description: "Adapting detection, communication, and postmortem practice when the trigger is an agent workflow rather than a failed deploy."
    evolved_from: "Incident response and blameless postmortems"
  - title: "Governance enforcement"
    description: "Runtime monitoring and enforcement of governance policies (registry compliance, access boundaries, cost budgets) across agent operations. Distinct from the Platform Engineer who builds the governance infrastructure itself."
no_longer_screen_for:
  - "Purely infrastructure-focused experience with no application-layer or data-flow awareness"
  - "Expertise limited to container orchestration and CI/CD pipelines without ownership of behavioral or economic SLOs"
  - "Incident response habits that assume deterministic failure modes and static blast-radius models"
  - "Cost management confined to compute, storage, and network with no fluency in token economics and agent run patterns"
  - "Monitoring strategies that stop at binary up/down checks and miss drift, abuse, and quality erosion"
interview_methods:
  - title: "Incident scenario"
    description: "\"An agent generated and merged a pull request overnight that passes all tests but introduced a subtle security vulnerability. Walk through your detection and response process.\""
  - title: "Observability design"
    description: "\"Design the monitoring dashboard for a team running five different agent workflows. What metrics do you track? What alerts do you set?\""
  - title: "Cost analysis"
    description: "\"Agent costs increased three hundred percent this month. Walk through your investigation and mitigation approach.\""
  - title: "Guardrail design"
    description: "\"Define the guardrail stack for an agent with access to a production database. Which layers do you implement, and in what order?\""
  - title: "Failure mode analysis"
    description: "\"List five ways an autonomous coding agent can fail that a traditional CI/CD pipeline would not catch.\""
day_in_life: |
  Everything looks green. That's the problem. An agent workflow passed all health checks over the weekend, but the cost curve tells a different story: one workflow burned through 3x its normal token budget. No alert fired because the threshold was set per-run, and the agent just ran more often. You dig into traces and find a retry loop — brittle prompt, downstream timeout, not a broken cluster. You tighten timeouts, adjust guardrails, and file a follow-up so the prompt owner sees the signal before the next budget surprise.

  You pair with security on a new policy guardrail: PII detection on agent-generated API responses, with routing logic for block, redact, or escalate. Familiar SRE craft — pipelines, policies, dashboards — just applied to outputs that used to be exclusively human-written. Later you facilitate a postmortem on a weekend incident: an agent-authored migration script that passed review and staging but failed on a production-only data shape. The fix matters less than the guardrail update: stricter pre-merge checks, a required human gate for schema-affecting agent changes, revised alert thresholds.

  You update guardrail docs and alert baselines so next week's on-call inherits a system that learned something. Classic reliability rhythm — observe, respond, codify — except the fleet now includes agents, and "healthy" means correct behavior and sustainable cost, not just green pods.
helm_connection: |
  This role maps to the [AI Reliability Engineer](/leadership#ai-reliability-engineer) in the [Leadership Guide](/leadership): the counterpart who treats agent risk, cost, and governance as first-class operational concerns, not an appendix to platform work. Day-to-day practice should align with the [Practitioner Guide](/practitioners)'s full [Guardrail Stack](/practitioners#the-guardrail-stack), all five layers implemented as a system rather than a checklist, so enforcement, visibility, and accountability stay coherent as agent adoption spreads.

  The [Decision Rights Matrix](/leadership#decision-rights-matrix) matters here in concrete terms: who may spend token budget at what threshold, who can approve production data access for agents, and who owns rollback when guardrails fire at scale. [Principle 4: Guardrails Are Non-Negotiable](/foundation#principle-4-guardrails-are-non-negotiable) states the norm; the AI Reliability Engineer supplies the instrumentation and enforcement that make it real. From the Leadership Guide's failure taxonomy, [Failure Mode 3: Silent Quality Drift](/leadership#failure-mode-3-silent-quality-drift) and [Failure Mode 5: Governance Gap](/leadership#failure-mode-5-governance-gap) are directly in scope: drift that never trips a ping, and fragmentation where no one owns registry, access, or audit across teams. Closing that gap is the job.
---

## The Shift

Is the system up? Performant? Recoverable? SREs and DevOps engineers owned that question. They defined SLOs, carried pagers, turned incidents into durable improvements. That mandate doesn't disappear. But the shape of the system under care changed. Autonomous agents added a parallel runtime — one that issues API calls, mutates configuration, spends money by the token, and can look perfectly healthy on every traditional check while behaving badly in ways no load balancer will surface.

Agents fail differently from deterministic software. Hallucinated endpoints. Confident retries that multiply cost. Policy drift as prompts evolve. PII leaking through generative paths. Slow quality erosion that never trips a binary alert. Traditional SRE answers "is the service reachable?" The **AI Reliability Engineer** answers a harder question: is the service reachable, are agents acting within intent and policy, and are the economics sustainable?

That's **HELM Principle 4 — Guardrails Are Non-Negotiable** made operational. Reliability now requires the full **Guardrail Stack**: layered enforcement from prompt and tool constraints through runtime policy, observability, human gates, and governance at scale. The SRE mindset (measure, alert, learn) still applies. The instrumentation and failure taxonomy have to catch up to stochastic, agent-shaped risk.

## What the Traditional Job Description Looked Like

If you've interviewed for SRE, you know the loop. Kubernetes, Docker, Terraform. On-call ownership. SLO definition tied to availability and latency. Incident response, blameless postmortems, action items that stuck. CI/CD hardening. Maybe a story about reducing MTTR or trimming error budgets. Interviews rewarded depth in orchestration, networking, and automation, with limited expectation that you'd reason about application semantics or product-level tradeoffs. The success metric was simple: keep the platform stable and the deploy path safe.
