/**
 * Main JavaScript File
 * Punto de entrada principal para la aplicación
 */

(function () {
  "use strict";

  // Configuración global
  const App = {
    version: "1.0.0",
    debug: false,

    init() {
      this.log("Inicializando aplicación...");
      this.setupGlobalListeners();
      this.handlePageLoad();
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
})();
