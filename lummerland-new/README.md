# Nuxt 4 Project - Lummerland

Ein vollständig konfiguriertes Nuxt 4 Projekt mit allen wichtigen Modulen.

## 📦 Installierte Module

- **@nuxt/content** - File-based CMS für Markdown/YAML Content
- **@nuxt/ui** - UI Komponenten-Bibliothek basierend auf Tailwind CSS
- **@nuxt/icon** - Icon-System mit 200,000+ Icons
- **@nuxt/image** - Automatische Bild-Optimierung
- **@nuxthq/studio** - Visual Content Editor
- **Tailwind CSS** - Utility-first CSS Framework
- **better-sqlite3** - Datenbank für Nuxt Content

## 🎨 Design System

### Farben
```css
cream-can: #f0bb65
cream-can-dark: #c09550
cream-can-darker: #604a28
cream: #fcf1e0
cream-light: #fdf8ef
```

### Fonts
- **Sorts Mill Goudy** - Überschriften (H1-H6)
- **Raleway** - Body Text

## 🚀 Quick Start

```bash
# Development Server starten
npm run dev

# Build für Production
npm run build

# Production Preview
npm run preview

# Typen generieren
npm run postinstall
```

## 📁 Projektstruktur

```
lummerland-new/
├── assets/
│   └── css/
│       └── main.css          # Tailwind CSS & Fonts
├── components/               # Vue Komponenten
├── content/                  # Markdown/YAML Content
│   └── index.md             # Sample Content
├── pages/
│   └── index.vue            # Homepage
├── public/
│   └── images/              # Statische Bilder
├── app.config.ts            # Nuxt UI Konfiguration
├── nuxt.config.ts           # Nuxt Konfiguration
└── tailwind.config.ts       # Tailwind Konfiguration
```

## 🛠️ Konfiguration

### Nuxt Config
- Alle Module sind aktiviert
- Light Mode als Standard
- Content Syntax Highlighting aktiviert

### Tailwind Config
- Custom Fonts eingebunden
- Custom Color Palette
- Responsive Breakpoints

### App Config
- Nuxt UI Primary Color: Amber
- Nuxt UI Gray Color: Neutral

## 📝 Content Management

Content-Dateien befinden sich in `/content`:
- Markdown (`.md`)
- YAML (`.yml`)
- JSON (`.json`)

## 🎯 Features

✅ Nuxt 4 (Latest)
✅ TypeScript Support
✅ Auto-Import Components
✅ File-based Routing
✅ API Routes
✅ SEO Meta Tags
✅ Image Optimization
✅ Icon System
✅ Dark/Light Mode
✅ Responsive Design

## 📚 Dokumentation

- [Nuxt](https://nuxt.com)
- [Nuxt Content](https://content.nuxt.com)
- [Nuxt UI](https://ui.nuxt.com)
- [Nuxt Image](https://image.nuxt.com)
- [Nuxt Icon](https://nuxt.com/modules/icon)
- [Tailwind CSS](https://tailwindcss.com)

## 🔧 Troubleshooting

Wenn der Dev-Server nicht startet:
1. Cache löschen: `rm -rf .nuxt node_modules/.vite`
2. Dependencies neu installieren: `npm install`
3. Typen neu generieren: `npm run postinstall`
