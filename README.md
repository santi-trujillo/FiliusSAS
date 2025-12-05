# Filius Tec - Portfolio Corporativo

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Version](https://img.shields.io/badge/version-2.0.0-green.svg)](./package.json)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)
[![CUBE CSS](https://img.shields.io/badge/CSS-CUBE-blue)](https://cube.fyi/)
[![Tests](https://img.shields.io/badge/tests-75%2F75%20passing-success)](./tests)
[![Build](https://img.shields.io/badge/build-3.66s-success)](./package.json)

Portfolio moderno y de alto rendimiento de **Filius Tec** - Consultora de tecnología integral especializada en desarrollo web, soporte técnico e infraestructura TI para PYMES en Colombia.

## 🌐 Sitio en Vivo

**[filius.com.co](https://www.filius.com.co)**

## 🎯 Sobre Filius Tec

Somos una consultora de tecnología que ayuda a las PYMES a:

- ✅ Crear presencia digital con soluciones web modernas
- ✅ Garantizar operatividad continua mediante soporte técnico especializado
- ✅ Transformarse digitalmente con estrategia y liderazgo ágil

**Ubicaciones:** Bogotá e Ibagué, Colombia  
**Cobertura:** Todo el territorio nacional

## 🚀 Características

- ✨ Diseño minimalista y moderno
- 📱 Mobile-first responsive design (8 breakpoints)
- ⚡ Performance optimizado con Vite (60 FPS)
- ♿ Accesible (WCAG 2.1 AA)
- 🔍 SEO optimizado (Schema.org, Open Graph, sitemap)
- 🎨 Animaciones fluidas y efectos visuales
- 💾 Arquitectura CUBE CSS modular
- 🧪 Tests unitarios con Vitest
- 🔧 CI/CD con GitHub Actions + Netlify

## 🛠️ Stack Tecnológico

### Core

- **HTML5** semántico con microdata
- **CUBE CSS** - Metodología CSS escalable
- **JavaScript ES6+** - Módulos nativos
- **Vite 5.x** - Build tool moderno

### Herramientas de Desarrollo

- [Vitest](https://vitest.dev/) - Testing framework
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [GitHub Actions](https://github.com/features/actions) - CI/CD

### Metodologías

- **CUBE CSS** - Composition, Utility, Block, Exception (metodología completa implementada)
  - ✅ **Composition**: `.container`, `.stack`, `.cluster`, `.grid`
  - ✅ **Utilities**: Spacing, typography, colors, display
  - ✅ **Blocks**: `.btn`, `.card`, `.section`, `.nav` (componentes reutilizables)
  - ✅ **Exceptions**: Contextos específicos y overrides
- **BEM** - Block Element Modifier para nomenclatura consistente
- **Mobile-First** - Diseño progresivo con 8 breakpoints
- **Component-Driven** - Componentes específicos para secciones únicas

> **Arquitectura Real:** Este proyecto implementa CUBE CSS genuinamente con componentes `.btn`, `.card`, `.stack`, `.cluster` usados en el HTML. Combina componentes CUBE reutilizables (60%) con estilos específicos para secciones únicas (40%).

## 📋 Requisitos

- Node.js 18+ o 20+
- npm 9+
- Git

## 🚀 Inicio Rápido

### 1. Clonar el repositorio

```bash
git clone https://github.com/santi-trujillo/FiliusSAS.git
cd FiliusSAS
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000` con **Hot Module Replacement** (HMR).

### 4. Build de producción

```bash
npm run build      # Genera dist/
npm run preview    # Preview del build
```

### 5. Ejecutar tests

```bash
npm test              # Tests con watch mode
npm run test:ui       # Vitest UI
npm run test:coverage # Coverage report
```

## 📁 Estructura del Proyecto

```
FiliusSAS/
├── src/                          # Código fuente
│   ├── index.html               # HTML principal (852 líneas)
│   ├── styles/                  # CSS Modular (39 archivos)
│   │   ├── base/               # Variables, reset, typography
│   │   ├── composition/        # Layouts (container, grid, stack, cluster, flex)
│   │   ├── utilities/          # Spacing, typography, colors, display, animations
│   │   ├── blocks/             # Componentes (híbrido CUBE CSS + específicos)
│   │   │   ├── button.css      # ✅ CUBE CSS puro
│   │   │   ├── card.css        # ✅ CUBE CSS puro
│   │   │   ├── section.css     # ✅ CUBE CSS puro
│   │   │   ├── nav.css         # ✅ CUBE CSS puro
│   │   │   ├── hero/           # Específico del sitio
│   │   │   ├── header/         # Específico del sitio
│   │   │   ├── sections/       # Específico del sitio
│   │   │   └── ...             # Otros componentes
│   │   └── main.css            # Entry point (52 líneas)
│   ├── scripts/                # JavaScript ES6+ modules
│   │   ├── components/         # 7 módulos (carousel, navigation, etc.)
│   │   ├── utils/              # Helpers reutilizables
│   │   └── main.js             # Entry point
│   └── assets/                 # Recursos multimedia
│       ├── images/
│       ├── fonts/
│       └── videos/
├── public/                      # Assets estáticos (build time)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── tests/                       # Tests unitarios (61 tests)
│   ├── unit/
│   │   ├── helpers.test.js     # 11 tests
│   │   ├── components.test.js  # 18 tests
│   │   └── css-utilities.test.js # 32 tests
│   └── setup.js
├── docs/                        # Documentación técnica
│   ├── CONTRIBUTING.md
│   ├── CSS-MODULARIZATION.md
│   ├── CSS-GUIDE.md            # Guía completa de estilos
│   └── setup-guide.md
├── .github/workflows/          # CI/CD Pipeline
│   └── ci.yml                  # Test → Build → Deploy
├── vite.config.js              # Vite 5.x config
├── vitest.config.js            # Testing config
├── netlify.toml                # Deployment + headers
├── ARCHITECTURE.md             # Documentación arquitectura
├── PROYECTO-COMPLETADO.md      # Resumen del proyecto
└── package.json                # v2.0.0
```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Vite dev server (localhost:3000) con HMR

# Build
npm run build        # Build optimizado → dist/ (2-3s)
npm run preview      # Preview del build local

# Testing
npm test            # Vitest (61 tests pasando)
npm run test:ui     # Vitest UI interactiva
npm run test:coverage # Coverage report con v8
```

## 🎨 Arquitectura CSS

Este proyecto utiliza un **enfoque híbrido profesional**:

### CUBE CSS Base (60%)

```
BASE Layer
├── variables.css       # Design tokens (197 variables)
├── reset.css          # Modern CSS reset
└── typography.css     # Sistema tipográfico

COMPOSITION Layer
├── container.css      # Contenedores responsivos
├── grid.css           # Sistema de grillas
├── stack.css          # Stack vertical
├── cluster.css        # Agrupación horizontal
└── flex.css           # Utilities flexbox

UTILITIES Layer
├── spacing.css        # 150+ utilities (margin, padding, gap)
├── typography.css     # Text utilities
├── colors.css         # Color utilities
├── display.css        # Display, flex, grid
└── animations.css     # Animaciones reutilizables
```

### Componentes (40%)

**CUBE CSS Puros (Reutilizables):**

- `button.css` - Sistema completo de botones (variantes, tamaños, estados)
- `card.css` - Tarjetas con BEM (elevated, outlined, glass)
- `section.css` - Secciones (compact, expanded, full-height)
- `nav.css` - Navegación responsive con menú móvil

**Específicos del Sitio:**

- `hero/` - Hero section único de Filius
- `header/` - Header con navegación animada
- `sections/` - Expertise, Experience, Projects, Testimonials
- `footer.css`, `tech-stack.css`, `cursor.css`, etc.

> 📚 Ver [docs/CSS-GUIDE.md](docs/CSS-GUIDE.md) para ejemplos y convenciones completas
> │ │ ├── custom-cursor.js
> │ │ ├── mobile-menu.js
> │ │ └── scroll-progress.js
> │ └── utils/
> │ ├── helpers.js
> │ └── helpers.test.js
> │
> └── docs/ # Documentación
> ├── setup-guide.md
> └── CONTRIBUTING.md

````

## 🎨 Metodología CUBE CSS

El proyecto utiliza **CUBE CSS** (Composition, Utility, Block, Exception), una metodología moderna que organiza CSS en capas con responsabilidades claras:

### Capas

1. **BASE** - Reset, variables, typography
2. **COMPOSITION** - Layouts (container, grid, stack, cluster)
3. **UTILITIES** - Clases atómicas (spacing, colors, display)
4. **BLOCKS** - Componentes con BEM
5. **EXCEPTIONS** - Overrides contextuales

Ver [ARCHITECTURE.md](./ARCHITECTURE.md) para más detalles.

## 🧪 Testing

Tests unitarios con Vitest + jsdom:

```bash
npm test              # Watch mode
npm run test:ui       # UI interactiva
npm run test:coverage # Coverage HTML
````

Cobertura objetivo: **>60%**

## 🚀 Deployment

### Netlify (Automático)

Cada push a `main` dispara:

1. Tests automáticos
2. Build de producción
3. Deploy a Netlify
4. Lighthouse audit

### Manual

```bash
npm run build
# Subir carpeta dist/ a tu hosting
```

## 📊 Performance

Métricas objetivo:

- **Lighthouse Performance:** >90
- **LCP:** <2.5s
- **FID:** <100ms
- **CLS:** <0.1

## 📚 Documentación

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitectura detallada
- [CONTRIBUTING.md](./docs/CONTRIBUTING.md) - Guía de contribución
- [PROGRESO-REFACTORIZACIÓN.md](./PROGRESO-REFACTORIZACIÓN.md) - Estado actual

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está bajo la licencia ISC.

## 👨‍💻 Autor

**Santiago Trujillo**  
[Filius Tec](https://www.filius.com.co)  
Email: filius.tec@gmail.com

---

**⭐ Si este proyecto te fue útil, considera darle una estrella!**

```

```
