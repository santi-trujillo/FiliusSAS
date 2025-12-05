# ✅ CHECKLIST RÁPIDA - FILIUS TEC

**Quick Reference para fixes inmediatos**

---

## 🔥 SPRINT 0: FIXES CRÍTICOS (HOY - 3-4 horas)

### ⚡ Fix 1: Activar CustomCursor (5 min)

```javascript
// 📁 js/main.js

// AGREGAR línea 6:
import CustomCursor from './modules/custom-cursor.js';

// AGREGAR en initializeModules() (línea 64):
CustomCursor.init();
```

- [ ] Importar módulo
- [ ] Llamar init()
- [ ] Probar en navegador
- [ ] Verificar: cursor personalizado visible en desktop

---

### 📄 Fix 2: Crear robots.txt (5 min)

```txt
# 📁 robots.txt (crear en raíz)

User-agent: *
Allow: /

Disallow: /node_modules/
Disallow: /docs/
Disallow: /*.test.js$

Sitemap: https://www.filius.com.co/sitemap.xml
```

- [ ] Crear archivo en raíz
- [ ] Actualizar URL con dominio real
- [ ] Probar: http://localhost:3000/robots.txt
- [ ] Validar: Google Robots Testing Tool

---

### 🗺️ Fix 3: Crear sitemap.xml (10 min)

```xml
<!-- 📁 sitemap.xml (crear en raíz) -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.filius.com.co/</loc>
    <lastmod>2025-12-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.filius.com.co/#servicios</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.filius.com.co/#contacto</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

- [ ] Crear archivo
- [ ] Actualizar fechas
- [ ] Probar: http://localhost:3000/sitemap.xml
- [ ] Validar: XML Sitemaps Validator

---

### 🏷️ Fix 4: Agregar Schema.org Completo (30 min)

```html
<!-- 📁 index.html - Agregar ANTES de </head> -->

<!-- WebSite Schema -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Filius Tec",
    "url": "https://www.filius.com.co"
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
      "name": "Filius Tec"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    }
  }
</script>

<!-- LocalBusiness Schema -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Filius Tec",
    "telephone": "+573195604302",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ibagué",
      "addressRegion": "Tolima",
      "addressCountry": "CO"
    }
  }
</script>
```

- [ ] Copiar schemas al HTML
- [ ] Personalizar datos
- [ ] Validar: https://validator.schema.org/
- [ ] Validar: Google Rich Results Test

---

### 🎨 Fix 5: Efecto Ripple Botones (15 min)

```css
/* 📁 css/components/buttons.css - Agregar al final */

/* Ripple Effect */
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
```

- [ ] Agregar CSS
- [ ] Probar clic en botones
- [ ] Verificar efecto visual
- [ ] Ajustar duración si es necesario

---

### 📝 Fix 6: Actualizar Documentación (2 horas)

#### 6.1 ARQUITECTURA-TÉCNICA-Y-PLAN-DE-SEGURIDAD-FILIUS-TEC.txt

```diff
- Build Tools: Vite 5.x
+ Build Tools: five-server (dev), Vite (producción - pendiente)

- Metodología CSS: CUBE CSS
+ Metodología CSS: Modularización por componentes

- Estructura: src/styles/
+ Estructura: css/ (raíz)
```

- [ ] Buscar "Vite 5.x" → Reemplazar
- [ ] Buscar "CUBE CSS" → Actualizar
- [ ] Buscar "src/" → Corregir rutas

#### 6.2 DESIGN-SYSTEM-FILIUS-TEC.txt

```diff
- Metodología: Atomic Design
+ Metodología: Component-based Architecture

- atoms/, molecules/, organisms/
+ components/ (header, hero, sections)
```

- [ ] Actualizar metodología
- [ ] Corregir referencias a carpetas

#### 6.3 Crear CHANGELOG.md

```markdown
# Changelog

## [1.0.0] - 2025-12-04

### Agregado

- Estructura modular CSS/JS
- Navegación responsive
- Carrusel infinito
- Tests con Vitest

### Corregido (Sprint 0)

- ✅ CustomCursor activado
- ✅ robots.txt creado
- ✅ sitemap.xml creado
- ✅ Schema.org completo
- ✅ Efecto ripple implementado
```

- [ ] Crear archivo
- [ ] Documentar cambios
- [ ] Commitear

---

## 🎯 VERIFICACIÓN FINAL SPRINT 0

### Tests Automáticos

```bash
# Linter
npm run lint

# Tests unitarios
npm test

# Build (si Vite configurado)
npm run build
```

- [ ] Linter: 0 errores
- [ ] Tests: All passing
- [ ] Build: Exitoso

### Tests Manuales

#### Desktop (1920x1080)

- [ ] Cursor personalizado funciona
- [ ] Efecto ripple en botones
- [ ] Navegación suave entre secciones
- [ ] Menú hover effects

#### Tablet (768x1024)

- [ ] Responsive correcto
- [ ] Menú hamburguesa funciona
- [ ] Carrusel responsive

#### Mobile (375x667)

- [ ] Todo el contenido visible
- [ ] Botones touch-friendly
- [ ] Menú mobile fluido
- [ ] Scroll suave

### SEO Check

- [ ] robots.txt accesible
- [ ] sitemap.xml válido
- [ ] Schema.org sin errores
- [ ] Meta tags completos
- [ ] Imágenes con alt text

### Performance Quick Check

```bash
# Lighthouse CLI (opcional)
npx lighthouse http://localhost:3000 --view
```

- [ ] Performance: >70 (baseline)
- [ ] Accessibility: >90
- [ ] SEO: >90

---

## 📦 COMMIT & PUSH

```bash
git add .
git commit -m "fix: Sprint 0 - Activar CustomCursor, SEO completo, documentación actualizada

- ✅ Activado CustomCursor (importado en main.js)
- ✅ Creado robots.txt
- ✅ Creado sitemap.xml
- ✅ Schema.org completo (WebSite, Service, LocalBusiness)
- ✅ Efecto ripple en botones implementado
- ✅ Documentación sincronizada con código real
- ✅ CHANGELOG.md creado

Fixes críticos completados. Proyecto funcional al 100%."

git push origin main
```

---

## 🚀 SIGUIENTE PASO

Una vez completado Sprint 0:

1. ✅ Leer `PLAN-DE-ACCIÓN-DETALLADO.md` → SPRINT 1
2. ✅ Priorizar: Contenido real (casos de éxito, testimonios)
3. ✅ Configurar Vite + CI/CD
4. ✅ Tests para módulos JS

---

## 📞 RECURSOS

### Documentos Generados

- ✅ `ANÁLISIS-CRÍTICO-COMPLETO.md` (análisis detallado)
- ✅ `PLAN-DE-ACCIÓN-DETALLADO.md` (roadmap completo)
- ✅ `RESUMEN-EJECUTIVO.md` (overview ejecutivo)
- ✅ `CHECKLIST-RÁPIDA.md` (este archivo)

### Herramientas de Validación

- Schema.org: https://validator.schema.org/
- Rich Results: https://search.google.com/test/rich-results
- Robots.txt: https://www.google.com/webmasters/tools/robots-testing-tool
- Sitemap: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Lighthouse: `npx lighthouse http://localhost:3000`

---

**¡Manos a la obra! 🚀**

Tiempo estimado Sprint 0: **3-4 horas**  
Resultado: Proyecto funcional al 100% con SEO completo
