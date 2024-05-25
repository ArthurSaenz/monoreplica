/**
 * @see https://github.com/swc-project/jest
 */
const swcConfig = {
  jsc: {
    target: 'es2021',
    parser: {
      syntax: 'typescript',
      tsx: true,
    },
    transform: {
      react: {
        runtime: 'automatic',
      },
    },
  },
}

/**
 * Jest configuration
 *
 * @see https://jestjs.io/docs/ecmascript-modules#differences-between-esm-and-commonjs
 * @see https://jestjs.io/docs/en/configuration
 * noinspection JSValidateJSDoc
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  displayName: 'website-ui',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { ...swcConfig }],
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    // '^assets/(.*)$': '<rootDir>/src/assets/$1',
    // '^features/(.*)$': '<rootDir>/src/features/$1',
    // '^pages/(.*)$': '<rootDir>/src/pages/$1',
    // '^shared/(.*)$': '<rootDir>/src/shared/$1',

    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
}

export default config
