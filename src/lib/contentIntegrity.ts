interface IdentifiedRecord {
  id: string;
}

export function assertNonEmpty(
  label: string,
  records: readonly unknown[],
): void {
  if (records.length === 0) {
    throw new Error(`${label} must not be empty`);
  }
}

export function assertUniqueIds(
  label: string,
  records: readonly IdentifiedRecord[],
): void {
  const seen = new Set<string>();

  for (const record of records) {
    if (seen.has(record.id)) {
      throw new Error(`${label} contains duplicate id "${record.id}"`);
    }
    seen.add(record.id);
  }
}

export function assertRequiredIds(
  label: string,
  actualIds: readonly string[],
  requiredIds: readonly string[],
): void {
  const actual = new Set(actualIds);

  for (const requiredId of requiredIds) {
    if (!actual.has(requiredId)) {
      throw new Error(`${label} is missing required id "${requiredId}"`);
    }
  }
}

export function assertConsecutiveOrder(
  label: string,
  orders: readonly number[],
): void {
  const sorted = [...orders].sort((left, right) => left - right);

  sorted.forEach((order, index) => {
    const expected = index + 1;
    if (order !== expected) {
      throw new Error(
        `${label} order must be consecutive from 1; expected ${expected}, received ${order}`,
      );
    }
  });
}
