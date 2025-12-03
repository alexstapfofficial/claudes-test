<template>
  <section id="kontakt" class="bg-cream-light px-0 py-24">
    <UContainer>
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <!-- Email -->
          <div class="space-y-6">
            <UIcon
              name="i-heroicons-envelope"
              class="w-12 h-12 text-black"
            />
            <div class="space-y-6">
              <div class="space-y-4 text-black">
                <h3 class="font-sorts-mill text-2xl md:text-4xl leading-[1.3] tracking-[-0.36px]">
                  {{ content?.meta?.email?.title }}
                </h3>
                <p class="font-raleway text-sm md:text-base leading-[1.5]">
                  {{ content?.meta?.email?.description }}
                </p>
              </div>
              <ULink
                :to="`mailto:${content?.meta?.email?.address}`"
                class="font-raleway text-black text-sm md:text-base leading-[1.5] underline"
              >
                {{ content?.meta?.email?.address }}
              </ULink>
            </div>
          </div>

          <!-- Telefon -->
          <div class="space-y-6">
            <UIcon
              name="i-heroicons-phone"
              class="w-12 h-12 text-black"
            />
            <div class="space-y-6 text-black">
              <div class="space-y-4">
                <h3 class="font-sorts-mill text-2xl md:text-4xl leading-[1.3] tracking-[-0.36px]">
                  {{ content?.meta?.phone?.title }}
                </h3>
                <p class="font-raleway text-sm md:text-base leading-[1.5]">
                  {{ content?.meta?.phone?.description }}
                </p>
              </div>
              <ULink
                :to="`tel:${content?.meta?.phone?.number?.replace(/\s/g, '')}`"
                class="font-raleway text-black text-sm md:text-base leading-[1.5] underline"
              >
                {{ content?.meta?.phone?.number }}
              </ULink>
            </div>
          </div>

          <!-- Besuchen -->
          <div class="space-y-6">
            <UIcon
              name="i-heroicons-map-pin"
              class="w-12 h-12 text-black"
            />
            <div class="space-y-6 text-black">
              <div class="space-y-4">
                <h3 class="font-sorts-mill text-2xl md:text-4xl leading-[1.3] tracking-[-0.36px]">
                  {{ content?.meta?.location?.title }}
                </h3>
                <p class="font-raleway text-sm md:text-base leading-[1.5]">
                  {{ content?.meta?.location?.description }}
                </p>
              </div>
              <div class="font-raleway text-sm md:text-base leading-[1.5] underline">
                <p>{{ content?.meta?.location?.street }}</p>
                <p>{{ content?.meta?.location?.city }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { data: content } = useAsyncData('contact-content', () => queryCollection('sections').path('/sections/contact').first()) as any;
</script>
