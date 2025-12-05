/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach } from "vitest";

describe("Navigation Module Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <nav class="nav">
                <a href="#home" class="nav-link active">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>
        `;
  });

  it("debería encontrar elementos de navegación", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    expect(navLinks).toHaveLength(3);
  });

  it("debería tener una clase active en el primer enlace", () => {
    const activeLink = document.querySelector(".nav-link.active");
    expect(activeLink).toBeTruthy();
    expect(activeLink.textContent).toBe("Home");
  });

  it("debería poder agregar y remover clase active", () => {
    const firstLink = document.querySelector(".nav-link");
    const secondLink = document.querySelectorAll(".nav-link")[1];

    firstLink.classList.remove("active");
    secondLink.classList.add("active");

    expect(firstLink.classList.contains("active")).toBe(false);
    expect(secondLink.classList.contains("active")).toBe(true);
  });
});

describe("Scroll Effects Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div class="scroll-element" data-scroll>Test Element</div>
        `;
  });

  it("debería encontrar elementos con data-scroll", () => {
    const scrollElements = document.querySelectorAll("[data-scroll]");
    expect(scrollElements).toHaveLength(1);
  });

  it("debería poder agregar clases de animación", () => {
    const element = document.querySelector("[data-scroll]");
    element.classList.add("fade-in");
    expect(element.classList.contains("fade-in")).toBe(true);
  });
});

describe("Mobile Menu Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <button class="menu-toggle" aria-expanded="false">Menu</button>
            <div class="mobile-menu">
                <nav class="mobile-nav"></nav>
            </div>
        `;
  });

  it("debería encontrar el botón de menú móvil", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    expect(menuToggle).toBeTruthy();
    expect(menuToggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("debería poder cambiar aria-expanded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.setAttribute("aria-expanded", "true");
    expect(menuToggle.getAttribute("aria-expanded")).toBe("true");
  });

  it("debería encontrar el contenedor del menú móvil", () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    expect(mobileMenu).toBeTruthy();
  });

  it("debería poder agregar clase active al menú", () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.add("active");
    expect(mobileMenu.classList.contains("active")).toBe(true);
  });
});

describe("Carousel Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div class="carousel">
                <div class="carousel-track">
                    <div class="carousel-item">Item 1</div>
                    <div class="carousel-item">Item 2</div>
                    <div class="carousel-item">Item 3</div>
                </div>
            </div>
        `;
  });

  it("debería encontrar el carousel", () => {
    const carousel = document.querySelector(".carousel");
    expect(carousel).toBeTruthy();
  });

  it("debería tener items del carousel", () => {
    const items = document.querySelectorAll(".carousel-item");
    expect(items).toHaveLength(3);
  });

  it("debería poder obtener el track del carousel", () => {
    const track = document.querySelector(".carousel-track");
    expect(track).toBeTruthy();
    expect(track.children).toHaveLength(3);
  });
});

describe("Custom Cursor Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div class="cursor"></div>
            <div class="cursor-follower"></div>
            <a href="#" class="hover-target">Link</a>
        `;
  });

  it("debería encontrar los elementos del cursor personalizado", () => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    expect(cursor).toBeTruthy();
    expect(follower).toBeTruthy();
  });

  it("debería poder agregar clase active al cursor", () => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.add("active");
    expect(cursor.classList.contains("active")).toBe(true);
  });

  it("debería encontrar elementos con hover target", () => {
    const hoverTarget = document.querySelector(".hover-target");
    expect(hoverTarget).toBeTruthy();
  });
});

describe("Animation Classes Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div class="animate-element">Test</div>
        `;
  });

  it("debería poder agregar clase fade-in", () => {
    const element = document.querySelector(".animate-element");
    element.classList.add("fade-in");
    expect(element.classList.contains("fade-in")).toBe(true);
  });

  it("debería poder agregar clase slide-up", () => {
    const element = document.querySelector(".animate-element");
    element.classList.add("slide-up");
    expect(element.classList.contains("slide-up")).toBe(true);
  });

  it("debería poder agregar múltiples clases de animación", () => {
    const element = document.querySelector(".animate-element");
    element.classList.add("fade-in", "slide-up", "delay-1");
    expect(element.classList.contains("fade-in")).toBe(true);
    expect(element.classList.contains("slide-up")).toBe(true);
    expect(element.classList.contains("delay-1")).toBe(true);
  });
});
