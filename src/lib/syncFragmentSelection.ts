export function syncFragmentSelection(
  elements: Iterable<HTMLElement>,
  activate: (index: number) => void,
): void {
  const candidates = [...elements];

  function activateCurrentFragment(): void {
    let fragment: string;
    try {
      fragment = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }

    if (!fragment) return;

    const index = candidates.findIndex(({ id }) => id === fragment);
    if (index >= 0) activate(index);
  }

  activateCurrentFragment();
  window.addEventListener('hashchange', activateCurrentFragment);
}
