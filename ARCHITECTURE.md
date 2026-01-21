# Arquitectura del Proyecto

Portfolio web construido con Vite, CSS modular y JavaScript vanilla.

## Stack

- Vite 5.x para build
- CSS usando metodología CUBE (Composition, Utility, Block, Exception)
- JavaScript ES6 modules
- Tests con Vitest
- Deploy en Netlify

## Principios de diseño

- Mobile-first responsive
- Progressive enhancement
- Accesibilidad WCAG 2.1 AA
- SEO optimizado

---

---

## Estructura del proyecto

```
src/
├── index.html
├── styles/
│   ├── base/          # reset, variables, typography
│   ├── composition/   # container, grid, stack, cluster
│   ├── utilities/     # spacing, colors, display
│   ├── blocks/        # buttons, cards, components
│   └── main.css
├── scripts/
│   ├── components/    # navigation, carousel, animations
│   ├── utils/         # helpers
│   └── main.js
├── components/        # HTML templates (template literals)
│   ├── App.js
│   ├── Header.js
│   ├── Footer.js
│   └── sections/
└── i18n/             # internationalization
    ├── es.js
    ├── en.js
    └── i18n.js

public/               # static assets
tests/               # unit tests
```

## CSS - CUBE methodology

Organización en capas:

**Base**: Variables CSS, reset, tipografía base
**Composition**: Layouts reutilizables sin estilos visuales
**Utilities**: Clases atómicas (spacing, colors, display)
**Blocks**: Componentes específicos (.btn, .card, .nav)
**Exceptions**: Overrides contextuales

Ejemplo de uso:

```html
<button class="btn btn--primary btn--lg">Click me</button>
<div class="card card--hover">...</div>
```

## JavaScript

Arquitectura modular con ES6 imports:

- Componentes HTML se renderizan dinámicamente (template literals)
- Sistema i18n custom para ES/EN
- Módulos independientes: navigation, carousel, scroll effects
- Event delegation para mejor performance

## Build

Vite maneja:

- Hot module replacement en dev
- Code splitting automático
- Minificación con Terser
- CSS optimization

```bash
npm run dev      # desarrollo
npm run build    # producción
npm test         # tests
```

## Tests

Vitest + jsdom para tests unitarios.
Cobertura actual: helpers, componentes básicos, CSS utilities.

## Deployment

Netlify con:

- Build command: `npm run build`
- Auto-deploy desde main branch
- Headers de seguridad configurados
- Redirects para SPA

@import "./composition/container.css";
@import "./composition/grid.css";

@import "./utilities/spacing.css";
@import "./utilities/colors.css";

@import "./blocks/button.css";
@import "./blocks/card.css";
