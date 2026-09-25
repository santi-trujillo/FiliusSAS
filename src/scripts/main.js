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

  // ----------------------------------------------------
  // Lógica del Wizard de Contacto (Event Delegation ES6+)
  // ----------------------------------------------------
  const wizardContainer = document.getElementById('wa-wizard-container');
  
  if (wizardContainer) {
    try {
      const leadData = { pilar: "", entidad: "", tamano: "" };
      
      // Leer templates y configuración desde HTML5 Data Attributes
      const waNumber = wizardContainer.getAttribute('data-wa-number');
      const waTemplate = wizardContainer.getAttribute('data-wa-message');
      
      // DOM Caching: Extraer consultas pesadas fuera del event listener
      const step1 = document.getElementById('wa-step-1');
      const step2 = document.getElementById('wa-step-2');
      const step3 = document.getElementById('wa-step-3');
      
      wizardContainer.addEventListener('click', (e) => {
        // Filtrar clicks solo en botones del wizard (.wa-btn)
        const btn = e.target.closest('.wa-btn');
        if (!btn) return;
        
        const step = btn.getAttribute('data-step');
        const value = btn.getAttribute('data-val');
        
        // Validación de nulidad (Guards)
        if (!step1 || !step2 || !step3) return;
        
        if (step === "1") {
          leadData.pilar = value;
          step1.style.display = 'none';
          step2.style.display = 'block';
        } 
        else if (step === "2") {
          leadData.entidad = value;
          step2.style.display = 'none';
          step3.style.display = 'block';
        }
        else if (step === "3") {
          leadData.tamano = value;
          
          if (waTemplate && waNumber) {
            // Reemplazo dinámico de variables en la plantilla de WhatsApp
            const finalMessage = waTemplate
              .replace('{pilar}', leadData.pilar)
              .replace('{entidad}', leadData.entidad)
              .replace('{tamano}', leadData.tamano);
            
            // Disparo a WhatsApp
            window.open(`https://wa.me/${waNumber}?text=${finalMessage}`, '_blank', 'noopener,noreferrer');
          }
          
          // Reinicio de UI (Opcional, en caso de que el usuario regrese a la pestaña)
          step3.style.display = 'none';
          step1.style.display = 'block';
        }
      });
    } catch (error) {
      console.error("FiliusTec Error: Wizard initialization failed", error);
    }
  }

  // ----------------------------------------------------
  // Delegación de Scroll to Top
  // ----------------------------------------------------
  const scrollTopBtn = document.getElementById('nx-scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
