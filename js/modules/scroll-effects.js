/**
 * Scroll Effects Module
 * Efectos relacionados con el scroll de la página
 */

let ticking = false;

/**
 * Cambia el estilo del header al hacer scroll
 */
const setupHeaderScroll = () => {
  const header = document.querySelector('.header');

  const updateHeader = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
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
  let scrollTopBtn = document.querySelector('.scroll-top-btn');

  if (!scrollTopBtn) {
    scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(scrollTopBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.visibility = 'visible';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.visibility = 'hidden';
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

/**
 * Inicializa el módulo de efectos de scroll
 */
const init = () => {
  setupHeaderScroll();
  setupScrollToTop();
};

export default { init };
