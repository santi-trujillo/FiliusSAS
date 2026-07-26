# 🎨 GUÍA DE ESTILOS CSS - FILIUS TEC

## 📋 Índice

1. [Arquitectura CSS](#arquitectura-css)
2. [Metodología CUBE CSS](#metodología-cube-css)
3. [Capas de Estilos](#capas-de-estilos)
4. [Componentes Disponibles](#componentes-disponibles)
5. [Utilities](#utilities)
6. [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)
7. [Ejemplos de Uso](#ejemplos-de-uso)

---

## 🏗️ Arquitectura CSS

Este proyecto utiliza un **enfoque híbrido** que combina:

- ✅ **CUBE CSS** para sistema de diseño base (variables, composition, utilities)
- ✅ **Componentes específicos** para secciones únicas del sitio (hero, expertise, projects)
- ✅ **BEM** para componentes reutilizables (buttons, cards, navigation)

### Estructura de Carpetas

```
src/styles/
├── main.css                    # Entry point - importa todo
├── base/                       # BASE Layer (CUBE CSS)
│   ├── reset.css              # CSS Reset moderno
│   ├── variables.css          # Design tokens
│   └── typography.css         # Sistema tipográfico
├── composition/                # COMPOSITION Layer (CUBE CSS)
│   ├── container.css          # Contenedores responsivos
│   ├── grid.css               # Sistema de grillas
│   ├── stack.css              # Stack vertical
│   ├── cluster.css            # Agrupación horizontal
│   └── flex.css               # Utilities flexbox
├── utilities/                  # UTILITIES Layer (CUBE CSS)
│   ├── spacing.css            # Margin, padding, gap
│   ├── typography.css         # Text utilities
│   ├── colors.css             # Color utilities
│   ├── display.css            # Display utilities
│   └── animations.css         # Animaciones
└── blocks/                     # BLOCKS Layer
    ├── button.css             # ✅ CUBE CSS puro (reutilizable)
    ├── card.css               # ✅ CUBE CSS puro (reutilizable)
    ├── section.css            # ✅ CUBE CSS puro (reutilizable)
    ├── nav.css                # ✅ CUBE CSS puro (reutilizable)
    ├── header/                # Específico del sitio
    ├── hero/                  # Específico del sitio
    ├── sections/              # Específico del sitio
    ├── tech-stack.css         # Específico del sitio
    ├── footer.css             # Específico del sitio
    ├── scroll-effects.css     # Efectos globales
    ├── hover-effects.css      # Efectos globales
    └── menu-mobile.css        # Específico del sitio
```

---

## 🎯 Metodología CUBE CSS

**CUBE** = Composition, Utility, Block, Exception

### 1. **BASE Layer** - Fundamentos

Variables, resets, tipografía base. NO tiene clases, solo selectores de elemento.

```css
/* variables.css */
:root {
  --accent-color: #3b82f6;
  --space-4: 1rem;
}

/* typography.css */
body {
  font-family: var(--font-primary);
}
```

### 2. **COMPOSITION Layer** - Layouts

Clases para estructurar el layout. Son **independientes del contenido**.

```html
<!-- Container -->
<div class="container">
  <!-- Máximo ancho + padding horizontal -->
</div>

<!-- Grid -->
<div class="grid grid--3-cols">
  <!-- Grid de 3 columnas -->
</div>

<!-- Stack -->
<div class="stack stack--lg">
  <!-- Elementos apilados verticalmente -->
</div>

<!-- Cluster -->
<div class="cluster cluster--center">
  <!-- Elementos agrupados horizontalmente -->
</div>
```

### 3. **UTILITY Layer** - Atomics

Clases de utilidad de un solo propósito. Usar con `!important` para asegurar precedencia.

```html
<!-- Spacing -->
<div class="mt-4 mb-8 px-6">
  <!-- margin-top: 1rem, margin-bottom: 2rem, padding-horizontal: 1.5rem -->
</div>

<!-- Typography -->
<p class="text-center font-bold text-lg">
  <!-- Centrado, negrita, tamaño grande -->
</p>

<!-- Display -->
<div class="flex items-center justify-between">
  <!-- Flexbox con alineación -->
</div>

<!-- Colors -->
<div class="bg-primary text-white">
  <!-- Fondo primary, texto blanco -->
</div>
```

### 4. **BLOCK Layer** - Componentes

Componentes reutilizables con BEM naming. Dos tipos:

#### A) **Componentes CUBE CSS Puros** (Reutilizables en cualquier proyecto)

```html
<!-- Button -->
<button class="btn btn--primary btn--lg">Click me</button>

<!-- Card -->
<div class="card card--elevated">
  <div class="card__header">Header</div>
  <div class="card__body">Content</div>
  <div class="card__footer">Footer</div>
</div>

<!-- Section -->
<section class="section section--full">
  <div class="section__header">
    <h2 class="section__title">Title</h2>
    <p class="section__subtitle">Subtitle</p>
  </div>
  <div class="section__content">
    <!-- Content -->
  </div>
</section>
```

#### B) **Componentes Específicos del Sitio** (Diseñados para Filius)

```html
<!-- Hero -->
<section class="hero">
  <div class="hero-container">
    <div class="hero-content">...</div>
  </div>
</section>

<!-- Expertise -->
<section class="expertise-section">
  <div class="expertise-grid">
    <div class="expertise-card">...</div>
  </div>
</section>
```

---

## 🧩 Componentes Disponibles

### Componentes CUBE CSS (Reutilizables)

#### 1. Button (`button.css`)

```html
<!-- Variantes -->
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--ghost">Ghost</button>

<!-- Tamaños -->
<button class="btn btn--sm">Small</button>
<button class="btn">Default</button>
<button class="btn btn--lg">Large</button>
<button class="btn btn--xl">Extra Large</button>

<!-- Estados -->
<button class="btn" disabled>Disabled</button>
<button class="btn btn--loading">Loading</button>

<!-- Full width -->
<button class="btn btn--full">Full Width</button>

<!-- Icon button -->
<button class="btn btn--icon">
  <i class="icon"></i>
</button>
```

#### 2. Card (`card.css`)

```html
<!-- Card básica -->
<div class="card">
  <div class="card__header">
    <h3>Title</h3>
  </div>
  <div class="card__body">
    <p>Content</p>
  </div>
  <div class="card__footer">
    <button class="btn">Action</button>
  </div>
</div>

<!-- Variantes -->
<div class="card card--elevated">Elevated</div>
<div class="card card--outlined">Outlined</div>
<div class="card card--glass">Glass effect</div>
<div class="card card--interactive">Clickable</div>

<!-- Tamaños -->
<div class="card card--sm">Small padding</div>
<div class="card card--lg">Large padding</div>

<!-- Horizontal -->
<div class="card card--horizontal">
  <!-- Layout horizontal -->
</div>
```

#### 3. Section (`section.css`)

```html
<!-- Section básica -->
<section class="section">
  <div class="section__header">
    <h2 class="section__title">Title</h2>
    <p class="section__subtitle">Description</p>
  </div>
  <div class="section__content">
    <!-- Content -->
  </div>
</section>

<!-- Variantes -->
<section class="section section--alt">Background alternativo</section>
<section class="section section--dark">Fondo oscuro</section>
<section class="section section--gradient">Con gradiente</section>

<!-- Spacing -->
<section class="section section--compact">Menos padding</section>
<section class="section section--expanded">Más padding</section>

<!-- Full height -->
<section class="section section--full">Min-height: 100vh</section>
```

#### 4. Navigation (`nav.css`)

```html
<!-- Nav horizontal -->
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#" class="nav__link nav__link--active">Home</a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">About</a>
    </li>
  </ul>
</nav>

<!-- Nav vertical -->
<nav class="nav nav--vertical">
  <!-- Items apilados -->
</nav>

<!-- Nav pills -->
<nav class="nav nav--pills">
  <!-- Botones redondeados -->
</nav>

<!-- Nav tabs -->
<nav class="nav nav--tabs">
  <!-- Tabs con border -->
</nav>
```

---

## 🎨 Utilities

### Spacing

```html
<!-- Margin -->
<div class="m-0">margin: 0</div>
<div class="mt-4">margin-top: 1rem</div>
<div class="mb-8">margin-bottom: 2rem</div>
<div class="mx-auto">margin-horizontal: auto</div>
<div class="my-6">margin-vertical: 1.5rem</div>

<!-- Padding -->
<div class="p-4">padding: 1rem</div>
<div class="px-6">padding-horizontal: 1.5rem</div>
<div class="py-8">padding-vertical: 2rem</div>

<!-- Gap (flex/grid) -->
<div class="flex gap-4">gap: 1rem</div>
```

### Typography

```html
<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base (16px)</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2XL</p>
<p class="text-3xl">3XL</p>

<p class="text-center">Centrado</p>
<p class="text-left">Izquierda</p>
<p class="text-right">Derecha</p>

<p class="font-normal">Normal</p>
<p class="font-medium">Medium</p>
<p class="font-semibold">Semi-bold</p>
<p class="font-bold">Bold</p>
```

### Display & Flex

```html
<div class="hidden">display: none</div>
<div class="block">display: block</div>
<div class="flex">display: flex</div>
<div class="grid">display: grid</div>

<div class="flex items-center">align-items: center</div>
<div class="flex items-start">align-items: flex-start</div>
<div class="flex items-end">align-items: flex-end</div>

<div class="flex justify-center">justify-content: center</div>
<div class="flex justify-between">justify-content: space-between</div>
<div class="flex justify-around">justify-content: space-around</div>

<div class="flex flex-col">flex-direction: column</div>
<div class="flex flex-row">flex-direction: row</div>
<div class="flex flex-wrap">flex-wrap: wrap</div>
```

### Colors

```html
<!-- Text colors -->
<p class="text-primary">#ffffff</p>
<p class="text-secondary">#a0a0a0</p>
<p class="text-accent">#3b82f6</p>

<!-- Background colors -->
<div class="bg-primary">#0a0a0a</div>
<div class="bg-secondary">#111111</div>
<div class="bg-accent">#3b82f6</div>
```

---

## 📝 Convenciones de Nomenclatura

### Componentes CUBE CSS (BEM)

```
.block { }
.block__element { }
.block--modifier { }

Ejemplo:
.btn { }                    // Block
.btn__icon { }              // Element
.btn--primary { }           // Modifier
.btn--lg { }                // Modifier de tamaño
```

### Componentes Específicos del Sitio

```
.section-name { }
.section-name-element { }

Ejemplo:
.hero { }
.hero-container { }
.hero-title { }
.expertise-section { }
.expertise-card { }
```

### Utilities

```
.property-value { }

Ejemplo:
.mt-4                       // margin-top: var(--space-4)
.flex                       // display: flex
.text-center                // text-align: center
```

---

## 💡 Ejemplos de Uso

### Ejemplo 1: Card de Servicio

```html
<div class="card card--elevated">
  <div class="card__header">
    <h3 class="text-xl font-bold">Desarrollo Web</h3>
  </div>
  <div class="card__body">
    <p class="text-secondary mb-4">Creamos sitios web modernos y rápidos</p>
    <ul class="stack stack--sm">
      <li>✓ Responsive design</li>
      <li>✓ SEO optimizado</li>
      <li>✓ Performance</li>
    </ul>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary btn--full">Solicitar cotización</button>
  </div>
</div>
```

### Ejemplo 2: Sección con Grid

```html
<section class="section section--alt">
  <div class="container">
    <div class="section__header mb-12">
      <h2 class="section__title">Nuestros Servicios</h2>
      <p class="section__subtitle">Soluciones integrales para tu negocio</p>
    </div>

    <div class="grid grid--3-cols gap-8">
      <div class="card card--interactive">
        <!-- Service 1 -->
      </div>
      <div class="card card--interactive">
        <!-- Service 2 -->
      </div>
      <div class="card card--interactive">
        <!-- Service 3 -->
      </div>
    </div>
  </div>
</section>
```

### Ejemplo 3: Hero con Utilities

```html
<section class="section section--full bg-primary">
  <div class="container">
    <div class="flex items-center justify-between gap-12">
      <div class="stack stack--lg">
        <h1 class="text-5xl font-bold">Tu título aquí</h1>
        <p class="text-xl text-secondary">Descripción del servicio</p>
        <div class="cluster gap-4">
          <button class="btn btn--primary btn--lg">CTA Principal</button>
          <button class="btn btn--secondary btn--lg">CTA Secundario</button>
        </div>
      </div>
      <div>
        <!-- Visual -->
      </div>
    </div>
  </div>
</section>
```

---

## 🚀 Buenas Prácticas

### ✅ DO

- Usa **composition** para layouts (`container`, `grid`, `stack`)
- Usa **utilities** para ajustes rápidos (`mt-4`, `flex`, `gap-4`)
- Usa **componentes CUBE CSS** para elementos reutilizables (`btn`, `card`)
- Usa **componentes específicos** para diseños únicos (`hero`, `expertise`)
- Mantén componentes pequeños y enfocados
- Documenta componentes complejos

### ❌ DON'T

- No mezcles utilities con clases semánticas en el mismo elemento (separa)
- No crees utilities para todo (usa componentes cuando sea apropiado)
- No uses `!important` fuera de utilities
- No repitas código (crea un componente)
- No uses IDs para estilos

---

## 📊 Resumen de Arquitectura

```
CUBE CSS Puro (Reutilizable)     →  40%
├── BASE (variables, reset)
├── COMPOSITION (layouts)
└── UTILITIES (atomics)

Componentes CUBE CSS (Reutilizable)  →  20%
├── button.css
├── card.css
├── section.css
└── nav.css

Componentes Específicos (Filius)     →  40%
├── hero/
├── sections/
├── header/
└── footer.css

---
Total: Híbrido profesional que combina lo mejor de ambos mundos
```

---

## 📚 Referencias

- [CUBE CSS Methodology](https://cube.fyi/)
- [BEM Naming Convention](http://getbem.com/)
- [Every Layout](https://every-layout.dev/)
- [Utopia Fluid Responsive](https://utopia.fyi/)

---

**Proyecto:** Filius Tec v2.0.0  
**Última actualización:** 4 de diciembre de 2025
