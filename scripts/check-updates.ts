import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { format } from 'prettier';
import { UPDATES } from '../src/data/updates';
import { SITE_ORIGIN } from '../src/data/site';
import { assertUpdateCoverage, updateSchema } from '../src/lib/updates';
import { renderUpdateChangelog } from '../src/lib/updateChangelog';

const expected = await format(renderUpdateChangelog(UPDATES, SITE_ORIGIN), {
  parser: 'markdown',
});
if (process.argv.includes('--write')) {
  await writeFile('CHANGELOG.md', expected);
  console.log('Updated CHANGELOG.md from src/data/updates.json.');
} else {
  if ((await readFile('CHANGELOG.md', 'utf8')) !== expected) {
    throw new Error(
      'CHANGELOG.md is out of sync. Edit src/data/updates.json, then run npm run updates:sync.',
    );
  }

  const baseIndex = process.argv.indexOf('--base');
  const baseRef =
    baseIndex >= 0 ? process.argv[baseIndex + 1] : process.env.UPDATES_BASE_REF;
  if (baseIndex >= 0 && !baseRef)
    throw new Error('--base needs a commit or ref');
  if (baseRef && !/^0+$/.test(baseRef)) {
    const git = (...args: string[]) =>
      execFileSync('git', args, { encoding: 'utf8' });
    const base = git(
      'rev-parse',
      '--verify',
      '--end-of-options',
      `${baseRef}^{commit}`,
    ).trim();
    const file = 'src/data/updates.json';
    const existed = git('ls-tree', '--name-only', base, '--', file).trim();
    const previous = existed
      ? updateSchema.array().parse(JSON.parse(git('show', `${base}:${file}`)))
      : [];
    const files = [
      ...new Set(
        [
          ...git('diff', '--name-only', '-z', base, '--').split('\0'),
          ...git('ls-files', '--others', '--exclude-standard', '-z').split(
            '\0',
          ),
        ].filter(Boolean),
      ),
    ];
    assertUpdateCoverage(files, UPDATES, previous);
    console.log(`Visitor-facing change coverage passed against ${baseRef}.`);
  }
  console.log(
    `Updates check passed: ${UPDATES.length} entries, current release/state, linked notes, and generated changelog.`,
  );
}
