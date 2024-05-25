import { eachDayOfInterval, format, lastDayOfMonth } from 'date-fns'

// import { formatOptions } from '#root/entities/products'

export const formateDateDay = (relative: number, _absolute: number) => {
  // console.log({ _relative, absolute })
  return `${relative + 1}`
}

export const formatDateMonth = (relative: number, _absolute: number) => {
  return format(new Date(2000, relative), 'MMMM')
  // return format(new Date(2000, _relative), 'MMMM', formatOptions)
}

export const formatDateYear = (relative: number, _absolute: number) => {
  const currentYear = new Date().getFullYear()
  const year = currentYear - (99 - relative)
  return year.toString()
}

export const calculateLengthOfMonth = (yearIdx: number, monthIdx: number) => {
  const currentYear = new Date().getFullYear()
  const year = currentYear - (99 - yearIdx)

  const monthDate = new Date(year, monthIdx)

  return eachDayOfInterval({ start: monthDate, end: lastDayOfMonth(monthDate) }).length
}

export const parseDateString = (dateString: string) => {
  const [yearString, monthString, dayString] = dateString.split('-')
  const currentYear = new Date().getFullYear()
  const yearIndex = 99 - (currentYear - Number.parseInt(yearString as string))
  const monthIndex = Number.parseInt(monthString as string) - 1 // Months are 0-indexed
  const dayIndex = Number.parseInt(dayString as string) - 1 // Days are 0-indexed

  return [dayIndex, monthIndex, yearIndex]
}

export const formatDateFromIndexes = (dayIndex: number, monthIndex: number, yearIndex: number) => {
  const currentYear = new Date().getFullYear()
  const year = currentYear - (99 - yearIndex)
  const month = monthIndex + 1 // Months are 0-indexed
  const day = dayIndex + 1 // Days are 0-indexed

  // Pad month and day with leading zeros if necessary
  const monthString = month < 10 ? `0${month}` : `${month}`
  const dayString = day < 10 ? `0${day}` : `${day}`

  return `${year}-${monthString}-${dayString}`
}
