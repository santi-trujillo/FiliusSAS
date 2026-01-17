/**
 * App Loader
 * Carga todos los componentes de manera modular
 */

import { Header } from "./Header.js";
import { HeroSection } from "./sections/Hero.js";
import { ExpertiseSection } from "./sections/Expertise.js";
import { ProjectsSection } from "./sections/Projects.js";
import { ExperienceSection } from "./sections/Experience.js";
import { ContactSection } from "./sections/Contact.js";
import { TestimonialsSection } from "./sections/Testimonials.js";
import { Footer } from "./Footer.js";
import { LanguageSwitcherTemplate } from "./LanguageSwitcher.js";
/**
 * Renderiza la aplicación completa
 */
export const renderApp = () => {
  // Generar HTML completo de la aplicación
  const appHTML = `
    ${Header()}
    <main class="main-content">
      ${HeroSection()}
      ${ExpertiseSection()}
      ${ProjectsSection()}
      ${ExperienceSection()}
      ${ContactSection()}
      ${TestimonialsSection()}
    </main>
    ${Footer()}
    
    <!-- Language Switcher Flotante (móvil) -->
    <div class="language-switcher-mobile">
      ${LanguageSwitcherTemplate()}
    </div>
  `;

  // Inyectar el HTML en el contenedor sin afectar scripts
  const appContainer = document.getElementById("app");
  if (appContainer) {
    appContainer.innerHTML = appHTML;
  } else {
    if (import.meta.env.DEV) {
      console.error("[App] Contenedor #app no encontrado");
    }
  }
};

/**
 * Inicializar componentes después del render
 */
export const initComponents = () => {
  // Aquí se pueden inicializar componentes que requieran JS
  // Por ahora solo marcamos que se cargaron
  if (import.meta.env.DEV) {
    console.log("[Components] ✅ Componentes HTML cargados");
  }
};
