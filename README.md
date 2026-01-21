# Filius Tec

Portfolio corporativo de Filius Tec - Desarrollo web, soporte técnico e infraestructura TI para PYMES en Colombia.

Sitio: [filiustec.me](https://www.filiustec.me)

## Sobre el proyecto

Sitio web para Filius Tec, consultora de tecnología que ofrece:

- Desarrollo web y e-commerce
- Soporte técnico empresarial
- Infraestructura y redes

Cobertura en Bogotá, Ibagué y toda Colombia.

## Características técnicas

- Diseño responsive mobile-first
- Build con Vite 5.x
- CSS modular con metodología CUBE
- JavaScript vanilla (ES6 modules)
- Tests con Vitest
- Deploy automático en Netlify

## Stack

- HTML5 semántico
- CSS modular (metodología CUBE)
- JavaScript ES6+ modules
- Vite para build
- Vitest para tests
- ESLint + Prettier

## Estructura CSS

Usamos CUBE CSS (Composition, Utility, Block, Exception):

- Composition: layouts reutilizables (container, stack, grid)
- Utilities: clases atómicas para spacing y tipografía
- Blocks: componentes como botones y cards
- Exceptions: overrides contextuales

El HTML se renderiza con componentes JS modulares.

## Instalación

Requisitos: Node.js 18+ y npm

```bash
git clone https://github.com/santi-trujillo/FiliusSAS.git
cd FiliusSAS
npm install
npm run dev  # http://localhost:3000
```

## Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # preview del build

## Estructura

Ver [ARCHITECTURE.md](ARCHITECTURE.md) para más detalles.

## Licencia

ISC
