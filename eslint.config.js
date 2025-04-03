import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  {
    ignores: ["dist", "types", "**/*.pnp.*", ".yarn", "node_modules", "public"],
  },
  {
    ...js.configs.recommended,
    files: ["**/*.{ts,tsx,mjs,cjs}"],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: "latest",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
      },
    },
    settings: { react: { version: "19.0" } },

    plugins: {
      js,
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-compiler": reactCompiler,
      react,
      "unused-imports": unusedImports,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      "no-console": ["warn", { allow: ["error"] }],

      // react-compiler
      "react-compiler/react-compiler": "error",

      // @typescript-eslint
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      // react-refresh
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // unused-imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
    },
  },
];
