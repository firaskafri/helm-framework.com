# HELM: public-ready, audience-first publishing

HELM is a simple framework with practical guides. Every website change must help
its intended reader understand something or take a useful next step.

## Non-negotiable publishing rules

- Never publish unfinished, unreviewed, or audience-inappropriate material. A
  successful build is necessary, but does not establish editorial readiness.
- Write for people using HELM: practitioners, product/design teams, team leaders,
  and people managers. Use plain language, short explanations, and concrete
  examples. Simplify or remove before adding more content.
- Keep general pages nontechnical. In a specialist guide, include technical detail
  only when it is needed to complete the reader's task; explain it simply at first
  use. Never make readers understand the website's implementation or maintenance.
- Internal correction registers, claim labels, source-inspection logs, release
  evidence, task IDs, acceptance criteria, and engineering status belong in
  maintainer files. Never render repository planning/review documents as pages or
  put their contents in navigation, shared components, metadata, feeds, or downloads.
- Preserve useful uncertainty in everyday language at the point of use. Correct
  or remove unsupported claims; do not hide them by deleting a warning or making
  advice sound proven. Label examples and planned resources clearly.
- Previews must be just as presentable as published guidance. Drafts stay out of
  production. A `noindex` tag, collapsed panel, or obscure URL is still public.

## Before completing or releasing a website change

1. Identify the reader and what they should understand or do. Every public page
   must have that purpose in `scripts/public-audiences.json`.
2. Review the rendered page, including shared components, navigation, mobile and
   no-JavaScript views, previews, search/social descriptions, and feeds affected by
   the change. Ask: **Would we confidently send this to its intended reader now?**
   If not, simplify it or keep it out of the release.
3. Follow `docs/public-publishing.md`, update the canonical source, and add a
   reader-facing Updates note. Keep review evidence in maintainer documentation.
4. Run `npm run check`. The Astro build itself runs the public-content guardrail,
   including in Docker and when invoked directly. Fix a rejected page rather than
   weakening the guardrail or adding an exception to ship internal material.

Keep existing user work intact. Do not commit, push, or deploy unless requested.
