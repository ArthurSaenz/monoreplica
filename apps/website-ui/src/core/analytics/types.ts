export enum EAnalyticsCategory {
  Home = 'Home',
  Categories = 'Categories',
  Common = 'Common',
  Other = 'Other',
  // Static pages
  Accessibility = 'Accessibility statement page',
  TermsAndConditions = 'Terms and conditions',
  // Common
  About = 'About',
  ForAllPages = 'For all pages',
  Layout = 'Header, Footer, Menu',
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: Record<string, unknown>[] & { hide?: any }
  }
}
