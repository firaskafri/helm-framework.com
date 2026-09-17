# Maintaining HELM Updates

`src/data/updates.json` is the single editorial source for `/updates`, the homepage highlights, `/updates/rss.xml`, and the generated `CHANGELOG.md` rendered at `/changelog`. `src/data/updates.ts` validates the records before rendering. No account or backend is required.

## Write for HELM's readers

The public Updates page and Release History serve practitioners, product/design teams, team leaders and people managers using HELM. Write each note around **what changed, why it matters to their work, and where they can explore it**.

- Lead with the reader's benefit. Prefer “See which recommendations have supporting evidence” to “Added claim-level provenance records.”
- Use meaningful headings such as “Understand the guidance” or “Read and share with your team.” Describe resources and working practices in the reader's vocabulary.
- Link to the relevant guide, section or resource on HELM. CI runs, source files, pull requests and deployment instructions are maintainer references, not useful default destinations for readers.
- Include an implementation detail only if readers need it to use HELM. Ports, package versions, schemas, build dependencies, sanitization and test counts belong in `docs/releases/` or `docs/deployment.md`.
- Describe accessibility improvements through what readers can do: navigate with a keyboard, read on a smaller screen, or print guidance for a discussion.
- Keep availability honest and brief. Explain a release candidate as a preview; identify planned resources as upcoming. Internal merge/tag/deployment steps do not belong in the public summary.
- Preserve important uncertainty in plain language. Easier access to evidence does not mean every recommendation has been validated, and a planned development review is not an available evaluation tool.
- Keep historical release scope and publication dates accurate when improving wording. Use `updatedAt` for an editorial revision.

The generated Markdown is also public-facing, even though it lives in the repository. Detailed engineering verification remains in the maintainer's release report. Automated checks ensure the notes exist and link correctly; editorial review must ensure they are relevant to the audience.

## When something changes

1. Add a record for a new announcement, or add a linked item to the current **release candidate** while it is being prepared.
2. Explain the reader-visible change and its benefit, following the audience guidance above. Every item requires at least one labeled link to the affected page or section. Use `/foundation#principle-1-simplicity-first`, for example, rather than an unrelated homepage link.
3. Set `date` to the announcement/publication date (or preparation date for a candidate), and `updatedAt` to the actual editorial date. Preserve existing IDs: `/updates#your-id` is a permanent link.
4. Run `npm run updates:sync` to regenerate the changelog. Edit the JSON source rather than the generated Markdown.
5. Run `npm run check:updates -- --base origin/main` and `npm run check:content`. Use the actual PR base if it differs from `origin/main`.

Keep historical release notes interpretable. Prefer a new `kind: "update"` announcement for a later correction or improvement rather than rewriting what an old release claimed. A small change can be part of an existing candidate note; there is no requirement to publish a post per commit.

## Record format

```json
{
  "id": "clearer-task-guidance",
  "kind": "update",
  "version": "1.0.1",
  "status": "release-candidate",
  "date": "2026-09-17",
  "updatedAt": "2026-09-17",
  "title": "Clearer choices about what to delegate",
  "summary": "Find the guidance your team needs to discuss which tasks agents can handle and where people should stay involved.",
  "sections": [
    {
      "heading": "Plan the work with your team",
      "items": [
        {
          "text": "Replace this example with an actual reader-visible change, explaining how it helps the team use the guidance.",
          "links": [
            {
              "label": "Explore task guidance",
              "href": "/practitioners#task-classification-matrix"
            }
          ]
        }
      ]
    }
  ]
}
```

- `kind: "release"` identifies the one release entry for a framework version. `kind: "update"` supports additional announcements without inventing a new version.
- `status` uses HELM's publication vocabulary. Drafts stay out of the public timeline; candidates and field tests are visibly labeled. Only `published` records enter RSS.
- The current framework version must have a release entry whose status matches `FRAMEWORK_RELEASE_STATE`.
- Entries appear newest-first by `date`, then `updatedAt`, with IDs as a deterministic tie-breaker. The homepage takes the two latest visible entries.
- Text is plain text, not executable Markdown or HTML. Links use site-root paths or HTTPS URLs.

## What the mechanism enforces

`npm run check:updates` verifies valid dates, unique IDs, one release entry per version, current release-state agreement, labeled links, and exact agreement between the registry and generated changelog.

In pull-request CI, `UPDATES_BASE_REF` is the PR base commit. In main-push CI, it is the previous commit. The checkout includes history so the check can compare against that base. Visitor-facing changes under `src/content`, `src/data`, `src/pages`, `src/components`, `src/layouts`, `src/styles`, and `src/lib`, plus the published roadmap, correction register, and licensing source, require a new or meaningfully changed non-draft entry. Changing only timestamps does not satisfy the check. Tests, CI/deployment files, and non-published technical documentation do not require an announcement.

Without a base (local checks or a manual workflow), schema and generated-file checks still run. Pass `--base` to exercise change coverage locally, including uncommitted changes. Initial repository pushes without a prior commit use schema/generated-file checks.

`npm run check:content` checks that `/updates` exists, navigation and RSS discovery links are present, every local destination and fragment exists, and the RSS feed matches the timeline's published entries and dates. Homepage, updates-page and changelog modification dates follow the visible records.

These checks enforce the presence and consistency of notes. Maintainers still review whether the explanation and destinations accurately describe the diff.

## Publishing a release

When the release is actually published, update its registry status and dates alongside `FRAMEWORK_RELEASE_STATE`, then run `npm run updates:sync` and the normal release checks. That single edit updates the page, homepage, changelog, and RSS. Follow `docs/deployment.md` for the release and hosting steps.
