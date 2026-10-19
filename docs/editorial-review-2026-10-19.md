# Editorial review: approved homepage design in Astro

## Reader and purpose

The homepage is for business leaders, founders, operations and HR teams, and
practitioners new to HELM. It helps them recognize changing responsibilities,
understand delegation and human decision ownership, and choose an existing guide.
The homepage audience entry in `scripts/public-audiences.json` now records that
purpose. Other pages retain their existing reader-facing purposes.

## Content and implementation

- Implemented the approved, simplified executive-editorial design in the Astro
  homepage. The standalone `outputs/index.html` remains a separate design artifact.
- Foundation frontmatter remains the canonical source for all six principle
  titles, descriptions, and destination anchors. The added practical examples
  are labeled illustrative.
- The customer-proposal example is also labeled illustrative. It explains a
  shared brief, bounded agent work, sales/delivery review, a human decision, and
  continuing responsibility. It is not presented as an official named process,
  a live agent, or evidence of improved business results.
- Practitioner, leadership, role, and shared-skill paths lead to existing site
  routes. The homepage explicitly states the engineering/product scope of the
  role guides and the broader examples available in shared-skills guidance.
- Shared navigation retains all seven existing destinations. The same header,
  footer, brand mark, paper/aubergine palette, and reading typography connect the
  homepage and guides. System fonts remove external font loading.
- Added a build-generated PNG social preview from editable SVG artwork, a matching
  favicon, and updated manifest text and colors. Home metadata describes what
  HELM offers without prototype language.
- Added the reader-facing update “A clearer starting point for changing work” in
  `src/data/updates.json` and regenerated the changelog. The prior start/launch
  update and other existing user work are retained. Framework version stays
  1.0.1; this is a website update, not an invented framework release.

## Rendered review

Reviewed the built site through `http://127.0.0.1:4325`, including:

- The entire homepage at 1440 × 1000 and 390 × 844; the hero, all sections,
  selected review/disclosure state, principle destinations, Updates summaries,
  footer, and open mobile navigation.
- Foundation, Practitioner Guide, Leadership Guide, Roles, Product Manager,
  Shared Skills, and Updates at desktop size. Also reviewed Foundation on mobile
  and a Leadership Guide decision-rights table after scrolling.
- Homepage and practitioner no-JavaScript views. All proposal explanations are
  available, the review disclosure remains usable, and navigation is discoverable.
- The 1200 × 630 social image, title/description metadata, canonical URL,
  Updates RSS entry, guides/roles RSS feed, and sitemap.

Visual review caught a class-name collision between principle layout selectors
and Tailwind padding utilities in the homepage Updates summaries. Those selectors
now use `principle-*` names. Re-rendered summaries have readable, full-width text
columns. The Roles introduction’s spacing was also brought into line with the
new in-flow navigation.

The page is presentable for its intended readers: the examples are recognizable,
the divisions of responsibility are clear, and the existing guidance provides
an obvious next step. Supporting publication information stays below the main
story. No public maintainer material or prototype instructions were introduced.

## Verification

- `npm run check` passed formatting, lint, Astro diagnostics, Updates consistency,
  19 unit tests, static build, public-content guardrails, built-content integrity,
  and source-safety checks. It stopped at the existing dependency audit: five
  advisories (four high, one moderate) involving `devalue`,
  `http-cache-semantics`, `sharp`, `smol-toml`, and `source-map-js`.
  Dependencies were not changed. The full release check is therefore not green.
- Ran `npm run test:browser` separately: 59 passed; 46 checks were skipped by the
  configured engine-specific audit policy. This includes all 21 public HTML pages,
  existing guide interactions, mobile navigation, and the new proposal tests.
  The runner restored a production build after its component fixtures.
- After the final style fixes, ran `npm run check:content` again, then targeted
  homepage/role layout, proposal, and Updates-navigation checks: 12 passed,
  6 configured skips.
- The new proposal tests cover all four stages, next-stage focus, arrow/Home/End
  keys, review disclosure, persistent human accountability, no-JavaScript content,
  reduced motion, print content, and accessibility in each state.
- Additional rendered checks covered homepage widths of 320, 390, 520, 760, 768,
  1023, 1024, 1280, 1440, and 1920 pixels, plus representative guide widths.
  No horizontal page overflow or page JavaScript errors were found. Checked the
  menu transition at 1024 pixels and that headings remain below the navigation.
- Automated accessibility checks found no violations in the audited pages and
  interactive states. This is not a manual screen-reader assessment.

Screenshots are local review artifacts under `outputs/site-*.png`; they are not
part of the production build. Nothing was committed, pushed, or deployed.
