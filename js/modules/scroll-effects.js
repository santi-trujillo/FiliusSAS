/**
 * Scroll Effects Module
 * Efectos relacionados con el scroll de la página
 */

const ScrollEffects = (() => {
  let lastScrollTop = 0;
  let ticking = false;

  const init = () => {
    setupHeaderScroll();
    setupScrollToTop();
  };

  /**
   * Cambia el estilo del header al hacer scroll
   */
  const setupHeaderScroll = () => {
    const header = document.querySelector(".header");

    const updateHeader = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      lastScrollTop = scrollTop;
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    });
  };

  /**
   * Botón para volver arriba (opcional)
   */
  const setupScrollToTop = () => {
    // Crear botón si no existe
    let scrollTopBtn = document.querySelector(".scroll-top-btn");

    if (!scrollTopBtn) {
      scrollTopBtn = document.createElement("button");
      scrollTopBtn.className = "scroll-top-btn";
      scrollTopBtn.innerHTML = "↑";
      scrollTopBtn.setAttribute("aria-label", "Volver arriba");
      document.body.appendChild(scrollTopBtn);

      // Estilos inline (mejor moverlos a CSS)
      Object.assign(scrollTopBtn.style, {
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "var(--accent-color)",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        opacity: "0",
        visibility: "hidden",
        transition: "all 0.3s ease",
        zIndex: "999",
      });
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.visibility = "visible";
      } else {
        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.visibility = "hidden";
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  /**
   * Revela elementos progresivamente al hacer scroll
   */
  const revealOnScroll = () => {
    const reveals = document.querySelectorAll("[data-reveal]");

    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("revealed");
      }
    });
  };

  return {
    init,
  };
})();

// Auto-inicializar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ScrollEffects.init);
} else {
  ScrollEffects.init();
}
