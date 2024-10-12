import { defineCollection, z } from "astro:content"

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
  }),
})

const booksCollection = defineCollection({
  type: "content",
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
