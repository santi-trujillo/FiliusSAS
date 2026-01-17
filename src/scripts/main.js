/**
 * Main JavaScript File
 * Punto de entrada principal para la aplicación
 * @module main
 * @version 2.0.0
 */

import "../styles/main.css";
import { renderApp, initComponents } from "../components/App.js";
import Navigation from "./components/navigation.js";
import MobileMenu from "./components/mobile-menu.js";
import ScrollProgress from "./components/scroll-progress.js";
import Animations from "./components/animations.js";
import ScrollEffects from "./components/scroll-effects.js";
import Carousel from "./components/carousel.js";
import { i18n } from "../i18n/i18n.js";
import { ContentManager } from "./utils/content-manager.js";
import { LanguageSwitcher } from "../components/LanguageSwitcher.js";

/**
 * Registro del Service Worker para PWA
 */
const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          if (import.meta.env.DEV) {
            console.log("[PWA] Service Worker registrado:", registration.scope);
          }
        })
        .catch((error) => {
          if (import.meta.env.DEV) {
            console.error("[PWA] Error al registrar Service Worker:", error);
          }
        });
    });
  }
};

// Configuración global
const App = {
  version: "2.0.0",
  debug: false,

  init() {
    this.log("Inicializando aplicación modular...");
    // 1. Renderizar componentes HTML PRIMERO
    renderApp();
    initComponents();

    // 2. Luego inicializar módulos JS
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
    // Inicializar sistema i18n PRIMERO
    new ContentManager();
    new LanguageSwitcher();

    // Inicializar eventos de cambio de idioma
    this.initLanguageSwitcher();

    // Módulos existentes
    Navigation.init();
    MobileMenu.init();
    ScrollProgress.init();
    Animations.init();
    ScrollEffects.init();
    Carousel.init();
    registerServiceWorker(); // PWA
  },

  /**
   * Inicializa los event listeners del language switcher
   */
  initLanguageSwitcher() {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".lang-btn")) {
        const btn = e.target.closest(".lang-btn");
        const lang = btn.dataset.lang;
        if (lang) {
          i18n.setLanguage(lang);
        }
      }
    });
  },

  log(...args) {
    if (this.debug || import.meta.env.DEV) {
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
