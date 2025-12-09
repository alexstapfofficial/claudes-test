// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";




export default defineNuxtConfig({
  // SSR aktiviert (Standard in Nuxt 3)
  ssr: true,

  // @ts-ignore
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-studio'
  ],

  nitro: {
    preset: 'vercel',
    // Prerender bestimmte Routen für bessere Performance
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false
    }
  },

  css: ['./app/assets/css/tailwind.css'],

  content: {
    // File-based content für SSR
    documentDriven: false
  },

  ui: {
    colorMode: false
  },

  fonts: {
    families: [
      { name: 'Sorts Mill Goudy', provider: 'google' },
      { name: 'Raleway', provider: 'google' }
    ]
  },

  experimental: {
    payloadExtraction: false
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  studio: {
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'alexstapfofficial', // your GitHub/GitLab username or organization
      repo: 'lummerland', // your repository name
      branch: 'main', // the branch to commit to (default: 'main')
    }
  },

  compatibilityDate: '2024-11-29'
})
