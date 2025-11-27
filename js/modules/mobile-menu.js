/**
 * Mobile Menu Module - Versión Mejorada
 * Maneja el menú hamburguesa y navegación móvil
 */

const MobileMenu = (() => {
  let menuToggle = null;
  let mobileMenu = null;
  let menuOverlay = null;
  let mobileNavLinks = null;
  let isOpen = false;

  const init = () => {
    cacheElements();
    setupEventListeners();
  };

  /**
   * Cachea elementos del DOM
   */
  const cacheElements = () => {
    menuToggle = document.querySelector(".menu-toggle");
    mobileMenu = document.querySelector(".mobile-menu");
    menuOverlay = document.querySelector(".menu-overlay");
    mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  };

  /**
   * Configura event listeners
   */
  const setupEventListeners = () => {
    if (menuToggle) {
      menuToggle.addEventListener("click", toggleMenu);
    }

    if (menuOverlay) {
      menuOverlay.addEventListener("click", closeMenu);
    }

    // Cerrar menú al hacer click en un enlace
    if (mobileNavLinks) {
      mobileNavLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
      });
    }

    // Cerrar con tecla ESC
    document.addEventListener("keydown", handleKeyPress);

    // Manejar resize
    window.addEventListener("resize", handleResize);
  };

  /**
   * Alterna el estado del menú
   */
  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  /**
   * Abre el menú
   */
  const openMenu = () => {
    isOpen = true;
    menuToggle?.classList.add("active");
    mobileMenu?.classList.add("active");
    menuOverlay?.classList.add("active");
    document.body.style.overflow = "hidden";

    // Accesibilidad
    menuToggle?.setAttribute("aria-expanded", "true");
  };

  /**
   * Cierra el menú
   */
  const closeMenu = () => {
    isOpen = false;
    menuToggle?.classList.remove("active");
    mobileMenu?.classList.remove("active");
    menuOverlay?.classList.remove("active");
    document.body.style.overflow = "";

    // Accesibilidad
    menuToggle?.setAttribute("aria-expanded", "false");
  };

  /**
   * Maneja teclas (ESC para cerrar)
   */
  const handleKeyPress = (e) => {
    if (e.key === "Escape" && isOpen) {
      closeMenu();
    }
  };

  /**
   * Maneja el resize de la ventana
   */
  const handleResize = () => {
    if (window.innerWidth > 768 && isOpen) {
      closeMenu();
    }
  };

  return {
    init,
    open: openMenu,
    close: closeMenu,
    toggle: toggleMenu,
  };
})();

// Auto-inicializar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", MobileMenu.init);
} else {
  MobileMenu.init();
}
