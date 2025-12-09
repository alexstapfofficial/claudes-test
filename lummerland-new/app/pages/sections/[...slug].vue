<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Studio Preview Header -->
    <div class="bg-cream-can text-white py-3 px-4 text-sm sticky top-0 z-50 shadow-lg">
      <UContainer>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <UIcon name="heroicons:eye" class="w-5 h-5" />
            <span class="font-semibold">Studio Preview</span>
            <UIcon name="heroicons:chevron-right" class="w-4 h-4 opacity-50" />
            <code class="px-2 py-1 bg-white/10 rounded text-xs font-mono">
              {{ slug }}
            </code>
          </div>
          <div class="flex items-center gap-2">
            <UBadge v-if="content" variant="subtle">
              <UIcon name="heroicons:check-circle" class="w-3 h-3" />
              Loaded
            </UBadge>
            <UButton
              to="/"
              size="xs"
              variant="ghost"
              icon="heroicons:arrow-left"
            >
              Home
            </UButton>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Component Preview -->
    <div v-if="content && componentName">
      <Hero v-if="componentName === 'Hero'" />
      <Advantages v-else-if="componentName === 'Advantages'" />
      <Development v-else-if="componentName === 'Development'" />
      <Gallery v-else-if="componentName === 'Gallery'" />
      <Team v-else-if="componentName === 'Team'" />
      <Schedule v-else-if="componentName === 'Schedule'" />
      <Holidays v-else-if="componentName === 'Holidays'" />
      <Pricing v-else-if="componentName === 'Pricing'" />
      <Contact v-else-if="componentName === 'Contact'" />
      <Cta v-else-if="componentName === 'Cta'" />
    </div>

    <!-- Loading State -->
    <div v-else-if="pending" class="flex items-center justify-center min-h-[80vh]">
      <div class="text-center space-y-4">
        <UIcon name="heroicons:arrow-path" class="w-12 h-12 text-primary-500 animate-spin mx-auto" />
        <p class="text-gray-600 dark:text-gray-400">Loading preview...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else class="flex items-center justify-center min-h-[80vh] p-4">
      <UCard class="max-w-2xl w-full">
        <template #header>
          <div class="flex items-center gap-3">
            <div class="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
              <UIcon name="heroicons:exclamation-triangle" class="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
            </div>
            <div>
              <h2 class="text-xl font-bold">Preview Not Available</h2>
              <p class="text-sm text-gray-500">Component or content could not be loaded</p>
            </div>
          </div>
        </template>

        <div class="space-y-6">
          <!-- Debug Info -->
          <div class="space-y-2">
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Requested:</p>
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg space-y-1 text-sm">
              <div class="flex items-start gap-2">
                <span class="text-gray-500">Slug:</span>
                <code class="text-primary-600 dark:text-primary-400 font-mono">{{ slug }}</code>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-gray-500">Component:</span>
                <code class="text-primary-600 dark:text-primary-400 font-mono">{{ componentName }}</code>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-gray-500">Content Path:</span>
                <code class="text-primary-600 dark:text-primary-400 font-mono">/sections/{{ slug }}.md</code>
              </div>
            </div>
          </div>

          <!-- Available Components -->
          <div class="space-y-2">
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Available Sections:</p>
            <div class="grid grid-cols-2 gap-2">
              <NuxtLink
                v-for="name in availableComponents"
                :key="name"
                :to="`/sections/${name.toLowerCase()}`"
                class="p-3 bg-gray-50 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors group"
              >
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {{ name }}
                  </span>
                  <UIcon
                    name="heroicons:arrow-right"
                    class="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all group-hover:translate-x-1"
                  />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex gap-2">
            <UButton to="/" icon="heroicons:arrow-left" variant="soft">
              Back to Home
            </UButton>
            <UButton
              :to="`https://github.com/alexstapfofficial/lummerland/blob/main/content/sections/${slug}.md`"
              target="_blank"
              icon="heroicons:document-text"
              variant="ghost"
            >
              Edit on GitHub
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// Studio Authentication Middleware
definePageMeta({
  middleware: 'studio-auth'
})

const route = useRoute()
const slug = computed(() => route.params.slug?.[0] || '')

// Extrahiere den Komponentennamen aus dem Slug
// z.B. "development" -> "Development"
const componentName = computed(() => {
  if (!slug.value) return ''
  return slug.value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
})

// Liste der verfügbaren Komponenten für die Fehlerseite
const availableComponents = [
  'Hero',
  'Advantages',
  'Development',
  'Gallery',
  'Team',
  'Schedule',
  'Holidays',
  'Pricing',
  'Contact',
  'Cta'
]

// Lade den Content aus der Markdown-Datei
const { data: content, pending } = await useAsyncData(
  `section-${slug.value}`,
  () => queryCollection('sections').path(`/sections/${slug.value}`).first(),
  {
    watch: [slug]
  }
)

// SEO Meta Tags
useSeoMeta({
  title: `Preview: ${componentName.value} Section`,
  description: `Studio preview for ${componentName.value} section`,
  robots: 'noindex, nofollow'
})

// Refresh content in Studio
onMounted(() => {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'studio:refresh') {
      refreshNuxtData(`section-${slug.value}`)
    }
  })
})
</script>
