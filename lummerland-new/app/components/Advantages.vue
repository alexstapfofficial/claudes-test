<template>
  <section id="vorteile" class="bg-cream-light px-0 py-24">
    <UContainer>
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <NuxtImg
            :src="content?.meta?.image"
            alt="Vorteile"
            format="webp"
            class="aspect-[600/450] w-full object-cover rounded-lg"
            loading="lazy"
          />

          <div class="space-y-12">
            <div
              v-for="(item, index) in content?.meta?.items"
              :key="index"
              class="flex gap-6"
            >
              <UIcon
                :name="item.icon"
                class="w-12 h-12 text-black flex-shrink-0"
              />
              <div class="space-y-4">
                <h3 class="font-sorts-mill text-[28px] leading-[1.4] tracking-[-0.28px] text-black">
                  {{ item.title }}
                </h3>
                <p class="font-raleway text-base leading-[1.5] text-black">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { data: content } = useAsyncData('advantages-content', () => queryCollection('sections').path('/sections/advantages').first()) as any;
</script>
