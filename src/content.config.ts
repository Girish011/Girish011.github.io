import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const md = (dir: string) => glob({ pattern: '**/*.md', base: `./src/content/${dir}` });

// Blog posts live in a folder per project: src/content/blog/<project>/NN-slug.md
const blog = defineCollection({
  loader: md('blog'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    project: z.string(),
    order: z.number().default(0),
    date: z.coerce.date().optional(),
  }),
});

const projects = defineCollection({
  loader: md('projects'),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const papers = defineCollection({
  loader: md('papers'),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    url: z.string().url().optional(),
  }),
});

const certifications = defineCollection({
  loader: md('certifications'),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    url: z.string().url().optional(),
  }),
});

const experience = defineCollection({
  loader: md('experience'),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string().default('Present'),
    order: z.number().default(0),
  }),
});

export const collections = { blog, projects, papers, certifications, experience };
