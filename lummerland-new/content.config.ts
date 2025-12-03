import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    sections: defineCollection({
      type: 'page',
      source: 'sections/**/*.md',
    }),
    content: defineCollection({
      type: 'page',
      source: '*.md',
    }),
  },
})
