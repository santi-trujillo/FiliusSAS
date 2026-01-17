/**
 * i18n System - Internationalization
 * Sistema de internacionalización ligero sin dependencias
 */

import { es } from './es.js';
import { en } from './en.js';

class I18n {
  constructor() {
    this.translations = { es, en };
    this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage();
    this.subscribers = [];
  }

  /**
   * Detecta el idioma del navegador
   */
  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const lang = browserLang.split('-')[0]; // 'es-CO' -> 'es'
    return this.translations[lang] ? lang : 'es'; // Default: español
  }

  /**
   * Obtiene el idioma almacenado en localStorage
   */
  getStoredLanguage() {
    return localStorage.getItem('filius-lang');
  }

  /**
   * Cambia el idioma actual
   */
  setLanguage(lang) {
    if (!this.translations[lang]) {
      if (import.meta.env.DEV) {
        console.warn(`Language '${lang}' not found. Available: es, en`);
      }
      return;
    }

    this.currentLang = lang;
    localStorage.setItem('filius-lang', lang);
    // Actualizar atributo lang del HTML (accesibilidad)
    document.documentElement.setAttribute('lang', lang);

    // Notifica a todos los suscriptores
    this.notify();
  }

  /**
   * Obtiene el idioma actual
   */
  getLanguage() {
    return this.currentLang;
  }

  /**
   * Obtiene una traducción usando notación de punto
   * Ejemplo: t('hero.tagline') -> 'Transformamos ideas...'
   */
  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // Fallback a inglés si no existe en idioma actual
        let fallbackValue = this.translations.en;
        for (const fk of keys) {
          if (fallbackValue && typeof fallbackValue === 'object') {
            fallbackValue = fallbackValue[fk];
          } else {
            break;
          }
        }

        if (import.meta.env.DEV && !fallbackValue) {
          console.warn(`Translation key not found: ${key}`);
        }

        return fallbackValue || key;
      }
    }

    return value || key;
  }

  /**
   * Suscribe un callback para cambios de idioma
   */
  subscribe(callback) {
    this.subscribers.push(callback);

    // Retorna función para desuscribirse
    return () => {
      this.subscribers = this.subscribers.filter((cb) => cb !== callback);
    };
  }

  /**
   * Notifica a todos los suscriptores
   */
  notify() {
    this.subscribers.forEach((callback) => callback(this.currentLang));
  }

  /**
   * Obtiene todas las traducciones del idioma actual
   */
  getAll() {
    return this.translations[this.currentLang];
  }
}

// Singleton instance
export const i18n = new I18n();

// Helper function para usar en componentes
export const t = (key) => i18n.t(key);
