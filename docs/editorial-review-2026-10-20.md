# Original design restoration — 20 October 2026

## Reader and purpose

The homepage serves practitioners, founders, business leaders, and operations and
HR teams. It should explain how HELM helps assign work, decisions, and human
responsibility, then lead readers to the principles or a useful guide. Its purpose
is updated in `scripts/public-audiences.json`. Other page audiences remain valid.

## Design and content

The April 1 launch design was rebuilt from `ba9b307` and inspected in a browser
before this restoration. The restored website uses its helm emblem, warm cream,
dark neutral text, terracotta accents, secondary steel-blue leadership links,
Inter body typography, serif guide headings, principle cards, and direct guide
paths. Contrast-adjusted neutral and accent colors from the later accessible
baseline are retained rather than restoring the launch's lighter text colors.

Current canonical guide content, principles, role guidance, shared competencies,
and evidence qualifications remain intact. The homepage gives a plain explanation
of HELM's broader relevance. Its role introduction explicitly states that current
guides cover engineering and product. A short, labeled proposal example preserves
the distinction between agent drafting and human review and accountability. It is
available in a native disclosure without JavaScript. Existing `#approach`,
`#guides`, `#work`, and `#skills` destinations remain valid.

The full-color proposal components and wordmark assets are removed from source.
Social artwork and both default preview images match the restored identity. The
font request loads Inter only; guide serif text uses Georgia as rendered in the
launch version. The new Updates entry is the canonical reader-facing record;
`CHANGELOG.md` was regenerated from it. HELM remains version 1.0.1.

## Rendered review

Inspected locally built Home, Foundation, Practitioner Guide, Leadership Guide,
Roles, Shared Skills, and Updates in Chromium at 1440px. Reviewed the homepage,
Practitioner Guide, Updates, mobile menu, and expanded no-JavaScript homepage at
390px. Captures are in `outputs/restored-*.png`. Reviewed the generated social
image and the new update text and links. The built-content checks verify metadata,
feeds, destinations, fragments, and publication consistency.

The visual review found that the Roles introduction needed its original top
spacing after restoring the fixed header. This was corrected. All-route browser
checks now verify that the header does not obscure a page title at desktop or
mobile widths. The menu retains Escape, outside-click, focus-leaving, and
no-JavaScript behavior. Its outside-click test targets a visible page margin
because the fixed menu overlays the title. The proposal keyboard test uses
Option-Tab for links under WebKit's default macOS keyboard preference.

The restored pages are suitable to share with their intended readers: the
homepage is straightforward, the reference pages have a consistent reading
hierarchy, current qualifications remain visible, and next steps are clear.

## Verification and status

Final `npm run check` passed:

- Formatting, lint, and Astro checks: no errors or warnings.
- Updates validation and generated changelog consistency.
- 20 unit tests.
- Build and public-content guardrail: 21 HTML pages, 50 generated files.
- Source security checks and npm audit: zero vulnerabilities.
- Browser suite: 58 passed, 44 configured skips. Includes all-route Chromium
  accessibility/layout checks at 1280, 390, and 320px and interaction,
  no-JavaScript, reduced-motion, and print checks across Chromium, Firefox, and
  WebKit. The script restored a production build after testing.

Opened the updated website at `http://127.0.0.1:4388/` for user review. These are
local source changes and a local preview; no commit, push, or deployment was made.
