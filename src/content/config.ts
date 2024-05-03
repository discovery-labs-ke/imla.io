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

const faqs = defineCollection({
  type: "data",
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    isGeneral: z.boolean(),
  }),
})

export const collections = {
  testimonials,
  faqs,
}
