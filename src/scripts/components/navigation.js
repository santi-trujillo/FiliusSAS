/**
 * Navigation Module
 * Maneja la funcionalidad del menú de navegación, scroll suave y enlaces activos
 * @module components/navigation
 * @requires utils/helpers
 * @exports Navigation
 */

/**
 * Throttle function para optimizar eventos de scroll
 * @param {Function} func - Función a ejecutar
 * @param {number} limit - Tiempo límite en ms
 * @returns {Function} Función throttled
 */
const throttle = (func, limit = 100) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Configura el scroll suave para los enlaces de navegación
 * @private
 */
const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
};

/**
 * Actualiza el enlace activo según la sección visible
 */
const setupActiveLinks = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const updateActiveLink = () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  // Usar throttle para optimizar el evento de scroll
  const throttledUpdate = throttle(updateActiveLink, 100);
  window.addEventListener('scroll', throttledUpdate);
};

/**
 * Inicializa el módulo de navegación
 */
const init = () => {
  setupSmoothScroll();
  setupActiveLinks();
};

export default { init };
