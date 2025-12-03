# CLAUDE.md - Figma zu Nuxt Onepage Konvertierung

## Projekt-Übersicht

Dieses Projekt setzt ein Figma-Design in eine responsive Nuxt 3 Onepage-Website um.

## Technologie-Stack

- **Nuxt 3** - Vue Framework
- **Nuxt Content** - Markdown-basiertes CMS für Texte
- **Nuxt UI** - UI-Komponenten-Bibliothek
- **TailwindCSS** - Responsive Styling
- **Nuxt Icon** - Icon-System
- **Figma MCP Server** - Design-Datenquelle

## Entwicklungs-Workflow

### 1. Figma-Design Analyse

Wenn du das Figma-Design erhältst:

1. **Analysiere die Design-Struktur** und identifiziere logische Sektionen (z.B. Hero, Features, About, Services, Team, Testimonials, Contact, Footer)
2. **Benenne jede Sektion semantisch** nach ihrem Zweck
3. **Identifiziere Designelemente**, die mit Nuxt UI Komponenten umgesetzt werden können
4. **Extrahiere alle Texte** und plane deren Speicherung in Markdown-Dateien

### 2. Projektstruktur

```
/components
  /sections
    - Hero.vue
    - Features.vue
    - About.vue
    - Services.vue
    - Team.vue
    - Testimonials.vue
    - Contact.vue
    - Footer.vue
  /ui
    - Navigation.vue
    - (weitere wiederverwendbare Komponenten)

/content
  /sections
    - hero.md
    - features.md
    - about.md
    - services.md
    - team.md
    - testimonials.md
    - contact.md
    - footer.md

/pages
  - index.vue

/assets
  /css
    - main.css
```

### 3. Sektionen-Benennung

Benenne Komponenten nach ihrer **semantischen Funktion**, nicht nach visuellen Eigenschaften:

✅ **RICHTIG:**
- `Hero.vue` - Hauptbereich mit Hauptbotschaft
- `Features.vue` - Feature-/Vorteilsübersicht
- `About.vue` - Über uns / Firmenvorstellung
- `Services.vue` - Dienstleistungen/Produkte
- `Team.vue` - Team-Mitglieder
- `Testimonials.vue` - Kundenstimmen/Bewertungen
- `Gallery.vue` - Bildergalerie
- `Pricing.vue` - Preistabellen
- `FAQ.vue` - Häufig gestellte Fragen
- `CTA.vue` - Call-to-Action Bereich
- `Contact.vue` - Kontaktformular/-information
- `Footer.vue` - Fußzeile

❌ **FALSCH:**
- `BlueSection.vue`
- `Section1.vue`
- `BigText.vue`

### 4. Content-Struktur (Markdown-Dateien)

Speichere alle Texte in strukturierten Markdown-Dateien:

**Beispiel: `/content/sections/hero.md`**
```markdown
---
title: "Deine Zukunft beginnt hier"
subtitle: "Innovative Lösungen für moderne Herausforderungen"
cta_primary: "Jetzt starten"
cta_secondary: "Mehr erfahren"
---

# Willkommen bei [Firmenname]

Wir helfen dir dabei, deine Vision Wirklichkeit werden zu lassen.
```

**Beispiel: `/content/sections/features.md`**
```markdown
---
title: "Unsere Features"
subtitle: "Alles was du brauchst, an einem Ort"
features:
  - title: "Schnell"
    description: "Blitzschnelle Performance"
    icon: "heroicons:bolt"
  - title: "Sicher"
    description: "Enterprise-grade Sicherheit"
    icon: "heroicons:shield-check"
  - title: "Skalierbar"
    description: "Wächst mit deinen Anforderungen"
    icon: "heroicons:arrow-trending-up"
---
```

### 5. Nuxt UI Komponenten verwenden

Nutze vorrangig diese Nuxt UI Komponenten:

**Layout & Container:**
- `<UContainer>` - Responsive Container mit max-width
- `<UCard>` - Karten-Layout
- `<UDivider>` - Trennlinien

**Navigation:**
- `<UVerticalNavigation>` - Vertikale Navigation (Sidebar)
- `<UHorizontalNavigation>` - Horizontale Navigation
- `<UCommandPalette>` - Command Palette

**Buttons & Links:**
- `<UButton>` - Buttons in allen Varianten
- `<UButtonGroup>` - Button-Gruppen

**Formulare:**
- `<UForm>` - Formular-Wrapper mit Validierung
- `<UFormGroup>` - Formular-Gruppen
- `<UInput>` - Text-Inputs
- `<UTextarea>` - Textareas
- `<USelect>` - Dropdowns
- `<UCheckbox>` - Checkboxen
- `<URadio>` - Radio-Buttons

**Feedback:**
- `<UAlert>` - Hinweise und Warnungen
- `<UBadge>` - Labels und Tags
- `<UNotification>` - Toast-Benachrichtigungen

**Bilder:**
- `<UAvatar>` - Profilbilder (für Team-Mitglieder)
- `<UAvatarGroup>` - Gruppen von Avataren

**Andere:**
- `<UIcon>` - Icons (über 200.000 verfügbar)
- `<UAccordion>` - Akkordeons (perfekt für FAQs)
- `<UModal>` - Modale Dialoge
- `<UTabs>` - Tab-Navigation

### 6. Bilder-Handling

**Für Bilder die NICHT aus Figma geladen werden können:**

```vue
<template>
  <!-- Nuxt UI Placeholder verwenden -->
  <div class="aspect-video w-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
    <UIcon name="heroicons:photo" class="w-16 h-16 text-gray-400" />
  </div>
</template>
```

**Alternative Placeholders:**

```vue
<!-- Für Profilbilder / Avatare -->
<UAvatar 
  size="xl" 
  icon="heroicons:user"
  alt="Team Member"
/>

<!-- Für generische Bilder -->
<div class="relative aspect-[16/9] bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg overflow-hidden">
  <div class="absolute inset-0 flex items-center justify-center">
    <UIcon name="heroicons:photo" class="w-20 h-20 text-white/50" />
  </div>
</div>
```

### 7. Navigation implementieren

Erstelle eine Smooth-Scroll Navigation in `components/ui/Navigation.vue`:

```vue
<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
    <UContainer>
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <UIcon name="heroicons:sparkles" class="w-6 h-6 text-primary" />
          <span class="font-bold text-xl">Logo</span>
        </div>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="item in navigation" :key="item.id">
            <a 
              :href="`#${item.id}`"
              class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              @click.prevent="scrollToSection(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <UButton
          icon="heroicons:bars-3"
          variant="ghost"
          class="md:hidden"
          @click="isMenuOpen = true"
        />
      </nav>
    </UContainer>

    <!-- Mobile Slide-over Menu -->
    <USlideover v-model="isMenuOpen">
      <UCard class="h-full flex flex-col">
        <template #header>
          <div class="flex items-center justify-between">
            <span class="font-bold text-xl">Menü</span>
            <UButton
              icon="heroicons:x-mark"
              variant="ghost"
              @click="isMenuOpen = false"
            />
          </div>
        </template>

        <ul class="space-y-4">
          <li v-for="item in navigation" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block text-lg hover:text-primary transition-colors"
              @click="scrollToSection(item.id); isMenuOpen = false"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </UCard>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const navigation = [
  { id: 'hero', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'about', label: 'Über uns' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Kontakt' }
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
```

### 8. Haupt-Page Struktur

**`pages/index.vue`:**

```vue
<template>
  <div>
    <Navigation />
    
    <main>
      <section id="hero" class="min-h-screen">
        <Hero />
      </section>

      <section id="features" class="py-20">
        <Features />
      </section>

      <section id="about" class="py-20 bg-gray-50 dark:bg-gray-900">
        <About />
      </section>

      <section id="services" class="py-20">
        <Services />
      </section>

      <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
        <Contact />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags
useSeoMeta({
  title: 'Firmenname - Deine Lösung',
  description: 'Beschreibung der Website',
  ogImage: '/og-image.jpg'
})
</script>
```

### 9. Responsive Design Richtlinien

**Nutze TailwindCSS Breakpoints konsequent:**

```vue
<template>
  <!-- Mobile First Approach -->
  <div class="
    grid 
    grid-cols-1       /* Mobile: 1 Spalte */
    md:grid-cols-2    /* Tablet: 2 Spalten */
    lg:grid-cols-3    /* Desktop: 3 Spalten */
    xl:grid-cols-4    /* Large Desktop: 4 Spalten */
    gap-6
  ">
    <!-- Content -->
  </div>

  <!-- Responsive Typography -->
  <h1 class="
    text-3xl          /* Mobile */
    md:text-4xl       /* Tablet */
    lg:text-5xl       /* Desktop */
    xl:text-6xl       /* Large */
    font-bold
  ">
    Titel
  </h1>

  <!-- Responsive Spacing -->
  <section class="
    px-4              /* Mobile Padding */
    md:px-8           /* Tablet */
    lg:px-16          /* Desktop */
    py-12
    md:py-16
    lg:py-24
  ">
    <UContainer>
      <!-- Content -->
    </UContainer>
  </section>
</template>
```

### 10. Beispiel-Komponente

**`components/sections/Hero.vue`:**

```vue
<template>
  <div class="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-6">
          <UBadge color="primary" variant="subtle" size="lg">
            {{ content?.badge }}
          </UBadge>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            {{ content?.title }}
          </h1>
          
          <p class="text-xl text-gray-600 dark:text-gray-300">
            {{ content?.subtitle }}
          </p>

          <ContentRenderer v-if="content" :value="content" class="prose dark:prose-invert" />

          <div class="flex flex-col sm:flex-row gap-4">
            <UButton 
              size="xl" 
              icon="heroicons:rocket-launch"
              :to="`#${content?.cta_primary_link}`"
            >
              {{ content?.cta_primary }}
            </UButton>
            
            <UButton 
              size="xl" 
              variant="outline"
              icon="heroicons:arrow-right"
              :to="`#${content?.cta_secondary_link}`"
            >
              {{ content?.cta_secondary }}
            </UButton>
          </div>
        </div>

        <!-- Hero Image / Placeholder -->
        <div class="relative aspect-square lg:aspect-video">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl overflow-hidden shadow-2xl">
            <div class="absolute inset-0 flex items-center justify-center">
              <UIcon name="heroicons:photo" class="w-32 h-32 text-white/30" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const { data: content } = await useAsyncData('hero', () => 
  queryContent('/sections/hero').findOne()
)
</script>
```

### 11. Content Query Patterns

**Einzelnes Dokument laden:**
```typescript
const { data: content } = await useAsyncData('hero', () => 
  queryContent('/sections/hero').findOne()
)
```

**Liste von Dokumenten:**
```typescript
const { data: features } = await useAsyncData('features', () => 
  queryContent('/sections/features').find()
)
```

**Mit Sortierung:**
```typescript
const { data: team } = await useAsyncData('team', () => 
  queryContent('/team')
    .sort({ order: 1 })
    .find()
)
```

### 12. Dark Mode Support

Alle Komponenten müssen Dark Mode unterstützen:

```vue
<template>
  <!-- Immer beide Varianten definieren -->
  <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <UButton color="primary">
      <!-- Nuxt UI Komponenten unterstützen Dark Mode automatisch -->
      Click me
    </UButton>
  </div>
</template>
```

### 13. Accessibility Checklist

- [ ] Alle Bilder haben `alt` Attribute
- [ ] Navigation ist keyboard-navigierbar
- [ ] Farbkontraste erfüllen WCAG Standards
- [ ] Fokus-States sind sichtbar
- [ ] Semantische HTML-Elemente (`<header>`, `<main>`, `<section>`, `<footer>`)
- [ ] ARIA-Labels wo nötig

### 14. Performance Optimierung

```vue
<script setup lang="ts">
// Lazy Loading für Komponenten
const Hero = defineAsyncComponent(() => import('~/components/sections/Hero.vue'))
const Features = defineAsyncComponent(() => import('~/components/sections/Features.vue'))

// Bilder optimieren
const img = useImage()
const optimizedImage = computed(() => 
  img('/path/to/image.jpg', { width: 800, quality: 80 })
)
</script>
```

### 15. Testing vor Deployment

**Checklist:**
- [ ] Alle Sektionen sind responsive (Mobile, Tablet, Desktop)
- [ ] Navigation funktioniert (Smooth Scroll zu allen Sektionen)
- [ ] Dark Mode funktioniert überall
- [ ] Alle Texte kommen aus Markdown-Dateien
- [ ] Nuxt UI Komponenten werden verwendet
- [ ] Placeholder sind für fehlende Bilder gesetzt
- [ ] Meta-Tags für SEO sind gesetzt
- [ ] Performance ist optimiert (Lighthouse Score)

## Quick Reference: Nuxt UI Komponenten

```vue
<!-- Buttons -->
<UButton>Standard</UButton>
<UButton variant="outline">Outline</UButton>
<UButton variant="ghost">Ghost</UButton>
<UButton size="xl" icon="heroicons:star">Mit Icon</UButton>

<!-- Cards -->
<UCard>
  <template #header>Header</template>
  Content
  <template #footer>Footer</template>
</UCard>

<!-- Forms -->
<UForm :state="state">
  <UFormGroup label="Name" name="name">
    <UInput v-model="state.name" />
  </UFormGroup>
</UForm>

<!-- Alerts -->
<UAlert 
  title="Erfolg!" 
  description="Deine Nachricht wurde gesendet"
  color="green"
  icon="heroicons:check-circle"
/>

<!-- Icons (Heroicons empfohlen) -->
<UIcon name="heroicons:heart" class="w-6 h-6" />
<UIcon name="heroicons:envelope" class="w-6 h-6" />
<UIcon name="heroicons:phone" class="w-6 h-6" />

<!-- Avatars -->
<UAvatar src="/team/john.jpg" alt="John Doe" size="xl" />
<UAvatar icon="heroicons:user" size="xl" />

<!-- Container -->
<UContainer>
  <div class="max-w-7xl mx-auto">
    <!-- Content -->
  </div>
</UContainer>
```

## Entwicklungs-Kommandos

```bash
# Development Server
npm run dev

# Production Build
npm run build
npm run preview

# Content bearbeiten
# → Markdown Dateien in /content/sections/

# Komponenten hinzufügen
# → Vue Dateien in /components/sections/
```

## Deployment (Vercel)

Das Projekt ist für Vercel optimiert. Nach dem Push zu GitHub:

1. In Vercel importieren
2. Build Command: `npm run generate`
3. Output Directory: `.output/public`
4. Deploy!

---

**Bei Fragen oder Unklarheiten während der Entwicklung, frage nach spezifischen Details zum Figma-Design!**
