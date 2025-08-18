import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginJest from "eslint-plugin-jest";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["dist/**", "node_modules/**"],
    plugins: {
      js,
      jest: eslintPluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintPluginJest.configs.recommended.rules,
      semi: ["error", "always"],
      "eol-last": ["error", "always"],
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
