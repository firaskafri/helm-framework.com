# Compact HELM wordmark review

Reviewed on 19 October 2026 following the user's selection of option 6.

## Reader and purpose

The shared identity helps readers recognize HELM across its homepage, guides,
browser tabs and shared links. Existing page audiences and purposes in
`scripts/public-audiences.json` still apply.

## Canonical artwork and surfaces

- `src/assets/helm-wordmark.svg` contains the selected compact lettering as paths.
  `HelmWordmark.astro` renders this artwork in the header and footer. The social
  image endpoint composites the same source into its existing illustration.
- `public/favicon.svg` uses the H from the compact lettering. The full wordmark
  would be illegible at browser-tab size. The web manifest already uses this asset.
- `public/og-default.png` matches the generated social image for existing links to
  the older asset URL.
- `src/data/updates.json` announces the new wordmark. `CHANGELOG.md`, the homepage
  highlights, `/updates`, `/changelog` and the updates RSS share that record.

## Rendered review

Inspected the header, footer, mobile menu, JavaScript-disabled navigation, social
image and the new Updates entry. The logo keeps the selected lettering and orange
cut in the E. Header and footer home links have the accessible name “HELM home”;
the decorative SVG is hidden from assistive technology.

Verified two wordmarks per page and no horizontal overflow on Home, Foundation,
Practitioners, Leadership, Shared skills, Roles, Software Engineer, Updates,
Release History and the 404 page. Checked homepage widths of 320, 390, 1024, 1200
and 1440 pixels. Mobile navigation and the logo remain visible without JavaScript.

The Updates note describes only the visible identity changes and links to the
homepage and Foundation. Shared-link metadata still references the generated
1200 × 630 PNG. Local screenshots are in `outputs/compact-logo-*.png`.

Editorial assessment: the changed surfaces are ready to send to their intended
readers.

## Automated verification

- `npm run check` passed: formatting, lint, Astro/TypeScript diagnostics (zero
  errors, warnings or hints), Updates consistency, 20 unit tests, production
  build, public-content guardrail, built routes/links/feeds/assets, source safety
  and dependency audit (zero vulnerabilities).
- Browser checks passed: 59 executed tests across Chromium, Firefox and WebKit.
  The 46 configured skips cover duplicate accessibility audits on the other
  engines. The browser runner restored the production artifact afterwards.
- `npm run check:updates -- --base origin/main` passed change coverage, linked
  notes and generated changelog synchronization.
