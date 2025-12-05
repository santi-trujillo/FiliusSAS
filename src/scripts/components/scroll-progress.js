/**
 * Scroll Progress Module
 * Barra de progreso en el header
 */

let progressBar = null;

/**
 * Actualiza el ancho de la barra de progreso
 */
const updateProgress = () => {
  const windowHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;

  if (progressBar) {
    progressBar.style.width = `${scrolled}%`;
  }
};

/**
 * Inicializa el módulo de scroll progress
 */
const init = () => {
  progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', updateProgress);
  }
};

export default { init };
