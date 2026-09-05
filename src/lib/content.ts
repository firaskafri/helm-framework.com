import { getCollection, type CollectionEntry } from 'astro:content';
import {
  assertConsecutiveOrder,
  assertNonEmpty,
  assertRequiredIds,
  assertUniqueIds,
} from './contentIntegrity';

const REQUIRED_DOC_IDS = ['foundation', 'practitioners', 'leadership'] as const;
const REQUIRED_PRINCIPLE_IDS = [
  'principle-1-simplicity-first',
  'principle-2-redesign-dont-automate',
  'principle-3-agents-execute-humans-are-accountable',
  'principle-4-guardrails-are-non-negotiable',
  'principle-5-structure-over-tooling',
  'principle-6-team-wide-adoption-over-individual-mastery',
] as const;
const REQUIRED_ROLE_IDS = [
  'software-engineer',
  'staff-engineer',
  'engineering-manager',
  'sre-devops-engineer',
  'qa-engineer',
  'platform-engineer',
  'product-manager',
  'product-designer',
] as const;

interface PublishableEntry {
  id: string;
  data: {
    id: string;
    order: number;
    createdAt: Date;
    lastModified: Date;
    evidenceReferences: string[];
  };
  body?: string;
}

function validateEntries(
  label: string,
  entries: readonly PublishableEntry[],
  requiredIds: readonly string[],
): void {
  assertNonEmpty(label, entries);
  assertUniqueIds(label, entries);
  assertUniqueIds(
    `${label} metadata`,
    entries.map((entry) => ({ id: entry.data.id })),
  );
  assertRequiredIds(label, entries.map((entry) => entry.id), requiredIds);
  assertConsecutiveOrder(label, entries.map((entry) => entry.data.order));

  for (const entry of entries) {
    if (entry.id !== entry.data.id) {
      throw new Error(`${label} entry "${entry.id}" must declare matching frontmatter id`);
    }
    if (entry.data.lastModified < entry.data.createdAt) {
      throw new Error(`${label} entry "${entry.id}" has lastModified before createdAt`);
    }

    const citedUrls = new Set(
      [...(entry.body ?? '').matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((match) => match[1]),
    );
    const evidenceReferences = new Set(entry.data.evidenceReferences);

    for (const citedUrl of citedUrls) {
      if (!evidenceReferences.has(citedUrl)) {
        throw new Error(`${label} entry "${entry.id}" is missing evidence reference "${citedUrl}"`);
      }
    }
    for (const evidenceReference of evidenceReferences) {
      if (!citedUrls.has(evidenceReference)) {
        throw new Error(`${label} entry "${entry.id}" has uncited evidence reference "${evidenceReference}"`);
      }
    }
  }
}

export async function loadDocs(): Promise<CollectionEntry<'docs'>[]> {
  const docs = await getCollection('docs');
  validateEntries('docs collection', docs, REQUIRED_DOC_IDS);

  const foundation = docs.find(({ id }) => id === 'foundation');
  const principles = foundation?.data.principles;
  if (!principles || principles.length !== REQUIRED_PRINCIPLE_IDS.length) {
    throw new Error(`Foundation must define exactly ${REQUIRED_PRINCIPLE_IDS.length} principles`);
  }
  assertUniqueIds('Foundation principles', principles);
  assertRequiredIds(
    'Foundation principles',
    principles.map(({ id }) => id),
    REQUIRED_PRINCIPLE_IDS,
  );
  assertConsecutiveOrder('Foundation principles', principles.map(({ number }) => number));

  return docs;
}

export async function loadRoles(): Promise<CollectionEntry<'roles'>[]> {
  const roles = await getCollection('roles');
  validateEntries('roles collection', roles, REQUIRED_ROLE_IDS);
  return roles;
}
