Feature('Packages Search | @smoke')

const { I } = inject()

I.say(`Checking packages search widget and logic of redirect`)

Scenario('Packages Search Widget', ({ I, packagesPage, generalFragment }) => {
  packagesPage.open()
  generalFragment.waitForHydrationJs()
  I.say('_')
})

export {}
