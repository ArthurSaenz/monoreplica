const { I } = inject()

export = {
  waitForHydrationJs() {
    // await this.helpers.Playwright.page.waitForElement('[data-test-id="hydration-comp"][data-test-is-ready="true"]', 10)
    I.waitForFunction(() => window._e2eData.isReadyHydration, 7)
  },
}
