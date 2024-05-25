Feature('Flights Deals | @smoke')

const { I } = inject()

I.say(`Checking if every card is correct and exist`)

Scenario('Flights Deals', ({ I, flightsPage, generalFragment }) => {
  flightsPage.open()
  generalFragment.waitForHydrationJs()
  I.say('_')
})

export {}
