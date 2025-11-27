/**
 * Animations Module
 * Maneja las animaciones y efectos visuales
 */

const Animations = (() => {
  const init = () => {
    setupIntersectionObserver();
    setupCardHoverEffects();
  };

  /**
   * Configura el Intersection Observer para animaciones de entrada
   */
  const setupIntersectionObserver = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Opcional: dejar de observar después de animar
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  };

  /**
   * Añade efectos de hover suaves a las tarjetas
   */
  const setupCardHoverEffects = () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transition = "all 0.3s ease";
      });
    });
  };

  /**
   * Efecto parallax suave (opcional)
   */
  const setupParallax = () => {
    const parallaxElements = document.querySelectorAll("[data-parallax]");

    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach((element) => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  };

  return {
    init,
  };
})();

// Auto-inicializar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", Animations.init);
} else {
  Animations.init();
}
