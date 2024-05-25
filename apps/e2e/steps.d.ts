/// <reference types='codeceptjs' />
type flightsPage = typeof import('./pages/flights-page')
type packagesPage = typeof import('./pages/packages-page')
type generalFragment = typeof import('./fragments/general-fragment')
type generatorFragment = typeof import('./fragments/generator-fragment')
type CustomHelper = import('./helpers/custom-helper')

declare namespace CodeceptJS {
  interface SupportObject {
    I: I
    current: any
    flightsPage: flightsPage
    packagesPage: packagesPage
    generalFragment: generalFragment
    generatorFragment: generatorFragment
  }
  interface Methods extends Playwright, CustomHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
