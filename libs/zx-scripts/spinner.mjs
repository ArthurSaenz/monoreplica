import ora from 'ora'

// or --quiet
$.verbose = false

//#region -> Step #1
console.log('/n')
const spinner = ora({ text: 'Step 1: starting...' }).start()

await sleep(2000)

spinner.text = 'Step 1: processing ...'

await sleep(2000)

console.log(`\n console.log -> ${chalk.blue('step #1')} \n`)

await sleep(2000)

spinner.color = 'yellow'
spinner.succeed(`Step 1: ${chalk.blue('Finished!')}`)
//#endregion -> Step #1

console.log(`\n console.log -> ${chalk.blue('pause')} \n`)

spinner.start()
spinner.text = 'Step #2: processing...'

await sleep(2000)

spinner.color = 'yellow'
spinner.text = `Step #2: loading ${chalk.red('rainbows')}`

await sleep(2000)

spinner.succeed()

spinner.start()
spinner.color = 'green'
spinner.indent = 4
spinner.text = 'Loading with indent'

await sleep(2000)

spinner.succeed()

spinner.start()
spinner.indent = 0
spinner.spinner = 'moon'
spinner.text = 'Loading with different spinners'

await sleep(2000)

spinner.succeed()
