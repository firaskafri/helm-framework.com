# Header navigation review

Reviewed on 19 October 2026 for readers moving between HELM's guides and reference
pages. Existing audiences and page purposes in `scripts/public-audiences.json`
apply to this shared navigation change.

## Reader-facing changes

- The header is 80 pixels tall on desktop and 64 pixels on smaller screens.
  Navigation targets are at least 44 pixels tall.
- The selected section has a lilac background and a border. Hover uses a lighter
  lilac fill. Neither state changes the text position or adds an underline.
- The compact logo remains the home link. Its description is separate text and
  cannot inherit link decorations. The logo retains a visible keyboard focus ring.
- The mobile menu is a single list with directional arrows and a Menu/Close
  control. Escape returns focus to the button; moving focus or tapping outside
  closes the menu. Choosing a link closes the menu and navigates normally.
- Short mobile viewports can scroll the open menu. Without JavaScript, all seven
  navigation links remain visible in the document. Reduced motion disables the
  icon and background transitions.

## Rendered review

Inspected the desktop current-section and hover states, including hovering the
logo, mobile closed and open menus, and the JavaScript-disabled menu on Foundation.
The logo and description both have `text-decoration-line: none` on hover.
Checked widths of 320, 390, 768, 1023, 1024, 1200, 1280, 1440 and 2000 pixels:
no horizontal overflow or wrapped desktop navigation targets.

Verified Escape focus return, outside-pointer dismissal, and navigation from the
open mobile menu to Practitioners. The Updates note links to the guide selection
and Foundation and describes the navigation changes in reader-facing language.
Social artwork is unaffected; the page metadata continues to use the current
wordmark artwork. Local screenshots are `outputs/header-refined-*.png`.

Editorial assessment: the changed surfaces are ready to send to their readers.

## Verification

- `npm run check` passed formatting, lint, Astro types (zero errors, warnings or
  hints), Updates consistency, 20 unit tests, the production build and public
  content/route/link/feed checks, source safety and the dependency audit (zero
  vulnerabilities).
- The browser stage initially stopped because the local preview occupied the
  test port. Stopped that preview and ran `npm run test:browser`: 59 tests passed
  across Chromium, Firefox and WebKit, with 46 configured duplicate-audit skips.
  The runner restored the production artifact. All required check stages passed.
- Extended the existing mobile navigation test to cover initial menu focus and
  outside-pointer dismissal. Escape, ordinary keyboard navigation and
  JavaScript-disabled navigation passed in all three engines.
- `npm run check:updates -- --base origin/main` passed announcement coverage and
  generated changelog consistency.
