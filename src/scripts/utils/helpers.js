/**
 * Helper Utilities
 * Funciones auxiliares reutilizables
 */

/**
 * Debounce function - Limita la frecuencia de ejecución
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function - Ejecuta máximo una vez cada X tiempo
 */
export const throttle = (func, limit = 300) => {
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
 * Detecta si un elemento está en el viewport
 */
export const isInViewport = (element) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Formatea fechas
 */
export const formatDate = (date, locale = 'es-ES') => {
  return new Intl.DateTimeFormat(locale).format(new Date(date));
};

/**
 * Genera un ID único
 */
export const generateId = () => {
  return `_${Math.random().toString(36).substr(2, 9)}`;
};
