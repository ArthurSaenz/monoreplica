---
id: code-quality
title: Code quality
---

## Eslint

ESLint Config consists many ESLint presets. They are designed to work with each other without any conflicts for much more convenient projects developing.

Default ESLint module resolution behavior doesn't allow doing it this way. The patch preset fixes this problem. It uses @rushstack/eslint-patch under the hood.
The base preset encapsulates some base plugins and rules. Tested on production!

- ⚡️ Easy and fast installation.
- ⚙️ Only necessary rules to provide error checking and readability improving.
- 🧩 Modular usage. Easily combine presets for the different technologies.
- 🔗 Almost conflict free.

### Plugins

- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

### Installation

```sh
pnpm add eslint @typescript-eslint/parser @monorepo/eslint-config -D
```

After installing, update your project's ESLint config of `.eslintrc.js`:

```js
module.exports = {
  extends: ['@monorepo/eslint-config'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
      },
    },
  },
}
```

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

---

## Stylelint

---

## Prettier
