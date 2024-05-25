import { faker } from '@faker-js/faker'

import { SearchGroup } from '../types'

const optionsFrom = ['TLV']
const optionsTo = [
  'ATH',
  'TLV',
  'BUD',
  'LON',
  'IST',
  'DXB',
  'BUH',
  'BKK',
  'ROM',
  'AMS',
  'NYC',
  'PAR',
  'PRG',
  'BUS',
  'LCA',
  'BCN',
  'SOF',
  'PFO',
  'TBS',
  'WAW',
  'MAD',
  'VIE',
  'HER',
  'MIL',
  'AYT',
  'HKT',
  'BER',
  'LIS',
]
const optionsGroup = Object.values(SearchGroup)

export const generateResultsUrls = () => {
  const urlsList: string[] = []

  optionsFrom.forEach((from) => {
    optionsTo.forEach((to) => {
      optionsGroup.forEach((searchGroup) => {
        const searchGroupFields = generateSearchGroup(searchGroup)

        const [fromDate, toDate] = generateDatesRange()

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const queryParams = new URLSearchParams({
          directFlightsOnly: 'false',
          from,
          to,
          fromDate,
          toDate,
          ...searchGroupFields,
        }).toString()

        urlsList.push(`/flightsResults?${queryParams}`)
      })
    })
  })

  return urlsList
}

export const generateDatesRange = () => {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(today.getDate() + 1)

  // faker.date.betweens('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z', 2)
  const fromDate = faker.date.soon({ days: 30, refDate: tomorrow })

  const toDate = faker.date.soon({ days: 15, refDate: fromDate })

  return [fromDate.toISOString().slice(0, 10), toDate.toISOString().slice(0, 10)]
}

export function generateSearchGroup(searchGroup: SearchGroup) {
  if (searchGroup === SearchGroup.Couple) {
    return {
      adults: 2,
      infants: 0,
      children: 0,
      seniors: 0,
    }
  }

  if (searchGroup === SearchGroup.Single) {
    return {
      adults: 1,
      infants: 0,
      children: 0,
      seniors: 0,
    }
  }

  if (searchGroup === SearchGroup.BigGroup) {
    return {
      children: 0, // Only 0
      adults: faker.number.int({ min: 2, max: 4 }),
      infants: 0,
      seniors: faker.number.int({ min: 1, max: 3 }),
    }
  }

  // searchGroup === SearchGroup.Family
  return {
    children: faker.number.int({ min: 1, max: 2 }),
    adults: faker.number.int({ min: 1, max: 3 }),
    infants: faker.number.int({ min: 0, max: 1 }),
    seniors: faker.number.int({ min: 1, max: 3 }),
  }
}
