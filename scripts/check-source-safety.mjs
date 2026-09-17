import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const excluded = new Set([
  '.git',
  'node_modules',
  'dist',
  '.astro',
  'playwright-report',
  'test-results',
]);
const textExtensions = new Set([
  '.ts',
  '.js',
  '.mjs',
  '.astro',
  '.md',
  '.mdx',
  '.json',
  '.yaml',
  '.yml',
  '.toml',
  '.conf',
]);
const failures = [];
async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (excluded.has(entry.name)) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await inspect(file);
      continue;
    }
    if (!textExtensions.has(path.extname(file))) continue;
    const text = await readFile(file, 'utf8');
    // High-confidence signatures only. Never echo the matched credential.
    if (
      /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text) ||
      /\bgh[pousr]_[A-Za-z0-9]{30,}\b/.test(text) ||
      /\bAKIA[A-Z0-9]{16}\b/.test(text)
    ) {
      failures.push(`${file}: possible credential; inspect privately`);
    }
    if (
      file.startsWith(`src${path.sep}content${path.sep}`) &&
      /<\s*(?:script|iframe|object|embed)\b|\bon(?:error|load|click)\s*=|javascript\s*:/i.test(
        text,
      )
    ) {
      failures.push(
        `${file}: executable content is not allowed in framework entries`,
      );
    }
    if (
      file.endsWith('.astro') &&
      text.includes('set:html') &&
      !['src/layouts/Base.astro', 'src/layouts/RoleGuide.astro'].includes(
        file.split(path.sep).join('/'),
      )
    ) {
      failures.push(
        `${file}: new raw HTML sink requires sanitization review and a regression test`,
      );
    }
    if (
      file.startsWith(`.github${path.sep}workflows`) &&
      /pull_request_target/.test(text)
    )
      failures.push(
        `${file}: untrusted PR code must not run with privileged credentials`,
      );
  }
}
await inspect('.');
if (failures.length) throw new Error(failures.join('\n'));
console.log(
  'Source safety checks passed: credential signatures, content execution boundaries and raw HTML sinks.',
);
