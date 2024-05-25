// Its not needed for ZX! Just example!
import { Command } from 'commander/esm.mjs'

//#region Commander init
const program = new Command()

program.option('-h, --help', 'output help information')

program.parse(process.argv)

const options = program.opts()
//#endregion Commander init
