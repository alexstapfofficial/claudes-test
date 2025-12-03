<template>
  <div class="min-h-screen">
    <SectionsNavbar />

    <main v-if="heroContent && developmentContent && advantagesContent && galleryContent && scheduleContent">
      <SectionsHero :content="heroContent" />
      <SectionsDevelopment :content="developmentContent" />
      <SectionsAdvantages :content="advantagesContent" />
      <SectionsGallery :content="galleryContent" />
      <SectionsSchedule :content="scheduleContent" />
    </main>

    <SectionsFooter />
  </div>
</template>

<script setup lang="ts">
const { data: heroContent } = await useAsyncData('hero', () =>
  queryContent('sections/hero').findOne()
)

const { data: developmentContent } = await useAsyncData('development', () =>
  queryContent('sections/development').findOne()
)

const { data: advantagesContent } = await useAsyncData('advantages', () =>
  queryContent('sections/advantages').findOne()
)

const { data: galleryContent } = await useAsyncData('gallery', () =>
  queryContent('sections/gallery').findOne()
)

const { data: scheduleContent } = await useAsyncData('schedule', () =>
  queryContent('sections/schedule').findOne()
)
</script>
