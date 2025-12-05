# Filius Tec - Portfolio Corporativo

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Version](https://img.shields.io/badge/version-2.0.0-green.svg)](./package.json)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)
[![CUBE CSS](https://img.shields.io/badge/CSS-CUBE-blue)](https://cube.fyi/)
[![Tests](https://img.shields.io/badge/tests-11%2F11%20passing-success)](./tests)
[![Build](https://img.shields.io/badge/build-2.51s-success)](./package.json)

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

- **CUBE CSS** - Composition, Utility, Block, Exception
- **BEM** - Block Element Modifier (componentes)
- **Mobile-First** - Diseño progresivo
- **Atomic Design** - Jerarquía de componentes

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

````
FiliusSAS/
├── src/                          # Código fuente
│   ├── index.html               # HTML principal
│   ├── styles/                  # CSS (CUBE CSS)
│   │   ├── base/               # Reset, variables, typography
│   │   ├── composition/        # Layouts (container, grid, stack)
│   │   ├── utilities/          # Clases utilitarias
│   │   ├── blocks/             # Componentes BEM
│   │   └── main.css            # Entry point
│   ├── scripts/                # JavaScript modules
│   │   ├── components/         # Componentes
│   │   ├── utils/              # Utilidades
│   │   └── main.js             # Entry point
│   └── assets/                 # Recursos
│       ├── images/
│       ├── fonts/
│       └── icons/
├── public/                      # Archivos estáticos
│   ├── robots.txt
│   └── sitemap.xml
├── tests/                       # Tests
│   ├── unit/
│   └── setup.js
├── .github/workflows/          # CI/CD
├── vite.config.js              # Configuración Vite
├── vitest.config.js            # Configuración tests
├── netlify.toml                # Deploy config
└── package.json                # Dependencias

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Vite dev server (localhost:3000)

# Build
npm run build        # Build de producción → dist/
npm run preview      # Preview del build local

# Testing
npm test            # Tests en watch mode
npm run test:ui     # Vitest UI interactiva
npm run test:coverage # Coverage report

# Code Quality
npm run lint        # ESLint check
npm run format      # Prettier format
````

## 🎨 Metodología CUBE CSS

│ └── components/ # Componentes individuales
│ ├── header.css
│ ├── hero.css
│ ├── buttons.css
│ ├── cursor.css
│ ├── footer.css
│ ├── menu-mobile.css
│ ├── hover-effects.css
│ ├── sections.css
│ ├── tech-stack.css
│ └── scroll-effects.css
│
├── js/ # JavaScript modular
│ ├── main.js # Inicializador principal
│ ├── modules/ # Módulos funcionales
│ │ ├── navigation.js
│ │ ├── animations.js
│ │ ├── scroll-effects.js
│ │ ├── custom-cursor.js
│ │ ├── mobile-menu.js
│ │ └── scroll-progress.js
│ └── utils/
│ ├── helpers.js
│ └── helpers.test.js
│
└── docs/ # Documentación
├── setup-guide.md
└── CONTRIBUTING.md

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
