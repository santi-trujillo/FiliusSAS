/**
 * Carousel Module
 * Maneja la navegación del carrusel de tecnologías
 */

class TechCarousel {
  constructor() {
    this.track = document.getElementById('carouselTrack');
    this.prevBtn = document.getElementById('carouselPrev');
    this.nextBtn = document.getElementById('carouselNext');
    this.items = this.track?.querySelectorAll('.tech-item');

    if (!this.track || !this.items) return;

    this.currentPosition = 0;
    this.itemWidth = this.items[0]?.offsetWidth || 90;
    this.totalItems = this.items.length;
    this.visibleItems = this.calculateVisibleItems();

    this.init();
  }

  calculateVisibleItems() {
    const container = this.track.parentElement;
    const containerWidth = container?.offsetWidth || 900;
    const gap = 16; // gap value from CSS

    // Aproximado: cuántos items caben en el contenedor
    const itemsPerView = Math.floor((containerWidth - 40) / (this.itemWidth + gap));
    return Math.max(3, itemsPerView);
  }

  init() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.scrollPrev());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.scrollNext());
    }

    // Ajustar en resize
    window.addEventListener('resize', () => {
      this.visibleItems = this.calculateVisibleItems();
    });
  }

  scrollNext() {
    const maxScroll = (this.totalItems - this.visibleItems) * (this.itemWidth + 16);

    this.currentPosition += this.itemWidth + 16;

    if (this.currentPosition >= maxScroll) {
      this.currentPosition = 0;
    }

    this.updatePosition();
  }

  scrollPrev() {
    this.currentPosition -= this.itemWidth + 16;

    if (this.currentPosition < 0) {
      const maxScroll = (this.totalItems - this.visibleItems) * (this.itemWidth + 16);
      this.currentPosition = maxScroll;
    }

    this.updatePosition();
  }

  updatePosition() {
    if (this.track) {
      this.track.style.transform = `translateX(-${this.currentPosition}px)`;
    }
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new TechCarousel();
  });
} else {
  new TechCarousel();
}

export default TechCarousel;
