# HELM — Human-first Execution and Leadership Model

A framework for product development teams building with AI agents. Principles, patterns, guardrails, and a roadmap for adoption.

See [`ROADMAP.md`](ROADMAP.md) for the product roadmap, active-work tracker, release gates, decisions, risks, and update log.

## Content Architecture

HELM separates narrative, structured framework records, and rendering:

- `src/content/docs/foundation.md` owns the Foundation narrative and six principles.
- `src/content/docs/practitioners.mdx` owns Practitioner Guide narrative and composition; `src/data/practitioners.ts` owns its structured patterns, guardrails, operating loop, task matrix, and maturity levels.
- `src/content/docs/leadership.mdx` owns Leadership Guide narrative, leadership authority definitions, and the Decision Rights Matrix; `src/data/leadership.ts` owns organizational shifts, adoption phases, KPIs, and failure modes.
- `src/content/roles/*.md` owns the eight role-transformation and hiring guides.
- `src/data/universal-competencies.ts` owns the shared competency set shown on the roles index.

See [`docs/content-architecture.md`](docs/content-architecture.md) for the complete ownership map, stable identifiers, routes, and reference rules.

## Versioning

The published framework and application package are versioned independently:

- **Framework:** HELM 1.0.0, recorded in content metadata and the `framework-v1.0.0` repository tag.
- **Application package:** `0.0.1`, used only for the Astro application package.

Changing one version does not imply a change to the other.

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
│   ├── framework.ts         # Framework version and lifecycle vocabulary
│   ├── practitioners.ts     # Structured practitioner models
│   ├── leadership.ts        # Structured leadership models
│   └── universal-competencies.ts
├── layouts/
│   ├── Base.astro           # HTML shell, meta, OG, JSON-LD
│   ├── Guide.astro          # Docs layout (ToC + prose)
│   └── RoleGuide.astro      # Role layout (structured frontmatter + prose)
├── lib/
│   ├── content.ts           # Validated collection access
│   ├── contentIntegrity.ts  # Shared source integrity assertions
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
│   ├── sitemap.xml.ts
│   └── robots.txt.ts
└── styles/
    └── global.css           # Tailwind import, @theme tokens, .prose styles
scripts/
└── check-built-content.mjs  # Generated route, link, anchor, and DOM ID checks
docs/
└── content-architecture.md  # Canonical ownership map
```

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` (zero errors, zero warnings expected) |
| `npm run check:content` | Build and validate content, routes, links, anchors, and DOM IDs |
| `npm run preview` | Preview the build locally |

## Content Editing Rules

- Every concept has a single canonical source. Link to it; do not restate it.
- Role data in Astro pages must come from the `loadRoles()` content helper, never hardcoded arrays.
- Terminology must match canonical names (e.g., "Plan-Execute-Verify-Ship-Learn", "Human Decision" for Layer 4).
- Every guide and role requires stable publication metadata defined by `src/content.config.ts`.
- Run `npm run check:content` and `npm run build` before submitting.
