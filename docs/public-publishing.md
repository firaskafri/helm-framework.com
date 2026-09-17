# Public publishing standard

**HELM is a simple framework with guides. Everything on the website must be ready
to share with the people who use it.** This standard applies to human and automated
contributions, previews, and every release.

## Audience and writing

Apply [`helm-voice.md`](helm-voice.md) when reviewing wording and coherence. Keep
agreed concepts consistent across the guides, examples and shared components.

`scripts/public-audiences.json` records the reader and purpose of each public page.
Adding a page requires an intentional reader-facing purpose. Do not add a route
merely because a useful maintainer document exists.

- Home and Foundation: explain HELM in everyday language; offer a clear next step.
- Practitioner guides: help people carry out work. Explain necessary specialist
  terms with an example; omit implementation detail that does not help the task.
- Leadership and role guides: focus on responsibilities, team learning, decisions,
  and results. Avoid research taxonomy and engineering release language.
- Roadmap and Updates: say what is available or planned, why it helps, and where
  to go. Use “Preview” for an upcoming change. Keep delivery trackers elsewhere.
- Further reading: give useful links and brief, honest explanations. Source
  inspection history and editorial findings are maintainer records.

Prefer short sentences, familiar words, descriptive links, and one useful action
over a long conceptual explanation. “Set limits and check results” is more useful
than “provisional synthesis with claim-level labels.” Correct an unsupported claim
or explain the limitation simply; polished wording must not imply proven results.

## Keep maintainer material out of the site

`docs/`, `ROADMAP.md`, `README.md`, `CONTRIBUTING.md`, and `AGENTS.md` are repository
resources, not website copy. Do not import them into public pages or copy them to
`public/`. The public roadmap is an edited summary in `src/pages/roadmap.astro`.
`CHANGELOG.md` and `LICENSE-CONTENT.md` are intentionally public-facing sources.

Internal evidence records remain in `src/data/evidence.ts`. Public explanations
live in `src/data/reading-notes.ts`; components must not display internal findings,
review dates, correction IDs, access logs, or label definitions.

Do not treat hiding a page from navigation/search, collapsing its contents, or
calling it a preview as permission to publish unfinished material. Draft guide and
role entries are excluded by the shared content loaders; draft updates are also
excluded from public output.

## Release gate

The Astro integration in `scripts/public-content-guard.mjs` runs for every build,
including `npm run build`, direct `astro build`, CI, and Docker:

- Reject imports of maintainer documents into website source.
- Reject undeclared public HTML routes and maintainer files copied into output.
- Check page text, hidden/collapsed content, accessible labels, metadata, structured
  data, feeds, and text downloads for known internal wording and unfinished markers.
- Reject draft publication metadata and links to internal website paths.
- Test fixtures are allowed only in the explicit browser-test build; the browser
  runner restores a production build and the production guard rejects fixtures.

Run `npm run check:audience` to inspect an existing production `dist/` artifact.
Run `npm run check` for the full release checks. Regression tests exercise rejected
content across public surfaces, not just the original reported phrases.

Automation catches known failures; it cannot decide whether every explanation is
clear or useful. The author and reviewer must inspect the rendered result and
answer all of these before release:

1. Who is this for, and what does it help them understand or do?
2. Can that person understand it without knowledge of our code, planning, or review
   process? Can a shorter explanation or example do the job?
3. Are the guidance, examples, availability, and limitations accurate and useful?
4. Are shared elements, mobile/no-JavaScript views, metadata, and feed text equally
   ready to share?

If any answer is no, revise or exclude the material. Do not release it and leave
cleanup for later. Record the pages inspected and checks run in the PR or internal
release notes. The pull-request template makes this review part of normal changes.
