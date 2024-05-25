#!/usr/bin/env node
import { $, chalk, fs, path } from 'zx'
import inquirer from 'inquirer'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 🔈 Quite mode
$.verbose = false

console.log(chalk.bgCyanBright('🚀 Launch '))

const scripts = await fs.readdir(path.join(__dirname, 'scripts'))

const payload = await inquirer.prompt([
  {
    type: 'list',
    name: 'scriptName',
    message: 'Select to script!',
    choices: scripts,
  },
])

await $`zx ${path.join(__dirname, 'scripts', payload.scriptName)}`.pipe(process.stdout)

console.log(`\n console.log -> ${chalk.blue('step #1')} \n`)
