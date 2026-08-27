# DESIGN.md — Sistema de diseño del portafolio

> Portafolio profesional de **Esteban Colmenares — Mobile Developer (+3 años)**.
> Stack: Astro 7 · Tailwind v4 · tokens shadcn (base `neutral`) · React 19 · JetBrains Mono (títulos) + Inter (cuerpo).

---

## 1. Dirección estética

**Minimalismo editorial cálido y compacto.** El sitio debe sentirse como una app nativa bien construida: preciso, denso sin apretar, silencioso sin ser frío.

Principios:

1. **Compacto por defecto.** Una columna, `max-w-3xl` (contenido) / `max-w-5xl` (grids de proyectos). Nada de secciones a pantalla completa ni hero inflados.
2. **Armonía tonal.** Toda la paleta vive en un rango estrecho de temperatura (neutrales cálidos, hue ≈ 85) más un único acento verde salvia de baja croma.
3. **Cero estridencia.** Sin colores saturados, sin degradados, sin sombras dramáticas, sin glassmorphism. La jerarquía se logra con **tamaño, peso y espaciado**, no con color.
4. **Personalidad en los detalles.** Las micro-etiquetas en JetBrains Mono (uppercase, `letter-spacing: 0.08em`) actúan como firma técnica (monograma, eyebrows, rótulos), nunca en bloques de texto.
5. **Regla del acento:** el verde salvia ocupa ≤ 5% de la superficie visible por pantalla. Si hay duda, usar neutral.

---

## 2. Paleta de color

Definida en **OKLCH** (formato nativo de los tokens shadcn en `src/styles/global.css`).
**Regla dura: croma máxima permitida = 0.05.** Nada por encima se considera "de marca".

### Light (por defecto)

| Token | OKLCH | Hex | Uso |
|---|---|---|---|
| `--background` | `oklch(0.98 0.003 85)` | `#f9f8f6` | Fondo de página |
| `--card` | `oklch(0.995 0.002 85)` | `#fefdfc` | Tarjetas, superficies elevadas |
| `--foreground` | `oklch(0.22 0.008 85)` | `#1c1a16` | Texto principal |
| `--muted` | `oklch(0.955 0.004 85)` | `#f1f0ed` | Fondos de badges, código, hover |
| `--muted-foreground` | `oklch(0.5 0.012 85)` | `#66635c` | Texto secundario |
| `--border` | `oklch(0.905 0.006 85)` | `#e1dfdb` | Bordes y divisores |
| `--primary` (acento) | `oklch(0.47 0.05 160)` | `#416451` | CTA, links, foco, iconos clave |
| `--primary-foreground` | `oklch(0.985 0.002 95)` | `#fafaf9` | Texto sobre `--primary` |

### Dark

| Token | OKLCH | Hex |
|---|---|---|
| `--background` | `oklch(0.18 0.006 85)` | `#13110f` |
| `--card` | `oklch(0.22 0.007 85)` | `#1c1a17` |
| `--foreground` | `oklch(0.93 0.004 85)` | `#e9e8e5` |
| `--muted` | `oklch(0.26 0.008 85)` | `#262420` |
| `--muted-foreground` | `oklch(0.68 0.012 85)` | `#9c9890` |
| `--border` | `oklch(0.3 0.008 85)` | `#302e29` |
| `--primary` (acento) | `oklch(0.75 0.05 160)` | `#93b8a3` |
| `--primary-foreground` | `oklch(0.18 0.006 85)` | `#13110f` |

> En dark, `--primary` se aclara (no se satura) para mantener contraste. Nunca negro puro (`#000`) ni blanco puro (`#fff`) como fondo.

### Contraste verificado (WCAG AA, mínimo 4.5:1)

| Par | Light | Dark |
|---|---|---|
| Texto principal / fondo | 16.3:1 | 15.3:1 |
| Texto secundario / fondo | 5.7:1 | 6.5:1 |
| Acento / fondo | 6.3:1 | 8.6:1 |
| Texto sobre acento | 6.4:1 | 8.6:1 |

### Reglas de uso

- **Texto:** solo `--foreground` o `--muted-foreground`. Nunca el acento para párrafos.
- **Acento:** botones primarios, links, estado activo, iconos significativos, indicador de foco.
- **Bordes:** siempre `--border`; en dark puede usarse con alpha (`oklch(1 0 0 / 10%)`) para bordes internos sutiles.
- **Estados:** hover = `--muted` como fondo o `+0.03` de lightness en el elemento. Nada de cambios de hue.
- **Color semántico adicional:** prohibido introducir rojos/azules/amarillos nuevos. Errores y avisos se comunican con icono + texto, no con color (regla WCAG: no depender solo del color).

---

## 3. Tipografía

| Rol | Fuente | Notas |
|---|---|---|
| Títulos / encabezados / código | **JetBrains Mono** | Variable en `public/fonts/JetBrains_Mono/JetBrainsMono-VariableFont_wght.ttf`. Pesos 500–700. El corte monoespaciado da el carácter técnico. |
| UI / cuerpo | **Inter** | Variable (opsz+wght) en `public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf`. Pesos 400–600. |
| Firma / micro-etiquetas | **JetBrains Mono** | La misma fuente de títulos en uppercase, 10–13px, `letter-spacing: 0.08em`, peso 500. |

Cargar ambas con `@font-face` local (`font-display: swap`). Registrar en Tailwind: `--font-heading: 'JetBrains Mono', monospace` y `--font-sans: 'Inter', sans-serif`.

**Escala (compacta, mobile-first):**

| Elemento | Tamaño | Clase |
|---|---|---|
| H1 (hero) | 36 → 56px | `text-4xl sm:text-6xl font-semibold tracking-tight` |
| H2 (sección) | 20 → 24px | `text-xl sm:text-2xl font-semibold tracking-tight` |
| H3 (card) | 16–18px | `text-base font-semibold` |
| Cuerpo | 16px | `text-base` |
| Secundario | 14px | `text-sm text-muted-foreground` |
| Micro-etiqueta | 10–13px | JetBrains Mono uppercase, `tracking-widest`, `text-muted-foreground` o acento |

**Reglas:** máximo 2 niveles de jerarquía por sección; párrafos ≤ 70ch (`max-w-prose`); nunca `font-bold` si `font-semibold` resuelve; títulos con `--font-heading` (JetBrains Mono) y cuerpo siempre con Inter.

- La jerarquía se construye con **tamaño, peso y espacio**. Nunca depender solo del color.
- Usar `text-wrap: balance` en titulares y textos cortos cuando mejore la lectura (`[text-wrap:balance]`).

---

## 4. Espacio y layout

- Unidad base: **4px** (escala Tailwind). Gap entre componentes: 12–24px. Ritmo vertical entre secciones: 64–96px (`mt-16`/`mt-24`).
- Contenedor: `mx-auto max-w-3xl px-6` para prosa/hero; `max-w-5xl` solo para el grid de proyectos.
- **Mobile-first:** una columna siempre; el grid de proyectos pasa a 2 columnas en `sm:` como máximo. Sin layouts de 3+ columnas.
- Bordes redondeados: `--radius: 0.625rem`. Cards `rounded-lg`, botones/badges `rounded-md`. Coherencia total: no mezclar radios.
- Divisores: `border-t border-border` antes que sombras. Si se usa sombra, solo `shadow-sm` en cards y nunca en dark (usar borde).

---

## 5. Estructura de la landing page

Orden fijo, una sola página, navegación por anclas:

1. **Header** (sticky, opcional): monograma en JetBrains Mono (`EC.`), anclas (Work / Stack / Contact) y `ThemeToggle`. Altura ≤ 56px, fondo `--background` con `border-b`.
2. **Hero:** badge de disponibilidad (`secondary`), H1 de una línea con quiebre, párrafo de 2 líneas máx. presentándose como *Mobile Developer, +3 años enviando apps a producción*, y dos CTAs: primario "Ver proyectos" + outline "Contacto". Sin imagen ni ilustración.
3. **Selected work:** encabezado con título + link "Todos los proyectos". Grid `sm:grid-cols-2 gap-6` con **máximo 4 cards**. Cada card: título, descripción de 1 línea, detalle de 2 líneas, y 2–3 badges de stack (React Native / Swift / Kotlin / Flutter según el caso). Nada de screenshots gigantes; si hay imagen, thumbnail sobrio con borde.
4. **Stack / experiencia:** lista compacta (no grid de logos): 3 filas — *Plataformas*, *Lenguajes*, *Herramientas* — con micro-etiquetas JetBrains Mono a la izquierda y texto `text-sm` a la derecha. Opcional: una línea de experiencia "+3 años · N apps en producción".
5. **Contact:** H2, una frase, botones Email (primario) + GitHub/LinkedIn (ghost). Sin formulario.
6. **Footer:** una línea, `text-xs text-muted-foreground`, año + "Hecho con Astro".

**Reglas de la landing:**

- Todo el contenido visible sin scroll horizontal, en cualquier ancho.
- Máximo 2 CTAs primarios por página.
- Cada sección responde a una pregunta: *quién soy → qué hago → con qué → cómo contactarme*.
- Texto en **español**, `lang="es"` en el `<html>`.

---

## 6. Componentes (shadcn ya configurado, estilo `base-nova`)

- **Button:** variantes permitidas: `default` (primario, acento), `outline`, `ghost`, `link`. Altura ≥ 40px, targets táctiles reales ≥ 44px. Hover: lightness +0.03 o fondo `--muted`. Transición `150ms`.
- **Card:** `bg-card border border-border rounded-lg`. Padding interno 20–24px. Hover sutil: `border-foreground/20`. Sin elevación al hover.
- **Badge:** solo variantes `default` / `outline` / `secondary`, `text-xs`. Máximo 3 por card.
- **ThemeToggle:** persiste en `localStorage`, respeta `prefers-color-scheme`, script inline anti-FOUC ya presente en `Layout.astro`.
### Iconos e imágenes

- Iconos: **lucide-react**, simples y de trazo; heredan color con `currentColor`. Tamaño 16–20px.
- `stroke-width` cercano a **1.9** para iconos de acciones y navegación.
- Iconos decorativos: `aria-hidden="true"`; iconos funcionales: `aria-label`.
- Logos de lenguajes/tecnologías solo para **reforzar una sección concreta** (p. ej. Stack); nunca decorar sin propósito.
- Imágenes: declarar siempre `width`, `height`, `loading` (`lazy` fuera del viewport) y `decoding="async"` cuando aplique; `alt` descriptivo obligatorio.

---

## 7. Interacción y movimiento

- Transiciones cortas: **150–200ms**, easing `ease-out`. Solo micro-transiciones (hover, focus, theme).
- Movimientos sutiles en hover: `translateY(-1px)` o `translateY(-2px)` como máximo.
- El hover **no debe ocultar información ni mover elementos de forma brusca**.
- Todos los controles interactivos deben tener `:focus-visible` (anillo de 2px en acento, `outline-offset: 2px`).
- Respetar `prefers-reduced-motion: reduce`: desactivar animaciones y scroll suave. **Nunca depender de una animación para entender una acción.**
- Una única animación de entrada opcional en el hero: fade+translate de 8px, ≤ 400ms, con stagger de 60ms.
- Prohibido: parallax, autoplay de vídeo, animaciones en scroll continuas, skeletons permanentes.

---

## 8. Accesibilidad (WCAG 2.2 AA — no negociable)

- **Idioma:** `lang="es"` en el `<html>` y todos los textos visibles en **español**.
- Estructura semántica: `header`, `main`, `section`, `article`, `nav`, `footer`. Un solo `h1`, orden de encabezados lógico.
- Cada `<nav>` lleva `aria-label` cuando el contexto no sea obvio (p. ej. "Navegación principal").
- Contraste suficiente entre texto, fondo y estados: ≥ 4.5:1 texto, ≥ 3:1 UI/gráficos (paleta validada arriba).
- Targets interactivos ≥ 24×24px (recomendado 44×44 en móvil).
- `:focus-visible` en todos los controles; nunca eliminar el outline.
- Imágenes con `alt` descriptivo; iconos decorativos con `aria-hidden="true"`.
- **Enlaces superpuestos en tarjetas:** el enlace estirado no debe duplicar el foco del enlace visible (usar pseudo-elemento estirado + `tabindex="-1"`/texto redundante oculto, una sola parada de tabulación por card).
- Verificar que el sitio **no tenga scroll horizontal global** en ningún ancho.
- Zoom al 200% usable; probar con VoiceOver/TalkBack y navegación solo-teclado antes de publicar.

---

## 9. SEO y performance

- Cada página: `<title>` único, `meta description` ≤ 155 caracteres, Open Graph, favicon SVG.
- Build estático (SSG de Astro): cero JS en el hero salvo el toggle de tema (islands mínimas).
- Fuentes: subset local de JetBrains Mono + Inter (ideal convertir a WOFF2) con `font-display: swap`.
- Objetivo Lighthouse: ≥ 95 en Performance, Accessibility, Best Practices y SEO.

---

## 10. Prohibiciones explícitas

| ❌ Nunca | ✅ En su lugar |
|---|---|
| Degradados de cualquier tipo | Superficies planas y bordes |
| Croma > 0.05 en cualquier color | Paleta de la sección 2 |
| Negro/blanco puros como fondo | `#f9f8f6` / `#13110f` |
| Sombras grandes o coloreadas | Bordes `--border`, `shadow-sm` como máximo |
| Glassmorphism / blur decorativo | Fondos sólidos |
| Más de dos fuentes | JetBrains Mono (títulos) + Inter (cuerpo) |
| Secciones full-screen / scrolljacking | Layout compacto de una columna |
| Emojis como iconos de UI | lucide-react |

---

## 11. Implementación de referencia

Reemplazar el bloque `:root` y `.dark` en `src/styles/global.css` con los tokens de la sección 2 (los valores de `--radius` y estructura shadcn se mantienen). Verificar con `npm run build` y auditar contraste tras cada cambio de token.

**Fuentes de estas reglas:** skills `frontend-design` (dirección estética), `apple-design`/HIG (jerarquía, claridad, modo oscuro), `accessibility` (WCAG 2.2), `tailwind-css-patterns` (mobile-first, tokens, dark mode) y `seo` (metadatos).
