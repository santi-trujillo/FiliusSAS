let menuToggle = null;
let mobileMenu = null;
let menuOverlay = null;
let mobileNavLinks = null;
let isOpen = false;

const cacheElements = () => {
  menuToggle = document.querySelector(".menu-toggle");
  mobileMenu = document.querySelector(".mobile-menu");
  menuOverlay = document.querySelector(".menu-overlay");
  mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
};

const setupEventListeners = () => {
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  if (mobileNavLinks) {
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", handleKeyPress);

  window.addEventListener("resize", handleResize);
};

const toggleMenu = () => {
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
};

const openMenu = () => {
  isOpen = true;
  menuToggle?.classList.add("active");
  mobileMenu?.classList.add("active");
  menuOverlay?.classList.add("active");
  document.body.style.overflow = "hidden";

  menuToggle?.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
  isOpen = false;
  menuToggle?.classList.remove("active");
  mobileMenu?.classList.remove("active");
  menuOverlay?.classList.remove("active");
  document.body.style.overflow = "";

  menuToggle?.setAttribute("aria-expanded", "false");
};

const handleKeyPress = (e) => {
  if (e.key === "Escape" && isOpen) {
    closeMenu();
  }
};

const handleResize = () => {
  if (window.innerWidth > 768 && isOpen) {
    closeMenu();
  }
};

const init = () => {
  cacheElements();
  setupEventListeners();
};

export default { init, open: openMenu, close: closeMenu, toggle: toggleMenu };
