import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      semi: ["error", "always"],
      "eol-last": ["error", "always"],
      "no-var": "error",
      curly: "error",
      "comma-dangle": ["error", "only-multiline"],
      "brace-style": ["error", "1tbs"],
      "no-unreachable": "error",
      "no-self-assign": "error",
      "new-cap": "error",
      "prefer-const": "error",
      "no-useless-return": "error",
    },
  },
]);
