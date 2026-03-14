import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
  }),
})

const booksCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    startedReading: z.date(),
    finishedReading: z.date().optional(),
    medium: z.enum(["physical", "audio", "digital"]),
    tags: z.string().array().optional(),
  }),
})

export const collections = {
  posts: postsCollection,
  books: booksCollection,
}
