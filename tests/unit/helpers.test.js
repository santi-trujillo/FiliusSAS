// tests/unit/helpers.test.js
import { describe, it, expect, beforeEach, vi } from "vitest";
import { debounce, throttle, isInViewport } from "@scripts/utils/helpers";

describe("Helpers", () => {
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
  });
});
