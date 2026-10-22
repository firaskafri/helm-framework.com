import {
  SITE_NAME,
  SITE_FULL_NAME,
  SITE_AUTHOR,
  SITE_AUTHOR_URL,
  SITE_DESCRIPTION,
} from '../data/site';
import { SOCIAL_IMAGE_PATH } from '../data/social';

/** JSON embedded in HTML must not be able to terminate its script element. */
export function serializeJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

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
  version?: string;
  datePublished?: Date;
  dateModified?: Date;
}

export function buildWebsiteJsonLd(homeUrl: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homeUrl}#website`,
    name: SITE_NAME,
    alternateName: SITE_FULL_NAME,
    url: homeUrl,
    description: SITE_DESCRIPTION,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      '@id': `${homeUrl}#author`,
      name: SITE_AUTHOR,
      url: SITE_AUTHOR_URL,
    },
  };
}

export function buildWebPageJsonLd({
  headline,
  description,
  url,
  homeUrl,
  type = 'WebPage',
  version,
  datePublished,
  dateModified,
}: WebPageOptions): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    name: headline,
    headline,
    description,
    url,
    inLanguage: 'en',
    isPartOf: { '@id': `${homeUrl}#website` },
    author: { '@id': `${homeUrl}#author` },
    image: new URL(SOCIAL_IMAGE_PATH, homeUrl).href,
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    ...(version && { version }),
    ...(datePublished && { datePublished: datePublished.toISOString() }),
    ...(dateModified && { dateModified: dateModified.toISOString() }),
  };
}
