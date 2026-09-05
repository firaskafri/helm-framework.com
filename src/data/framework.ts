export const FRAMEWORK_VERSION = '1.0.0';

export const PUBLICATION_STATUSES = [
  'draft',
  'field-test',
  'release-candidate',
  'published',
  'deprecated',
] as const;

export type PublicationStatus = (typeof PUBLICATION_STATUSES)[number];
