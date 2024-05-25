require('ts-node/register')

require('dotenv').config()

const { setHeadlessWhen } = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

/**@type {CodeceptJS.MainConfig}**/
exports.config = {
  tests: './scenarios/**/*test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.TARGET || 'https://localhost',
      show: true,
      browser: 'chromium',
      ignoreHTTPSErrors: true,
      waitForNavigation: 'domcontentloaded',
    },
    CustomHelper: {
      require: './helpers/custom-helper.ts',
    },
  },
  include: {
    flightsPage: './pages/flights-page.ts',
    packagesPage: './pages/packages-page.ts',
    generalFragment: './fragments/general-fragment.ts',
    generatorFragment: './fragments/generator-fragment.ts',
  },
  bootstrap: null,
  mocha: {},
  name: 'E2E',
  // rerun: {
  //   // how many times all tests should pass
  //   minSuccess: 1,

  //   // how many times to try to rerun all tests
  //   maxReruns: 4,
  // },
  plugins: {
    customLocator: {
      enabled: true,
    },
    commentStep: {
      enabled: true,
      registerGlobal: true,
    },
    pauseOnFail: {},
    tryTo: {
      enabled: true,
      registerGlobal: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
}
