import { defineCollection, z } from "astro:content"

const platos = defineCollection({
    schema: z.object({
        name: z.string(),
        price: z.number(),
        img: z.string()
    })
})

export const collections = { platos }
