import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
 type: "content",
 schema: z.object({
   title: z.string(),
   author: z.string(),
   description: z.string(),
   pubDate: z.date(),
   
 })
});

export const collections = {
  blog: blogCollection,
};

