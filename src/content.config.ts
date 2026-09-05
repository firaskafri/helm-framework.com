import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { FRAMEWORK_VERSION, PUBLICATION_STATUSES } from './data/framework';

const principle = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  number: z.number(),
  title: z.string().min(1),
  quote: z.string().min(1),
});

const publicationMetadata = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    publicationStatus: z.enum(PUBLICATION_STATUSES),
    frameworkVersion: z.literal(FRAMEWORK_VERSION),
    createdAt: z.coerce.date(),
    lastModified: z.coerce.date(),
    evidenceReferences: z.array(z.string().url()),
  })
  .refine(({ createdAt, lastModified }) => lastModified >= createdAt, {
    message: 'lastModified must be on or after createdAt',
    path: ['lastModified'],
  });

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: publicationMetadata.and(
    z.object({
      title: z.string().min(1),
      subtitle: z.string().min(1),
      description: z.string().min(1),
      order: z.number().int().positive(),
      audience: z.string().min(1).optional(),
      principles: z.array(principle).min(1).optional(),
    }),
  ),
});

const competency = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  evolved_from: z.string().optional(),
});

const interviewMethod = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const roles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/roles' }),
  schema: publicationMetadata.and(
    z.object({
      title: z.string().min(1),
      subtitle: z.string().min(1),
      description: z.string().min(1),
      order: z.number().int().positive(),
      category: z.enum(['engineering', 'product']),
      evolved_from: z.array(z.string().min(1)).min(1),
      maps_to: z.string().min(1),
      core_mission: z.string().min(1),
      key_responsibilities: z.array(z.string().min(1)).min(1),
      competencies: z.array(competency).min(1),
      no_longer_screen_for: z.array(z.string().min(1)).min(1),
      interview_methods: z.array(interviewMethod).min(1),
      day_in_life: z.string().min(1),
      helm_connection: z.string().min(1),
    }),
  ),
});

export const collections = { docs, roles };
