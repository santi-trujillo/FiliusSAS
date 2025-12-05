/**
 * Main JavaScript File
 * Punto de entrada principal para la aplicación
 * @module main
 * @version 2.0.0
 */

import Navigation from "./components/navigation.js";
import MobileMenu from "./components/mobile-menu.js";
import ScrollProgress from "./components/scroll-progress.js";
import Animations from "./components/animations.js";
import ScrollEffects from "./components/scroll-effects.js";
import CustomCursor from "./components/custom-cursor.js";

/**
 * Registro del Service Worker para PWA
 */
const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("[PWA] Service Worker registrado:", registration.scope);
        })
        .catch((error) => {
          console.error("[PWA] Error al registrar Service Worker:", error);
        });
    });
  }
};

// Configuración global
const App = {
  version: "1.0.0",
  debug: false,

  init() {
    this.log("Inicializando aplicación...");
    this.setupGlobalListeners();
    this.handlePageLoad();
    this.initializeModules();
  },

  setupGlobalListeners() {
    // Manejar errores globales
    window.addEventListener("error", (e) => {
      this.log("Error:", e.message);
    });

    // Performance monitoring
    window.addEventListener("load", () => {
      this.log("Página cargada completamente");
      this.measurePerformance();
    });
  },

  handlePageLoad() {
    // Remover clase de carga si existe
    document.body.classList.remove("loading");

    // Añadir clase de página cargada
    document.body.classList.add("loaded");

    // Disparar evento personalizado
    document.dispatchEvent(new Event("app:ready"));
  },

  measurePerformance() {
    if (!this.debug) return;

    if ("performance" in window) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      this.log(`Tiempo de carga: ${pageLoadTime}ms`);
    }
  },

  /**
   * Inicializa todos los módulos de la aplicación
   */
  initializeModules() {
    Navigation.init();
    MobileMenu.init();
    ScrollProgress.init();
    Animations.init();
    ScrollEffects.init();
    CustomCursor.init();
    registerServiceWorker(); // PWA
  },

  log(...args) {
    if (this.debug) {
      console.log("[App]", ...args);
    }
  },
};

// Inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => App.init());
} else {
  App.init();
}

// Exponer App globalmente si es necesario
window.App = App;
