document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.nx-menu-btn');
  const navLinks = document.querySelector('.nx-nav-links');

  // Toggle del menú al hacer clic en la hamburguesa
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Cerrar el menú automáticamente al hacer clic en un enlace
  const links = document.querySelectorAll('.nx-nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Función de sanitización para prevenir XSS
  const sanitizeHTML = (str) => {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  };

  // Lógica del Wizard de Contacto
  const wizardBtns = document.querySelectorAll('.nx-wizard-btn');
  const interactiveBox = document.querySelector('.nx-contact-interactive');

  if (wizardBtns.length > 0 && interactiveBox) {
    wizardBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // 1. Capturar el texto del botón y sanitizarlo
        const rawService = e.target.innerText.replace('→', '').trim();
        const selectedService = sanitizeHTML(rawService);

        // 2. Iniciar transición de salida
        interactiveBox.style.opacity = '0';

        // 3. Esperar a que la caja se desvanezca para mutar el DOM
        setTimeout(() => {
          // Eliminamos los estilos en línea residuales y construimos la estructura segura
          interactiveBox.innerHTML = `
            <h3 class="nx-wizard-question" style="margin-bottom: 0;">¡Excelente elección!</h3>
            <p class="nx-contact-desc" style="text-align: center; margin-bottom: 1rem;">
              Hablemos sobre cómo escalar tu proyecto de <strong style="color: var(--text-main);">${selectedService}</strong>.
            </p>
            
            <form id="nx-wizard-form" class="nx-wizard-form">
              <input type="email" name="email" placeholder="Tu correo corporativo" required>
              
              <button type="submit" class="nx-wizard-btn nx-submit-btn">
                Solicitar Propuesta ↗
              </button>
            </form>
          `;

          // 4. Iniciar transición de entrada
          interactiveBox.style.opacity = '1';
          
          // Opcional: Agregar lógica extra si es necesaria
          const formElement = document.getElementById('nx-wizard-form');

          if (formElement) {
            formElement.addEventListener('submit', (eSubmit) => {
              eSubmit.preventDefault(); // Prevención de recarga de página y filtrado de datos en URL
              alert('¡Lead capturado para: ' + selectedService + '!');
            });
          }
          
        }, 300); 
      }, { once: true }); // Evita listeners repetidos (memory leaks)
    });
  }
});
