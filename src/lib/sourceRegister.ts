import { createHash } from 'node:crypto';
import { EVIDENCE_CLAIMS, SOURCE_REVIEWS } from '../data/evidence';

interface CitedEntry {
  id: string;
  body?: string;
  data: { evidenceReferences: string[] };
}

/** Bibliography titles/URLs remain owned by content; review history is owned by evidence.ts. */
export function buildSourceRegister(entries: CitedEntry[]) {
  const titles = new Map<string, string>();
  for (const entry of entries) {
    for (const match of (entry.body ?? '').matchAll(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    )) {
      titles.set(match[2], match[1].replace(/\*/g, ''));
    }
  }
  const urls = [
    ...new Set(entries.flatMap((entry) => entry.data.evidenceReferences)),
  ].sort();
  for (const claim of EVIDENCE_CLAIMS)
    for (const url of claim.sources) {
      if (!urls.includes(url))
        throw new Error(`Claim ${claim.id} cites unregistered source ${url}`);
    }
  return urls.map((url) => ({
    id: `source-${createHash('sha256').update(url).digest('hex').slice(0, 12)}`,
    url,
    title: titles.get(url) ?? url,
    entries: entries
      .filter((entry) => entry.data.evidenceReferences.includes(url))
      .map(({ id }) => id),
    claims: EVIDENCE_CLAIMS.filter((claim) => claim.sources.includes(url)),
    review: SOURCE_REVIEWS[url] ?? null,
  }));
}
