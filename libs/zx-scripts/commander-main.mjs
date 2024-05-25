/* eslint-disable no-console */
import clear from 'clear'
import { Command } from 'commander';
import kleur from 'kleur'

const program = new Command();

// const figlet = require('figlet')

// const { appPackageJson } = require('./paths.js')

// const getPkgName = () => {
//   const { name } = JSON.parse(fs.readFileSync(appPackageJson, 'utf8'))
//   return name.split('/')[1]
// }

// const viewIntro = (title, subtitle) => {
//   console.log('\n')
//   console.log(
//     kleur.green(
//       figlet.textSync(title, {
//         font: 'Standard',
//         horizontalLayout: 'default',
//         verticalLayout: 'default',
//       }),
//     ),
//   )

//   if (subtitle) {
//     console.log('\n')
//     console.log(kleur.bold().yellow().bgRed().italic(subtitle))
//   }
// }

program
  .command('setup')
  .description('Initialize your package to use web-scripts')
  .action(() => {
    throw new Error('unimplemented')
  })

program
  .command('dev')
  .description('Build your project into dist, and types folders by tsc (or webpack)')
  .option('-p, --package <name>', 'run app or lib dev server')
  .option('-a, --apps', 'select what apps run dev server')
  .option('-l, --libs', 'select what libraries build with watch')
  .action((options) => {
    clear()
    console.log('\n')
    console.log(kleur.bold().yellow().bgRed().italic('Starting...'))

    const { apps, libs, packageName } = options
    const task = {
      name: 'dev',
      packageName,
      apps,
      libs,
    }

    const { rootDevTask } = require('./dev.mjs')

    handlePromiseResult(rootDevTask(task))
  })

program
  .command('build')
  .allowUnknownOption()
  .description('Build your project into dist, and types folders by rollup (or webpack)')
  .option('--silent', 'silent mode output')
  .option('--all', 'build all packages')
  .option('--silent', 'silent mode output')
  .action((options) => {
    const { scope, silent, all } = options
    const task = {
      name: 'build',
      scope,
      silent,
      all,
    }

    const { rootBuildTask } = require('./build.mjs')

    handlePromiseResult(rootBuildTask(task))
  })

function handlePromiseResult(result) {
  result.catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

program.parse(process.argv)

if (process.argv.slice(2).length === 0) {
  program.help()
}
