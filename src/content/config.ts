import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    pubDate: z.date(),
    ogimage: z.string(),
   
  }),
});

export const collections = {
  blog: blogCollection,
};
