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

  // Lógica del Wizard de Contacto
  const wizardBtns = document.querySelectorAll('.nx-wizard-btn');
  const interactiveBox = document.querySelector('.nx-contact-interactive');

  if (wizardBtns.length > 0 && interactiveBox) {
    wizardBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // 1. Capturar el texto del botón (removiendo la flecha → si existe)
        const selectedService = e.target.innerText.replace('→', '').trim();

        // 2. Iniciar transición de salida
        interactiveBox.style.opacity = '0';

        // 3. Esperar a que la caja se desvanezca para mutar el DOM
        setTimeout(() => {
          // Reemplazamos el contenido interno por el Paso 2
          interactiveBox.innerHTML = `
            <h3 class="nx-wizard-question" style="margin-bottom: 0;">¡Excelente elección!</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; margin-bottom: 1rem;">
              Hablemos sobre cómo escalar tu proyecto de <strong style="color: var(--text-main);">${selectedService}</strong>.
            </p>
            
            <form class="nx-wizard-form" onsubmit="event.preventDefault(); alert('¡Lead capturado para: ${selectedService}!');" style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
              <input type="email" placeholder="Tu correo corporativo" required 
                style="width: 100%; padding: 1rem; background-color: var(--bg-card); border: 1px solid #1C1C21; border-radius: 8px; color: var(--text-main); font-family: var(--font-body); font-size: 0.9rem; outline: none;">
              
              <button type="submit" class="nx-wizard-btn" style="justify-content: center; background-color: var(--accent-primary); color: var(--bg-dark); border: none; font-weight: 600;">
                Solicitar Propuesta ↗
              </button>
            </form>
          `;

          // 4. Iniciar transición de entrada
          interactiveBox.style.opacity = '1';
          
          // Opcional: Agregar hover effect dinámico al nuevo input
          const inputElement = interactiveBox.querySelector('input');
          inputElement.addEventListener('focus', () => inputElement.style.borderColor = 'var(--accent-primary)');
          inputElement.addEventListener('blur', () => inputElement.style.borderColor = '#1C1C21');
          
        }, 300); // 300ms debe coincidir con la transición del CSS
      });
    });
  }
});
