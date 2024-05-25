import { promises } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

async function replaceInFile(pathFile, lines) {
  try {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    const filenameToReplace = join(__dirname, pathFile)

    const contents = await promises.readFile(filenameToReplace, 'utf-8')

    let replaced = contents

    for (const [lineReplace, lineToReplace] of lines) {
      replaced = replaced.replace(lineReplace, lineToReplace)
    }

    await promises.writeFile(filenameToReplace, replaced)

    console.log('\n')
    console.log('✅ Replacement was completed successfully! ' + pathFile)
  } catch (err) {
    console.log(err)
  }
}

const replacementFiles = [
  [
    '../apps/website/.env',
    [
      ['VITE_DOMAIN_ENV=dev', 'VITE_DOMAIN_ENV=prod'],
      ['VITE_API_GATEWAY=https://apigw-dev.travelist.co.il', 'VITE_API_GATEWAY=https://apigw.travelist.co.il'],
    ],
  ],
  ['../libs/analytics/.env', [['# VITE_MOBILE_APP=true', 'VITE_MOBILE_APP=true']]],
  [
    '../libs/core-types/.env',
    [
      ['VITE_DOMAIN_ENV=dev', 'VITE_DOMAIN_ENV=prod'],
      ['VITE_API_GATEWAY=https://apigw-dev.travelist.co.il', 'VITE_API_GATEWAY=https://apigw.travelist.co.il'],
      ['# VITE_MOBILE_APP=true', 'VITE_MOBILE_APP=true'],
    ],
  ],
  [
    '../libs/general-config/.env',
    [
      ['VITE_DOMAIN_ENV=dev', 'VITE_DOMAIN_ENV=prod'],
      ['VITE_API_GATEWAY=https://apigw-dev.travelist.co.il', 'VITE_API_GATEWAY=https://apigw.travelist.co.il'],
      ['# VITE_MOBILE_APP=true', 'VITE_MOBILE_APP=true'],
    ],
  ],
  [
    '../libs/search-widget/.env',
    [
      ['VITE_DOMAIN_ENV=dev', 'VITE_DOMAIN_ENV=prod'],
      ['VITE_API_GATEWAY=https://apigw-dev.travelist.co.il', 'VITE_API_GATEWAY=https://apigw.travelist.co.il'],
    ],
  ],
  ['../libs/shared/.env', [['# VITE_MOBILE_APP=true', 'VITE_MOBILE_APP=true']]],
]

const p = replacementFiles.map(async ([filePath, stingOrigin, stringNew]) => {
  await replaceInFile(filePath, stingOrigin, stringNew)
})

await Promise.all(p)
