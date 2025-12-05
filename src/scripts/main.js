/**
 * Main JavaScript File
 * Punto de entrada principal para la aplicación
 */

import Navigation from './components/navigation.js';
import MobileMenu from './components/mobile-menu.js';
import ScrollProgress from './components/scroll-progress.js';
import Animations from './components/animations.js';
import ScrollEffects from './components/scroll-effects.js';
import CustomCursor from './components/custom-cursor.js';
import TechCarousel from './components/carousel.js';

// Configuración global
const App = {
  version: '1.0.0',
  debug: false,

  init() {
    this.log('Inicializando aplicación...');
    this.setupGlobalListeners();
    this.handlePageLoad();
    this.initializeModules();
  },

  setupGlobalListeners() {
    // Manejar errores globales
    window.addEventListener('error', (e) => {
      this.log('Error:', e.message);
    });

    // Performance monitoring
    window.addEventListener('load', () => {
      this.log('Página cargada completamente');
      this.measurePerformance();
    });
  },

  handlePageLoad() {
    // Remover clase de carga si existe
    document.body.classList.remove('loading');

    // Añadir clase de página cargada
    document.body.classList.add('loaded');

    // Disparar evento personalizado
    document.dispatchEvent(new Event('app:ready'));
  },

  measurePerformance() {
    if (!this.debug) return;

    if ('performance' in window) {
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
  },

  log(...args) {
    if (this.debug) {
      console.log('[App]', ...args);
    }
  },
};

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

// Exponer App globalmente si es necesario
window.App = App;
