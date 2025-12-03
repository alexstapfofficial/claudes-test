<template>
  <footer class="bg-cream-can px-0 py-24 border-t-2 border-black">
    <UContainer>
      <div class="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div class="w-40 h-28 flex-shrink-0">
            <NuxtImg
              src="/img/companylogo.png"
              alt="Lummerland Logo"
              format="webp"
              class="w-full h-full object-contain"
            />
          </div>
          <h2 class="font-sorts-mill text-3xl md:text-4xl lg:text-[52px] leading-[1.2] tracking-[-0.52px] text-black text-center self-center md:text-left">
            Großtagespflege Lummerland
          </h2>
        </div>

        <div class="space-y-8">
          <div class="w-full h-0.5 bg-black" />
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-6 font-raleway text-sm leading-[1.5] text-black">
            <p>© 2025 Lummerland. Alle Rechte vorbehalten.</p>
            <ULink to="/datenschutz" class="underline text-black hover:no-underline">
              Datenschutz
            </ULink>
            <ULink to="/impressum" class="underline text-black hover:no-underline">
              Impressum
            </ULink>
          </div>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
