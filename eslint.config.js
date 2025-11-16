// eslint.config.js

import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  // Ignore patterns (instead of .eslintignore)
  {
    ignores: [
      "**/dist/**",
      "**/build/**",
      "**/.next/**",
      "**/node_modules/**",
      "**/coverage/**",
    ],
  },

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
      },
    },

    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },

    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: true,
      },
    },

    rules: {
      //
      // Import rules
      //
      "import/newline-after-import": ["error", { count: 1 }],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          "newlines-between": "always",
        },
      ],

      //
      // Spacing — blank line before return
      //
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],

      //
      // TypeScript
      //
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      //
      // React
      //
      "react/react-in-jsx-scope": "off",

      //
      // Prettier
      //
      ...prettier.rules,
    },
  },
];
