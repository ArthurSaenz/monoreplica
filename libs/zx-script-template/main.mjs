import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { $ } from 'zx'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const generateCode = async ({ type, params }) => {
  // TODO: add validation

  const paramsList = []

  for (const [key, value] of Object.entries(params)) {
    paramsList.push(`--${key}=${value}`)
  }

  // console.log('paramsList', paramsList)

  await $`HYGEN_TMPLS=${__dirname}/_templates hygen ${type} new ${paramsList}`

  console.log('\n')
  logger.ready(`${type} was invoked successfully!`)

  return undefined
}
