import type { CollectionEntry } from 'astro:content';

export interface RoleView {
  id: string;
  category: 'engineering' | 'product';
  fromTitle: string;
  aliases: string[];
  toTitle: string;
  subtitle: string;
  slug: string;
  evolved: { was: string; now: string; desc: string }[];
  gaps: { title: string; desc: string }[];
  deprecated: string[];
}

export function toRoleView(r: CollectionEntry<'roles'>): RoleView {
  return {
    id: r.id,
    category: r.data.category,
    fromTitle: r.data.title,
    aliases: r.data.evolved_from,
    toTitle: r.data.maps_to,
    subtitle: r.data.subtitle,
    slug: r.id,
    evolved: r.data.competencies
      .filter((c) => c.evolved_from)
      .map((c) => ({ was: c.evolved_from!, now: c.title, desc: c.description })),
    gaps: r.data.competencies
      .filter((c) => !c.evolved_from)
      .map((c) => ({ title: c.title, desc: c.description })),
    deprecated: r.data.no_longer_screen_for,
  };
}

export function gapPercent(role: RoleView): number {
  const total = role.evolved.length + role.gaps.length;
  return total ? Math.round((role.gaps.length / total) * 100) : 0;
}
