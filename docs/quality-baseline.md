# HELM 1.0.x quality baseline

Recorded 2026-09-17 against `f8c189b`, before hardening. Environment: macOS, Node 22.23.2, npm 10.9.8. Reproduce installation with `npm ci`.

| Area                             | Baseline evidence                                                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Build/content                    | `npm run check:content` passes: 15 HTML pages, 38 generated files. Build emits two Vite unused-import warnings.                                                                       |
| Deployment                       | Static pages packaged with Node adapter, filesystem sessions and server entrypoint; output in `dist/client`.                                                                          |
| Dependency audit                 | `npm audit --json`: 15 vulnerable packages (1 critical, 10 high, 3 moderate, 1 low).                                                                                                  |
| Types/lint/format                | No repository scripts or enforced baseline.                                                                                                                                           |
| Unit/browser/accessibility tests | No pre-existing suite or CI. New Playwright baseline against the untouched build reproduced 3 failures: Foundation color contrast, mobile Escape and no-JavaScript mobile navigation. |
| Navigation                       | Escape condition reversed in `Nav.astro`; mobile links hidden without JavaScript.                                                                                                     |
| Contents navigation              | Only the first `.toc` receives active-heading tracking.                                                                                                                               |
| Progressive enhancement          | Tab panels start hidden; accordion content and entrance animations depend on JavaScript.                                                                                              |
| Typography                       | Fraunces requested; Literata configured in the serif token.                                                                                                                           |
| Publishing                       | Metadata is machine-readable only; sitemap has no modification dates; RSS has creation dates only.                                                                                    |
| Rendering safety                 | Role frontmatter Markdown and JSON-LD embedded without explicit output sanitization/escaping.                                                                                         |
| Repository enforcement           | GitHub API reports `main` is not protected. Required checks must be configured after the workflow exists remotely.                                                                    |

This is a technical baseline, not a WCAG conformance certification. Release verification and any remaining deployment/administration steps are recorded in `docs/releases/1.0.1.md`.

The baseline browser invocation was `BASELINE_DIST=dist/client npx playwright test --project=chromium --grep 'accessibility and responsive layout: /foundation/|mobile menu|no JavaScript'`. It targeted the preserved pre-hardening artifact before interface changes. The branch-protection baseline was retrieved with `gh api repos/firaskafri/helm-framework.com/branches/main/protection` (HTTP 404, branch not protected).

The original public social image was inspected and retained: a real 1376×768 PNG with HELM branding. Its dimensions and existence are now enforced in generated-content checks.
