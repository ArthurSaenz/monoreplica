Feature('Flights Search | @smoke')

const { I } = inject()

I.say(`Checking flights search widget and logic of redirect`)

Scenario('Flights Search Widget', ({ I, flightsPage, generalFragment }) => {
  flightsPage.open()
  generalFragment.waitForHydrationJs()
  I.say('_')
})

export {}
