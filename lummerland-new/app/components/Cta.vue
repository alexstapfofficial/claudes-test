<template>
  <section id="anmeldung" class="bg-cream-light px-0 py-24">
    <UContainer>
      <div class="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <!-- Content -->
        <div class="max-w-3xl mx-auto space-y-8">
          <div class="space-y-6 text-black text-center">
            <h2 class="font-sorts-mill text-3xl md:text-4xl lg:text-[52px] leading-[1.2] tracking-[-0.52px]">
              {{ content?.meta?.heading }}
            </h2>
            <p class="font-raleway text-base md:text-lg leading-[1.5]">
              {{ content?.meta?.subheading }}
            </p>
          </div>

          <div class="flex justify-center">
            <ULink
              :to="content?.meta?.button?.link"
              download
              class="bg-cream-can border-2 border-cream-can rounded-xl px-3 py-1.5 font-raleway font-medium text-base leading-[1.5] text-black hover:bg-cream-can-dark transition-colors"
            >
              {{ content?.meta?.button?.text }}
            </ULink>
          </div>
        </div>

        <!-- Image -->
        <NuxtImg
          :src="content?.meta?.image"
          :alt="content?.meta?.heading"
          format="webp"
          class="aspect-[1280/738] w-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { data: content } = useAsyncData('cta-content', () => queryCollection('sections').path('/sections/cta').first()) as any;
</script>
