#!/usr/bin/env node
import { $ } from 'zx'

import { getInputParam } from './libs.mjs'

// 🔈 Quite mode
$.verbose = false

//#region Constants
const PARAMS = {
  OPTION_1: 'option-1',
}
//#endregion Constants

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

  await generateCode({ type: PARAMS.COMPONENT, params: { pathname, name, prefixTitleStory } })
}
//#endregion Main executing
