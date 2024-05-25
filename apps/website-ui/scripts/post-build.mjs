import 'dotenv/config'
import { exec } from 'node:child_process'
import util from 'node:util'

const execFn = util.promisify(exec)

const launchScript = async (script) => {
  const { stdout, stderr } = await execFn(script)

  console.log('\n', stdout)
  if (stderr) console.error('stderr:', stderr)
}

if (process.env.VITE_MOBILE_APP !== 'true') {
  console.log('Web bundling!')
  await launchScript('pnpm run generate-sitemap')
  await launchScript('pnpm run generate-robots')
  await launchScript('pnpm run remove-source-map')
} else {
  console.log('Mobile bundling!')
}
