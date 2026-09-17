import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EVIDENCE_CLAIMS, claimsForPage } from '../../src/data/evidence';
import { buildSourceRegister } from '../../src/lib/sourceRegister';

test('every guide and role receives explicit evidence coverage', () => {
  for (const path of [
    '/foundation',
    '/practitioners',
    '/leadership',
    '/roles',
    '/roles/staff-engineer',
  ])
    assert.ok(claimsForPage(path).length);
  assert.ok(
    claimsForPage('/roles/product-manager/').some(
      ({ id }) => id === 'role-speed',
    ),
  );
  assert.equal(claimsForPage('/unrelated').length, 0);
});

test('source registration is stable, deduplicated and does not imply verification', () => {
  const references = [
    ...new Set(EVIDENCE_CLAIMS.flatMap(({ sources }) => sources)),
  ];
  const entries = [{ id: 'all', data: { evidenceReferences: references } }];
  const register = buildSourceRegister(entries);
  assert.equal(register.length, references.length);
  assert.equal(
    register.find(({ url }) => url.includes('openai.com'))?.review,
    null,
  );
  const blocked = register.find(({ url }) => url.includes('gartner.com'));
  assert.equal(blocked?.review?.accessedAt, null);
  assert.equal(blocked?.review?.status, 'access-blocked');
  assert.deepEqual(
    register.map(({ id }) => id),
    buildSourceRegister([...entries, ...entries]).map(({ id }) => id),
  );
  assert.throws(() => buildSourceRegister([]), /unregistered source/);
});
