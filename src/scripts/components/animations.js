/**
 * Animations Module
 * Maneja las animaciones y efectos visuales
 */

/**
 * Configura el Intersection Observer para animaciones de entrada
 */
const setupIntersectionObserver = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Dejar de observar después de animar (optimización)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todas las secciones
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });
};

/**
 * Inicializa el módulo de animaciones
 */
const init = () => {
  setupIntersectionObserver();
};

export default { init };
