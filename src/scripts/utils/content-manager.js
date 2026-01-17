/**
 * Content Manager - Gestor de contenido dinámico i18n
 * Actualiza el contenido de la página cuando cambia el idioma
 */

import { i18n, t } from '../../i18n/i18n.js';

export class ContentManager {
  constructor() {
    this.init();
  }

  init() {
    // Suscribirse a cambios de idioma
    i18n.subscribe(() => this.updateAllContent());

    // Actualizar contenido inicial
    this.updateAllContent();
  }

  /**
   * Actualiza todo el contenido de la página
   */
  updateAllContent() {
    this.updateNavigation();
    this.updateHero();
    this.updateExpertise();
    this.updateProjects();
    this.updateExperience();
    this.updateTestimonials();
    this.updateContact();
    this.updateFooter();
    this.updateMetaTags();
    this.updateHreflangTags();
  }

  /**
   * Actualiza la navegación
   */
  updateNavigation() {
    const navLinks = {
      '[href="#home"]': t('nav.home'),
      '[href="#expertise"]': t('nav.expertise'),
      '[href="#work"]': t('nav.work'),
      '[href="#experience"]': t('nav.experience'),
      '[href="#testimonials"]': t('nav.testimonials'),
      '[href="#contact"]': t('nav.contact'),
    };

    Object.entries(navLinks).forEach(([selector, text]) => {
      const links = document.querySelectorAll(`.header-nav a${selector}`);
      links.forEach((link) => {
        link.textContent = text;
      });
    });
  }

  /**
   * Actualiza la sección Hero
   */
  updateHero() {
    // Título y subtítulo permanecen (nombre de marca)
    // Actualizar descripción y botones

    const description = document.querySelector('.hero-description');
    if (description) {
      description.textContent = t('hero.description');
    }

    // Botones
    const primaryBtn = document.querySelector('.hero-actions .btn--primary');
    const secondaryBtn = document.querySelector(
      '.hero-actions .btn--secondary',
    );

    if (primaryBtn) {
      primaryBtn.textContent = t('hero.cta.primary');
    }
    if (secondaryBtn) {
      primaryBtn.textContent = t('hero.cta.primary');
      secondaryBtn.textContent = t('hero.cta.secondary');
    }
  }

  /**
   * Actualiza la sección de Servicios
   */
  updateExpertise() {
    const section = document.querySelector('.expertise-section');
    if (!section) return;

    // Título
    const titleLine = section.querySelector('.title-line');
    const titleEmphasis = section.querySelector('.title-emphasis');
    if (titleLine) titleLine.textContent = t('expertise.title.line');
    if (titleEmphasis)
      titleEmphasis.textContent = t('expertise.title.emphasis');

    // Intro
    const intro = section.querySelector('.expertise-intro');
    if (intro) intro.textContent = t('expertise.intro');

    // Servicios individuales
    const services = section.querySelectorAll('.service-card');
    const serviceKeys = [
      'webDev',
      'infrastructure',
      'consulting',
      'support',
      'digitalization',
      'customDev',
    ];

    services.forEach((card, index) => {
      if (index < serviceKeys.length) {
        const key = serviceKeys[index];
        const title = card.querySelector('.service-card__title');
        const description = card.querySelector('.service-card__description');

        if (title) title.textContent = t(`expertise.services.${key}.title`);
        if (description)
          description.textContent = t(`expertise.services.${key}.description`);
      }
    });
  }

  /**
   * Actualiza la sección de Proyectos
   */
  updateProjects() {
    const section = document.querySelector('.work-section');
    if (!section) return;

    // Título
    const titleLine = section.querySelector('.title-line');
    const titleEmphasis = section.querySelector('.title-emphasis');
    if (titleLine) titleLine.textContent = t('projects.title.line');
    if (titleEmphasis) titleEmphasis.textContent = t('projects.title.emphasis');

    // Intro
    const intro = section.querySelector('.work-intro');
    if (intro) intro.innerHTML = t('projects.intro');

    // Proyectos individuales
    const projects = section.querySelectorAll('.project-card');
    const projectKeys = ['vivasolar', 'filiusFood', 'priceTracker'];

    projects.forEach((card, index) => {
      if (index < projectKeys.length) {
        const key = projectKeys[index];
        const title = card.querySelector('.project-card__title');
        const description = card.querySelector('.project-card__description');
        const activeStatus = card.querySelector('.project-stat--date');

        if (title) title.textContent = t(`projects.cards.${key}.title`);
        if (description)
          description.textContent = t(`projects.cards.${key}.description`);
        if (activeStatus) activeStatus.textContent = t('projects.stats.active');

        // Botones
        const codeBtn = card.querySelector('.btn--primary');
        const demoBtn = card.querySelector('.btn--secondary');
        if (codeBtn)
          codeBtn.childNodes[codeBtn.childNodes.length - 1].textContent =
            ' ' + t('projects.buttons.viewCode');
        if (demoBtn) {
          const text = demoBtn.textContent.includes('Demo')
            ? t('projects.buttons.viewDemo')
            : t('projects.buttons.consult');
          demoBtn.childNodes[demoBtn.childNodes.length - 1].textContent =
            ' ' + text;
        }
      }
    });

    // CTA final
    const ctaText = section.querySelector('.projects-cta__text');
    const ctaButton = section.querySelector('.projects-cta .btn');
    if (ctaText) ctaText.textContent = t('projects.cta.text');
    if (ctaButton) ctaButton.textContent = t('projects.cta.button');
  }

  /**
   * Actualiza la sección de Experiencia
   */
  updateExperience() {
    const section = document.querySelector('.experience-section');
    if (!section) return;

    // Título
    const titleLine = section.querySelector('.title-line');
    const titleEmphasis = section.querySelector('.title-emphasis');
    if (titleLine) titleLine.textContent = t('experience.title.line');
    if (titleEmphasis)
      titleEmphasis.textContent = t('experience.title.emphasis');

    // Intro
    const intro = section.querySelector('.experience-intro');
    if (intro) intro.textContent = t('experience.intro');

    // Stats
    const stats = section.querySelectorAll('.stat-card');
    const statKeys = ['years', 'projects', 'clients', 'uptime'];

    stats.forEach((card, index) => {
      if (index < statKeys.length) {
        const key = statKeys[index];
        const label = card.querySelector('.stat-card__label');
        if (label) label.textContent = t(`experience.stats.${key}.label`);
      }
    });

    // Highlights
    const highlightsTitle = section.querySelector('.experience-highlights h3');
    if (highlightsTitle)
      highlightsTitle.textContent = t('experience.highlights.title');

    const highlights = section.querySelectorAll('.highlight');
    const highlightKeys = ['modern', 'quality', 'support'];

    highlights.forEach((item, index) => {
      if (index < highlightKeys.length) {
        const key = highlightKeys[index];
        const title = item.querySelector('.highlight__title');
        const description = item.querySelector('.highlight__description');

        if (title)
          title.textContent = t(`experience.highlights.items.${key}.title`);
        if (description)
          description.textContent = t(
            `experience.highlights.items.${key}.description`,
          );
      }
    });
  }

  /**
   * Actualiza la sección de Testimonios
   */
  updateTestimonials() {
    const section = document.querySelector('.testimonials-section');
    if (!section) return;

    // Título
    const titleLine = section.querySelector('.title-line');
    const titleEmphasis = section.querySelector('.title-emphasis');
    if (titleLine) titleLine.textContent = t('testimonials.title.line');
    if (titleEmphasis)
      titleEmphasis.textContent = t('testimonials.title.emphasis');

    // Testimonios individuales
    const testimonials = section.querySelectorAll('.card--elevated');
    const clientKeys = ['elcira', 'gabriel', 'favian'];

    testimonials.forEach((card, index) => {
      if (index < clientKeys.length) {
        const key = clientKeys[index];
        const text = card.querySelector('.testimonial-text');
        const name = card.querySelector('.author-name');
        const role = card.querySelector('.author-role');

        if (text) text.textContent = t(`testimonials.clients.${key}.text`);
        if (name) name.textContent = t(`testimonials.clients.${key}.name`);
        if (role) role.textContent = t(`testimonials.clients.${key}.role`);
      }
    });
  }

  /**
   * Actualiza la sección de Contacto
   */
  updateContact() {
    const section = document.querySelector('.contact-section');
    if (!section) return;

    // Título
    const titleLine = section.querySelector('.title-line');
    const titleEmphasis = section.querySelector('.title-emphasis');
    if (titleLine) titleLine.textContent = t('contact.title.line');
    if (titleEmphasis) titleEmphasis.textContent = t('contact.title.emphasis');

    // Descripción
    const description = section.querySelector('.contact-intro');
    if (description) description.textContent = t('contact.description');

    // Formulario
    const form = section.querySelector('.contact-form');
    if (form) {
      const nameLabel = form.querySelector('label[for="name"]');
      const nameInput = form.querySelector('#name');
      const emailLabel = form.querySelector('label[for="email"]');
      const emailInput = form.querySelector('#email');
      const subjectLabel = form.querySelector('label[for="subject"]');
      const subjectInput = form.querySelector('#subject');
      const messageLabel = form.querySelector('label[for="message"]');
      const messageInput = form.querySelector('#message');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (nameLabel) nameLabel.textContent = t('contact.form.name.label');
      if (nameInput) nameInput.placeholder = t('contact.form.name.placeholder');
      if (emailLabel) emailLabel.textContent = t('contact.form.email.label');
      if (emailInput)
        emailInput.placeholder = t('contact.form.email.placeholder');
      if (subjectLabel)
        subjectLabel.textContent = t('contact.form.subject.label');
      if (subjectInput)
        subjectInput.placeholder = t('contact.form.subject.placeholder');
      if (messageLabel)
        messageLabel.textContent = t('contact.form.message.label');
      if (messageInput)
        messageInput.placeholder = t('contact.form.message.placeholder');
      if (submitBtn) submitBtn.textContent = t('contact.form.button');
    }
  }

  /**
   * Actualiza el Footer
   */
  updateFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    // Tagline
    const tagline = footer.querySelector('.footer__tagline');
    if (tagline) tagline.textContent = t('footer.tagline');

    // Secciones
    const sections = footer.querySelectorAll('.footer-section');
    const sectionKeys = ['company', 'services', 'contact'];

    sections.forEach((section, index) => {
      if (index < sectionKeys.length) {
        const key = sectionKeys[index];
        const title = section.querySelector('.footer-section__title');
        if (title) title.textContent = t(`footer.sections.${key}.title`);
      }
    });

    // Copyright
    const copyright = footer.querySelector('.footer-bottom__copy');
    if (copyright) {
      const year = new Date().getFullYear();
      const companyName = 'Filius';
      copyright.textContent = `© ${year} ${companyName}. ${t('footer.bottom.rights')}`;
    }
  }

  /**
   * Actualiza los meta tags SEO según el idioma
   */
  updateMetaTags() {
    // Actualizar title
    document.title = t('meta.title');

    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }

    // Actualizar Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('meta.title'));
    }

    // Actualizar Open Graph description
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription) {
      ogDescription.setAttribute('content', t('meta.description'));
    }

    // Actualizar Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', t('meta.title'));
    }

    // Actualizar Twitter description
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t('meta.description'));
    }
  }

  /**
   * Actualiza los hreflang tags para SEO internacional
   */
  updateHreflangTags() {
    // Remover tags hreflang existentes
    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());

    // Obtener URL base (sin query params)
    const baseUrl = `${window.location.origin}${window.location.pathname}`;

    // Definir idiomas disponibles
    const languages = [
      { code: 'es', url: `${baseUrl}?lang=es` },
      { code: 'en', url: `${baseUrl}?lang=en` },
      { code: 'x-default', url: baseUrl }, // Versión por defecto
    ];

    // Crear y agregar nuevos tags hreflang
    languages.forEach(({ code, url }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = code;
      link.href = url;
      document.head.appendChild(link);
    });
  }
}

// Inicializar cuando el DOM esté listo
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    new ContentManager();
  });
}
