import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    description: z.string(),
    location: z.string(),
    camera: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { writing, photos };
