# Portafolio — Esteban Colmenares

Sitio personal de Esteban Colmenares, desarrollador web y móvil. Es una landing estática de una página con modo claro/oscuro, trayectoria, proyectos y contacto.

## Stack

- **Astro 7** con salida estática (SSG).
- **Tailwind CSS 4** con tokens de color en OKLCH.
- **TypeScript** en modo estricto.
- **Inter** y **JetBrains Mono** self-hosted en WOFF2 (subset latino).
- **@astrojs/sitemap** para el sitemap.

## Comandos

```sh
npm install       # instala dependencias
npm run dev       # servidor de desarrollo en localhost:4321
npm run check     # type-check de Astro/TypeScript
npm run build     # genera el sitio en dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

```text
src/
├── assets/fonts/       # fuentes TTF originales (no se despliegan)
├── components/         # Button, Badge y ThemeToggle
├── layouts/            # Layout base con metadatos y SEO
├── pages/              # index.astro y 404.astro
├── styles/global.css   # Tailwind, tokens y fuentes
└── view/               # secciones de la landing + data.ts

public/
├── fonts/              # solo WOFF2 + licencias OFL
├── og-image.png/svg    # imagen social 1200×630
├── favicon.svg/ico
├── apple-touch-icon.png
├── robots.txt
└── llms.txt
```

## Contenido

- **Proyectos y trayectoria:** `src/view/data.ts`.
- **Textos de las secciones:** `src/view/Hero.astro`, `Timeline.astro`, `Projects.astro` y `Contact.astro`.
- **Datos de contacto y enlaces sociales:** `src/view/Contact.astro` y el JSON-LD en `src/pages/index.astro`.

## SEO y metadatos

- `site` se define en `astro.config.mjs`; cámbialo si el dominio cambia.
- `src/layouts/Layout.astro` centraliza title, description, canonical, Open Graph, Twitter Card, `theme-color`, favicon y preloads de fuentes.
- `src/pages/index.astro` incluye el JSON-LD de tipo `Person`.
- `public/og-image.svg` es la fuente editable de la imagen social. Génerala a PNG 1200×630 en `public/og-image.png`.
- El sitemap se genera en el build y excluye la página 404.

## Fuentes

Las fuentes desplegadas son subsets WOFF2 en `public/fonts/`. Los TTF completos se conservan en `src/assets/fonts/` para poder regenerar subsets, pero no se copian a `dist/`.

Si añades idiomas o glifos nuevos, regenera los WOFF2 con `pyftsubset` (fonttools) usando un rango Unicode que incluya los caracteres necesarios.

## CI

`.github/workflows/ci.yml` ejecuta en cada push/PR:

1. `npm ci`
2. `npm run check`
3. `npm run build`

## Despliegue

El resultado es completamente estático: publica el contenido de `dist/` en cualquier hosting (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

## Licencias

- **Código del sitio:** proyecto personal; no se concede una licencia explícita de reutilización.
- **Inter** y **JetBrains Mono:** SIL Open Font License. Las licencias están en `public/fonts/Inter/OFL.txt` y `public/fonts/JetBrains_Mono/OFL.txt`.
