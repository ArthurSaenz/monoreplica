Feature('Flights Results Pages | @performance')

const { I, generatorFragment } = inject()

I.say(`Performance testing and making data for metrics`)

const urls = new DataTable(['url'])

generatorFragment.generateResultsUrls().forEach((element) => {
  urls.add([element])
})

Data(urls).Scenario('Flights Results', ({ I, current }) => {
  I.amOnPage(current.url)
  I.waitForResponse((response) => response.url().includes('/v1/flights/startsearch') && response.status() === 200, 15)
  I.say('--> ' + current.url)
})

export {}
