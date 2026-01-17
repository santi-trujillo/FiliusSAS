import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  publicDir: "../public",

  build: {
    outDir: "../dist",
    assetsDir: "assets",
    emptyOutDir: true,
    minify: "terser",
    cssMinify: true,
    sourcemap: false,
    target: "es2015",
    cssCodeSplit: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
      output: {
        manualChunks: (id) => {
          // Separar componentes grandes en chunks
          if (id.includes("/components/sections/")) {
            return "sections";
          }
          if (id.includes("/i18n/")) {
            return "i18n";
          }
          // Scripts de utilidades
          if (id.includes("/scripts/utils/")) {
            return "utils";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },

    // Optimización de chunks
    chunkSizeWarningLimit: 500,
  },

  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
  },

  preview: {
    port: 4173,
    open: true,
  },

  css: {
    devSourcemap: true,
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@styles": resolve(__dirname, "src/styles"),
      "@scripts": resolve(__dirname, "src/scripts"),
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
    },
  },
});
