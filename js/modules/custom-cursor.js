/**
 * Custom Cursor Module - Ultra Optimizado
 * Cursor personalizado con aceleración GPU para 60 FPS
 */

const CustomCursor = (() => {
  let cursorDot = null;
  let cursorOutline = null;
  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;
  let isHovering = false;

  const init = () => {
    // Solo en desktop
    if (window.innerWidth < 768) return;

    createCursorElements();
    setupEventListeners();
    animateCursor();
  };

  /**
   * Crea los elementos del cursor personalizado
   */
  const createCursorElements = () => {
    // Crear punto del cursor
    cursorDot = document.createElement("div");
    cursorDot.className = "cursor-dot";
    document.body.appendChild(cursorDot);

    // Crear contorno del cursor
    cursorOutline = document.createElement("div");
    cursorOutline.className = "cursor-outline";
    document.body.appendChild(cursorOutline);
  };

  /**
   * Configura todos los event listeners
   */
  const setupEventListeners = () => {
    // Seguimiento del mouse
    document.addEventListener("mousemove", handleMouseMove);

    // Hover sobre elementos interactivos
    const interactiveElements = document.querySelectorAll(
      "a, button, .clickable, input, textarea, .btn, .nav-link, .hero-cta-primary, .hero-cta-secondary"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Click effects
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Hover sobre texto
    const textElements = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6, span, li"
    );
    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleTextEnter);
      el.addEventListener("mouseleave", handleTextLeave);
    });
  };

  /**
   * Maneja el movimiento del mouse
   */
  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Actualizar posición del punto inmediatamente con transform (GPU)
    if (cursorDot) {
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
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
      cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
    }

    requestAnimationFrame(animateCursor);
  };

  /**
   * Hover sobre elementos interactivos
   */
  const handleMouseEnter = () => {
    if (cursorDot && cursorOutline) {
      cursorDot.classList.add("hover");
      cursorOutline.classList.add("hover");
      isHovering = true;
    }
  };

  const handleMouseLeave = () => {
    if (cursorDot && cursorOutline) {
      cursorDot.classList.remove("hover");
      cursorOutline.classList.remove("hover");
      isHovering = false;
    }
  };

  /**
   * Efectos de click
   */
  const handleMouseDown = () => {
    if (cursorDot && cursorOutline) {
      cursorDot.classList.add("click");
      cursorOutline.classList.add("click");
    }
  };

  const handleMouseUp = () => {
    if (cursorDot && cursorOutline) {
      cursorDot.classList.remove("click");
      cursorOutline.classList.remove("click");
    }
  };

  /**
   * Hover sobre texto
   */
  const handleTextEnter = () => {
    if (cursorDot && cursorOutline && !isHovering) {
      cursorDot.classList.add("text");
      cursorOutline.classList.add("text");
    }
  };

  const handleTextLeave = () => {
    if (cursorDot && cursorOutline) {
      cursorDot.classList.remove("text");
      cursorOutline.classList.remove("text");
    }
  };

  /**
   * Destruir cursor (útil para cleanup)
   */
  const destroy = () => {
    if (cursorDot) cursorDot.remove();
    if (cursorOutline) cursorOutline.remove();
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return {
    init,
    destroy,
  };
})();

// Auto-inicializar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", CustomCursor.init);
} else {
  CustomCursor.init();
}
