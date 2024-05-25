Feature('Flights Results Page | @smoke')

const { I } = inject()

I.say(`Checking flights-results page with all logic`)

Scenario('Flights Results', ({ I, flightsPage, generalFragment }) => {
  flightsPage.open()
  generalFragment.waitForHydrationJs()
  I.say('_')
})

export {}
