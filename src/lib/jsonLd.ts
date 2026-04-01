import { SITE_NAME } from '../data/site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbList(
  crumbs: BreadcrumbItem[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export interface WebPageOptions {
  headline: string;
  description: string;
  url: string;
  homeUrl: string;
  /** Defaults to `'WebPage'`. */
  type?: string;
}

export function buildWebPageJsonLd({
  headline,
  description,
  url,
  homeUrl,
  type = 'WebPage',
}: WebPageOptions): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: headline,
    headline,
    description,
    url,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: homeUrl },
  };
}
