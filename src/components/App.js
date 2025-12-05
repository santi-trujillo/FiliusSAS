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
  `;

  // Inyectar en el body
  document.body.innerHTML = appHTML;
};

/**
 * Inicializar componentes después del render
 */
export const initComponents = () => {
  // Aquí se pueden inicializar componentes que requieran JS
  // Por ahora solo marcamos que se cargaron
  console.log("[Components] ✅ Componentes HTML cargados");
};
