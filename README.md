# HELM — Human-first Execution and Leadership Model

A framework for product development teams building with AI agents. Principles, patterns, guardrails, and a roadmap for adoption.

## Content Architecture

The framework is organized into four layers, each with a canonical source file:

| Layer | Canonical Source | What It Covers |
|---|---|---|
| **Foundation** | `src/content/docs/foundation.md` | Six non-negotiable principles (P1–P6) |
| **Practitioner Guide** | `src/content/docs/practitioners.md` | Architecture patterns, Guardrail Stack (Layers 1–5), Plan-Execute-Verify-Ship-Learn loop, Task Classification Matrix, Maturity Model (Levels 1–5) |
| **Leadership Guide** | `src/content/docs/leadership.md` | Organizational model, nine roles with authority, Decision Rights Matrix, Six Organizational Shifts, 180-day Adoption Roadmap, KPI Dashboard, six Failure Modes |
| **Roles** | `src/content/roles/*.md` (8 files) | How each traditional role transforms in the AI era — competencies, interview methods, job descriptions |

Every concept has exactly one canonical location. Other files reference it via markdown links with anchors, never duplicate it. See `.cursor/rules/helm-content-single-source.mdc` for the full single-source policy.

## Tech Stack

- [Astro](https://astro.build) v6 (static output with Node adapter for server hosting)
- [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite`
- [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif) + [Inter](https://fonts.google.com/specimen/Inter) (sans) via Google Fonts
- Design tokens defined in `src/styles/global.css` under `@theme`

## Project Structure

```
src/
├── content.config.ts        # Zod schemas for docs and roles collections
├── content/
│   ├── docs/                # Foundation, Practitioner Guide, Leadership Guide
│   └── roles/               # 8 role transformation pages
├── components/              # Astro components (all with interface Props)
├── data/
│   ├── site.ts              # Site constants, nav links
│   └── universal-competencies.ts
├── layouts/
│   ├── Base.astro           # HTML shell, meta, OG, JSON-LD
│   ├── Guide.astro          # Docs layout (ToC + prose)
│   └── RoleGuide.astro      # Role layout (structured frontmatter + prose)
├── lib/
│   ├── jsonLd.ts            # Schema.org structured data builders
│   └── resolveSiteOrigin.ts # Canonical URL resolution
├── pages/                   # Astro file-based routing
│   ├── index.astro          # Home
│   ├── [slug].astro         # /foundation, /practitioners, /leadership
│   ├── roles/
│   │   ├── index.astro      # Roles overview
│   │   ├── [slug].astro     # Individual role pages
│   │   └── competency-map.astro  # Interactive competency explorer
│   ├── 404.astro
│   ├── rss.xml.ts
│   └── robots.txt.ts
└── styles/
    └── global.css           # Tailwind import, @theme tokens, .prose styles
```

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` (zero errors, zero warnings expected) |
| `npm run preview` | Preview the build locally |

## Content Editing Rules

- Every concept has a single canonical source. Link to it; do not restate it.
- Role data in Astro pages must come from `getCollection('roles')`, never hardcoded arrays.
- Terminology must match canonical names (e.g., "Plan-Execute-Verify-Ship-Learn", "Human Decision" for Layer 4).
- Run `npm run build` before submitting — zero errors, zero warnings.
