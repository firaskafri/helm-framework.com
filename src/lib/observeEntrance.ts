/**
 * Adds a visibility class to an element when it scrolls into view,
 * triggering CSS entrance animations. Disconnects after first intersection.
 */
export function observeEntrance(
  element: string | HTMLElement,
  visibleClass: string,
  threshold = 0.15,
): void {
  const el =
    typeof element === 'string' ? document.getElementById(element) : element;
  if (!el) return;
  if (
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    el.classList.add(visibleClass);
    return;
  }

  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add(visibleClass);
        obs.disconnect();
      }
    },
    { threshold },
  );
  obs.observe(el);
}
