module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    project: "tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
}
