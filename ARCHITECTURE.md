# Arquitectura del Proyecto - Filius Tec

## 📋 Tabla de Contenido

1. [Visión General](#visión-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Metodología CSS: CUBE CSS](#metodología-css-cube-css)
4. [Sistema de Build: Vite](#sistema-de-build-vite)
5. [Organización de JavaScript](#organización-de-javascript)
6. [Flujo de Desarrollo](#flujo-de-desarrollo)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Performance](#performance)

---

## 🎯 Visión General

**Filius Tec** es un portfolio corporativo construido con tecnologías web modernas, siguiendo las mejores prácticas de desarrollo frontend.

### Stack Tecnológico

- **Build Tool:** Vite 5.x
- **CSS Methodology:** CUBE CSS
- **JavaScript:** Vanilla ES6+ (Modules)
- **Testing:** Vitest + jsdom
- **CI/CD:** GitHub Actions + Netlify
- **Linting:** ESLint + Prettier

### Principios de Diseño

1. **Mobile-First:** Diseñado primero para móviles
2. **Progressive Enhancement:** Funcionalidad básica sin JavaScript
3. **Performance First:** Optimización en cada nivel
4. **Accessibility:** WCAG 2.1 AA compliance
5. **SEO-Optimized:** Structured data, meta tags, sitemap

---

## 📁 Estructura del Proyecto

```
FiliusSAS/
├── src/                          # Código fuente
│   ├── index.html               # HTML principal
│   ├── styles/                  # Estilos CUBE CSS
│   │   ├── base/               # Reset, variables, typography
│   │   ├── composition/        # Layouts (container, grid, stack)
│   │   ├── utilities/          # Clases utilitarias
│   │   ├── blocks/             # Componentes
│   │   ├── exceptions/         # Overrides contextuales
│   │   └── main.css            # Entry point CSS
│   ├── scripts/                # JavaScript
│   │   ├── components/         # Módulos de componentes
│   │   ├── utils/              # Utilidades
│   │   └── main.js             # Entry point JS
│   └── assets/                 # Recursos estáticos
│       ├── images/
│       ├── fonts/
│       └── icons/
├── public/                      # Archivos públicos
│   ├── robots.txt
│   ├── sitemap.xml
│   └── *.png (favicons)
├── tests/                       # Tests
│   ├── unit/
│   ├── integration/
│   └── setup.js
├── .github/                     # GitHub workflows
│   └── workflows/
│       └── ci.yml
├── vite.config.js              # Configuración Vite
├── vitest.config.js            # Configuración tests
├── netlify.toml                # Configuración deploy
└── package.json
```

---

## 🎨 Metodología CSS: CUBE CSS

### ¿Qué es CUBE CSS?

**CUBE** = **C**omposition + **U**tility + **B**lock + **E**xception

Una metodología CSS que organiza los estilos en capas con responsabilidades claras.

### Capas de CUBE CSS

#### 1. **BASE** (Fundación)

Estilos globales y tokens de diseño.

```css
/* base/reset.css */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* base/variables.css */
:root {
  --primary-color: #3b82f6;
  --space-4: 1rem;
}

/* base/typography.css */
h1 {
  font-size: clamp(3rem, 7vw, 6rem);
}
```

#### 2. **COMPOSITION** (Layouts)

Patrones de layout reutilizables sin estilos visuales.

```css
/* composition/container.css */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
}

/* composition/grid.css */
.grid {
  display: grid;
}
.grid--3-cols {
  grid-template-columns: repeat(3, 1fr);
}

/* composition/stack.css */
.stack > * + * {
  margin-top: var(--stack-space, 1rem);
}
```

#### 3. **UTILITIES** (Utilidades)

Clases de una sola responsabilidad.

```css
/* utilities/spacing.css */
.mt-4 {
  margin-top: var(--space-4);
}
.p-8 {
  padding: var(--space-8);
}

/* utilities/typography.css */
.text-center {
  text-align: center;
}
.font-bold {
  font-weight: 700;
}
```

#### 4. **BLOCKS** (Componentes)

Componentes específicos usando BEM.

```css
/* blocks/button.css */
.btn {
  display: inline-flex;
  padding: var(--space-4) var(--space-8);
}

.btn--primary {
  background: var(--primary-color);
  color: white;
}

.btn--lg {
  padding: var(--space-6) var(--space-12);
}
```

#### 5. **EXCEPTIONS** (Contextuales)

Overrides basados en contexto o estado.

```css
/* exceptions/dark-mode.css */
[data-theme='dark'] {
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
}
```

### Orden de Importación

```css
/* main.css */
@import './base/reset.css';
@import './base/variables.css';
@import './base/typography.css';

@import './composition/container.css';
@import './composition/grid.css';

@import './utilities/spacing.css';
@import './utilities/colors.css';

@import './blocks/button.css';
@import './blocks/card.css';

@import './exceptions/dark-mode.css';
```

---

## ⚡ Sistema de Build: Vite

### Configuración Principal

```javascript
// vite.config.js
export default defineConfig({
  root: './src',
  publicDir: '../public',

  build: {
    outDir: '../dist',
    minify: 'terser',
    cssMinify: true,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@scripts': resolve(__dirname, 'src/scripts'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
});
```

### Características de Vite

- **HMR (Hot Module Replacement):** Recarga instantánea
- **Tree Shaking:** Elimina código no usado
- **Code Splitting:** Chunks optimizados
- **CSS Minification:** Compresión automática
- **Asset Optimization:** Optimización de imágenes/fonts

---

## 📜 Organización de JavaScript

### Arquitectura Modular

```javascript
// main.js - Entry Point
import Navigation from './components/navigation.js';
import MobileMenu from './components/mobile-menu.js';
import ScrollProgress from './components/scroll-progress.js';

const App = {
  init() {
    new Navigation();
    new MobileMenu();
    new ScrollProgress();
  },
};

App.init();
```

### Patrón de Componentes

Cada componente sigue una estructura consistente:

```javascript
// components/example.js
export default class Example {
  constructor(options = {}) {
    this.element = document.querySelector(options.selector);
    this.config = { ...this.defaults, ...options };
    this.init();
  }

  init() {
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Event listeners
  }

  render() {
    // DOM manipulation
  }
}
```

---

## 🔄 Flujo de Desarrollo

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Vite dev server (localhost:3000)

# Build
npm run build        # Build de producción
npm run preview      # Preview del build

# Testing
npm test            # Run tests
npm run test:ui     # Vitest UI
npm run test:coverage # Coverage report

# Code Quality
npm run lint        # ESLint
npm run format      # Prettier
```

### Git Workflow

```bash
# Feature branch
git checkout -b feature/nueva-funcionalidad

# Commits semánticos
git commit -m "feat: agregar nuevo componente"
git commit -m "fix: corregir bug en navegación"
git commit -m "docs: actualizar README"

# Pull Request
git push origin feature/nueva-funcionalidad
```

---

## 🧪 Testing

### Configuración Vitest

```javascript
// vitest.config.js
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
```

### Ejemplo de Test

```javascript
// tests/unit/helpers.test.js
import { describe, it, expect } from 'vitest';
import { debounce } from '@scripts/utils/helpers';

describe('debounce', () => {
  it('should delay function execution', async () => {
    const mockFn = vi.fn();
    const debounced = debounce(mockFn, 100);

    debounced();
    expect(mockFn).not.toHaveBeenCalled();

    await new Promise((r) => setTimeout(r, 150));
    expect(mockFn).toHaveBeenCalledOnce();
  });
});
```

---

## 🚀 Deployment

### CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
      - run: npm run build
      - uses: netlify/actions/deploy@v3
```

### Netlify Configuration

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## ⚡ Performance

### Optimizaciones Aplicadas

1. **CSS:**
   - Minificación automática
   - Critical CSS inline (futuro)
   - PostCSS Autoprefixer

2. **JavaScript:**
   - Tree shaking
   - Code splitting
   - Minificación terser

3. **Imágenes:**
   - Lazy loading
   - Formatos modernos (WebP)
   - Dimensiones definidas

4. **Fonts:**
   - Preconnect a Google Fonts
   - font-display: swap
   - Subsetting (futuro)

5. **Caching:**
   - Immutable assets
   - Service Worker (futuro)

### Métricas Objetivo

- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1
- **Lighthouse Score:** > 90

---

## 📚 Referencias

- [CUBE CSS](https://cube.fyi/)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [BEM Methodology](http://getbem.com/)

---

**Última actualización:** 4 de diciembre de 2025
