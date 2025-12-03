// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
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
    preset: 'vercel'
  },

  css: ['./app/assets/css/tailwind.css'],

  content: {
    // Use default file-based content for static site
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