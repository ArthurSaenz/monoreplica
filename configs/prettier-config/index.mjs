import sortImportPlugin from '@trivago/prettier-plugin-sort-imports'

/**
 * Prettier configuration
 *
 * @see https://prettier.io/docs/en/configuration

 *
 * @type {import("prettier").Options}
 */
const config = {
  printWidth: 120,
  tabWidth: 2,
  // useTabs: false,
  semi: false,
  singleQuote: true,
  // jsxSingleQuote: false,
  trailingComma: 'all',
  // bracketSpacing: true,
  // jsxBracketSameLine: false,
  arrowParens: 'always',
  // rangeStart: 0,
  // rangeEnd: Infinity,
  // requirePragma: false,
  // insertPragma: false,
  // proseWrap: 'preserve',
  // htmlWhitespaceSensitivity: 'css',
  // quoteProps: 'as-needed',
  endOfLine: 'auto',
  importOrder: [
    '^@monorepo/(.*)$',
    '^#root/entities/(.*)$',
    '^#root/features/(.*)$',
    '^#root/pages/(.*)$',
    '^#root/shared/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  /**
   * @see https://github.com/trivago/prettier-plugin-sort-imports/blob/master/docs/TROUBLESHOOTING.md#q-why-the-plugin-does-not-work-with-pnpm--or-why-do-i-see-the-warn-ignored-unknown-option-
   */
  plugins: [sortImportPlugin],
}

export default config
