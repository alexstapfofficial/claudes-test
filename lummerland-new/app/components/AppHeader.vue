<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: 'Entwicklung',
  to: '#entwicklung',
  active: activeHeadings.value.includes('entwicklung')
},{
  label: 'Vorteile',
  to: '#vorteile',
  active: activeHeadings.value.includes('vorteile')
}, {
  label: 'Galerie',
  to: '#galerie',
  active: activeHeadings.value.includes('galerie')
}, {
  label: 'Zeiten',
  to: '#zeiten',
  active: activeHeadings.value.includes('zeiten')
}, {
  label: 'Urlaub',
  to: '#urlaubszeiten',
  active: activeHeadings.value.includes('urlaubszeiten')
}, {
  label: 'Preise',
  to: '#preise',
  active: activeHeadings.value.includes('preise')
}, {
  label: 'Team',
  to: '#team',
  active: activeHeadings.value.includes('team')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#entwicklung'),
    document.querySelector('#vorteile'),
    document.querySelector('#galerie'),
    document.querySelector('#zeiten'),
    document.querySelector('#urlaubszeiten'),
    document.querySelector('#preise'),
    document.querySelector('#team')
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <NuxtImg src="/img/companylogo.png" class="text-xl w-auto h-12 shrink-0" />
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <UButton
        label="Kontakt"
        variant="subtle"
        class="hidden lg:block"
        to="#kontakt"
      />

    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        class="mt-4"
        label="Kontakt"
        variant="subtle"
        block
        to="#kontakt"
      />
    </template>
  </UHeader>
</template>