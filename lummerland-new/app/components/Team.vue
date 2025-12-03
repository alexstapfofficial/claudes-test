<template>
  <section id="team" class="bg-white px-0 py-24">
    <UContainer>
      <div class="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <!-- Section Title -->
        <div class="max-w-3xl space-y-4">
          <p class="font-raleway font-semibold text-base text-black">
            {{ content?.meta?.tagline }}
          </p>
          <h2 class="font-sorts-mill text-3xl md:text-4xl lg:text-[52px] leading-[1.2] tracking-[-0.52px] text-black">
            {{ content?.meta?.heading }}
          </h2>
          <p class="font-raleway text-base md:text-lg leading-[1.5] text-black">
            {{ content?.meta?.subtitle }}
          </p>
        </div>

        <!-- Team Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div
            v-for="(member, index) in content?.meta?.team"
            :key="index"
            class="space-y-6"
          >
            <NuxtImg
              :src="member.image"
              :alt="member.name"
              format="webp"
              class="aspect-square w-full object-cover rounded-lg"
              loading="lazy"
            />
            <div class="space-y-4 text-black leading-[1.5]">
              <div class="space-y-0">
                <p class="font-raleway font-semibold text-lg md:text-[22px]">
                  {{ member.name }}
                </p>
                <p class="font-raleway text-base md:text-lg">
                  {{ member.role }}
                </p>
              </div>
              <p class="font-raleway text-sm md:text-base">
                {{ member.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { data: content } = useAsyncData('team-content', () => queryCollection('sections').path('/sections/team').first()) as any;
</script>
