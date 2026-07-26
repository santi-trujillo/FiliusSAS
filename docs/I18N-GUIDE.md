# Sistema i18n - Internacionalización

Sistema de internacionalización ligero sin dependencias externas para cambiar entre Español e Inglés.

## 📁 Estructura

```
src/
├── i18n/
│   ├── es.js          # Traducciones en español
│   ├── en.js          # Traducciones en inglés
│   └── i18n.js        # Sistema central de gestión
├── components/
│   └── LanguageSwitcher.js  # Botón de cambio de idioma
└── scripts/
    └── utils/
        └── content-manager.js  # Actualiza contenido dinámicamente
```

## 🚀 Características

- ✅ **Vanilla JavaScript** - Sin dependencias externas
- ✅ **Detección automática** - Detecta el idioma del navegador
- ✅ **Persistencia** - Guarda preferencia en localStorage
- ✅ **Actualizaci\u00f3n din\u00e1mica** - Cambia contenido sin recargar página
- ✅ **Traducciones naturales** - Textos escritos por humanos, no máquinas
- ✅ **Accesibilidad** - Atributos ARIA y navegación por teclado
- ✅ **Responsive** - Botón flotante en móvil, integrado en desktop

## 📝 Cómo Funciona

### 1. Idiomas Soportados

- **Español (es)** - Idioma por defecto
- **English (en)** - Traducciones nativas

### 2. Detección Automática

Al cargar la página:

1. Verifica si hay idioma guardado en localStorage
2. Si no, detecta el idioma del navegador
3. Si el idioma no está disponible, usa español por defecto

### 3. Cambio de Idioma

El usuario puede cambiar el idioma con el botón en el header:

- **Desktop**: Botón en la esquina superior derecha
- **Mobile**: Botón flotante en la esquina inferior derecha

Al cambiar:

1. Se actualiza el idioma en memoria
2. Se guarda en localStorage
3. Se notifica a todos los componentes
4. Se actualiza todo el contenido de la página

## 🔧 Uso en Código

### Importar el sistema

```javascript
import { i18n, t } from "../i18n/i18n.js";
```

### Obtener traducción

```javascript
// Obtener una traducción
const texto = t("hero.tagline");
// "Transformamos ideas en soluciones digitales"

// Usar en template
const heroHTML = `
    <h1>${t("hero.tagline")}</h1>
    <p>${t("hero.description")}</p>
`;
```

### Cambiar idioma programáticamente

```javascript
// Cambiar a inglés
i18n.setLanguage("en");

// Obtener idioma actual
const currentLang = i18n.getLanguage(); // 'es' o 'en'
```

### Suscribirse a cambios

```javascript
// Ejecutar código cuando cambie el idioma
i18n.subscribe((newLang) => {
  console.log(`Idioma cambiado a: ${newLang}`);
  // Actualizar tu componente aquí
});
```

## 📦 Estructura de Traducciones

Las traducciones están organizadas por secciones:

```javascript
// src/i18n/es.js
export const es = {
  nav: {
    home: "Inicio",
    expertise: "Servicios",
    work: "Proyectos",
    // ...
  },
  hero: {
    greeting: "Hola, somos",
    tagline: "Transformamos ideas en soluciones digitales",
    // ...
  },
  // ...
};
```

## 🎨 Botón de Idioma

### Desktop

```
┌──────────────┐
│ 🇪🇸 ES | 🇺🇸 EN │
└──────────────┘
```

### Mobile (Flotante)

```
       ┌─────┐
       │ 🇪🇸|🇺🇸 │
       └─────┘
```

## 🔄 Content Manager

El `ContentManager` actualiza automáticamente todo el contenido cuando cambia el idioma:

- ✅ Navegación
- ✅ Hero section
- ✅ Servicios
- ✅ Proyectos
- ✅ Experiencia
- ✅ Testimonios
- ✅ Contacto
- ✅ Footer

## 🌐 Agregar Más Idiomas

Para agregar un nuevo idioma (ej: francés):

1. **Crear archivo de traducciones**

   ```javascript
   // src/i18n/fr.js
   export const fr = {
       nav: { home: 'Accueil', ... },
       // ...
   };
   ```

2. **Importar en i18n.js**

   ```javascript
   import { fr } from "./fr.js";

   this.translations = { es, en, fr };
   ```

3. **Agregar botón en LanguageSwitcher**
   ```html
   <button class="lang-btn" data-lang="fr">
     <span class="lang-flag">🇫🇷</span>
     <span class="lang-label">FR</span>
   </button>
   ```

## ⚡ Performance

- **Tamaño**: ~25KB para ambos idiomas (sin comprimir)
- **Carga inicial**: Idioma detectado en <10ms
- **Cambio de idioma**: Instantáneo, sin recarga de página
- **Memoria**: Mínima, solo el idioma actual en uso

## 🎯 SEO

El sistema actualiza el atributo `lang` del HTML:

```html
<html lang="es">
  <!-- o lang="en" -->
</html>
```

Esto ayuda a:

- Motores de búsqueda
- Lectores de pantalla
- Navegadores para traducción automática

## 📱 Responsive

- **Desktop (>768px)**: Botón integrado en el header
- **Mobile (<768px)**: Botón flotante en esquina inferior derecha
- **Tablet**: Versión compacta del botón

## ♿ Accesibilidad

- Atributos ARIA (`aria-current`, `aria-label`)
- Navegación por teclado completa
- Focus visible con outline
- Transiciones suaves

## 🔍 Debug

Para ver logs del sistema i18n:

```javascript
// En la consola del navegador
localStorage.getItem("filius-lang"); // Ver idioma guardado
i18n.getLanguage(); // Ver idioma actual
i18n.getAll(); // Ver todas las traducciones actuales
```

## 📚 Recursos

- Traducciones: `/src/i18n/es.js` y `/src/i18n/en.js`
- Sistema: `/src/i18n/i18n.js`
- Content Manager: `/src/scripts/utils/content-manager.js`
- Botón: `/src/components/LanguageSwitcher.js`
- Estilos: `/src/styles/blocks/language-switcher.css`

---

**Nota**: Todas las traducciones están escritas de forma natural y humana, no son traducciones automáticas.
