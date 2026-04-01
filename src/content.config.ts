import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const principle = z.object({
  number: z.number(),
  title: z.string(),
  quote: z.string(),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    order: z.number(),
    audience: z.string().optional(),
    principles: z.array(principle).optional(),
    /** Coerced to Date at build time; invalid values fail the build instead of silently producing bad feeds. */
    lastModified: z.coerce.date().optional(),
  }),
});

const competency = z.object({
  title: z.string(),
  description: z.string(),
  evolved_from: z.string().optional(),
});

const interviewMethod = z.object({
  title: z.string(),
  description: z.string(),
});

const roles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/roles' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    order: z.number(),
    category: z.enum(['engineering', 'product']),
    evolved_from: z.array(z.string()),
    maps_to: z.string(),
    core_mission: z.string(),
    key_responsibilities: z.array(z.string()),
    competencies: z.array(competency),
    no_longer_screen_for: z.array(z.string()),
    interview_methods: z.array(interviewMethod),
    day_in_life: z.string(),
    helm_connection: z.string(),
    /** Coerced to Date at build time; invalid values fail the build instead of silently producing bad feeds. */
    lastModified: z.coerce.date().optional(),
  }),
});

export const collections = { docs, roles };
