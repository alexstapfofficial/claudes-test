<template>
  <section id="zeiten" class="bg-cream px-0 py-24">
    <UContainer>
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 md:gap-20">
          <div class="space-y-4">
            <p class="font-raleway font-semibold text-base text-black">
              {{ content?.meta?.tagline }}
            </p>
            <h2 class="font-sorts-mill text-3xl md:text-4xl lg:text-[52px] leading-[1.2] tracking-[-0.52px] text-black">
              {{ content?.meta?.heading }}
            </h2>
          </div>

          <div class="space-y-4">
            <div
              v-for="(item, index) in content?.meta?.timeline"
              :key="index"
              class="flex gap-10"
            >
              <div class="flex flex-col items-center gap-4">
                <UIcon
                  :name="item.icon"
                  class="w-12 h-12 text-black flex-shrink-0"
                />
                <div
                  v-if="index < content?.meta?.timeline?.length - 1"
                  class="w-0.5 h-24 bg-black"
                />
              </div>

              <div class="space-y-4 pb-8">
                <h3 class="font-sorts-mill text-[22px] leading-[1.4] tracking-[-0.22px] text-black">
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
const { data: content } = useAsyncData('schedule-content', () => queryCollection('sections').path('/sections/schedule').first()) as any;
</script>
