/**
 * Language Switcher Component
 * Botón de cambio de idioma
 */

import { i18n } from '../i18n/i18n.js';

export class LanguageSwitcher {
  constructor() {
    this.element = null;
    this.render();
    this.attachEventListeners();

    // Suscribirse a cambios de idioma
    i18n.subscribe(() => this.updateUI());
  }

  render() {
    const currentLang = i18n.getLanguage();
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    const flag = currentLang === 'es' ? '&#x1F1E8;&#x1F1F4;' : '🇺🇸';
    const label = currentLang === 'es' ? 'ES' : 'EN';

    const html = `
            <div class="language-switcher" aria-label="Language selector">
                <button class="lang-btn active" data-lang="${nextLang}" aria-label="Switch to ${nextLang.toUpperCase()}">
                    <span class="lang-flag">${flag}</span>
                    <span class="lang-label">${label}</span>
                </button>
            </div>
        `;

    return html;
  }

  attachEventListeners() {
    // Se ejecuta después de que el DOM esté listo
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.lang-btn');

      buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = btn.dataset.lang;
          i18n.setLanguage(lang);
        });
      });
    });
  }

  updateUI() {
    const currentLang = i18n.getLanguage();
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    const flag = currentLang === 'es' ? '&#x1F1E8;&#x1F1F4;' : '🇺🇸';
    const label = currentLang === 'es' ? 'ES' : 'EN';
    const buttons = document.querySelectorAll('.lang-btn');

    buttons.forEach((btn) => {
      btn.dataset.lang = nextLang;
      btn.setAttribute('aria-label', `Switch to ${nextLang.toUpperCase()}`);
      const flagElement = btn.querySelector('.lang-flag');
      const labelElement = btn.querySelector('.lang-label');

      // Usar textContent para prevenir XSS
      if (flagElement) {
        // Decodificar HTML entities manualmente para banderas
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = flag;
        flagElement.textContent = tempDiv.textContent;
      }
      if (labelElement) {
        labelElement.textContent = label;
      }
    });
  }
}

// Export template function para usar en Header
export const LanguageSwitcherTemplate = () => {
  const currentLang = i18n.getLanguage();
  const nextLang = currentLang === 'es' ? 'en' : 'es';
  const flag = currentLang === 'es' ? '&#x1F1E8;&#x1F1F4;' : '🇺🇸';
  const label = currentLang === 'es' ? 'ES' : 'EN';

  return `
        <div class="language-switcher" aria-label="Language selector">
            <button class="lang-btn active" data-lang="${nextLang}" aria-label="Switch to ${nextLang.toUpperCase()}">
                <span class="lang-flag">${flag}</span>
                <span class="lang-label">${label}</span>
            </button>
        </div>
    `;
};
