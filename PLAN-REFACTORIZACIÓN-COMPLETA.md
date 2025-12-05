# 🔄 PLAN DE REFACTORIZACIÓN COMPLETA - FILIUS TEC

**Objetivo:** Reorganizar código para seguir EXACTAMENTE la arquitectura documentada  
**Resultado visual:** IDÉNTICO (0 cambios visuales)  
**Resultado técnico:** 100% según documentos de requisitos

---

## 🎯 OBJETIVO PRINCIPAL

**Mantener TODO igual visualmente y funcionalmente, pero reorganizar internamente según:**

1. ARQUITECTURA-TÉCNICA-Y-PLAN-DE-SEGURIDAD-FILIUS-TEC.txt
2. DESIGN-SYSTEM-FILIUS-TEC.txt
3. Estructura `src/` con CUBE CSS
4. Vite como bundler
5. Metodología exacta documentada

---

## 📋 FASE 0: PREPARACIÓN (30 min)

### 1. Backup completo

```bash
# Crear rama de respaldo
git checkout -b backup/before-refactor
git add .
git commit -m "Backup antes de refactorización completa"
git push origin backup/before-refactor

# Volver a feature branch
git checkout feature/css-modularization-v2

# Crear nueva rama para refactor
git checkout -b refactor/cube-css-vite
```

### 2. Captura visual de referencia

```bash
# Screenshots de cada sección (para comparar después)
# Desktop: 1920x1080
# Tablet: 768x1024
# Mobile: 375x667
```

---

## 📦 FASE 1: NUEVA ESTRUCTURA DE CARPETAS (1 hora)

### 1.1 Crear estructura src/ completa

```bash
mkdir -p src/{assets,styles,scripts,components}
mkdir -p src/assets/{images,fonts,icons}
mkdir -p src/assets/images/{hero,logos,cases,testimonials,favicon}
mkdir -p src/assets/icons/{social,ui}
mkdir -p src/styles/{base,composition,utilities,blocks,exceptions}
mkdir -p src/scripts/{components,animations,utils,config}
mkdir -p public
mkdir -p tests/{unit,integration,e2e}
mkdir -p .github/workflows
mkdir -p config
```

### 1.2 Mover assets

```bash
# Mover imágenes
mv assets/images/* src/assets/images/
mv assets/fonts/* src/assets/fonts/ 2>/dev/null || true
mv assets/icons/* src/assets/icons/ 2>/dev/null || true

# Mover a public/ (servidos estáticos)
touch public/robots.txt
touch public/sitemap.xml
cp assets/images/favicon/* public/ 2>/dev/null || true
```

---

## 🎨 FASE 2: REFACTORIZAR CSS A CUBE CSS (4-6 horas)

### 2.1 Crear capa BASE

**src/styles/base/reset.css**

```css
/* Modern CSS Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: var(--font-size-base);
}

body {
  font-family: var(--font-primary);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font: inherit;
}
```

**src/styles/base/variables.css**

```css
/* COPIAR EXACTO de css/variables.css actual */
/* Mantener TODOS los tokens sin cambios */
```

**src/styles/base/typography.css**

```css
/* Extraer de base.css actual la parte tipográfica */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 1.2;
}

h1 {
  font-size: clamp(3rem, 7vw, 6rem);
}
h2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
}
/* etc... */
```

### 2.2 Crear capa COMPOSITION

**src/styles/composition/container.css**

```css
.container {
  max-width: var(--breakpoint-wide);
  margin: 0 auto;
  padding: 0 5%;
  width: 100%;
}
```

**src/styles/composition/grid.css**

```css
.grid {
  display: grid;
}

.grid--auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}

.grid--3-cols {
  grid-template-columns: repeat(3, 1fr);
}

/* Responsive */
@media (max-width: 768px) {
  .grid--2-cols,
  .grid--3-cols {
    grid-template-columns: 1fr;
  }
}
```

**src/styles/composition/stack.css**

```css
/* Vertical spacing automático */
.stack > * + * {
  margin-top: var(--stack-space, 1rem);
}

.stack--sm {
  --stack-space: 0.5rem;
}
.stack--md {
  --stack-space: 1rem;
}
.stack--lg {
  --stack-space: 2rem;
}
.stack--xl {
  --stack-space: 4rem;
}
```

**src/styles/composition/cluster.css**

```css
/* Horizontal grouping */
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cluster-gap, 1rem);
}

.cluster--start {
  justify-content: flex-start;
}
.cluster--center {
  justify-content: center;
}
.cluster--end {
  justify-content: flex-end;
}
.cluster--between {
  justify-content: space-between;
}
```

### 2.3 Crear capa UTILITIES

**src/styles/utilities/spacing.css**

```css
/* Margin utilities */
.mt-0 {
  margin-top: 0;
}
.mt-1 {
  margin-top: var(--space-1);
}
.mt-2 {
  margin-top: var(--space-2);
}
.mt-4 {
  margin-top: var(--space-4);
}
.mt-6 {
  margin-top: var(--space-6);
}
.mt-8 {
  margin-top: var(--space-8);
}

/* Padding utilities */
.p-0 {
  padding: 0;
}
.p-2 {
  padding: var(--space-2);
}
.p-4 {
  padding: var(--space-4);
}
.p-6 {
  padding: var(--space-6);
}

/* etc... generar todas las combinaciones necesarias */
```

**src/styles/utilities/typography.css**

```css
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}

.text-uppercase {
  text-transform: uppercase;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-capitalize {
  text-transform: capitalize;
}

.font-bold {
  font-weight: 700;
}
.font-semibold {
  font-weight: 600;
}
.font-normal {
  font-weight: 400;
}
```

**src/styles/utilities/display.css**

```css
.hidden {
  display: none;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.flex {
  display: flex;
}
.grid {
  display: grid;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### 2.4 Crear capa BLOCKS (Componentes)

**Extraer de css/components/ actual y reorganizar:**

**src/styles/blocks/button.css**

```css
/* Base block */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-primary);
  font-weight: 600;
  border-radius: var(--radius-sm);
  transition: all 0.3s var(--ease-in-out);
  height: 48px;
  padding: 0 var(--space-6);
  font-size: 16px;
}

/* Modificadores de variante */
.btn--primary {
  background: var(--accent-color);
  color: white;
}

.btn--secondary {
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}

/* Modificadores de tamaño */
.btn--sm {
  height: 40px;
  padding: 0 var(--space-4);
  font-size: 14px;
}

.btn--lg {
  height: 56px;
  padding: 0 var(--space-8);
  font-size: 18px;
}

/* Estados */
.btn:hover {
  transform: translateY(-2px);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Ripple effect */
.btn--ripple {
  position: relative;
  overflow: hidden;
}

.btn--ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}

.btn--ripple:active::after {
  width: 300px;
  height: 300px;
}
```

**src/styles/blocks/card.css** (nuevo - extraer de expertise-card, project-card, etc.)

**src/styles/blocks/header.css** (migrar de css/components/header/)

**src/styles/blocks/hero.css** (migrar de css/components/hero/)

**src/styles/blocks/section.css** (migrar de css/components/sections/)

etc...

### 2.5 Consolidador principal

**src/styles/main.css**

```css
/* ============================================
   FILIUS TEC - Main Stylesheet
   Metodología: CUBE CSS
   ============================================ */

/* BASE */
@import './base/reset.css';
@import './base/variables.css';
@import './base/typography.css';

/* COMPOSITION */
@import './composition/container.css';
@import './composition/grid.css';
@import './composition/stack.css';
@import './composition/cluster.css';

/* UTILITIES */
@import './utilities/spacing.css';
@import './utilities/typography.css';
@import './utilities/colors.css';
@import './utilities/display.css';
@import './utilities/animations.css';

/* BLOCKS */
@import './blocks/button.css';
@import './blocks/card.css';
@import './blocks/header.css';
@import './blocks/hero.css';
@import './blocks/section.css';
@import './blocks/footer.css';
@import './blocks/menu-mobile.css';
@import './blocks/carousel.css';
@import './blocks/testimonial.css';

/* EXCEPTIONS */
@import './exceptions/dark-mode.css';

/* RESPONSIVE (global overrides) */
@media (max-width: 768px) {
  :root {
    --font-size-base: 14px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  :root {
    --font-size-base: 15px;
  }
}

@media (min-width: 1025px) {
  :root {
    --font-size-base: 16px;
  }
}
```

---

## 📜 FASE 3: REFACTORIZAR HTML (2 horas)

### 3.1 Mover a src/

```bash
mv index.html src/index.html
```

### 3.2 Actualizar referencias CSS en HTML

```html
<!-- ANTES -->
<link rel="stylesheet" href="css/variables.css" />
<link rel="stylesheet" href="css/base.css" />
<!-- ... 15+ links -->

<!-- DESPUÉS (Vite se encarga del bundling) -->
<link rel="stylesheet" href="/styles/main.css" />
```

### 3.3 Actualizar clases HTML a CUBE CSS

**ANTES:**

```html
<div class="hero-container">
  <div class="hero-content">
    <button class="hero-cta-primary ripple">Solicitar Consultoría</button>
  </div>
</div>
```

**DESPUÉS:**

```html
<div class="container hero">
  <div class="stack stack--lg">
    <button class="btn btn--primary btn--lg btn--ripple">Solicitar Consultoría</button>
  </div>
</div>
```

### 3.4 Actualizar paths de imágenes

```html
<!-- ANTES -->
<img src="assets/images/logo/FiliusB.png" alt="Filius Logo" />

<!-- DESPUÉS -->
<img src="/assets/images/logo/FiliusB.png" alt="Filius Logo" />
```

---

## 🔧 FASE 4: CONFIGURAR VITE (2 horas)

### 4.1 Crear vite.config.js completo

```javascript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src',
  publicDir: '../public',

  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      output: {
        manualChunks: {
          vendor: [],
        },
      },
    },

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  server: {
    port: 3000,
    open: true,
    host: true,
  },

  css: {
    devSourcemap: true,
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

### 4.2 Actualizar package.json

```json
{
  "name": "filiussas",
  "version": "2.0.0",
  "type": "module",
  "description": "Filius - Software Development Portfolio",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "lint": "eslint . --ext .js",
    "format": "prettier --write \"src/**/*.{js,css,html}\""
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "eslint": "^9.4.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.3",
    "jsdom": "^27.2.0",
    "prettier": "^3.3.2",
    "vite": "^5.0.0",
    "vitest": "^4.0.14"
  }
}
```

### 4.3 Crear .env.example

```env
# Environment variables
VITE_APP_NAME=Filius Tec
VITE_APP_VERSION=2.0.0
VITE_API_URL=https://api.filius.com.co
```

---

## 📜 FASE 5: REFACTORIZAR JAVASCRIPT (3 horas)

### 5.1 Reorganizar módulos

```bash
# Mover módulos actuales
mv js/modules/* src/scripts/components/
mv js/utils/* src/scripts/utils/
mv js/main.js src/scripts/main.js
```

### 5.2 Actualizar imports en HTML

```html
<!-- ANTES -->
<script type="module" src="js/main.js"></script>

<!-- DESPUÉS -->
<script type="module" src="/scripts/main.js"></script>
```

### 5.3 Crear estructura según docs

**src/scripts/main.js**

```javascript
/**
 * Main Entry Point - Filius Tec
 * Importa y inicializa todos los componentes
 */

// Componentes
import { Menu } from './components/Menu.js';
import { ScrollProgress } from './components/ScrollProgress.js';
import { TechCarousel } from './components/TechCarousel.js';
import { ContactForm } from './components/ContactForm.js';
import { CustomCursor } from './components/CustomCursor.js';

// Animaciones
import { scrollObserver } from './animations/scrollObserver.js';
import { smoothScroll } from './animations/smoothScroll.js';

// Utilidades
import { debounce } from './utils/debounce.js';

// Configuración
import { APP_CONFIG } from './config/constants.js';

// Aplicación principal
const App = {
  version: APP_CONFIG.version,
  debug: APP_CONFIG.debug,

  async init() {
    console.log(`🚀 Filius Tec v${this.version}`);

    // Inicializar componentes
    this.initComponents();

    // Inicializar animaciones
    this.initAnimations();

    // Event listeners globales
    this.setupGlobalListeners();
  },

  initComponents() {
    new Menu();
    new ScrollProgress();
    new TechCarousel();
    new ContactForm();
    new CustomCursor();
  },

  initAnimations() {
    scrollObserver.init();
    smoothScroll.init();
  },

  setupGlobalListeners() {
    window.addEventListener('error', (e) => {
      if (this.debug) console.error('Error:', e);
    });

    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      this.measurePerformance();
    });
  },

  measurePerformance() {
    if (!this.debug) return;

    if ('performance' in window) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`⚡ Tiempo de carga: ${pageLoadTime}ms`);
    }
  },
};

// Inicializar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

export default App;
```

### 5.4 Refactorizar componentes a clases

**src/scripts/components/Menu.js**

```javascript
export class Menu {
  constructor() {
    this.menuToggle = document.querySelector('[data-menu-toggle]');
    this.menuPanel = document.querySelector('[data-menu-panel]');
    this.menuOverlay = document.querySelector('[data-menu-overlay]');
    this.menuLinks = document.querySelectorAll('[data-menu-link]');
    this.isOpen = false;

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.menuToggle?.addEventListener('click', () => this.toggle());
    this.menuOverlay?.addEventListener('click', () => this.close());

    this.menuLinks.forEach((link) => {
      link.addEventListener('click', () => this.close());
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.menuPanel?.classList.add('is-open');
    this.menuOverlay?.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    this.menuToggle?.setAttribute('aria-expanded', 'true');
  }

  close() {
    this.isOpen = false;
    this.menuPanel?.classList.remove('is-open');
    this.menuOverlay?.classList.remove('is-visible');
    document.body.style.overflow = '';
    this.menuToggle?.setAttribute('aria-expanded', 'false');
  }
}
```

---

## 🧪 FASE 6: ACTUALIZAR TESTS (2 horas)

### 6.1 Reorganizar tests

```bash
mv js/utils/helpers.test.js tests/unit/helpers.test.js
```

### 6.2 Actualizar vitest.config.js

```javascript
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/', '**/*.config.js'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@scripts': resolve(__dirname, 'src/scripts'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
});
```

### 6.3 Crear nuevos tests

**tests/unit/components/Menu.test.js**

```javascript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Menu } from '@scripts/components/Menu.js';

describe('Menu Component', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button data-menu-toggle></button>
      <div data-menu-panel></div>
      <div data-menu-overlay></div>
    `;
  });

  it('should initialize correctly', () => {
    const menu = new Menu();
    expect(menu.isOpen).toBe(false);
  });

  it('should open menu on toggle click', () => {
    const menu = new Menu();
    const toggle = document.querySelector('[data-menu-toggle]');

    toggle.click();

    expect(menu.isOpen).toBe(true);
  });
});
```

---

## 🚀 FASE 7: CI/CD Y DEPLOYMENT (2 horas)

### 7.1 Crear .github/workflows/ci.yml

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop, refactor/cube-css-vite]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm ci
      - run: npm run build

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### 7.2 Crear netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 📊 FASE 8: VALIDACIÓN Y TESTING (2 horas)

### 8.1 Comparación visual

```bash
# Iniciar servidor local
npm run dev

# Abrir en navegador
# Comparar pixel por pixel con screenshots de Fase 0
```

### 8.2 Tests funcionales

- [ ] Navegación funciona
- [ ] Menú mobile funciona
- [ ] Scroll suave funciona
- [ ] Carrusel funciona
- [ ] Cursor personalizado funciona
- [ ] Formulario contacto funciona
- [ ] Animaciones funcionan

### 8.3 Tests responsive

- [ ] Mobile 375px ✅
- [ ] Tablet 768px ✅
- [ ] Desktop 1920px ✅

### 8.4 Lighthouse

```bash
npm run build
npm run preview
npx lighthouse http://localhost:4173 --view
```

**Objetivos:**

- Performance: >90
- Accessibility: >95
- SEO: >95
- Best Practices: >90

---

## 📝 FASE 9: DOCUMENTACIÓN (1 hora)

### 9.1 Actualizar README.md

```markdown
# Filius Tec - Portfolio Corporativo

## Arquitectura

**Metodología CSS:** CUBE CSS  
**Build Tool:** Vite 5.x  
**Testing:** Vitest

## Estructura
```

src/
├── assets/
├── styles/ (CUBE CSS)
│ ├── base/
│ ├── composition/
│ ├── utilities/
│ ├── blocks/
│ └── exceptions/
├── scripts/
└── index.html

````

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Producción
npm test         # Tests
npm run lint     # Linter
````

```

### 9.2 Crear ARCHITECTURE.md

Documentar decisiones técnicas y estructura final

---

## ✅ CHECKLIST FINAL

### Estructura
- [ ] Carpeta `src/` creada
- [ ] Carpeta `public/` creada
- [ ] CSS organizado en CUBE CSS
- [ ] JS en `src/scripts/`
- [ ] Assets en `src/assets/`

### Funcionalidad
- [ ] Vite configurado y funcionando
- [ ] Build genera `dist/` correctamente
- [ ] Todos los módulos JS funcionan
- [ ] CSS carga correctamente
- [ ] Imágenes cargan

### Visual
- [ ] IDÉNTICO al original (0 cambios)
- [ ] Responsive igual
- [ ] Animaciones iguales
- [ ] Colores exactos
- [ ] Tipografía exacta

### Testing
- [ ] Tests pasan
- [ ] Coverage >60%
- [ ] Lighthouse >90

### Deploy
- [ ] CI/CD configurado
- [ ] Netlify configurado
- [ ] Build automático funciona

---

## 🕐 TIEMPO TOTAL ESTIMADO

- Fase 0: 30 min
- Fase 1: 1 hora
- Fase 2: 6 horas ⚠️ (la más larga)
- Fase 3: 2 horas
- Fase 4: 2 horas
- Fase 5: 3 horas
- Fase 6: 2 horas
- Fase 7: 2 horas
- Fase 8: 2 horas
- Fase 9: 1 hora

**TOTAL: ~22 horas** (3 días de trabajo full-time)

---

## 🚀 INICIO RECOMENDADO

**DÍA 1 (8 horas):**
- Fase 0: Backup ✅
- Fase 1: Estructura ✅
- Fase 2: CSS CUBE (parcial - base + composition + utilities)

**DÍA 2 (8 horas):**
- Fase 2: CSS CUBE (completar blocks)
- Fase 3: HTML refactor
- Fase 4: Vite config
- Fase 5: JS refactor (inicio)

**DÍA 3 (6 horas):**
- Fase 5: JS refactor (completar)
- Fase 6: Tests
- Fase 7: CI/CD
- Fase 8: Validación
- Fase 9: Docs

---

**¿Empezamos con la Fase 0 (Backup y preparación)?** 🚀
```
