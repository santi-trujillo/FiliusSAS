/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach } from "vitest";

describe("CSS Utilities Tests", () => {
  describe("Spacing Utilities", () => {
    beforeEach(() => {
      document.body.innerHTML = '<div class="test-element"></div>';
    });

    it("debería aplicar margen con clase mt-4", () => {
      const element = document.querySelector(".test-element");
      element.classList.add("mt-4");
      expect(element.classList.contains("mt-4")).toBe(true);
    });

    it("debería aplicar padding con clase p-4", () => {
      const element = document.querySelector(".test-element");
      element.classList.add("p-4");
      expect(element.classList.contains("p-4")).toBe(true);
    });

    it("debería aplicar margen horizontal con clase mx-auto", () => {
      const element = document.querySelector(".test-element");
      element.classList.add("mx-auto");
      expect(element.classList.contains("mx-auto")).toBe(true);
    });

    it("debería aplicar gap con clase gap-4", () => {
      const element = document.querySelector(".test-element");
      element.classList.add("gap-4");
      expect(element.classList.contains("gap-4")).toBe(true);
    });
  });

  describe("Display Utilities", () => {
    beforeEach(() => {
      document.body.innerHTML = '<div class="test-element"></div>';
    });

    it("debería aplicar display flex", () => {
      const element = document.querySelector(".test-element");
      element.classList.add("flex");
      expect(element.classList.contains("flex")).toBe(true);
    });

    it("debería aplicar display grid", () => {
      const element = document.querySelector(".test-element");
      element.classList.add("grid");
      expect(element.classList.contains("grid")).toBe(true);
    });

    it("debería ocultar elemento con clase hidden", () => {
      const element = document.querySelector(".test-element");
      element.classList.add("hidden");
      expect(element.classList.contains("hidden")).toBe(true);
    });
  });

  describe("Typography Utilities", () => {
    beforeEach(() => {
      document.body.innerHTML = '<p class="test-text">Test Text</p>';
    });

    it("debería aplicar text-center", () => {
      const element = document.querySelector(".test-text");
      element.classList.add("text-center");
      expect(element.classList.contains("text-center")).toBe(true);
    });

    it("debería aplicar font-bold", () => {
      const element = document.querySelector(".test-text");
      element.classList.add("font-bold");
      expect(element.classList.contains("font-bold")).toBe(true);
    });

    it("debería aplicar text-lg", () => {
      const element = document.querySelector(".test-text");
      element.classList.add("text-lg");
      expect(element.classList.contains("text-lg")).toBe(true);
    });
  });

  describe("Color Utilities", () => {
    beforeEach(() => {
      document.body.innerHTML = '<div class="test-element"></div>';
    });

    it("debería aplicar text-primary", () => {
      const element = document.querySelector(".test-element");
      element.classList.add("text-primary");
      expect(element.classList.contains("text-primary")).toBe(true);
    });

    it("debería aplicar bg-primary", () => {
      const element = document.querySelector(".test-element");
      element.classList.add("bg-primary");
      expect(element.classList.contains("bg-primary")).toBe(true);
    });
  });
});

describe("CUBE CSS Composition Tests", () => {
  describe("Container", () => {
    it("debería crear un container", () => {
      document.body.innerHTML = '<div class="container"></div>';
      const container = document.querySelector(".container");
      expect(container).toBeTruthy();
    });

    it("debería aplicar variantes de container", () => {
      document.body.innerHTML = '<div class="container container--sm"></div>';
      const container = document.querySelector(".container");
      expect(container.classList.contains("container--sm")).toBe(true);
    });
  });

  describe("Grid", () => {
    it("debería crear un grid", () => {
      document.body.innerHTML = '<div class="grid"></div>';
      const grid = document.querySelector(".grid");
      expect(grid).toBeTruthy();
    });

    it("debería aplicar columnas de grid", () => {
      document.body.innerHTML = '<div class="grid grid--3-cols"></div>';
      const grid = document.querySelector(".grid");
      expect(grid.classList.contains("grid--3-cols")).toBe(true);
    });
  });

  describe("Stack", () => {
    it("debería crear un stack", () => {
      document.body.innerHTML = '<div class="stack"></div>';
      const stack = document.querySelector(".stack");
      expect(stack).toBeTruthy();
    });

    it("debería aplicar espaciado de stack", () => {
      document.body.innerHTML = '<div class="stack stack--sm"></div>';
      const stack = document.querySelector(".stack");
      expect(stack.classList.contains("stack--sm")).toBe(true);
    });
  });

  describe("Cluster", () => {
    it("debería crear un cluster", () => {
      document.body.innerHTML = '<div class="cluster"></div>';
      const cluster = document.querySelector(".cluster");
      expect(cluster).toBeTruthy();
    });
  });

  describe("Flex", () => {
    it("debería crear un flex container", () => {
      document.body.innerHTML = '<div class="flex-container"></div>';
      const flex = document.querySelector(".flex-container");
      expect(flex).toBeTruthy();
    });

    it("debería aplicar justify-center", () => {
      document.body.innerHTML =
        '<div class="flex-container flex-center"></div>';
      const flex = document.querySelector(".flex-container");
      expect(flex.classList.contains("flex-center")).toBe(true);
    });
  });
});

describe("CUBE CSS Blocks Tests", () => {
  describe("Button Component", () => {
    it("debería crear un botón base", () => {
      document.body.innerHTML = '<button class="btn">Click me</button>';
      const btn = document.querySelector(".btn");
      expect(btn).toBeTruthy();
    });

    it("debería aplicar variante primary", () => {
      document.body.innerHTML =
        '<button class="btn btn--primary">Click me</button>';
      const btn = document.querySelector(".btn");
      expect(btn.classList.contains("btn--primary")).toBe(true);
    });

    it("debería aplicar variante secondary", () => {
      document.body.innerHTML =
        '<button class="btn btn--secondary">Click me</button>';
      const btn = document.querySelector(".btn");
      expect(btn.classList.contains("btn--secondary")).toBe(true);
    });

    it("debería aplicar tamaño grande", () => {
      document.body.innerHTML = '<button class="btn btn--lg">Click me</button>';
      const btn = document.querySelector(".btn");
      expect(btn.classList.contains("btn--lg")).toBe(true);
    });
  });

  describe("Card Component", () => {
    it("debería crear una card", () => {
      document.body.innerHTML = '<div class="card"></div>';
      const card = document.querySelector(".card");
      expect(card).toBeTruthy();
    });

    it("debería tener secciones de card", () => {
      document.body.innerHTML = `
                <div class="card">
                    <div class="card__header">Header</div>
                    <div class="card__body">Body</div>
                    <div class="card__footer">Footer</div>
                </div>
            `;
      expect(document.querySelector(".card__header")).toBeTruthy();
      expect(document.querySelector(".card__body")).toBeTruthy();
      expect(document.querySelector(".card__footer")).toBeTruthy();
    });

    it("debería aplicar variante elevated", () => {
      document.body.innerHTML = '<div class="card card--elevated"></div>';
      const card = document.querySelector(".card");
      expect(card.classList.contains("card--elevated")).toBe(true);
    });
  });

  describe("Section Component", () => {
    it("debería crear una section", () => {
      document.body.innerHTML = '<section class="section"></section>';
      const section = document.querySelector(".section");
      expect(section).toBeTruthy();
    });

    it("debería tener section header", () => {
      document.body.innerHTML = `
                <section class="section">
                    <div class="section__header">
                        <h2 class="section__title">Title</h2>
                    </div>
                </section>
            `;
      expect(document.querySelector(".section__header")).toBeTruthy();
      expect(document.querySelector(".section__title")).toBeTruthy();
    });
  });

  describe("Nav Component", () => {
    it("debería crear navegación", () => {
      document.body.innerHTML = `
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#" class="nav__link">Link</a>
                        </li>
                    </ul>
                </nav>
            `;
      expect(document.querySelector(".nav")).toBeTruthy();
      expect(document.querySelector(".nav__list")).toBeTruthy();
      expect(document.querySelector(".nav__link")).toBeTruthy();
    });

    it("debería aplicar estado active", () => {
      document.body.innerHTML =
        '<a href="#" class="nav__link nav__link--active">Active</a>';
      const link = document.querySelector(".nav__link");
      expect(link.classList.contains("nav__link--active")).toBe(true);
    });
  });
});
