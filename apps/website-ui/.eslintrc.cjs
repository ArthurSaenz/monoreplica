/**
 * ESLint configuration
 *
 * @see https://eslint.org/docs/user-guide/configuring
 *
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: __dirname,
      },
    },
  },
  extends: ['@monorepo/eslint-config'],
}
