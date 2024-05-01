import { defineCollection, z } from "astro:content"

const testimonials = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
    quote: z.string().max(300, {
      message: "Quote cannot be longer than 300 characters",
    }),
  }),
})

export const collections = {
  testimonials,
}
