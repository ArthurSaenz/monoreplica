/**
 * ESLint configuration
 *
 * @see https://eslint.org/docs/user-guide/configuring
 *
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ["@monorepo/eslint-config"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ["./tsconfig.json"],
      },
    },
  },
};
