Feature('Packages Results Page | @smoke')

const { I } = inject()

I.say(`Checking packages-results page with all logic`)

Scenario('Flights Results', ({ I, packagesPage, generalFragment }) => {
  packagesPage.open()
  generalFragment.waitForHydrationJs()
  I.say('_')
})

export {}
