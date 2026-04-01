/**
 * Adds a visibility class to an element when it scrolls into view,
 * triggering CSS entrance animations. Disconnects after first intersection.
 */
export function observeEntrance(
  elementId: string,
  visibleClass: string,
  threshold = 0.15,
): void {
  const el = document.getElementById(elementId);
  if (!el) return;

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
