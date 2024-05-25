Feature('Packages Deals | @smoke')

const { I } = inject()

I.say(`Checking if every card is correct and exist`)

Scenario('Packages deals', ({ I, packagesPage, generalFragment }) => {
  packagesPage.open()
  generalFragment.waitForHydrationJs()
  I.say('_')
})

export {}
