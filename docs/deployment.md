# Static publishing and release operations

## Chosen architecture

Astro produces static HTML, CSS, JavaScript, feeds and images in `dist/`. Production uses the repository Dockerfile: Node is a build stage only; an unprivileged nginx image serves the artifact on port **8080**. No Node runtime, adapter, sessions, accounts or server-side assessment storage is required.

The Node and nginx image digests were checked against Docker Hub on 2026-09-17. Dependabot proposes dependency, workflow and container updates. Rebuild from `package-lock.json` with `npm ci`; retain the previous approved artifact/image for rollback.

## Local verification

```sh
npm ci
npx playwright install chromium firefox webkit
npm run check
docker build --pull --build-arg RELEASE_ID=local-verification -t helm-framework:1.0.1 .
docker run --rm -p 8080:8080 helm-framework:1.0.1
```

Check `/`, `/foundation`, `/practitioners`, `/leadership`, `/roles/competency-map`, `/evidence`, `/sitemap.xml`, `/rss.xml`, and a missing URL. Missing URLs must return HTTP 404 with the custom page. The production endpoint must serve the canonical origin from `src/data/site.ts` over HTTPS.

Browser tests build `/checks/components` only when `HELM_TEST_FIXTURES=1`, exercise repeated instances, and restore the production artifact even on failure. Never publish a fixture build. `npm run check:content` validates routes, anchors, IDs, ARIA references, dates, social assets, JSON-LD and static size budgets.

## GitHub gates

`.github/workflows/quality.yml` runs on pull requests and main pushes, with read-only repository permissions:

- `quality`: formatting, ESLint, Astro/TypeScript diagnostics, mandatory linked update notes and changelog synchronization, unit tests, generated-content checks, source-safety checks, dependency audit, browser/accessibility tests.
- `container`: build the production image and check serving, 404 behavior and non-root execution.

The workflow uploads browser diagnostics and a production `dist/` artifact named with the source commit. Action references and image bases are pinned. The artifact is suitable for deployment only after both checks pass and the audience-first editorial review in `docs/public-publishing.md` is complete. Every Astro build, including the Docker build, runs the public-content guardrail. Test fixtures and unreviewed public wording must never be deployed.

GitHub Actions verifies source and container behavior but does not publish or
deploy production images. Production releases are built from a clean, exact
Git revision by the self-hosted VM release tooling, which records the source
revision, immutable local image ID, public route contract, and rollback
pointers. Docker Hub credentials are no longer part of the release path.

The required-check configuration is `docs/branch-protection.json`. Apply it with repository-administrator authority:

```sh
gh api --method PUT repos/firaskafri/helm-framework.com/branches/main/protection --input docs/branch-protection.json
gh api repos/firaskafri/helm-framework.com/branches/main/protection
```

The rules require an up-to-date branch and both checks, including for administrators. The first remote workflow run must be verified after pushing the implementation branch; a local passing run is not a GitHub check result.

This configuration was applied and confirmed by API readback on 2026-09-17. It will block merging until both new workflow checks are available and successful.

## Publishing sequence

1. Review the candidate diff and evidence report in `docs/releases/1.0.1.md`. Complete the rendered audience/readiness review in `docs/public-publishing.md` and record which pages and shared surfaces were inspected. A passing build alone is not publication approval.
2. Confirm the required GitHub checks passed for the exact release commit and verify the nginx image.
3. Set `FRAMEWORK_RELEASE_STATE` and the matching release entry in `src/data/updates.json` to `published`, set its publication/update dates, run `npm run updates:sync`, and record approval/completion evidence. Re-run checks for this release change. See `docs/updates.md`.
4. Merge the approved revision and create the explicit `framework-v1.0.1` tag and repository release.
5. Deploy that clean revision through the self-hosted VM component release tooling. The component builds the repository Dockerfile on the VM, serves port **8080** privately, and is exposed only through the shared TLS gateway.
6. Smoke-test the public routes and metadata. Record the deployed local image ID, source commit, and rollback release in the release report.

## Ownership and rollback

Release owner: Firas Kafri. The host, domain/DNS account, TLS termination and
deployment credentials are not represented in this repository; the owner
records these in the private operations inventory. Do not place credentials in
public documentation.

To roll back, reactivate the previous successful VM component release without
rebuilding it. Keep the 1.0.0 content tag and previous deployment available.
For a content correction, preserve source history, update the claim record and
assign the appropriate framework version. For a failed publication, revert the
deployment rather than silently changing the recorded release.

## Privacy and external resources

The application has no analytics, tracking cookies, account system or answer collection. Inter font CSS and files are bundled locally from `@fontsource/inter`; pages do not request Google Fonts. Hosting access logs are outside the application and must be configured by the host owner. Browser tests do not submit employee or company assessments.

## Search, sharing, and agent discovery

- Shared metadata uses the versioned PNG path in `src/data/social.ts`. Its SVG lettering is outlined with bundled Inter fonts before Sharp renders it; no system fonts or network font download is required. Change the filename when changing artwork so social image caches fetch the new asset. The old `/og-editorial.png` route also renders the corrected artwork.
- Every indexable HTML page has a Markdown alternative derived from its published `main` content. The `agentMarkdown()` build integration runs before the public-content guard, so the same release gate inspects these downloads. Do not generate them from raw MDX or repository documentation.
- `/llms.txt` is a concise discovery index following the llms.txt proposal. It is an aid for assistants that use it, not a search ranking signal or a promise of AI citations. HTML content, crawlable links, truthful structured data, canonical URLs, and the sitemap remain the main search surfaces.
- After deployment, verify `/llms.txt`, `/index.md`, `/practitioners/index.md`, and the new social image with real GET requests. Markdown must use `text/markdown; charset=utf-8`, the index `text/plain`, and the image `image/png`. Check the homepage and a guide with Twitterbot, Googlebot, and OAI-SearchBot user agents; CDN rules must allow the public resources. User-agent smoke checks do not prove access from those services' actual crawler IPs.
- Confirm the HTTPS apex domain is the final destination for HTTP and `www` variants at the TLS gateway/CDN. Submit `/sitemap.xml` in the verified Google Search Console and Bing Webmaster Tools properties, and use their inspection tools to confirm indexing. These accounts and gateway settings are outside this repository.
- Existing social cards may retain cached page metadata after deployment. Request a refresh through the platform's sharing inspector where available (for example LinkedIn Post Inspector or Meta Sharing Debugger). A new image URL refreshes the asset once the platform fetches the updated page; it does not guarantee old posts will be refreshed.
