# 📋 PLAN DE ACCIÓN DETALLADO - FILIUS TEC

**Fecha:** 4 de diciembre de 2025  
**Sprint actual:** Por definir  
**Metodología:** Scrum adaptado (sprints semanales)

---

## 🎯 OBJETIVOS GENERALES

### Corto Plazo (1-2 semanas)

- ✅ Sincronizar documentación con implementación real
- ✅ Activar features implementadas pero no funcionales
- ✅ Completar SEO básico (robots.txt, sitemap, Schema.org)
- ✅ Configurar build process con Vite

### Medio Plazo (3-4 semanas)

- ✅ Aumentar test coverage al 60%+
- ✅ Optimizar performance (Lighthouse >90)
- ✅ Implementar CI/CD completo
- ✅ Agregar contenido real (casos de éxito, testimonios)

### Largo Plazo (1-2 meses)

- ✅ Decidir y refactorizar arquitectura CSS final
- ✅ PWA completa con offline support
- ✅ Blog/contenido dinámico
- ✅ A/B testing para optimización de conversión

---

## 🔥 SPRINT 0: FIXES CRÍTICOS (2-3 días)

### TAREA 1: Activar CustomCursor ⚡ URGENTE

**Tiempo estimado:** 5 minutos  
**Prioridad:** CRÍTICA  
**Responsable:** Santiago

**Archivos a modificar:**

```javascript
// js/main.js

// ANTES:
import Navigation from './modules/navigation.js';
import MobileMenu from './modules/mobile-menu.js';
import ScrollProgress from './modules/scroll-progress.js';
import Animations from './modules/animations.js';
import ScrollEffects from './modules/scroll-effects.js';
// import CustomCursor from './modules/custom-cursor.js'; ← DESCOMENTAR

// DESPUÉS:
import Navigation from './modules/navigation.js';
import MobileMenu from './modules/mobile-menu.js';
import ScrollProgress from './modules/scroll-progress.js';
import Animations from './modules/animations.js';
import ScrollEffects from './modules/scroll-effects.js';
import CustomCursor from './modules/custom-cursor.js'; // ✅ ACTIVADO

// ...

initializeModules() {
  Navigation.init();
  MobileMenu.init();
  ScrollProgress.init();
  Animations.init();
  ScrollEffects.init();
  CustomCursor.init(); // ✅ ACTIVADO
}
```

**Criterios de aceptación:**

- [ ] Cursor personalizado visible en desktop
- [ ] Cursor estándar en móvil/tablet
- [ ] Sin errores en consola
- [ ] Performance 60fps

**Testing:**

```bash
npm start
# Abrir en navegador
# Mover mouse → verificar cursor custom
# Hover sobre links → verificar efecto
```

---

### TAREA 2: Crear robots.txt ⚡ URGENTE

**Tiempo estimado:** 5 minutos  
**Prioridad:** CRÍTICA  
**Responsable:** Santiago

**Crear archivo:**

```txt
# /robots.txt

User-agent: *
Allow: /

# Bloquear archivos innecesarios
Disallow: /node_modules/
Disallow: /docs/
Disallow: /*.test.js$

# Sitemap
Sitemap: https://www.filius.com.co/sitemap.xml

# Crawl delay (opcional)
Crawl-delay: 1
```

**Criterios de aceptación:**

- [ ] Archivo creado en raíz del proyecto
- [ ] Accesible en http://localhost:3000/robots.txt
- [ ] Validado en https://www.google.com/webmasters/tools/robots-testing-tool

---

### TAREA 3: Crear sitemap.xml ⚡ URGENTE

**Tiempo estimado:** 10 minutos  
**Prioridad:** CRÍTICA

**Crear archivo:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Página principal -->
  <url>
    <loc>https://www.filius.com.co/</loc>
    <lastmod>2025-12-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Anclas principales (indexables si se usan pushState futuro) -->
  <url>
    <loc>https://www.filius.com.co/#servicios</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.filius.com.co/#trabajo</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.filius.com.co/#experiencia</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://www.filius.com.co/#contacto</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

</urlset>
```

**Criterios de aceptación:**

- [ ] Validado en https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] URLs correctas (actualizar con dominio real)
- [ ] Enviar a Google Search Console

---

### TAREA 4: Agregar Schema.org completo 🎯

**Tiempo estimado:** 30 minutos  
**Prioridad:** ALTA

**Modificar index.html:**

```html
<!-- DESPUÉS del Schema Organization existente -->

<!-- WebSite Schema -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Filius Tec",
    "alternateName": "Filius",
    "url": "https://www.filius.com.co",
    "description": "Desarrollo web, e-commerce y soporte técnico para PYMES en Colombia",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.filius.com.co/#servicios?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
</script>

<!-- Service Schema - Desarrollo Web -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Desarrollo Web & E-commerce",
    "provider": {
      "@type": "Organization",
      "name": "Filius Tec",
      "url": "https://www.filius.com.co"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "description": "Creamos tiendas virtuales escalables, páginas corporativas y plataformas web modernas con optimización SEO",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "COP"
    }
  }
</script>

<!-- Service Schema - Soporte Técnico -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Soporte Técnico e Infraestructura TI",
    "provider": {
      "@type": "Organization",
      "name": "Filius Tec"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "description": "Mantenimiento de hardware, configuración de redes, help desk empresarial y gestión de infraestructura"
  }
</script>

<!-- Service Schema - Consultoría -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Consultoría Digital & Gestión de Proyectos",
    "provider": {
      "@type": "Organization",
      "name": "Filius Tec"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "description": "Transformación digital, liderazgo ágil con metodología Scrum, estrategias de marca digital y gestión profesional de proyectos"
  }
</script>

<!-- LocalBusiness Schema (para SEO local) -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Filius Tec",
    "image": "https://www.filius.com.co/assets/images/logo/FiliusN.png",
    "@id": "https://www.filius.com.co",
    "url": "https://www.filius.com.co",
    "telephone": "+573195604302",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ibagué",
      "addressRegion": "Tolima",
      "postalCode": "730001",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.4389,
      "longitude": -75.2322
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": ["https://www.instagram.com/filius.tec", "https://www.facebook.com/filius.tec"]
  }
</script>
```

**Validación:**

- [ ] https://validator.schema.org/
- [ ] https://search.google.com/test/rich-results
- [ ] Sin errores ni warnings

---

### TAREA 5: Fix efecto ripple en botones 🎨

**Tiempo estimado:** 15 minutos  
**Prioridad:** MEDIA

**Modificar css/components/buttons.css:**

```css
/* Agregar al final del archivo */

/* ============================================================
   RIPPLE EFFECT
   ============================================================ */

.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::after {
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

.ripple:active::after {
  width: 300px;
  height: 300px;
}

/* Animación alternativa con JavaScript (mejor) */
.ripple-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  animation: ripple-animation 0.6s ease-out;
}

@keyframes ripple-animation {
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
}
```

**Opcional - JavaScript mejorado:**

```javascript
// js/utils/ripple.js
export function addRippleEffect() {
  const rippleButtons = document.querySelectorAll('.ripple');

  rippleButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
      circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
      circle.classList.add('ripple-circle');

      const existingCircle = this.querySelector('.ripple-circle');
      if (existingCircle) {
        existingCircle.remove();
      }

      this.appendChild(circle);

      setTimeout(() => circle.remove(), 600);
    });
  });
}
```

**Criterios de aceptación:**

- [ ] Efecto visible al hacer clic
- [ ] Funciona en todos los botones con clase `.ripple`
- [ ] No afecta navegación (preventDefault si es link)

---

### TAREA 6: Actualizar documentación CRÍTICA 📝

**Tiempo estimado:** 2 horas  
**Prioridad:** CRÍTICA  
**Responsable:** Santiago + Matias

**Archivos a actualizar:**

#### 6.1 ARQUITECTURA-TÉCNICA-Y-PLAN-DE-SEGURIDAD-FILIUS-TEC.txt

**Cambios necesarios:**

```diff
- Build Tools: Vite 5.x
+ Build Tools: five-server (dev), Vite (producción - pendiente configurar)

- Metodología CSS: CUBE CSS (Composition, Utility, Block, Exception)
+ Metodología CSS: Modularización por componentes + BEM naming

- Estructura propuesta: src/styles/, src/scripts/, etc.
+ Estructura actual: css/, js/, assets/ (raíz del proyecto)

- Bundler: Vite (configurado y activo)
+ Bundler: Vite (instalado pero NO usado actualmente)
```

#### 6.2 DESIGN-SYSTEM-FILIUS-TEC.txt

```diff
- Metodología: Atomic Design + Design Tokens
+ Metodología: Design Tokens + Component-based Architecture

- Estructura: atoms/, molecules/, organisms/
+ Estructura: components/ (header, hero, sections, buttons, etc.)
```

#### 6.3 Crear CHANGELOG.md

```markdown
# Changelog - Filius Tec

## [Unreleased]

### Pendiente

- Configurar Vite para build de producción
- Implementar CUBE CSS o documentar arquitectura actual
- Aumentar test coverage

## [1.0.0] - 2025-12-04

### Agregado

- Estructura modular de CSS (header/, hero/, sections/)
- Sistema de navegación responsive
- Menú hamburguesa mobile
- Carrusel de tecnologías infinito
- Sección de servicios con 3 cards
- Timeline de experiencia
- Formulario de contacto
- Tests unitarios con Vitest
- ESLint + Prettier

### Corregido (Sprint 0)

- Activado CustomCursor (estaba implementado pero no importado)
- Agregado robots.txt
- Agregado sitemap.xml
- Schema.org completo (WebSite, Service, LocalBusiness)
- Efecto ripple en botones

### Documentación

- Sincronizada documentación técnica con código real
- Creado ANÁLISIS-CRÍTICO-COMPLETO.md
- Creado PLAN-DE-ACCIÓN-DETALLADO.md
```

**Criterios de aceptación:**

- [ ] Documentos reflejan estado real del proyecto
- [ ] Sin referencias a código no implementado
- [ ] CHANGELOG.md actualizado
- [ ] README.md revisado

---

## 📦 SPRINT 1: CONTENIDO Y SEO (1 semana)

### TAREA 7: Agregar 2-3 casos de éxito reales 📄

**Tiempo estimado:** 3 horas  
**Prioridad:** ALTA

**Estructura por caso:**

```html
<article class="project-card">
  <div class="project-image">
    <img src="assets/images/projects/proyecto-1.jpg" alt="E-commerce Retail Colombia" />
  </div>

  <div class="project-content">
    <span class="project-category">E-commerce</span>
    <h3 class="project-title">Tienda Virtual para Retail de Moda</h3>

    <div class="project-details">
      <h4>Industria</h4>
      <p>Retail / Moda</p>

      <h4>Problema</h4>
      <p>
        El cliente no tenía presencia digital y perdía ventas frente a competidores online.
        Necesitaban solución rápida y escalable.
      </p>

      <h4>Solución</h4>
      <p>Desarrollamos tienda virtual en WooCommerce con:</p>
      <ul>
        <li>Integración de pagos (PSE, tarjetas, Nequi)</li>
        <li>Sistema de inventario sincronizado</li>
        <li>Optimización SEO local</li>
        <li>Dashboard administrativo personalizado</li>
      </ul>

      <h4>Resultados</h4>
      <ul>
        <li>📈 150% aumento en ventas mensuales</li>
        <li>🚀 Tiempo de carga: 1.2 segundos</li>
        <li>⭐ Posicionamiento: Top 3 en Google para keywords locales</li>
        <li>💯 Satisfacción del cliente: 5/5</li>
      </ul>
    </div>

    <div class="project-tech">
      <span class="tech-tag">WordPress</span>
      <span class="tech-tag">WooCommerce</span>
      <span class="tech-tag">PHP</span>
      <span class="tech-tag">SEO</span>
    </div>
  </div>
</article>
```

**Imágenes necesarias:**

- Captura de pantalla del proyecto
- Formato: WebP + fallback JPG
- Dimensiones: 1200x800px
- Optimizadas (<200KB)

**Criterios de aceptación:**

- [ ] Mínimo 3 casos de éxito publicados
- [ ] Contenido real (no placeholder)
- [ ] Imágenes optimizadas
- [ ] Métricas cuantificables
- [ ] Schema.org para cada caso (opcional pero recomendado)

---

### TAREA 8: Actualizar testimonios con clientes reales 💬

**Tiempo estimado:** 2 horas  
**Prioridad:** ALTA

**Estructura mejorada:**

```html
<article class="testimonial-card" itemscope itemtype="http://schema.org/Review">
  <div
    class="testimonial-rating"
    itemprop="reviewRating"
    itemscope
    itemtype="http://schema.org/Rating"
  >
    <meta itemprop="ratingValue" content="5" />
    <meta itemprop="bestRating" content="5" />
    <div class="stars">⭐⭐⭐⭐⭐</div>
  </div>

  <div class="testimonial-quote-icon">"</div>

  <p class="testimonial-text" itemprop="reviewBody">
    "Filius transformó completamente nuestra presencia digital. En 3 meses duplicamos nuestras
    consultas mensuales gracias al sitio web optimizado que desarrollaron. Profesionales
    comprometidos y siempre disponibles."
  </p>

  <div class="testimonial-author" itemprop="author" itemscope itemtype="http://schema.org/Person">
    <div class="author-avatar">
      <img
        src="assets/images/testimonials/juan-martinez.jpg"
        alt="Juan Martínez"
        itemprop="image"
      />
    </div>
    <div class="author-info">
      <p class="author-name" itemprop="name">Juan Martínez</p>
      <p class="author-role">
        Gerente General | <span itemprop="worksFor">Distribuidora El Sol</span>
      </p>
    </div>
  </div>

  <meta
    itemprop="itemReviewed"
    itemscope
    itemtype="http://schema.org/Service"
    content="Desarrollo Web"
  />
  <meta itemprop="datePublished" content="2025-10-15" />
</article>
```

**Solicitar a clientes:**

- ✉️ Email con plantilla de solicitud
- 📝 Formulario Google Forms
- 💼 LinkedIn recommendations

**Criterios de aceptación:**

- [ ] 3-5 testimonios reales
- [ ] Fotos de clientes (con permiso)
- [ ] Rating visible (estrellas)
- [ ] Schema.org Review completo
- [ ] Validado en Google Rich Results Test

---

### TAREA 9: Optimización de imágenes 🖼️

**Tiempo estimado:** 2 horas  
**Prioridad:** MEDIA-ALTA

**Proceso:**

1. **Convertir a WebP**

   ```bash
   # Instalar herramienta
   npm install -g webp-converter-cli

   # Convertir todas las imágenes
   webp-converter assets/images/**/*.{jpg,png} --quality 85
   ```

2. **Crear versiones responsive**

   ```bash
   npm install -g sharp-cli

   sharp -i original.jpg -o output-320w.webp resize 320
   sharp -i original.jpg -o output-640w.webp resize 640
   sharp -i original.jpg -o output-1024w.webp resize 1024
   ```

3. **Actualizar HTML**
   ```html
   <picture>
     <source
       type="image/webp"
       srcset="
         assets/images/hero-320w.webp   320w,
         assets/images/hero-640w.webp   640w,
         assets/images/hero-1024w.webp 1024w
       "
       sizes="(max-width: 768px) 100vw, 50vw"
     />
     <img
       src="assets/images/hero.jpg"
       alt="Filius Tec - Desarrollo Web"
       loading="lazy"
       decoding="async"
     />
   </picture>
   ```

**Criterios de aceptación:**

- [ ] Todas las imágenes en WebP + fallback
- [ ] srcset implementado
- [ ] loading="lazy" en imágenes below-the-fold
- [ ] Reducción de peso total >50%

---

### TAREA 10: Implementar lazy loading 🚀

**Tiempo estimado:** 1 hora  
**Prioridad:** ALTA

**Opción 1: Nativo (recomendado)**

```html
<!-- Imágenes que no están en viewport inicial -->
<img src="..." alt="..." loading="lazy" decoding="async" />
```

**Opción 2: Intersection Observer (más control)**

```javascript
// js/utils/lazyLoad.js
export function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px',
    }
  );

  images.forEach((img) => imageObserver.observe(img));
}
```

**HTML:**

```html
<img
  data-src="assets/images/proyecto.webp"
  src="assets/images/placeholder.jpg"
  alt="Proyecto"
  class="lazy"
/>

<noscript>
  <img src="assets/images/proyecto.webp" alt="Proyecto" />
</noscript>
```

**Criterios de aceptación:**

- [ ] Imágenes below-the-fold tienen loading="lazy"
- [ ] Placeholder visible mientras carga
- [ ] Fallback para navegadores antiguos
- [ ] LCP mejorado en Lighthouse

---

## ⚙️ SPRINT 2: BUILD Y DEPLOYMENT (1 semana)

### TAREA 11: Configurar Vite correctamente 🛠️

**Tiempo estimado:** 3 horas  
**Prioridad:** ALTA

**1. Actualizar package.json:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint . --ext .js"
  }
}
```

**2. Crear vite.config.js completo:**

```javascript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  publicDir: 'assets',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['vitest'],
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

  test: {
    globals: true,
    environment: 'jsdom',
  },
});
```

**3. Actualizar imports en index.html:**

```html
<!-- Cambiar rutas relativas a absolutas -->
<script type="module" src="/js/main.js"></script>
<link rel="stylesheet" href="/css/variables.css" />
```

**4. Probar build:**

```bash
npm run build
npm run preview
```

**Criterios de aceptación:**

- [ ] `npm run dev` funciona (Vite dev server)
- [ ] `npm run build` genera dist/ correctamente
- [ ] CSS/JS minificados
- [ ] Source maps generados (dev)
- [ ] Tree-shaking funcional
- [ ] Build time <30 segundos

---

### TAREA 12: Configurar CI/CD con GitHub Actions 🚀

**Tiempo estimado:** 2 horas  
**Prioridad:** MEDIA-ALTA

**Crear .github/workflows/ci.yml:**

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

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
          name: build
          path: dist/

  lighthouse:
    needs: test
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            http://localhost:3000
          uploadArtifacts: true

  deploy:
    needs: [test, lighthouse]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: 'Deploy from GitHub Actions'
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

**Configurar secrets en GitHub:**

1. Ir a Settings → Secrets → Actions
2. Agregar:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`

**Criterios de aceptación:**

- [ ] Pipeline completo ejecutándose
- [ ] Tests automáticos en cada push
- [ ] Lighthouse CI generando reportes
- [ ] Deploy automático a Netlify en merge a main
- [ ] Badges en README.md

---

### TAREA 13: Crear netlify.toml 📦

**Tiempo estimado:** 30 minutos  
**Prioridad:** MEDIA

**Crear archivo:**

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "18"

# Redirects y rewrites
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers de seguridad
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https://cdn.jsdelivr.net;"

# Cache estático
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Plugins
[[plugins]]
  package = "@netlify/plugin-lighthouse"

  [plugins.inputs.thresholds]
    performance = 0.9
    accessibility = 0.95
    best-practices = 0.9
    seo = 0.95
```

**Criterios de aceptación:**

- [ ] Deploy automático funcionando
- [ ] Headers de seguridad aplicados
- [ ] Cache configurado correctamente
- [ ] Lighthouse plugin activo

---

## 🧪 SPRINT 3: TESTING Y CALIDAD (1 semana)

### TAREA 14: Tests para módulos JS 🧪

**Tiempo estimado:** 4 horas  
**Prioridad:** ALTA

**Crear tests/unit/navigation.test.js:**

```javascript
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import Navigation from '../../js/modules/navigation.js';

describe('Navigation Module', () => {
  beforeEach(() => {
    // Mock DOM
    document.body.innerHTML = `
      <nav>
        <a href="#section1" class="nav-link">Section 1</a>
        <a href="#section2" class="nav-link">Section 2</a>
      </nav>
      <section id="section1"></section>
      <section id="section2"></section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should initialize without errors', () => {
    expect(() => Navigation.init()).not.toThrow();
  });

  it('should add active class to clicked link', () => {
    Navigation.init();

    const link = document.querySelector('.nav-link');
    link.click();

    expect(link.classList.contains('active')).toBe(true);
  });

  it('should smooth scroll to section', () => {
    const scrollIntoViewMock = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    Navigation.init();

    const link = document.querySelector('a[href="#section1"]');
    link.click();

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
```

**Crear tests/unit/mobile-menu.test.js:**

```javascript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import MobileMenu from '../../js/modules/mobile-menu.js';

describe('MobileMenu Module', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button class="menu-toggle"></button>
      <div class="mobile-menu"></div>
      <div class="menu-overlay"></div>
    `;
  });

  it('should open menu on toggle click', () => {
    MobileMenu.init();

    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');

    toggle.click();

    expect(menu.classList.contains('active')).toBe(true);
  });

  it('should close menu on overlay click', () => {
    MobileMenu.init();

    const toggle = document.querySelector('.menu-toggle');
    const overlay = document.querySelector('.menu-overlay');
    const menu = document.querySelector('.mobile-menu');

    toggle.click(); // abrir
    overlay.click(); // cerrar

    expect(menu.classList.contains('active')).toBe(false);
  });

  it('should close menu on ESC key', () => {
    MobileMenu.init();

    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');

    toggle.click(); // abrir

    const escEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escEvent);

    expect(menu.classList.contains('active')).toBe(false);
  });
});
```

**Objetivo de coverage:**

- helpers.js: 100% ✅
- navigation.js: 80%+
- mobile-menu.js: 80%+
- carousel.js: 70%+
- scroll-effects.js: 60%+
- animations.js: 60%+

**Criterios de aceptación:**

- [ ] Coverage total >60%
- [ ] Todos los tests passing
- [ ] CI ejecutando tests automáticamente

---

## 📈 SPRINT 4: PERFORMANCE Y PWA (1-2 semanas)

### TAREA 15: Optimizar Performance (Lighthouse >90) 🚀

**Tiempo estimado:** 4-6 horas  
**Prioridad:** MEDIA

**Checklist:**

- [ ] Lazy loading imágenes ✅ (TAREA 10)
- [ ] Minificación CSS/JS ✅ (TAREA 11)
- [ ] Preconnect a Google Fonts
- [ ] Font-display: swap
- [ ] Eliminar CSS no usado (PurgeCSS)
- [ ] Critical CSS inline
- [ ] Defer non-critical JS
- [ ] Comprimir assets (Gzip/Brotli)

**Criterios de aceptación:**

- [ ] Lighthouse Performance: >90
- [ ] Lighthouse Accessibility: >95
- [ ] Lighthouse SEO: >95
- [ ] Lighthouse Best Practices: >90

---

## 📋 BACKLOG FUTURO

### Features Opcionales

- [ ] PWA completa (Service Worker, offline)
- [ ] Dark/Light mode toggle
- [ ] Blog con Markdown
- [ ] Formulario de contacto con backend
- [ ] Chat en vivo (Tawk.to o similar)
- [ ] Google Analytics 4 / Plausible
- [ ] A/B testing (VWO, Google Optimize)
- [ ] Internacionalización (i18n)

---

## 📊 MÉTRICAS DE ÉXITO

### KPIs Técnicos

- Test coverage: >80%
- Lighthouse Performance: >90
- Build time: <30s
- Deploy time: <2min

### KPIs de Negocio (post-lanzamiento)

- 1 proyecto contratado/mes (objetivo del documento)
- Tasa de conversión: >2%
- Tiempo en página: >2 minutos
- Bounce rate: <50%

---

**Fin del Plan de Acción Detallado**  
**Última actualización:** 4 de diciembre de 2025
