# Contributing to HELM

Start with `ROADMAP.md` and `docs/content-architecture.md`. Discuss changes to framework meaning in an issue before expanding a release.

## Development

1. Use the Node version in `.nvmrc` and run `npm ci`.
2. Run `npx playwright install chromium firefox webkit` (Linux: add `--with-deps`).
3. Develop with `npm run dev`.
4. Run `npm run format`, then `npm run check` before submitting.

## Content and evidence

- Edit the canonical source, preserve stable IDs, and link to existing concepts.
- Every major claim needs a matching evidence record: distinguish proposals, commentary, forecasts, surveys and measured results.
- Add new bibliography URLs to the entry's `evidenceReferences`. Record actual source inspection separately; never invent an access date or treat a citation as verification.
- Record changed meaning and version impact in `docs/corrections.md` before publication. Preserve interpretation and migration paths for existing users.
- Update editorial modification dates when content or structured records change. Update source-review dates only after inspection.
- Mark examples as illustrative unless a documented, approved implementation supports them.
- Add a linked note in `src/data/updates.json` for visitor-facing changes, or amend the current candidate's entry. Run `npm run updates:sync`; CI checks the registry against the PR base and the generated changelog. See `docs/updates.md`.
- Write public notes for practitioners and team leaders: describe the reader-visible change, its benefit and the relevant HELM resource. Keep engineering details in maintainer documentation; the audience checklist is in `docs/updates.md`.
- Markdown/MDX is reviewed source code. Only maintainers may approve new imports or executable components. No external HTML/scripts, event handlers or unsafe URL schemes in contributed content. Rendered role frontmatter uses an allowlist sanitizer.
- Never put private company, customer or employee data in issues, examples or test fixtures.

## Pull requests

Explain the problem, scope, evidence, compatibility impact and checks run. Include keyboard/mobile/no-JavaScript verification for changed interactions. Required checks are `quality` and `container`; maintainers verify GitHub enforcement as described in `docs/deployment.md`.

Use `npm run check:updates -- --base origin/main` to check change-note coverage locally. Keep release candidates labeled until they are published; the updates RSS announces published entries only.

Framework content contributions are offered under CC BY 4.0; code and technical documentation under MIT. Submit only material you have permission to contribute, with third-party attribution where applicable. Contributions do not grant trademark rights or imply endorsement.

Report public content corrections through an issue with the claim ID. Report sensitive security issues privately to the repository owner rather than posting exploit details or credentials publicly.
