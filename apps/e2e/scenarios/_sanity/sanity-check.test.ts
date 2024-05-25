Feature('Sanity Check fo all pages | @smoke @dev')

const { I } = inject()

I.say(`When doing smoke testing over all page, should load them all successfully`)

Scenario('Flights Page', ({ I, flightsPage, generalFragment }) => {
  flightsPage.open()
  I.see('טיסות מומלצות בשבילך', 'h1')
  generalFragment.waitForHydrationJs()
})

Scenario('Packages page', ({ I, packagesPage, generalFragment }) => {
  packagesPage.open()
  I.see('חבילות נופש מומלצות בשבילך', 'h1')
  generalFragment.waitForHydrationJs()
})

export {}
