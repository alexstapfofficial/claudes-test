# CLAUDE.md - AI Assistant Guide

## About This Document

This document serves as a comprehensive guide for AI assistants (like Claude) working with this codebase. It provides context, conventions, and workflows to ensure consistent and effective collaboration.

**Last Updated:** 2025-11-28
**Repository:** alexstapfofficial/claudes-test
**Project Type:** Nuxt 3 One-Pager Website

---

## Repository Overview

### Purpose
This repository contains a modern one-page website built with Nuxt 3, featuring content management capabilities through Nuxt Content and styled with TailwindCSS and Nuxt UI components.

### Current State
- **Status:** Active development
- **Project Type:** Single-page application (One-Pager)
- **Primary Branch:** main
- **Active Development Branch:** `claude/create-claude-md-01XMdN24eBJTeAh2fMgepCYZ`

### Tech Stack Overview
- **Framework:** Nuxt 3
- **Styling:** TailwindCSS + Nuxt UI
- **Content:** Nuxt Content v2
- **CMS Integration:** Nuxt Studio
- **Type Safety:** TypeScript
- **Package Manager:** npm/pnpm/yarn

---

## Codebase Structure

### Directory Layout
```
claudes-test/
├── .nuxt/                # Build output (generated, not in git)
├── assets/               # Uncompiled assets (CSS, fonts, etc.)
│   └── css/              # Global stylesheets
├── components/           # Vue components
│   ├── content/          # Components for Nuxt Content
│   └── sections/         # Page section components (Hero, Features, etc.)
├── composables/          # Vue composables
├── content/              # Markdown/YAML content files
│   └── index.md          # Main page content
├── layouts/              # Nuxt layouts
│   └── default.vue       # Default layout
├── pages/                # File-based routing
│   └── index.vue         # Main one-pager
├── public/               # Static assets (images, favicon, etc.)
├── server/               # Server-side code
│   └── api/              # API routes
├── .gitignore            # Git ignore rules
├── app.vue               # Root component
├── CLAUDE.md             # This file
├── nuxt.config.ts        # Nuxt configuration
├── package.json          # Dependencies
├── tailwind.config.ts    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

### Key Components

#### Pages
- **pages/index.vue**: Main one-pager entry point, orchestrates all sections

#### Content Files
- **content/index.md**: Editable content through Nuxt Studio
- Supports frontmatter for metadata
- Uses MDC (Markdown Components) syntax

#### Components
- **components/sections/**: Reusable section components (Hero, About, Services, Contact, etc.)
- **components/content/**: Custom components usable in markdown

---

## Development Workflows

### Branch Strategy

#### Branch Naming Conventions
- Feature branches: `feature/<descriptive-name>`
- Bug fixes: `bugfix/<issue-description>`
- Content updates: `content/<change-description>`
- Claude AI branches: `claude/<session-id>`

#### Workflow Process
1. **Create Branch:** Always work on feature branches
2. **Develop:** Make incremental commits with clear messages
3. **Test:** Run `npm run dev` and verify changes locally
4. **Build:** Run `npm run build` to ensure production build works
5. **Push:** Use `git push -u origin <branch-name>`
6. **PR:** Create pull request for review before merging to main

### Git Commit Conventions

#### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `content`: Content updates
- `ui`: UI/styling changes
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

#### Nuxt-Specific Examples
```
feat(sections): add Hero section with animation

Implements hero section with Nuxt UI components and
TailwindCSS animations. Includes responsive design for mobile.
```

```
content(index): update services section copy

Updates service descriptions and adds new service item
for better clarity.
```

```
fix(layout): correct mobile navigation overlay z-index

Fixes navigation menu being hidden behind hero section
on mobile devices.
```

### Testing Strategy

#### Development Testing
```bash
# Run development server with hot reload
npm run dev

# Test on different devices (use browser dev tools)
# Check responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
```

#### Production Testing
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

#### Content Testing
- Verify content changes in Nuxt Studio preview
- Test all markdown components render correctly
- Check frontmatter metadata is properly applied

---

## Code Conventions

### General Principles
1. **Simplicity First:** Write clear, maintainable code over clever solutions
2. **Component-Based:** Break UI into reusable, focused components
3. **Type Safety:** Use TypeScript for better DX and fewer bugs
4. **Composition API:** Prefer Vue 3 Composition API over Options API
5. **Security Awareness:** Always consider XSS, injection vulnerabilities

### Vue/Nuxt Style Guidelines

#### Component Structure
```vue
<script setup lang="ts">
// Imports
import { ref, computed } from 'vue'

// Props & Emits
const props = defineProps<{
  title: string
}>()

// Composables
const { data } = await useAsyncData('key', () => queryContent('/').findOne())

// Reactive state
const isOpen = ref(false)

// Computed
const formattedTitle = computed(() => props.title.toUpperCase())

// Methods
const handleClick = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="container">
    <h1>{{ formattedTitle }}</h1>
  </div>
</template>

<style scoped>
/* Component-specific styles (use TailwindCSS classes instead when possible) */
</style>
```

#### TailwindCSS Best Practices
```vue
<!-- DO: Use Nuxt UI components when available -->
<UButton color="primary" variant="solid">Click me</UButton>

<!-- DO: Use utility classes for custom styling -->
<div class="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800">

<!-- DON'T: Create custom CSS classes unnecessarily -->
<div class="my-custom-flex-container">

<!-- DO: Use responsive prefixes -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<!-- DO: Use dark mode variants -->
<p class="text-gray-900 dark:text-gray-100">
```

#### Composables
```ts
// composables/useScrollspy.ts
export const useScrollspy = () => {
  const activeSection = ref<string>('')

  const updateActiveSection = (sectionId: string) => {
    activeSection.value = sectionId
  }

  return {
    activeSection,
    updateActiveSection
  }
}
```

### File Organization
- **One component per file**
- **Group related components in subdirectories**
- **Use PascalCase for component files**: `HeroSection.vue`, `ContactForm.vue`
- **Use kebab-case for composables**: `use-scroll-spy.ts`, `use-form-validation.ts`
- **Keep content files organized by section**

### Nuxt Content Conventions

#### Frontmatter Structure
```yaml
---
title: My Page Title
description: SEO-friendly description
image: /images/og-image.jpg
layout: default
---
```

#### MDC (Markdown Components) Syntax
```markdown
<!-- Use Vue components in markdown -->
::hero
---
title: Welcome to My Site
subtitle: Building amazing things
---
::

<!-- Inline components -->
:button{label="Learn More" to="#about"}
```

---

## AI Assistant Guidelines

### Before Making Changes
1. **Read First:** Always read existing code before modifying
2. **Check Nuxt Config:** Review `nuxt.config.ts` for module configurations
3. **Understand Structure:** Use Grep/Glob to find related components/composables
4. **Content vs Code:** Determine if change is content (markdown) or code (components)

### During Development
1. **Use TodoWrite:** Track multi-step tasks
2. **Component First:** Check if Nuxt UI has a component before creating custom
3. **Test Responsiveness:** Always verify mobile, tablet, and desktop views
4. **Dark Mode:** Ensure dark mode support using Tailwind dark: variants
5. **Incremental Commits:** Commit logical units of work

### Code Modification Rules
1. **Prefer Edit over Write:** Edit existing files rather than rewriting
2. **Use Nuxt UI:** Leverage Nuxt UI components instead of custom implementations
3. **Tailwind First:** Use Tailwind utilities before custom CSS
4. **Type Everything:** Add proper TypeScript types
5. **Minimal Changes:** Only modify what's necessary for the task

### Nuxt-Specific Best Practices
1. **Auto-imports:** Don't manually import Nuxt/Vue utilities (they're auto-imported)
2. **Use `useAsyncData`:** For fetching content or API data
3. **Use `queryContent`:** For Nuxt Content queries
4. **Server Routes:** Put API endpoints in `server/api/`
5. **SEO:** Use `useHead()` or `useSeoMeta()` for meta tags

### What NOT to Do
- ❌ Don't import Vue/Nuxt utilities (they're auto-imported)
- ❌ Don't use Options API (use Composition API)
- ❌ Don't create custom components that exist in Nuxt UI
- ❌ Don't add inline styles when Tailwind classes work
- ❌ Don't forget dark mode variants
- ❌ Don't commit `.nuxt/` or `node_modules/`
- ❌ Don't hardcode content that should be in Nuxt Content

### Communication
- Be concise and technical
- Avoid emojis unless requested
- Reference code with `file:line` format
- Output information directly, not via bash echo

---

## Key Technologies

### Core Framework
- **Nuxt 3:** The Intuitive Vue Framework
  - File-based routing
  - Auto-imports
  - Server-side rendering (SSR)
  - Static site generation (SSG)

### Styling
- **TailwindCSS:** Utility-first CSS framework
  - Responsive design utilities
  - Dark mode support
  - Custom theme configuration
- **Nuxt UI:** Pre-built, accessible components
  - Based on Headless UI
  - Full Tailwind integration
  - Dark mode ready

### Content Management
- **Nuxt Content v2:** File-based CMS
  - Markdown/YAML/JSON support
  - MDC syntax (Vue components in markdown)
  - Full-text search
  - Syntax highlighting
- **Nuxt Studio:** Visual editor
  - Live preview
  - Git-based workflow
  - Collaborative editing

### Languages
- **TypeScript:** Type-safe JavaScript
- **Vue 3:** Progressive JavaScript framework
- **Markdown:** Content writing

### Tools & Services
- **Version Control:** Git
- **AI Assistant:** Claude Code
- **Package Manager:** npm/pnpm/yarn
- **Node.js:** v18+ required

---

## Environment Setup

### Prerequisites
- Node.js 18.x or higher
- npm, pnpm, or yarn
- Git

### Installation
```bash
# Clone repository
git clone <repository-url>
cd claudes-test

# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Start development server
npm run dev
```

### Development Server
```bash
# Start dev server with hot reload
npm run dev

# Server runs at http://localhost:3000
```

### Configuration

#### Nuxt Config (`nuxt.config.ts`)
```ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    // Nuxt Content options
  },
  ui: {
    // Nuxt UI options
  }
})
```

#### Tailwind Config (`tailwind.config.ts`)
```ts
export default {
  theme: {
    extend: {
      // Custom theme extensions
    }
  }
}
```

### Environment Variables
```bash
# .env (if needed)
NUXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Testing

### Development Testing
```bash
# Run dev server and test manually
npm run dev

# Check console for errors
# Test all interactive elements
# Verify responsive design
```

### Build Testing
```bash
# Build for production
npm run build

# Check for build errors
# Verify bundle size

# Preview production build
npm run preview
```

### Content Validation
- Verify markdown renders correctly
- Check frontmatter metadata
- Test all MDC components
- Validate internal links

### Responsive Testing
- **Mobile:** 375px - 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px+
- Test navigation at all breakpoints
- Verify touch interactions on mobile

### Browser Testing
- Chrome/Edge (Chromium)
- Firefox
- Safari (WebKit)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Common Tasks

### Adding a New Section
1. Create component in `components/sections/NewSection.vue`
2. Add content in `content/index.md` (if content-driven)
3. Import and use in `pages/index.vue`
4. Style with Tailwind + Nuxt UI components
5. Test responsiveness
6. Commit with `feat(sections): add new section`

### Updating Content
```bash
# For content-only changes
1. Edit content/index.md
2. Preview in dev mode or Nuxt Studio
3. Commit with `content: update section text`
4. Push to trigger rebuild (if deployed)
```

### Adding a New Component
```bash
# 1. Create component file
components/MyComponent.vue

# 2. Component is auto-imported by Nuxt
# 3. Use in template: <MyComponent />
```

### Styling Changes
1. Use Nuxt UI components when possible
2. Add Tailwind utility classes
3. Only create custom CSS when necessary
4. Always add dark mode variants
5. Test on all screen sizes

### Updating Dependencies
```bash
# Check outdated packages
npm outdated

# Update specific package
npm update <package-name>

# Update Nuxt (be careful with major versions)
npm update nuxt

# Test thoroughly after updates
npm run dev
npm run build
```

---

## Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Nuxt cache
rm -rf .nuxt

# Clear node_modules
rm -rf node_modules
npm install

# Rebuild
npm run build
```

#### Content Not Updating
```bash
# Restart dev server
# Clear .nuxt directory
rm -rf .nuxt
npm run dev
```

#### Tailwind Classes Not Working
```bash
# Check tailwind.config.ts is properly configured
# Ensure @nuxtjs/tailwindcss is in modules
# Restart dev server
```

#### Dark Mode Issues
```vue
<!-- Ensure dark: variants are used -->
<div class="bg-white dark:bg-gray-900">

<!-- Check Nuxt UI color mode setup -->
<script setup>
const colorMode = useColorMode()
</script>
```

#### TypeScript Errors
```bash
# Regenerate Nuxt types
npm run dev -- --clear

# Or
npx nuxi prepare
```

### Debug Strategies
1. Check browser console for errors
2. Check terminal for build errors
3. Verify file paths and imports
4. Test in different browsers
5. Clear cache and rebuild
6. Check Nuxt DevTools (available in dev mode)

### Performance Issues
- Check bundle size with `npm run analyze`
- Lazy load components with `defineAsyncComponent`
- Optimize images (use Nuxt Image module)
- Check Lighthouse scores

---

## Resources

### Documentation
- [Nuxt 3 Documentation](https://nuxt.com)
- [Nuxt Content Documentation](https://content.nuxt.com)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Vue 3 Documentation](https://vuejs.org)
- [TypeScript Documentation](https://www.typescriptlang.org)

### External References
- [Git Documentation](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [MDN Web Docs](https://developer.mozilla.org)

### Useful Tools
- [Nuxt DevTools](https://devtools.nuxt.com) - Built-in development tools
- [Vue DevTools](https://devtools.vuejs.org) - Browser extension
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VS Code extension

---

## Nuxt Studio Integration

### Setup
1. Connect repository to Nuxt Studio
2. Content files in `content/` are automatically editable
3. Changes sync via Git

### Workflow
1. **Edit in Studio:** Make content changes in visual editor
2. **Preview:** See changes in real-time preview
3. **Commit:** Save changes (creates Git commit)
4. **Deploy:** Changes trigger automatic deployment

### Best Practices
- Use semantic frontmatter
- Keep content separate from layout
- Use MDC components for rich content
- Test content changes in both Studio and local dev

---

## Deployment

### Build for Production
```bash
# Generate static site (SSG)
npm run generate

# Or build for SSR
npm run build
```

### Deployment Targets
- **Vercel:** Zero-config deployment
- **Netlify:** Git-based deployment
- **Cloudflare Pages:** Fast global deployment
- **Static Hosting:** Use `npm run generate` output

### Pre-deployment Checklist
- [ ] All content proofread and finalized
- [ ] Images optimized
- [ ] SEO meta tags configured
- [ ] No console errors
- [ ] Build completes successfully
- [ ] Production preview tested
- [ ] Mobile responsiveness verified
- [ ] Dark mode working
- [ ] Analytics configured (if needed)

---

## Maintenance

### Updating This Document
- Update after adding new sections to the one-pager
- Add new components to component list
- Update dependencies list when adding packages
- Keep examples current with actual code

### Review Schedule
- **After Major Changes:** Update relevant sections
- **Monthly:** Check for outdated information
- **Quarterly:** Comprehensive review and reorganization

### Dependency Updates
- Check for updates monthly
- Test thoroughly before deploying
- Keep Nuxt and modules in sync
- Read changelogs before major updates

---

## Project-Specific Notes

### One-Pager Structure
This is a single-page website with multiple sections:
- Hero/Landing section
- About section
- Services/Features section
- Portfolio/Work section (if applicable)
- Testimonials section (if applicable)
- Contact section

### Navigation
- Smooth scroll navigation
- Fixed/sticky header
- Active section highlighting
- Mobile hamburger menu

### Animations
- Scroll-triggered animations (consider using @vueuse/motion)
- Smooth transitions between sections
- Hover effects on interactive elements

---

## Contact & Support

### Repository
- GitHub: alexstapfofficial/claudes-test

### Maintainers
_To be added_

---

## Changelog

### 2025-11-28
- Updated CLAUDE.md for Nuxt 3 one-pager project
- Added comprehensive Nuxt/Vue/TailwindCSS guidelines
- Documented Nuxt Content and Nuxt Studio integration
- Added specific one-pager structure notes
- Included deployment and troubleshooting sections
