/**
 * App Loader
 * Carga todos los componentes de manera modular
 */

import { Header } from "./Header.js";
import { HeroSection } from "./sections/Hero.js";
import { ExpertiseSection } from "./sections/Expertise.js";
import { ProjectsSection } from "./sections/Projects.js";
import { ContactSection } from "./sections/Contact.js";
import { TestimonialsSection } from "./sections/Testimonials.js";
import { Footer } from "./Footer.js";

/**
 * Renderiza la aplicación completa montando componentes en sus wrappers
 */
export const renderApp = () => {
  const mount = (id, component) => {
    const wrapper = document.getElementById(id);
    if (!wrapper) {
      console.warn(`[App Loader] Wrapper con id '${id}' no encontrado.`);
      return;
    }
    
    // Montaje estricto: Asumimos que component es siempre un Nodo DOM real
    wrapper.appendChild(component);
  };

  mount('header-wrapper', Header());
  mount('hero-wrapper', HeroSection());
  mount('expertise-wrapper', ExpertiseSection());
  mount('projects-wrapper', ProjectsSection());
  mount('testimonials-wrapper', TestimonialsSection());
  mount('contact-wrapper', ContactSection());
  mount('footer-wrapper', Footer());
};

/**
 * Inicializar componentes después del render
 */
export const initComponents = () => {
  // Aquí se pueden inicializar componentes que requieran JS
  console.log("[Components] ✅ Componentes DOM montados exitosamente");
};
