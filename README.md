# HELM — Human-first Execution and Leadership Model

A framework for product development teams building with AI agents. Principles, patterns, guardrails, and a roadmap for adoption.

See [`ROADMAP.md`](ROADMAP.md) for simplicity-first priorities: clearer guidance, shared competency evaluation and an optional playbook/pilot. The [parked ideas](docs/roadmap-backlog.md) and [roadmap history](docs/roadmap-history.md) preserve earlier scope and decisions.

## Content Architecture

HELM separates narrative, structured framework records, and rendering:

- `src/content/docs/foundation.md` owns the Foundation narrative and six principles.
- `src/content/docs/practitioners.mdx` owns Practitioner Guide narrative and composition; `src/data/practitioners.ts` owns its structured patterns, guardrails, operating loop, task matrix, and maturity levels.
- `src/content/docs/leadership.mdx` owns Leadership Guide narrative, leadership authority definitions, and the Decision Rights Matrix; `src/data/leadership.ts` owns organizational shifts, adoption phases, KPIs, and failure modes.
- `src/content/roles/*.md` owns the eight role-transformation and hiring guides.
- `src/data/universal-competencies.ts` owns the shared competency set shown on the roles index.
- `src/data/shared-competencies.ts` owns the five simple learning definitions and role-by-competency practice guides presented at `/competencies`.
- `src/data/evidence.ts` owns internal claim labels and source-review history. `/evidence` provides a short reading list; `src/data/reading-notes.ts` supplies plain-language tips within guides.
- `src/data/updates.json` owns `/updates`, homepage highlights and the published-updates RSS. `CHANGELOG.md` is generated from the same records.
- `docs/corrections.md` and `ROADMAP.md` are maintainer-only documents. `src/pages/roadmap.astro` owns the public summary; `LICENSE-CONTENT.md` owns the public licensing page.

See [`docs/content-architecture.md`](docs/content-architecture.md) for the complete ownership map, stable identifiers, routes, and reference rules.

## Versioning

The published framework and application package are versioned independently:

- **Framework:** HELM 1.0.1, published as `framework-v1.0.1`; see `CHANGELOG.md` and `docs/releases/1.0.1.md` for verification and publication details.
- **Application package:** `0.0.1`, used only for the Astro application package.

Changing one version does not imply a change to the other.

## Tech Stack

- [Astro](https://astro.build) v7 (fully static output; unprivileged nginx container for production)
- [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite`
- [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif) + [Inter](https://fonts.google.com/specimen/Inter) (sans) via Google Fonts
- Design tokens defined in `src/styles/global.css` under `@theme`
- Node version pinned in `.nvmrc`; dependency lockfile and container digests committed for reproducible builds
- ESLint, Prettier, Astro/TypeScript checks, Node tests, Playwright and axe accessibility checks

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

| Command                  | Action                                                                         |
| ------------------------ | ------------------------------------------------------------------------------ |
| `npm install`            | Install dependencies                                                           |
| `npm run dev`            | Start dev server at `localhost:4321`                                           |
| `npm run build`          | Build static release files to `./dist/` (zero errors, zero warnings expected)  |
| `npm run check:content`  | Build and validate content, routes, links, anchors, and DOM IDs                |
| `npm run check:types`    | Astro and TypeScript diagnostics                                               |
| `npm run lint`           | ESLint checks                                                                  |
| `npm run format`         | Format source and documentation                                                |
| `npm run check:format`   | Check formatting                                                               |
| `npm test`               | Content-transform, evidence, URL and rendering-safety tests                    |
| `npm run test:browser`   | Three-engine browser checks and Chromium axe audits; restores production build |
| `npm run check:security` | High-confidence source-safety signatures and dependency audit                  |
| `npm run check`          | Full local quality gate                                                        |
| `npm run preview`        | Preview the build locally                                                      |

## Content Editing Rules

- Follow [`AGENTS.md`](AGENTS.md) and [`docs/public-publishing.md`](docs/public-publishing.md). HELM is a simple framework with guides; public content must be ready to share with its intended reader.
- Every public page needs an audience and purpose in `scripts/public-audiences.json`. The Astro build rejects internal material and unfinished markers, including in metadata and feeds. `npm run check:audience` checks an existing production artifact.
- Review the rendered page for clarity and usefulness, including shared elements and mobile/no-JavaScript views. Passing the build does not replace editorial review.
- Every concept has a single canonical source. Link to it; do not restate it.
- Role data in Astro pages must come from the `loadRoles()` content helper, never hardcoded arrays.
- Terminology must match canonical names (e.g., "Plan-Execute-Verify-Ship-Learn", "Human Decision" for Layer 4).
- Every guide and role requires stable publication metadata defined by `src/content.config.ts`.
- Run `npm run check` before submitting. Install browser binaries first with `npx playwright install chromium firefox webkit`.
- Record source provenance and label proposals, illustrations, unverified claims and external evidence distinctly. Update editorial dates when guidance or structured records change.

## Release operations and contributions

### Keeping visitors up to date

Add linked changes to `src/data/updates.json`, then run `npm run updates:sync`. The `/updates` timeline, homepage highlights, `/changelog`, and `/updates/rss.xml` all share those records. CI requires meaningful notes for visitor-facing changes and checks current release metadata, generated-file synchronization, and links. Candidates are labeled; RSS includes published announcements only.

Run `npm run check:updates -- --base origin/main` to check the mechanism locally. See [`docs/updates.md`](docs/updates.md) for the record format and release workflow.

- [`docs/quality-baseline.md`](docs/quality-baseline.md) records the pre-hardening state and reproducible checks.
- [`docs/deployment.md`](docs/deployment.md) documents static serving, port **8080**, required GitHub checks and rollback.
- [`docs/releases/1.0.1.md`](docs/releases/1.0.1.md) records completed verification and remaining release steps.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) defines contribution, evidence and review expectations.
- Framework content: **CC BY 4.0**; website code: **MIT**. See [`LICENSE-CONTENT.md`](LICENSE-CONTENT.md) and [`LICENSE`](LICENSE).
