// import assert from 'assert'
// import { devices } from 'playwright'

// Feature('Search page | @search')

// const matchedValueParams = ['Property1', 'Property2']

// Data(matchedValueParams).Scenario('User should see correct result -> (desktop)', async ({ I, current }) => {
//   I.say('Check the titles')
//   I.amOnPage(`/search=${current}`)

//   I.see('Your Search Results for', '$search-result-title')
//   I.see('’' + current + '’', '$search-result-subtitle')

//   I.dontSee('$info-title')
//   I.waitForHydrationJs()

//   const numberOfElements = await I.grabNumberOfVisibleElements('$products-item')

//   assert.equal(numberOfElements > 0, true)

//   I.see('Filters')
// })

// Data(matchedValueParams).Scenario('User should see correct result -> (mobile)', ({ I, current }) => {
//   session('Mobile view', { ...devices['iPhone 11'], ignoreHTTPSErrors: true }, async () => {
//     I.say('Check the titles')
//     I.amOnPage(`/search=${current}`)

//     I.see('Your Search Results for', '$search-result-title')
//     I.see('’' + current + '’', '$search-result-subtitle')

//     I.dontSee('$info-title')
//     I.waitForHydrationJs()

//     const numberOfElements = await I.grabNumberOfVisibleElements('$products-item')

//     assert.equal(numberOfElements > 0, true)

//     I.see('Filters')
//   })
// })

export {}
