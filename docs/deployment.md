# Static publishing and release operations

## Chosen architecture

Astro produces static HTML, CSS, JavaScript, feeds and images in `dist/`. Production uses the repository Dockerfile: Node is a build stage only; an unprivileged nginx image serves the artifact on port **8080**. No Node runtime, adapter, sessions, accounts or server-side assessment storage is required.

The Node and nginx image digests were checked against Docker Hub on 2026-09-17. Dependabot proposes dependency, workflow and container updates. Rebuild from `package-lock.json` with `npm ci`; retain the previous approved artifact/image for rollback.

## Local verification

```sh
npm ci
npx playwright install chromium firefox webkit
npm run check
docker build --pull -t helm-framework:1.0.1 .
docker run --rm -p 8080:8080 helm-framework:1.0.1
```

Check `/`, `/foundation`, `/practitioners`, `/leadership`, `/roles/competency-map`, `/evidence`, `/sitemap.xml`, `/rss.xml`, and a missing URL. Missing URLs must return HTTP 404 with the custom page. The production endpoint must serve the canonical origin from `src/data/site.ts` over HTTPS.

Browser tests build `/checks/components` only when `HELM_TEST_FIXTURES=1`, exercise repeated instances, and restore the production artifact even on failure. Never publish a fixture build. `npm run check:content` validates routes, anchors, IDs, ARIA references, dates, social assets, JSON-LD and static size budgets.

## GitHub gates

`.github/workflows/quality.yml` runs on pull requests and main pushes, with read-only repository permissions:

- `quality`: formatting, ESLint, Astro/TypeScript diagnostics, mandatory linked update notes and changelog synchronization, unit tests, generated-content checks, source-safety checks, dependency audit, browser/accessibility tests.
- `container`: build the production image and check serving, 404 behavior and non-root execution.

The workflow uploads browser diagnostics and a production `dist/` artifact named with the source commit. Action references and image bases are pinned. The artifact is suitable for deployment only after both checks pass.

The existing `.github/workflows/docker-publish.yml` now waits for a successful `Quality` push run on `main`, checks out that exact commit, and publishes only when `FRAMEWORK_RELEASE_STATE` is `published`. Candidate commits run checks without replacing the Docker Hub release image. Publication retains `firaskafri/helm-framework.com:latest` and the commit tag, and adds `framework-{version}`. Docker Hub authentication uses the existing `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` secrets.

The required-check configuration is `docs/branch-protection.json`. Apply it with repository-administrator authority:

```sh
gh api --method PUT repos/firaskafri/helm-framework.com/branches/main/protection --input docs/branch-protection.json
gh api repos/firaskafri/helm-framework.com/branches/main/protection
```

The rules require an up-to-date branch and both checks, including for administrators. The first remote workflow run must be verified after pushing the implementation branch; a local passing run is not a GitHub check result.

This configuration was applied and confirmed by API readback on 2026-09-17. It will block merging until both new workflow checks are available and successful.

## Publishing sequence

1. Review the candidate diff and evidence report in `docs/releases/1.0.1.md`.
2. Confirm the required GitHub checks passed for the exact release commit and verify the nginx image.
3. Set `FRAMEWORK_RELEASE_STATE` and the matching release entry in `src/data/updates.json` to `published`, set its publication/update dates, run `npm run updates:sync`, and record approval/completion evidence. Re-run checks for this release change. See `docs/updates.md`.
4. Publish only the approved artifact/image. Tags and repository releases are created explicitly by the maintainer as `framework-v1.0.1`.
5. Change the hosting target port from the previous **80** to **8080** when adopting this Dockerfile. Confirm TLS, health checks and routing at the hosting platform.
6. Smoke-test the public routes and metadata. Record the deployed image digest and source commit in the release report.

## Ownership and rollback

Release owner: Firas Kafri. The current host, domain/DNS account, TLS termination and deployment credentials are not represented in this repository; the owner records these in the private operations inventory. Do not place credentials in public documentation.

To roll back, redeploy the previous approved artifact/image with its matching port configuration. Keep the 1.0.0 content tag and previous deployment available. For a content correction, preserve source history, update the claim record and assign the appropriate framework version. For a failed publication, revert the deployment rather than silently changing the recorded release.

## Privacy and external resources

The application has no analytics, tracking cookies, account system or answer collection. Font CSS and files are requested from Google Fonts; those requests disclose normal network metadata to that provider. Hosting access logs are outside the application and must be configured by the host owner. Browser tests do not submit employee or company assessments.
