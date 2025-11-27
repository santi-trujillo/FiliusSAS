/**
 * Scroll Progress Module
 * Barra de progreso en el header
 */

const ScrollProgress = (() => {
  let progressBar = null;

  const init = () => {
    progressBar = document.querySelector(".scroll-progress");
    if (progressBar) {
      window.addEventListener("scroll", updateProgress);
    }
  };

  /**
   * Actualiza el ancho de la barra de progreso
   */
  const updateProgress = () => {
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }
  };

  return {
    init,
  };
})();

// Auto-inicializar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ScrollProgress.init);
} else {
  ScrollProgress.init();
}
