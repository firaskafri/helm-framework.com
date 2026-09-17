/** Preserve canonical anchors for the primary instance; namespace explicit repeats. */
export function componentIds(canonical: string, instance = canonical) {
  return {
    root: instance,
    record: (id: string) => (instance === canonical ? id : `${instance}-${id}`),
  };
}
