import js from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "public/sw.js"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        fetch: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        IntersectionObserver: "readonly",
        requestAnimationFrame: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        Event: "readonly",
        __dirname: "readonly",
        global: "readonly",
        beforeEach: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "prefer-const": "warn",
      "no-var": "error",
      eqeqeq: ["warn", "always"],
      semi: ["warn", "always"],
      quotes: ["warn", "single"],
      indent: ["warn", 2],
      "comma-dangle": ["warn", "always-multiline"],
    },
  },
];
