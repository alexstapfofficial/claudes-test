<template>
  <section id="preise" class="bg-cream px-0 py-24">
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
            {{ content?.meta?.intro }}
          </p>
        </div>

        <!-- Table -->
        <div class="w-full overflow-x-auto">
          <div class="min-w-[320px] md:min-w-0 max-w-4xl mx-auto">
            <!-- Header Row - Desktop -->
            <div class="hidden md:grid md:grid-cols-[2fr_1fr_1fr] border-b-2 border-black">
              <div class="p-2 md:pr-6 md:py-6">
                <p class="font-raleway font-bold text-lg md:text-[22px] leading-normal text-black">
                  Tagesstunden
                </p>
              </div>
              <div class="bg-cream p-2 md:p-6 text-center ">
                <p class="font-raleway font-bold text-lg md:text-[22px] leading-normal text-black">
                  Wochenstunden
                </p>
              </div>
              <div class="p-2 md:p-6 text-center ">
                <p class="font-raleway font-bold text-lg md:text-[22px] leading-normal text-black">
                  Preis
                </p>
              </div>
            </div>

            <!-- Header Row - Mobile -->
            <div class="grid grid-cols-3 md:hidden border-b-2 border-black">
              <div class="p-2">
                <p class="font-raleway font-bold text-xs leading-normal text-black">
                  Tag
                </p>
              </div>
              <div class="bg-cream p-2 text-center ">
                <p class="font-raleway font-bold text-xs leading-normal text-black">
                  Woche
                </p>
              </div>
              <div class="p-2 text-center ">
                <p class="font-raleway font-bold text-xs leading-normal text-black">
                  Preis
                </p>
              </div>
            </div>

            <!-- Data Rows -->
            <div
              v-for="(tier, index) in content?.meta?.pricingTiers"
              :key="index"
              class="grid grid-cols-3 md:grid-cols-[2fr_1fr_1fr] border-b-2 border-black"
            >
              <div class="p-2 md:pr-6 md:py-4">
                <p class="font-raleway font-semibold text-xs md:text-base leading-normal text-black">
                  {{ tier.dailyHours }}
                </p>
              </div>
              <div class="bg-cream p-2 md:px-6 md:py-4 text-center">
                <p class="font-raleway font-semibold text-xs md:text-base leading-normal text-black">
                  {{ tier.weeklyHours }}
                </p>
              </div>
              <div class="p-2 md:px-6 md:py-4 text-center">
                <p class="font-raleway font-semibold text-xs md:text-base leading-normal text-black">
                  {{ tier.price }}
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
const { data: content } = useAsyncData('pricing-content', () => queryCollection('sections').path('/sections/pricing').first()) as any;
</script>
