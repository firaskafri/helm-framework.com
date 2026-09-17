---
id: 'product-designer'
title: 'Product Designer'
subtitle: 'Design clear experiences and review agent-generated interfaces'
description: 'Give people and agents useful design guidance, then check the resulting interfaces for usability, consistency and accessibility.'
order: 8
publicationStatus: 'published'
frameworkVersion: '1.0.1'
createdAt: '2026-04-01'
lastModified: '2026-09-17'
evidenceReferences: []
category: 'product'
evolved_from:
  ['UX Designer', 'UI Designer', 'Product Designer', 'Interaction Designer']
maps_to: 'Product Designer'
core_mission: 'Help the team design and build interfaces that people can understand and use, with clear guidance for agent-generated work.'
key_responsibilities:
  - 'Maintain design-system components, values and examples that people and agents can use'
  - 'Review generated interfaces for usability, visual consistency, tone and interaction behavior'
  - 'Provide reusable design values and component specifications alongside visual examples'
  - 'Design individual interactions and improve the shared guidance they depend on'
  - 'Address Agent Experience (AX): flows that work for human users and for agent actors operating on the same product surfaces'
  - 'Run design audits at scale—sampling and reviewing agent-generated UI across features to catch consistency and quality drift early'
  - 'Include accessibility requirements in design specifications and verify them in the interface'
  - 'Partner with the QA Engineer on design-system compliance checks in CI so violations surface before release'
competencies:
  - title: 'Design system architecture'
    description: 'Maintain reusable components, design values, states and examples at the detail implementation needs.'
    evolved_from: 'Design system familiarity'
  - title: 'Design governance'
    description: 'Set clear review standards, check generated work and use findings to improve the design system.'
  - title: 'Machine-readable specification'
    description: 'Expressing design intent in structured forms (token JSON, component APIs, interaction specs) agents can execute against.'
  - title: 'UX judgment at volume'
    description: 'Review generated interfaces for task flow, timing, spacing, visual hierarchy and tone.'
    evolved_from: 'UX/UI experience (3-5 years)'
  - title: 'Accessibility engineering'
    description: 'Design for accessibility and combine automated checks with keyboard, assistive-technology and user testing where needed.'
    evolved_from: 'Implicit accessibility awareness'
  - title: 'Cross-functional collaboration'
    description: 'Agree requirements and constraints with engineering and product, using examples to resolve ambiguity.'
    evolved_from: 'Research and usability testing'
no_longer_screen_for:
  - 'Pixel-perfect production speed as the main proxy for ability'
  - 'Portfolios judged primarily on screen count'
  - 'Design-tool fluency without examples of the decisions behind the work'
  - 'Expectation that one designer personally produces every screen in a feature'
  - 'Visual trends without evidence of usability, consistency or user needs'
interview_methods:
  - title: 'Design system evaluation'
    description: '"Here is a design system. An agent produced these five screens. Which pass our quality bar, which fail, and why?"'
  - title: 'Specification challenge'
    description: '"Take this pattern and write the spec an agent needs to reproduce it—tokens, spacing, interaction behavior, accessibility."'
  - title: 'Governance scenario'
    description: '"Your team generates ~80% of UI via agents. How do you keep quality high without reviewing every component?"'
  - title: 'AX design'
    description: '"Design a flow that serves a human user and an agent that must complete the same task programmatically."'
  - title: 'Quality audit'
    description: '"Review these ten agent-generated components. Where is the system degrading subtly?"'
day_in_life: |
  Several generated screens use different spacing for the same button. You find an ambiguous design value, correct it and review the affected interfaces with engineering.

  For a new interaction, you document loading, error and success states, along with focus order and copy. You test the resulting flow and update the example where people misunderstand the next step.
helm_connection: |
  The [Product Designer](/leadership#product-designer) responsibilities connect to [Layer 2: Quality](/practitioners#layer-2-quality-guardrails) and the [Verify](/practitioners#verify) phase. Check design-system use, accessibility and the experience of completing the task.

  Use the [Decision Rights Matrix](/leadership#decision-rights-matrix) to agree who approves design-system changes and quality standards.
---

<span id="the-shift"></span>

## Working with agents

Agents can help produce interface drafts and variations. Designers still need to understand the user’s task and check whether the result is clear, usable and accessible.

Provide useful examples, states and constraints, then review what gets built. Use feedback to improve both the interface and the guidance used to generate it.

If a product also serves agents that navigate or act on its interfaces, **Agent Experience (AX)** covers that additional interaction. Test the tasks each kind of user needs to complete.

<span id="what-the-traditional-job-description-looked-like"></span>

## Experience to discuss

Use portfolio examples to discuss research, interaction design, visual craft and testing. Ask what changed after feedback and how the person worked with engineering and product. Where agents help produce interfaces, discuss how they would guide and review that work.
