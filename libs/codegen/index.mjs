#!/usr/bin/env node
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { $ } from 'zx'

import { getInputParam } from './libs.mjs'
import { logger } from './logger.mjs'

// 🔈 Quite mode
$.verbose = false

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//#region Constants
const GET_TYPES = {
  COMPONENT: 'component',
}
//#endregion Constants

//#region Declaration generation functions
const generateCode = async ({ type, params }) => {
  // TODO: add validation

  const paramsList = []

  for (const [key, value] of Object.entries(params)) {
    paramsList.push(`--${key}=${value}`)
  }

  // console.log('paramsList', paramsList)

  await $`HYGEN_TMPLS=${__dirname}/_templates hygen ${type} new ${paramsList}`

  console.log('\n')
  logger.ready(`${type} was generated successfully!`)

  return undefined
}
//#endregion Declaration generation functions

//#region Main executing
const type = await getInputParam({
  nameField: 'type',
  message: 'Select type',
  type: 'list',
  extraParams: { choices: ['component', 'entity', 'feature', 'lib', 'page'] },
})

if (type === GET_TYPES.COMPONENT) {
  const pathname = await getInputParam({
    nameField: 'pathname',
    message: 'Select or type location of generation',
    type: 'location',
  })

  const name = await getInputParam({
    nameField: 'name',
    message: 'Input component name in CamelCase for generation',
    type: 'input',
  })

  const prefixTitleStory = await getInputParam({
    nameField: 'prefixTitleStory',
    message: 'Input the title in Storybook story',
    type: 'input',
  })

  await generateCode({ type: GET_TYPES.COMPONENT, params: { pathname, name, prefixTitleStory } })
}
//#endregion Main executing
