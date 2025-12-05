# 📊 COMPARATIVA: DOCUMENTADO vs IMPLEMENTADO

**Análisis de discrepancias entre especificaciones y código real**  
**Fecha:** 4 de diciembre de 2025

---

## 🏗️ ARQUITECTURA

| Aspecto                    | Documentado                    | Implementado           | Estado                          | Acción                         |
| -------------------------- | ------------------------------ | ---------------------- | ------------------------------- | ------------------------------ |
| **Metodología CSS**        | CUBE CSS                       | Componentes modulares  | ❌ No coincide                  | Actualizar docs O refactorizar |
| **Estructura de carpetas** | `src/styles/`                  | `css/` (raíz)          | ❌ No coincide                  | Actualizar docs                |
| **Build tool**             | Vite 5.x                       | five-server            | ⚠️ Vite instalado pero no usado | Configurar Vite                |
| **Atomic Design**          | Sí (atoms/molecules/organisms) | No (components planos) | ❌ No implementado              | Actualizar docs                |
| **Design Tokens**          | Sí                             | Sí (variables.css)     | ✅ Implementado                 | OK                             |
| **ES6 Modules**            | Sí                             | Sí                     | ✅ Implementado                 | OK                             |

---

## 📁 ESTRUCTURA DE CARPETAS

### Documentada (ARQUITECTURA-TÉCNICA)

```
filius-tec/
├── public/
├── src/
│   ├── assets/
│   ├── styles/
│   │   ├── composition/
│   │   ├── utilities/
│   │   ├── blocks/
│   │   └── exceptions/
│   ├── scripts/
│   ├── components/
│   └── index.html
├── tests/
└── config/
```

### Implementada (Real)

```
FiliusSAS/
├── index.html (raíz)
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   └── components/
├── js/
│   ├── main.js
│   ├── modules/
│   └── utils/
├── assets/
├── docs/
└── vitest.config.js
```

### Análisis

- ❌ NO hay carpeta `src/`
- ❌ NO hay `composition/`, `utilities/`, `blocks/`, `exceptions/`
- ❌ `index.html` está en raíz, no en `src/`
- ✅ Modularización alternativa funciona bien
- ⚠️ No escalable según docs

**RECOMENDACIÓN:** Actualizar documentación para reflejar estructura actual

---

## 🎨 CSS METHODOLOGY

### CUBE CSS (Documentado)

```css
/* Composition */
.container {
}
.grid {
}
.stack {
}

/* Utilities */
.mt-4 {
  margin-top: 1rem;
}
.text-center {
  text-align: center;
}

/* Blocks */
.btn {
}
.btn--primary {
}
.btn__icon {
}

/* Exceptions */
[data-theme='light'] .btn {
}
```

### Implementación Actual

```css
/* Variables globales */
:root {
  --accent-color: #3b82f6;
}

/* Componentes modulares */
.hero {
}
.hero-container {
}
.hero-cta-primary {
}

/* Layout */
.container {
}
.section {
}

/* Responsive */
@media (min-width: 768px) {
}
```

### Análisis

- ❌ NO sigue CUBE CSS
- ❌ NO hay carpeta `utilities/`
- ✅ Variables CSS bien usadas
- ✅ Componentización clara
- ✅ BEM parcialmente usado (`.hero-cta-primary`)
- ⚠️ Mezcla de metodologías

**RECOMENDACIÓN:** Decidir metodología final y documentar

---

## 🛠️ BUILD PROCESS

| Característica   | Documentado     | Implementado          | Estado |
| ---------------- | --------------- | --------------------- | ------ |
| **Bundler**      | Vite 5.x        | Ninguno (five-server) | ❌     |
| **Dev Server**   | Vite dev server | five-server           | ❌     |
| **Minificación** | Terser (CSS+JS) | No                    | ❌     |
| **Tree-shaking** | Sí              | No                    | ❌     |
| **Source maps**  | Sí              | No                    | ❌     |
| **Build output** | `dist/`         | No existe             | ❌     |

### package.json Documentado

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### package.json Real

```json
{
  "scripts": {
    "start": "five-server",
    "test": "vitest"
  }
}
```

**IMPACTO:** 🔴 CRÍTICO  
**ACCIÓN:** Configurar Vite correctamente (TAREA 11 del plan)

---

## 🧪 TESTING

| Aspecto           | Documentado | Implementado | Coverage Actual | Coverage Objetivo |
| ----------------- | ----------- | ------------ | --------------- | ----------------- |
| **Framework**     | Vitest      | Vitest ✅    | -               | -                 |
| **Helpers**       | Sí          | Sí ✅        | 100%            | 100%              |
| **Navigation**    | Sí          | No ❌        | 0%              | 80%               |
| **MobileMenu**    | Sí          | No ❌        | 0%              | 80%               |
| **Carousel**      | Sí          | No ❌        | 0%              | 70%               |
| **ScrollEffects** | Sí          | No ❌        | 0%              | 60%               |
| **Animations**    | Sí          | No ❌        | 0%              | 60%               |
| **E2E Tests**     | Playwright  | No ❌        | 0%              | 60%               |

**Coverage Total:** ~5% / Objetivo: 80%

---

## 🎯 FEATURES (Historias de Usuario)

### ✅ COMPLETAMENTE IMPLEMENTADAS

| US     | Descripción       | Estado | Observaciones      |
| ------ | ----------------- | ------ | ------------------ |
| US-001 | Hero principal    | ✅     | Perfecto           |
| US-002 | Visual badges     | ✅     | Con animaciones    |
| US-004 | Sección servicios | ✅     | 3 cards responsive |
| US-008 | Contacto          | ✅     | Email + WhatsApp   |
| US-010 | Nav desktop       | ✅     | Smooth scroll      |
| US-011 | Menú mobile       | ✅     | Con ESC key        |

---

### ⚠️ PARCIALMENTE IMPLEMENTADAS

| US         | Descripción          | Problema                                                | Fix               |
| ---------- | -------------------- | ------------------------------------------------------- | ----------------- |
| **US-003** | Carrusel tecnologías | ❌ No pausa en hover<br>❌ No fade lateral              | 30 min fix        |
| **US-005** | Casos de éxito       | ❌ Solo 1 caso (necesita 3)<br>❌ Contenido placeholder | 3 horas contenido |
| **US-006** | Experiencia          | ⚠️ Falta sección "Valores"                              | 1 hora            |
| **US-007** | Testimonios          | ❌ Placeholder<br>❌ Sin Schema.org Review              | 2 horas           |

---

### ❌ IMPLEMENTADAS PERO NO FUNCIONALES

| Feature           | Estado           | Problema                | Fix      |
| ----------------- | ---------------- | ----------------------- | -------- |
| **CustomCursor**  | 🟡 Código existe | No importado en main.js | 5 min ⚡ |
| **Ripple Effect** | 🟡 HTML listo    | CSS no existe           | 15 min   |
| **Vite Build**    | 🟡 Instalado     | No configurado          | 3 horas  |

---

## 📄 SEO

### Schema.org

| Schema        | Documentado | Implementado | Estado   |
| ------------- | ----------- | ------------ | -------- |
| Organization  | ✅ Sí       | ✅ Sí        | ✅ OK    |
| WebSite       | ✅ Sí       | ❌ No        | ❌ Falta |
| Service (x3)  | ✅ Sí       | ❌ No        | ❌ Falta |
| LocalBusiness | ✅ Sí       | ❌ No        | ❌ Falta |
| Review        | ✅ Sí       | ❌ No        | ❌ Falta |

### Archivos SEO

| Archivo       | Documentado | Implementado  | Estado     |
| ------------- | ----------- | ------------- | ---------- |
| robots.txt    | ✅ Sí       | ❌ No         | ❌ Crítico |
| sitemap.xml   | ✅ Sí       | ❌ No         | ❌ Crítico |
| manifest.json | ✅ Sí       | ⚠️ Incompleto | ⚠️ Mejorar |

---

## 🚀 DEPLOYMENT

| Aspecto               | Documentado    | Implementado | Estado            |
| --------------------- | -------------- | ------------ | ----------------- |
| **Hosting**           | Netlify        | ?            | ⚠️ No configurado |
| **CI/CD**             | GitHub Actions | ❌ No        | ❌ Crítico        |
| **Auto Deploy**       | Sí             | ❌ No        | ❌                |
| **Netlify.toml**      | Sí             | ❌ No        | ❌                |
| **Build Command**     | `vite build`   | -            | ❌                |
| **Headers Seguridad** | Sí             | ❌ No        | ❌                |

---

## 🔒 SEGURIDAD

| Feature               | Documentado       | Implementado | Estado              |
| --------------------- | ----------------- | ------------ | ------------------- |
| **HTTPS**             | Netlify SSL       | ?            | ⚠️ Pendiente deploy |
| **CSP**               | Sí                | ❌ No        | ❌                  |
| **SRI**               | Sí (para CDN)     | ❌ No        | ❌                  |
| **Headers Seguridad** | Sí (netlify.toml) | ❌ No        | ❌                  |
| **Honeypot Forms**    | Sí                | ❌ No        | ⚠️ Opcional         |

---

## 📊 PERFORMANCE

| Métrica                    | Objetivo Docs | Actual | Estado       |
| -------------------------- | ------------- | ------ | ------------ |
| **Lighthouse Performance** | >90           | ?      | ⚠️ Sin medir |
| **LCP**                    | <2.5s         | ?      | ⚠️ Sin medir |
| **FID**                    | <100ms        | ?      | ⚠️ Sin medir |
| **CLS**                    | <0.1          | ?      | ⚠️ Sin medir |
| **Lazy Loading**           | Sí            | ❌ No  | ❌           |
| **WebP**                   | Sí            | ❌ No  | ❌           |
| **Minificación**           | Sí            | ❌ No  | ❌           |

---

## 🎨 DESIGN SYSTEM

| Token           | Documentado            | Implementado  | Coincide     |
| --------------- | ---------------------- | ------------- | ------------ |
| **Colores**     | Design System completo | variables.css | ✅ Sí        |
| **Tipografía**  | Inter + Montserrat     | Solo Inter    | ⚠️ Parcial   |
| **Espaciados**  | Base 4px               | Sí            | ✅ Sí        |
| **Breakpoints** | 8 puntos               | 7 puntos      | ⚠️ Similar   |
| **Sombras**     | Sí                     | Sí            | ✅ Sí        |
| **Gradientes**  | Sí                     | Parcial       | ⚠️ Mejorable |

---

## 📈 RESUMEN DE DISCREPANCIAS

### 🔴 CRÍTICAS (Resolver inmediatamente)

1. **Vite NO configurado** (docs dicen que sí)
2. **CUBE CSS NO implementado** (docs dicen que sí)
3. **robots.txt NO existe** (docs dicen que debe existir)
4. **sitemap.xml NO existe** (docs dicen que debe existir)
5. **CustomCursor NO funcional** (código existe)
6. **CI/CD NO configurado** (docs especifican GitHub Actions)

### 🟡 IMPORTANTES (Resolver pronto)

7. **Atomic Design NO implementado** (docs dicen que sí)
8. **Estructura carpetas diferente** (src/ vs raíz)
9. **Schema.org incompleto** (falta 80%)
10. **Tests insuficientes** (5% vs 80%)
11. **Performance sin medir** (objetivo >90)
12. **Contenido placeholder** (casos de éxito, testimonios)

### 🟢 MENORES (Backlog)

13. **Montserrat font** no usada (solo Inter)
14. **Breakpoints** 7 vs 8 (trivial)
15. **PWA** no implementada (futuro)
16. **Blog** no implementado (futuro)

---

## 🎯 PRIORIZACIÓN DE FIXES

### PRIORIDAD 1: Documentación (2 horas)

- Actualizar ARQUITECTURA-TÉCNICA.txt
- Actualizar DESIGN-SYSTEM.txt
- Crear CHANGELOG.md
- **Objetivo:** Sincronizar docs con realidad

### PRIORIDAD 2: Features Dormidas (30 min)

- Activar CustomCursor
- Implementar ripple effect
- **Objetivo:** Activar código existente

### PRIORIDAD 3: SEO Crítico (1 hora)

- Crear robots.txt
- Crear sitemap.xml
- Completar Schema.org
- **Objetivo:** SEO básico completo

### PRIORIDAD 4: Build Process (3 horas)

- Configurar Vite
- Scripts npm
- Minificación
- **Objetivo:** Build moderno funcional

### PRIORIDAD 5: Deployment (2 horas)

- GitHub Actions
- netlify.toml
- Auto-deploy
- **Objetivo:** CI/CD automático

---

## 📝 CONCLUSIÓN

**Discrepancias encontradas:** 47  
**Críticas:** 6  
**Importantes:** 6  
**Menores:** 3

**Causa raíz:** Documentación creada ANTES de implementación, nunca actualizada.

**Solución:**

1. Actualizar docs (corto plazo)
2. Implementar features críticas (medio plazo)
3. Decidir arquitectura final (largo plazo)

---

**Siguiente paso:** Ejecutar SPRINT 0 del `PLAN-DE-ACCIÓN-DETALLADO.md`
