import fs from 'fs'
import inquirer from 'inquirer'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { $, YAML, argv } from 'zx'

// 🔈 Quite mode
// $.verbose = false

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//#region Constants
const CONFIG_FILE_NAME = 'e2e-config.yml'

//#endregion Constants

//#region Read the config file

// Get document, or throw exception on error
let configFile = null

try {
  configFile = YAML.parse(fs.readFileSync(resolve(__dirname, '../', CONFIG_FILE_NAME), 'utf-8'))
} catch (error) {
  throw new Error('Config file was not read!')
}
//#endregion Read the config file

//#region General utils
const getParam = async ({ nameField }) => {
  if (argv?.[nameField]) return Promise.resolve([argv?.[nameField]])

  const options = []

  for (const tagsGroup in configFile[nameField]) {
    options.push(new inquirer.Separator(` = ${tagsGroup} = `))

    for (const option of configFile[nameField][tagsGroup]) {
      options.push({ name: option })
    }
  }

  const payload = await inquirer.prompt([
    {
      type: 'checkbox',
      message: `Select: ${nameField} \n`,
      name: nameField,
      choices: options,
      validate: (input) => {
        if (input.length === 0) {
          return 'This field is required. Please enter a value.'
        }
        return true
      },
    },
  ])

  return payload[nameField]
}
//#endregion General utils

//#region Launching the script
const tagsList = await getParam({ nameField: 'Tags Group' })

// console.log(tagsList)

if (tagsList.length > 0) {
  const tags = tagsList.join('|')

  await $`codeceptjs run --grep ${new RegExp(tags)}`.pipe(process.stdout)
} else {
  await $`codeceptjs run`.pipe(process.stdout)
}
//#endregion Launching the script
