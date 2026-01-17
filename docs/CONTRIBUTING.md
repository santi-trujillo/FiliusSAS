# 📖 Guía de Contribución - Filius Tec Portfolio

¡Gracias por interesarte en contribuir al proyecto de Filius Tec!

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 16+ y npm 7+
- Git
- Un editor de código (VS Code recomendado)

### Instalación del Proyecto

```bash
# Clonar el repositorio
git clone https://github.com/santi-trujillo/FiliusSAS.git
cd FiliusSAS

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

El proyecto estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
FiliusSAS/
├── index.html           # Archivo HTML principal
├── package.json         # Configuración del proyecto
├── vitest.config.js     # Configuración de tests
├── .gitignore           # Archivos a ignorar en git
│
├── assets/              # Recursos estáticos
│   ├── fonts/           # Fuentes personalizadas
│   ├── images/          # Imágenes del proyecto
│   └── videos/          # Videos (si aplica)
│
├── css/                 # Hojas de estilo
│   ├── variables.css    # Variables y tokens de diseño
│   ├── base.css         # Reset y estilos globales
│   ├── layout.css       # Sistema de grid y layout
│   ├── main.css         # Estilos adicionales
│   ├── responsive.css   # Media queries
│   └── components/      # Estilos por componente
│       ├── header.css
│       ├── hero.css
│       ├── buttons.css
│       ├── footer.css
│       └── ...otros componentes
│
└── js/                  # JavaScript
    ├── main.js          # Punto de entrada
    ├── modules/         # Módulos funcionales
    │   ├── navigation.js
    │   ├── animations.js
    │   ├── scroll-effects.js
    │   ├── mobile-menu.js
    │   └── scroll-progress.js
    └── utils/           # Utilidades
        ├── helpers.js
        └── helpers.test.js
```

## 🧪 Testing

Ejecutar tests unitarios:

```bash
npm test
```

Ejecutar tests en modo watch:

```bash
npm test -- --watch
```

Los tests deben cubrir:

- Funciones utilitarias en `js/utils/helpers.js`
- Lógica principal de módulos

## 🎨 Estándares de Código

### CSS

- Usar variables CSS definidas en `css/variables.css`
- Mantener componentes en archivos separados
- Usar nomenclatura BEM para clases
- Preferir CSS Grid y Flexbox sobre float

### JavaScript

- Usar el patrón Module Pattern o IIFE
- Funciones descriptivas y comentadas
- Evitar variables globales
- Usar `const` por defecto, `let` si es necesario
- Throttle/Debounce en eventos frecuentes (mousemove, scroll, resize)

### HTML

- Usar semántica HTML5 correcta
- Atributos ARIA para accesibilidad
- Alt text en todas las imágenes
- Estructura lógica de headings (h1, h2, h3...)

## 🐛 Reportar Bugs

Si encuentras un bug, por favor crea un issue con:

1. Descripción clara del problema
2. Pasos para reproducirlo
3. Comportamiento esperado vs actual
4. Screenshots si es relevante
5. Tu navegador y sistema operativo

## ✨ Solicitar Características

Para sugerir nuevas características:

1. Describe el caso de uso
2. Explica por qué sería útil
3. Proporciona ejemplos si es posible

## 📝 Commits

Usar mensajes de commit descriptivos:

```bash
# Ejemplos buenos
git commit -m "Feat: Agregar throttle a mouse events para mejor performance"
git commit -m "Fix: Corregir email link en contacto"
git commit -m "Docs: Actualizar guía de contribución"
git commit -m "Refactor: Limpiar código duplicado en helpers.js"
git commit -m "Test: Agregar tests para función debounce"

# Formatos recomendados
feat:    Nueva característica
fix:     Corrección de bug
docs:    Cambios en documentación
style:   Cambios de formato (no afecta funcionalidad)
refactor: Reorganización de código
test:    Agregar o actualizar tests
perf:    Mejora de performance
```

## 🔧 Herramientas de Desarrollo

- **Vitest**: Testing framework
- **ESLint**: Linting de JavaScript
- **Prettier**: Formateo de código
- **Five-server**: Servidor de desarrollo local

## 📚 Recursos Útiles

- [HTML5 Semántico](https://developer.mozilla.org/es/docs/Glossary/Semantics)
- [CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)
- [Intersection Observer API](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API)
- [Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

## ✅ Checklist antes de Pull Request

- [ ] Código sigue los estándares del proyecto
- [ ] Tests unitarios pasan (`npm test`)
- [ ] Sin errores en la consola
- [ ] Responsive en mobile (max-width: 768px)
- [ ] Commit messages descriptivos
- [ ] Documentación actualizada si es necesario

## 🙏 ¿Preguntas?

Si tienes dudas sobre cómo contribuir, abre un issue o contacta al equipo de Filius Tec.

---

**¡Gracias por ayudar a mejorar Filius Tec!** 🎉
