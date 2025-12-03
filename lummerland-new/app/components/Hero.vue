<template>
  <section class="bg-cream px-0 py-24">
    <UContainer>
      <div class="flex flex-col items-center gap-12 md:gap-20 max-w-7xl mx-auto">
        <div class="max-w-3xl w-full flex flex-col items-center gap-8 text-center">
          <div class="flex flex-col gap-6 text-black">
            <h1 class="font-sorts-mill text-4xl md:text-6xl lg:text-[72px] leading-[1.2] tracking-[-0.72px]">
              {{ content?.meta?.heading }}
            </h1>
            <p class="font-raleway text-base md:text-lg leading-[1.5]">
              {{ content?.meta?.subheading }}
            </p>
          </div>

          <UBadge
            :label="content?.meta?.badge"
            color="primary"
            variant="outline"
            size="lg"
            class="border-2 border-cream-can-dark rounded-xl px-3 py-1.5"
          />
        </div>

        <NuxtImg
          :src="content?.meta?.image"
          :alt="content?.meta?.title"
          format="webp"
          class="w-full aspect-video rounded-lg object-cover"
          loading="lazy"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { data: content } = useAsyncData('hero-content', () =>queryCollection('sections').path('/sections/hero').first());

</script>
