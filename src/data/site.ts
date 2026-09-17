/** Canonical production origin, also imported by astro.config.mjs. */
export const SITE_ORIGIN = 'https://helmframework.com';

export const SITE_NAME = 'HELM';
export const SITE_FULL_NAME = 'Human-first Execution and Leadership Model';
export const SITE_AUTHOR = 'Firas Kafri';
export const SITE_AUTHOR_URL = 'https://www.linkedin.com/in/alkafri/';
/** Editorial date for site/reference pages; never derived from build time. */
export const SITE_UPDATED_AT = '2026-09-17';
export const REFERENCE_LINKS = [
  { href: '/updates', label: 'Updates' },
  { href: '/evidence', label: 'Further reading' },
  { href: '/changelog', label: 'Release history' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/licensing', label: 'Licensing' },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/foundation', label: 'Foundation' },
  { href: '/practitioners', label: 'Practitioners' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/competencies', label: 'Shared skills' },
  { href: '/roles', label: 'Roles' },
  { href: '/updates', label: 'Updates' },
] as const;
