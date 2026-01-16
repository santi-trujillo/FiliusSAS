import { renderApp, initComponents } from "../components/App.js";
import Navigation from "./components/navigation.js";
import MobileMenu from "./components/mobile-menu.js";
import ScrollProgress from "./components/scroll-progress.js";
import Animations from "./components/animations.js";
import ScrollEffects from "./components/scroll-effects.js";
import Carousel from "./components/carousel.js";

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
  version: "2.0.0",
  debug: false,

  init() {
    this.log("Inicializando aplicación modular...");
    renderApp();
    initComponents();

    this.setupGlobalListeners();
    this.handlePageLoad();
    this.initializeModules();
  },

  setupGlobalListeners() {
    window.addEventListener("error", (e) => {
      this.log("Error:", e.message);
    });

    window.addEventListener("load", () => {
      this.log("Página cargada completamente");
      this.measurePerformance();
    });
  },

  handlePageLoad() {
    document.body.classList.remove("loading");

    document.body.classList.add("loaded");

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

  initializeModules() {
    Navigation.init();
    MobileMenu.init();
    ScrollProgress.init();
    Animations.init();
    ScrollEffects.init();
    Carousel.init();
    registerServiceWorker();
  },

  log(...args) {
    if (this.debug) {
      console.log("[App]", ...args);
    }
  },
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => App.init());
} else {
  App.init();
}

window.App = App;
