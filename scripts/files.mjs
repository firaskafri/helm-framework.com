import { readdir } from 'node:fs/promises';
import path from 'node:path';

/** List files recursively in directory-entry order. */
export async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const file = path.join(directory, entry.name);
      return entry.isDirectory() ? filesIn(file) : [file];
    }),
  );
  return files.flat();
}
