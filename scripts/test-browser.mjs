import { spawnSync } from 'node:child_process';

// Always restore the release artifact, including after a failed browser check.
let status = 1;
try {
  const build = spawnSync('npm', ['run', 'build'], {
    stdio: 'inherit',
    env: { ...process.env, HELM_TEST_FIXTURES: '1' },
  });
  if (build.status === 0)
    status =
      spawnSync('npx', ['playwright', 'test', ...process.argv.slice(2)], {
        stdio: 'inherit',
      }).status ?? 1;
} finally {
  const restore = spawnSync('npm', ['run', 'build'], {
    stdio: 'inherit',
    env: { ...process.env, HELM_TEST_FIXTURES: '0' },
  });
  if (restore.status !== 0) status = 1;
}
process.exitCode = status;
