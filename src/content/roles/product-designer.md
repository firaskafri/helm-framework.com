---
title: "Product Designer"
subtitle: "From producing screens to governing the system agents generate from"
description: "Designers produced wireframes, mockups, and polished visuals. When agents can generate UI components from design systems, the production bottleneck evaporates. But agents cannot judge whether the result feels right to a user."
order: 8
category: "product"
evolved_from: ["UX Designer", "UI Designer", "Product Designer", "Interaction Designer"]
maps_to: "Product Designer"
core_mission: "Own the design system agents generate from, uphold design quality and UX coherence across agent-built interfaces, and define interaction standards that preserve user trust."
key_responsibilities:
  - "Maintain the design system as agent instructions: tokens, components, patterns, spacing rules, and interaction standards documented with enough precision that agents follow them reliably"
  - "Review agent-generated UI for design quality, UX coherence, interaction rhythm, and emotional appropriateness—not only literal spec match"
  - "Define design tokens and component specifications as machine-readable inputs (not only Figma artifacts) so agents consume intent, not screenshots"
  - "Shift from designing individual screens to designing the constraints and rules that govern all screens"
  - "Address Agent Experience (AX): flows that work for human users and for agent actors operating on the same product surfaces"
  - "Run design audits at scale—sampling and reviewing agent-generated UI across features to catch consistency and quality drift early"
  - "Embed accessibility (WCAG) in system specifications so accessible output is the default, not a retrofit"
  - "Partner with the QA Engineer on design-system compliance checks in CI so violations surface before release"
competencies:
  - title: "Design system architecture"
    description: "Building and maintaining systems precise enough for generation—tokens, components, patterns, and rules at implementation depth."
    evolved_from: "Design system familiarity"
  - title: "Design governance"
    description: "Moving from primary production to quality control—reviewing, auditing, and correcting agent output at volume without losing standards."
  - title: "Machine-readable specification"
    description: "Expressing design intent in structured forms (token JSON, component APIs, interaction specs) agents can execute against."
  - title: "UX judgment at volume"
    description: "Quickly assessing many agent-generated interfaces while still sensing subtle failures—timing, spacing rhythm, visual weight, tone."
    evolved_from: "UX/UI experience (3-5 years)"
  - title: "Accessibility engineering"
    description: "Baking a11y requirements into the system so compliance is systematic, not heroic last-mile fixes."
    evolved_from: "Implicit accessibility awareness"
  - title: "Cross-functional collaboration"
    description: "Working with engineering and product so requirements land as agent-executable constraints, not ambiguous intent."
    evolved_from: "Research and usability testing"
no_longer_screen_for:
  - "Pixel-perfect production speed as the main proxy for ability"
  - "Portfolios judged primarily on screen count"
  - "Figma or Sketch fluency as a differentiator—tools are table stakes"
  - "Expectation that one designer personally produces every screen in a feature"
  - "Design excellence equated with trend-chasing rather than systemic thinking"
interview_methods:
  - title: "Design system evaluation"
    description: "\"Here is a design system. An agent produced these five screens. Which pass our quality bar, which fail, and why?\""
  - title: "Specification challenge"
    description: "\"Take this pattern and write the spec an agent needs to reproduce it—tokens, spacing, interaction behavior, accessibility.\""
  - title: "Governance scenario"
    description: "\"Your team generates ~80% of UI via agents. How do you keep quality high without reviewing every component?\""
  - title: "AX design"
    description: "\"Design a flow that serves a human user and an agent that must complete the same task programmatically.\""
  - title: "Quality audit"
    description: "\"Review these ten agent-generated components. Where is the system degrading subtly?\""
day_in_life: |
  Something is off with a button variant. Three agent-generated features shipped it with inconsistent padding, and you trace the problem to an ambiguous token definition in the design system. You fix the token, tighten the written spec, and update the machine-readable version so the next agent run gets it right without human correction.

  You audit three agent-built features from the last sprint. Typography hierarchy drifted. Not a one-off — it's a governance gap. You propose updates to the token structure and walk through the fix with the QA Engineer, who'll scope a CI check so this class of drift gets caught automatically.

  Later you draft a new interaction pattern at the precision agents need: states, transitions, focus order, error copy tone, success criteria. Generation and human review share one source of truth. Your work product isn't a folder of screens anymore. It's the **system that produces screens** and the **judgment** that keeps what ships honest.
helm_connection: |
  This role maps to the [Product Designer](/leadership#product-designer) in the [Leadership Guide](/leadership): accountable for how product experience is defined and defended as the organization scales with automation. In the [Practitioner Guide](/practitioners), it sits on [Layer 2: Quality Guardrails](/practitioners#layer-2-quality-guardrails). Design system compliance and accessibility standards are guardrails agents and humans share, not optional polish.

  In the [Operating Loop](/practitioners#the-plan-execute-verify-ship-learn-cycle), the [Verify](/practitioners#verify) phase includes UX review: agent output is treated as candidate work that must pass human-centered criteria before it is accepted. **Shift 2** applies directly: leaders and designers stop optimizing for hands-on screen production and optimize for **constraints, specs, and governance** that shape every generated surface.

  Under the [Decision Rights Matrix](/leadership#decision-rights-matrix), **UX quality standards** and **changes to the design system** carry explicit ownership and approval paths, so speed from agents never outruns the standards that define acceptable experience.
---

## The Shift

An agent can explore twenty screen variations in the time a human designer refines one. Wireframes, mockups, prototypes, polished visuals — the production layer that defined design careers — got fast. What didn't get fast: deciding whether a flow feels trustworthy, whether interaction rhythm matches user expectations, or whether emotional resonance lands. Agents optimize against specification. They can't optimize against felt experience.

So the job shifts. From making screens to governing the system agents build within, and auditing what they ship. Production shrinks. Governance and taste expand. A designer who maintains a design system precise enough that agents consistently produce compliant, coherent UI is more valuable than one who personally draws every frame. This also opens **Agent Experience (AX)** — designing for human users *and* for agent actors that read, navigate, and act on the same surfaces. That dual audience demands constraints, not just comps. It aligns with **Shift 2** in HELM: stop optimizing for hands-on screen production, start **defining constraints** that shape every generated surface.

## What the Traditional Job Description Looked Like

The portfolio was the interview. Three to five years of UX/UI experience. Figma or Sketch proficiency. End-to-end process. Research and usability testing. Wireframes, mockups, high-fidelity prototypes. Design system familiarity was a bonus, not the core. The signal was production skill and visual craft: could you ship the artifact?
