<template>
  <section id="galerie" class="bg-cream-can px-0 py-24">
    <UContainer>
      <div class="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <div class="max-w-3xl mx-auto text-center space-y-6">
          <h2 class="font-sorts-mill text-3xl md:text-4xl lg:text-[52px] leading-[1.2] tracking-[-0.52px] text-black">
            {{ content?.meta?.heading }}
          </h2>
          <p class="font-raleway text-base md:text-lg leading-[1.5] text-black">
            {{ content?.meta?.subtitle }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <NuxtImg
            :src="content?.meta?.images?.[0]"
            alt="Galerie Bild 1"
            format="webp"
            class="aspect-square w-full object-cover rounded-lg"
            loading="lazy"
          />
          <div class="grid grid-cols-2 gap-8">
            <NuxtImg
              v-for="(image, index) in content?.meta?.images?.slice(1)"
              :key="index"
              :src="image"
              :alt="`Galerie Bild ${index + 2}`"
              format="webp"
              class="aspect-square w-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { data: content } = useAsyncData('gallery-content', () => queryCollection('sections').path('/sections/gallery').first()) as any;
</script>
