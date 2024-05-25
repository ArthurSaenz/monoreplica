import inquirer from 'inquirer'
import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt'
import { argv } from 'zx'

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)

export const getInputParam = async ({ nameField, message, type = 'input' }) => {
  if (argv?.[nameField]) return Promise.resolve(argv?.[nameField])

  let payload

  if (type === 'list') {
    payload = await inquirer.prompt([
      {
        type: 'list',
        message: message,
        name: nameField,
        choices: ['component', 'entity', 'feature', 'lib', 'page'],
      },
    ])
  }

  if (type === 'location') {
    payload = await inquirer.prompt([
      {
        type: 'file-tree-selection',
        name: nameField,
        message: message,
        onlyShowDir: true,
      },
    ])
  }

  if (type === 'input') {
    payload = await inquirer.prompt([
      {
        type: 'input',
        message: message,
        name: nameField,
      },
    ])
  }

  // console.log(payload)

  return payload[nameField]
}

export { inquirer }
