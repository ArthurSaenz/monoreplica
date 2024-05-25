#!/usr/bin/env node
import { $, question, argv } from 'zx'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

let payload = argv.type

if (!payload) {
  payload = await question('Choose what to launch: ', {
    choices: ['server', 'client'],
  })
}

if (payload === 'client') {
  await $`zx ${__dirname}/lighthouse-client.md`
} else if (payload === 'server') {
  await $`zx ${__dirname}/lighthouse-server.md`
}
