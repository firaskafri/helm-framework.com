/** Production origin; keep in sync with `site` in `astro.config.mjs`. */
export const SITE_ORIGIN = 'https://helmframework.com';

export const SITE_NAME = 'HELM';
export const SITE_FULL_NAME = 'Human-first Execution and Leadership Model';
export const SITE_AUTHOR = 'Firas Kafri';
export const SITE_AUTHOR_URL = 'https://www.linkedin.com/in/alkafri/';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/foundation', label: 'Foundation' },
  { href: '/practitioners', label: 'Practitioners' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/roles', label: 'Roles' },
] as const;
