// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  parser: "@typescript-eslint/parser",
  env: {
    es6: true
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  extends: [
    "plugin:@next/next/recommended",
    // "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:styled-components-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
  ],
  plugins: [
    "better-styled-components",
    "styled-components-a11y",
    "simple-import-sort",
    "import",
    "jsx-a11y",
    "@typescript-eslint",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "sort-imports": "off",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "warn",
    "import/order": "off",
    "prettier/prettier": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/no-unescaped-entities": "off",
    "ban-ts-ignore": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-case-declarations": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/heading-has-content": "off"
  },
  globals: {
    React: "writable"
  }
});
