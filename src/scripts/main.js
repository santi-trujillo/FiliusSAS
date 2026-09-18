document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.nx-menu-btn');
  const closeBtn = document.querySelector('.nx-close-btn');
  const mobileMenu = document.querySelector('.nx-mobile-menu');

  if (menuBtn && mobileMenu && closeBtn) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.add('is-open'));
    closeBtn.addEventListener('click', () => mobileMenu.classList.remove('is-open'));
  }
});
