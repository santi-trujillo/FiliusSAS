# Filius Tec - Portfolio Profesional

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](./package.json)

Portfolio moderno y responsivo de **Filius Tec** - Consultora de tecnología integral especializada en desarrollo web, soporte técnico e infraestructura TI para PYMES en Colombia.

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
- 📱 Completamente responsive (mobile-first)
- ⚡ Performance optimizado (60 FPS)
- ♿ Accesible (WCAG 2.1)
- 🔍 SEO optimizado (schema.org, Open Graph, Twitter Card)
- 🎨 Animaciones suaves y efectos visuales
- 💾 Código modular y mantenible
- 🧪 Pruebas unitarias con Vitest

## 🛠️ Tecnologías Utilizadas

### Frontend

- **HTML5** semántico
- **CSS3** con Custom Properties (variables)
- **JavaScript ES6+** (módulos)
- **Intersection Observer API** para animaciones
- **Mobile-first** responsive design

### Herramientas

- [Vitest](https://vitest.dev/) - Framework de testing
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Formateo de código
- [Five-server](https://github.com/yandeu/five-server) - Servidor de desarrollo

## 📋 Requisitos

- Node.js 16+
- npm 7+
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
npm start
```

El proyecto estará disponible en `http://localhost:3000`

### 4. Ejecutar tests

```bash
npm test
```

## 📁 Estructura del Proyecto

```
FiliusSAS/
├── index.html                    # Punto de entrada HTML
├── package.json                  # Dependencias y scripts
├── vitest.config.js              # Configuración de tests
├── .gitignore                    # Archivos ignorados por Git
├── README.md                     # Este archivo
├── site.webmanifest              # Configuración PWA
│
├── assets/                       # Recursos estáticos
│   ├── fonts/                    # Fuentes personalizadas
│   ├── images/                   # Imágenes optimizadas
│   │   ├── favicon/
│   │   ├── hero/
│   │   ├── icons/
│   │   ├── logo/
│   │   └── projects/
│   └── videos/
│
├── css/                          # Hojas de estilo
│   ├── variables.css             # Variables CSS
│   ├── base.css                  # Reset y estilos globales
│   ├── layout.css                # Sistema de grid
│   ├── main.css                  # Estilos generales
│   ├── responsive.css            # Media queries
│   └── components/               # Componentes individuales
│       ├── header.css
│       ├── hero.css
│       ├── buttons.css
│       ├── cursor.css
│       ├── footer.css
│       ├── menu-mobile.css
│       ├── hover-effects.css
│       ├── sections.css
│       ├── tech-stack.css
│       └── scroll-effects.css
│
├── js/                           # JavaScript modular
│   ├── main.js                   # Inicializador principal
│   ├── modules/                  # Módulos funcionales
│   │   ├── navigation.js
│   │   ├── animations.js
│   │   ├── scroll-effects.js
│   │   ├── custom-cursor.js
│   │   ├── mobile-menu.js
│   │   └── scroll-progress.js
│   └── utils/
│       ├── helpers.js
│       └── helpers.test.js
│
└── docs/                         # Documentación
    ├── setup-guide.md
    └── CONTRIBUTING.md
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor revisa [CONTRIBUTING.md](./docs/CONTRIBUTING.md)

## 📜 Licencia

Este proyecto está bajo la licencia ISC.

## 👨‍💻 Autor

**Santiago Trujillo**  
[Filius Tec](https://www.filius.com.co)
