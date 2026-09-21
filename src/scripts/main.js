document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.nx-menu-btn');
  const navLinks = document.querySelector('.nx-nav-links');

  // Toggle del menú al hacer clic en la hamburguesa
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Cerrar el menú automáticamente al hacer clic en un enlace
  const links = document.querySelectorAll('.nx-nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        navLinks.classList.remove('active');
      }
    });
  });
});
