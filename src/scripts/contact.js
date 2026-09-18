document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.nx-quiz-option');
  const counter = document.getElementById('quiz-counter');
  const progressBar = document.getElementById('quiz-progress');
  const waBtn = document.getElementById('quiz-wa-btn');
  const headerTitle = document.getElementById('quiz-header');
  const terminalBody = document.getElementById('terminal-body');
  
  const answers = {};
  const phoneNumber = '573000000000'; // Tu numero de WhatsApp
  
  const titles = [
    "Paso 1 de 4: Objetivo",
    "Paso 2 de 4: Contexto",
    "Paso 3 de 4: Escala",
    "Paso 4 de 4: Urgencia"
  ];

  options.forEach(opt => {
    opt.addEventListener('click', function() {
      const step = parseInt(this.getAttribute('data-step'));
      const value = this.getAttribute('data-value');
      
      answers[`q${step}`] = value;
      
      // Avanzar al siguiente paso
      document.getElementById(`step-${step}`).classList.remove('active');
      
      const nextStep = step + 1;
      document.getElementById(`step-${nextStep}`).classList.add('active');
      
      if (nextStep <= 4) {
        counter.innerText = titles[nextStep - 1];
        progressBar.style.width = `${nextStep * 25}%`;
      } else {
        // Llegamos a la Terminal
        progressBar.style.width = '100%';
        headerTitle.style.display = 'none'; // Ocultamos el header normal
        runTerminalEffect();
      }
    });
  });

  function runTerminalEffect() {
    const lines = [
      "> Compilando requerimientos...",
      `> Objetivo: ${answers.q1}`,
      `> Contexto: ${answers.q2}`,
      `> Escala: ${answers.q3}`,
      `> Urgencia: ${answers.q4}`,
      "> Sistema configurado. Abriendo canal seguro..."
    ];
    
    let lineIndex = 0;
    terminalBody.innerHTML = '<span class="nx-cursor"></span>';
    
    const typeLine = () => {
      if (lineIndex < lines.length) {
        const newLine = document.createElement('div');
        newLine.className = 'nx-terminal-line';
        newLine.innerText = lines[lineIndex];
        terminalBody.insertBefore(newLine, terminalBody.lastChild);
        lineIndex++;
        setTimeout(typeLine, 600); // Velocidad de la terminal
      } else {
        // Mostrar el botón al final
        waBtn.style.display = 'flex';
        
        // Preparar link de WhatsApp
        const msg = `Hola FiliusTec. Solicito evaluación para un proyecto.\n\n*Target:* ${answers.q1}\n*Contexto:* ${answers.q2}\n*Escala:* ${answers.q3}\n*Urgencia:* ${answers.q4}\n\nQuedo atento.`;
        waBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
      }
    };
    
    setTimeout(typeLine, 400);
  }
});
