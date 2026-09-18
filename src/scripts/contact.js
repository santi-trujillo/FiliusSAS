// Vanilla JS: FiliusTec Interactive Contact Quiz
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nx-quiz-btn');
  const counter = document.getElementById('quiz-counter');
  const waBtn = document.getElementById('quiz-wa-btn');
  
  // Variables para almacenar las respuestas
  let projectType = '';
  let projectStage = '';
  const phoneNumber = '573000000000'; // Reemplazar por número real

  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      const step = this.getAttribute('data-step');
      const value = this.getAttribute('data-value');

      if (step === '1') {
        projectType = value;
        document.getElementById('step-1').classList.remove('active');
        document.getElementById('step-2').classList.add('active');
        counter.innerText = 'Paso 2 de 2';
      } 
      else if (step === '2') {
        projectStage = value;
        document.getElementById('step-2').classList.remove('active');
        document.getElementById('step-3').classList.add('active');
        counter.innerText = '¡Análisis Completado!';
        counter.style.color = 'var(--accent-primary)';
        
        // Construir URL dinámica de WhatsApp
        const message = `Hola FiliusTec, quiero cotizar un proyecto de *${projectType}*. El objetivo principal es: *${projectStage}*. ¿Podemos agendar una llamada técnica?`;
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        waBtn.setAttribute('href', waUrl);
      }
    });
  });
});
