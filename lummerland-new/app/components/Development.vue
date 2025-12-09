<template>
  <section id="entwicklung" class="bg-cream px-0 py-24">
    <UContainer>
      <div class="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <div class="grid md:grid-cols-2 gap-12 md:gap-20">
          <div class="space-y-4">
            <p class="font-raleway font-semibold text-base text-black">
              {{ content?.meta?.tagline }}
            </p>
            <h2 class="font-sorts-mill text-3xl md:text-4xl lg:text-[52px] leading-[1.2] tracking-[-0.52px] text-black">
              {{ content?.meta?.heading }}
            </h2>
          </div>
          <p class="font-raleway text-base md:text-lg leading-[1.5] text-black self-end">
            {{ content?.meta?.intro }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in content?.meta?.features" :key="index" class="overflow-hidden mt-2">

            <NuxtImg :src="feature.image" :alt="feature.title" format="webp"
              class="aspect-[296/160] w-full object-cover rounded-lg" loading="lazy" />

            <div class="mt-4">
              <h3 class="font-sorts-mill text-2xl leading-[1.4] tracking-[-0.28px] text-black">
                {{ feature.title }}
              </h3>
              <p class="font-raleway text-base leading-[1.5] text-black">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { data: content } = useAsyncData('development-content', () => queryCollection('sections').path('/sections/development').first()) as any;
</script>
