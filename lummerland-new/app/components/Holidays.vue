<template>
  <section id="urlaubszeiten" class="bg-cream-light px-0 py-24">
    <UContainer>
      <div class="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <!-- Section Title -->
        <div class="max-w-3xl mx-auto text-center space-y-4">
          <p class="font-raleway font-semibold text-base text-black">
            {{ content?.meta?.tagline }}
          </p>
          <h2 class="font-sorts-mill text-3xl md:text-4xl lg:text-[52px] leading-[1.2] tracking-[-0.52px] text-black">
            {{ content?.meta?.heading }}
          </h2>
          <p class="font-raleway text-base md:text-lg leading-[1.5] text-black">
            {{ content?.meta?.bridgeDay }}
          </p>
        </div>

        <!-- Table -->
        <div class="w-full overflow-x-auto">
          <div class="min-w-[320px] md:min-w-0 max-w-4xl mx-auto">
            <!-- Header Row - Desktop -->
            <div class="hidden md:grid md:grid-cols-[2fr_1fr_1fr] border-b-2 border-black">
              <div class="p-2 md:pr-6 md:py-6">
                <p class="font-raleway font-bold text-lg md:text-[22px] leading-[1.5] text-black">
                  Ferien
                </p>
              </div>
              <div class="bg-cream-light p-2 md:p-6 flex flex-col gap-2 text-center ">
                <p class="font-raleway font-bold text-lg md:text-[22px] leading-[1.5] text-black">
                  Beginn
                </p>
                <p class="font-raleway text-sm md:text-base leading-[1.5] text-black">
                  von
                </p>
              </div>
              <div class="p-2 md:p-6 flex flex-col gap-2 text-center ">
                <p class="font-raleway font-bold text-lg md:text-[22px] leading-[1.5] text-black">
                  Ende
                </p>
                <p class="font-raleway text-sm md:text-base leading-[1.5] text-black">
                  bis
                </p>
              </div>
            </div>

            <!-- Header Row - Mobile -->
            <div class="grid grid-cols-3 md:hidden border-b-2 border-black">
              <div class="p-2">
                <p class="font-raleway font-bold text-sm leading-[1.5] text-black">
                  Ferien
                </p>
              </div>
              <div class="bg-cream-light p-2 text-center">
                <p class="font-raleway font-bold text-sm leading-[1.5] text-black">
                  Von
                </p>
              </div>
              <div class="p-2 text-center">
                <p class="font-raleway font-bold text-sm leading-[1.5] text-black">
                  Bis
                </p>
              </div>
            </div>

            <!-- Data Rows -->
            <div
              v-for="(holiday, index) in content?.meta?.holidays"
              :key="index"
              class="grid grid-cols-3 md:grid-cols-[2fr_1fr_1fr] border-b-2 border-black"
            >
              <div class="p-2 md:pr-6 md:py-4">
                <p class="font-raleway text-sm md:text-base leading-[1.5] text-black">
                  {{ holiday.name }}
                </p>
              </div>
              <div class="bg-cream-light p-2 md:px-6 md:py-4 text-center">
                <p class="font-raleway font-semibold text-sm md:text-base leading-[1.5] text-black">
                  {{ holiday.startDate }}
                </p>
              </div>
              <div class="p-2 md:px-6 md:py-4 text-center">
                <p class="font-raleway font-semibold text-sm md:text-base leading-[1.5] text-black">
                  {{ holiday.endDate }}
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
const { data: content } = useAsyncData('holidays-content', () => queryCollection('sections').path('/sections/holidays').first()) as any;
</script>
