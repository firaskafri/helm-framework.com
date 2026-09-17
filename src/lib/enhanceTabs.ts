import { syncFragmentSelection } from './syncFragmentSelection';

type Control = HTMLElement | SVGElement;
interface Options {
  activeClass: string;
  pastClass?: string;
  columns?: number;
  onActivate?: (index: number) => void;
}

export function enhanceTabs(
  wrap: HTMLElement,
  controlSelector: string,
  panelSelector: string,
  options: Options,
): void {
  const controls = [...wrap.querySelectorAll<Control>(controlSelector)];
  const panels = [...wrap.querySelectorAll<HTMLElement>(panelSelector)];
  if (!controls.length || controls.length !== panels.length) return;

  function activate(index: number): void {
    controls.forEach((control, i) => {
      const selected = i === index;
      control.classList.toggle(options.activeClass, selected);
      if (options.pastClass)
        control.classList.toggle(options.pastClass, i < index);
      control.setAttribute(
        control.getAttribute('role') === 'tab'
          ? 'aria-selected'
          : 'aria-pressed',
        String(selected),
      );
      control.setAttribute('tabindex', selected ? '0' : '-1');
    });
    const targetId = controls[index].getAttribute('aria-controls');
    panels.forEach((panel) => {
      panel.hidden = panel.id !== targetId;
    });
    const track = wrap.querySelector<HTMLElement>('[class$="track-fill"]');
    if (track)
      track.style.width = `${controls.length > 1 ? (index / (controls.length - 1)) * 100 : 0}%`;
    options.onActivate?.(index);
  }

  controls.forEach((control, index) => {
    control.addEventListener('click', () => activate(index));
    control.addEventListener('keydown', (event) => {
      const e = event as KeyboardEvent;
      let next = index;
      if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = controls.length - 1;
      else if (e.key === 'ArrowRight') next = (index + 1) % controls.length;
      else if (e.key === 'ArrowLeft')
        next = (index - 1 + controls.length) % controls.length;
      else if (e.key === 'ArrowDown')
        next = Math.min(index + (options.columns ?? 1), controls.length - 1);
      else if (e.key === 'ArrowUp')
        next = Math.max(index - (options.columns ?? 1), 0);
      else if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      activate(next);
      (controls[next] as HTMLElement).focus({ preventScroll: true });
      controls[next].scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
        behavior: 'instant',
      });
    });
  });

  activate(0);
  wrap.dataset.enhanced = 'true';
  syncFragmentSelection(panels, (index) => {
    const controlIndex = controls.findIndex(
      (control) => control.getAttribute('aria-controls') === panels[index].id,
    );
    if (controlIndex >= 0) activate(controlIndex);
  });
}
