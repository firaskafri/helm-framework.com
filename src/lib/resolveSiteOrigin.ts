/**
 * Prefer `site` from Astro config for canonical URLs; use the request origin in dev when unset.
 */
export function resolveSiteOrigin(site: URL | undefined, requestUrl: URL): URL {
  return site ?? new URL(requestUrl.origin);
}

const DEFAULT_OG_PATH = '/og-default.png';

/**
 * Resolve an OG image reference (absolute URL, root-relative path, or `undefined`) to a
 * fully-qualified URL string suitable for `<meta property="og:image">`.
 */
export function resolveOgImage(ogImage: string | undefined, siteOrigin: URL): string {
  if (!ogImage) return new URL(DEFAULT_OG_PATH, siteOrigin).href;
  if (ogImage.startsWith('http')) return ogImage;
  const normalized = ogImage.startsWith('/') ? ogImage : `/${ogImage}`;
  return new URL(normalized, siteOrigin).href;
}
