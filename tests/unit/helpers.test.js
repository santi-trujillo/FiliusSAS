// tests/unit/helpers.test.js
import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  debounce,
  throttle,
  isInViewport,
  formatDate,
  generateId,
} from "@scripts/utils/helpers";

// Helper utilities tests
describe("Helpers", () => {
  describe("generateId", () => {
    it("should generate a unique ID starting with _ and having a length of 10", () => {
      const id = generateId();
      expect(typeof id).toBe("string");
      expect(id.startsWith("_")).toBe(true);
      expect(id.length).toBe(10);
    });

    it("should generate different IDs on multiple calls", () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
    });
  });

  describe("debounce", () => {
    it("should delay function execution", async () => {
      const mockFn = vi.fn();
      const debounced = debounce(mockFn, 100);

      debounced();
      debounced();
      debounced();

      expect(mockFn).not.toHaveBeenCalled();

      await new Promise((resolve) => setTimeout(resolve, 150));
      expect(mockFn).toHaveBeenCalledOnce();
    });

    it("should cancel previous calls when called again", async () => {
      const mockFn = vi.fn();
      const debounced = debounce(mockFn, 100);

      debounced();
      await new Promise((resolve) => setTimeout(resolve, 50));
      debounced();
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(mockFn).not.toHaveBeenCalled();

      await new Promise((resolve) => setTimeout(resolve, 100));
      expect(mockFn).toHaveBeenCalledOnce();
    });
  });

  describe("throttle", () => {
    it("should limit function execution frequency", async () => {
      const mockFn = vi.fn();
      const throttled = throttle(mockFn, 100);

      throttled();
      expect(mockFn).toHaveBeenCalledOnce();

      throttled();
      throttled();
      expect(mockFn).toHaveBeenCalledOnce();

      await new Promise((resolve) => setTimeout(resolve, 150));
      throttled();
      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    it("should pass arguments correctly", async () => {
      const mockFn = vi.fn();
      const throttled = throttle(mockFn, 100);

      throttled("test", 123);
      expect(mockFn).toHaveBeenCalledWith("test", 123);
    });
  });

  describe("formatDate", () => {
    it("should format date correctly in Spanish locale", () => {
      const date = new Date("2025-11-29T12:00:00Z");
      const formatted = formatDate(date, "es-ES");
      expect(typeof formatted).toBe("string");
      // just check it's a valid string, timezones can vary
      expect(formatted).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
    });

    it("should use Spanish locale by default", () => {
      const date = new Date("2025-11-29T12:00:00Z");
      const formatted = formatDate(date);
      expect(typeof formatted).toBe("string");
      expect(formatted).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
    });
  });

  describe("isInViewport", () => {
    let mockElement;

    beforeEach(() => {
      mockElement = {
        getBoundingClientRect: vi.fn(),
      };
    });

    it("should return true when element is in viewport", () => {
      mockElement.getBoundingClientRect.mockReturnValue({
        top: 100,
        left: 100,
        bottom: 200,
        right: 200,
      });

      const result = isInViewport(mockElement);
      expect(result).toBe(true);
    });

    it("should return false when element is above viewport", () => {
      mockElement.getBoundingClientRect.mockReturnValue({
        top: -100,
        left: 0,
        bottom: -50,
        right: 100,
      });

      const result = isInViewport(mockElement);
      expect(result).toBe(false);
    });

    it("should return false when element is below viewport", () => {
      const mockHeight = 800;
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: mockHeight,
      });

      mockElement.getBoundingClientRect.mockReturnValue({
        top: 900,
        left: 0,
        bottom: 1000,
        right: 100,
      });

      const result = isInViewport(mockElement);
      expect(result).toBe(false);
    });

    // TODO: add more edge cases
  });
});
