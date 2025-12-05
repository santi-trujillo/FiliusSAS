/**
 * Custom Cursor Module - Ultra Optimizado y Centrado Perfecto
 * Cursor personalizado con aceleración GPU para 60 FPS
 */

let cursorDot = null;
let cursorOutline = null;
let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;
let isHovering = false;

/**
 * Throttle function para optimizar mousemove
 */
const throttle = (func, limit = 16) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Crea los elementos del cursor personalizado
 */
const createCursorElements = () => {
  // Crear punto del cursor
  cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);

  // Crear contorno del cursor
  cursorOutline = document.createElement('div');
  cursorOutline.className = 'cursor-outline';
  document.body.appendChild(cursorOutline);
};

/**
 * Configura todos los event listeners
 */
const setupEventListeners = () => {
  // Seguimiento del mouse con throttle para performance
  const throttledMouseMove = throttle(handleMouseMove, 16);
  document.addEventListener('mousemove', throttledMouseMove);

  // Hover sobre elementos interactivos específicos
  const interactiveElements = document.querySelectorAll(
    'a, button, .clickable, input, textarea, .btn, .nav-link',
  );
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
  });

  // Click effects
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);

  // Hover sobre texto usando event delegation
  document.addEventListener(
    'mouseenter',
    (e) => {
      if (
        e.target.nodeType === 1 &&
        e.target.matches('p, h1, h2, h3, h4, h5, h6, li')
      ) {
        handleTextEnter();
      }
    },
    true,
  );

  document.addEventListener(
    'mouseleave',
    (e) => {
      if (
        e.target.nodeType === 1 &&
        e.target.matches('p, h1, h2, h3, h4, h5, h6, li')
      ) {
        handleTextLeave();
      }
    },
    true,
  );
};

/**
 * Maneja el movimiento del mouse
 */
const handleMouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Actualizar posición del punto inmediatamente (centrado con CSS)
  if (cursorDot) {
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  }
};

/**
 * Anima el cursor con efecto de arrastre suave
 */
const animateCursor = () => {
  // Efecto de arrastre suave para el contorno
  const speed = 0.4;
  outlineX += (mouseX - outlineX) * speed;
  outlineY += (mouseY - outlineY) * speed;

  if (cursorOutline) {
    // Usar left/top igual que el dot para mantener el centrado consistente
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;
  }

  requestAnimationFrame(animateCursor);
};

/**
 * Hover sobre elementos interactivos
 */
const handleMouseEnter = () => {
  if (cursorDot && cursorOutline) {
    cursorDot.classList.add('hover');
    cursorOutline.classList.add('hover');
    isHovering = true;
  }
};

const handleMouseLeave = () => {
  if (cursorDot && cursorOutline) {
    cursorDot.classList.remove('hover');
    cursorOutline.classList.remove('hover');
    isHovering = false;
  }
};

/**
 * Efectos de click
 */
const handleMouseDown = () => {
  if (cursorDot && cursorOutline) {
    cursorDot.classList.add('click');
    cursorOutline.classList.add('click');
  }
};

const handleMouseUp = () => {
  if (cursorDot && cursorOutline) {
    cursorDot.classList.remove('click');
    cursorOutline.classList.remove('click');
  }
};

/**
 * Hover sobre texto
 */
const handleTextEnter = () => {
  if (cursorDot && cursorOutline && !isHovering) {
    cursorDot.classList.add('text');
    cursorOutline.classList.add('text');
  }
};

const handleTextLeave = () => {
  if (cursorDot && cursorOutline) {
    cursorDot.classList.remove('text');
    cursorOutline.classList.remove('text');
  }
};

/**
 * Destruir cursor (útil para cleanup)
 */
const destroy = () => {
  if (cursorDot) cursorDot.remove();
  if (cursorOutline) cursorOutline.remove();
};

/**
 * Inicializa el módulo de cursor personalizado
 */
const init = () => {
  // Solo en desktop
  if (window.innerWidth < 768) return;

  createCursorElements();
  setupEventListeners();
  animateCursor();
};

export default { init, destroy };
