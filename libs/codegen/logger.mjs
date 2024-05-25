import { chalk } from 'zx'

const prefixes = {
  wait: chalk.cyan('wait') + '  -',
  error: chalk.red('error') + ' -',
  warn: chalk.yellow('warn') + '  -',
  ready: chalk.green('ready') + ' -',
  info: chalk.cyan('info') + '  -',
  event: chalk.magenta('event') + ' -',
  trace: chalk.magenta('trace') + ' -',
}

function wait(...message) {
  // eslint-disable-next-line testing-library/await-async-utils
  console.log(prefixes.wait, ...message)
}

function error(...message) {
  console.error(prefixes.error, ...message)
}

function warn(...message) {
  console.warn(prefixes.warn, ...message)
}

function ready(...message) {
  console.log(prefixes.ready, ...message)
}

function info(...message) {
  console.log(prefixes.info, ...message)
}

function event(...message) {
  console.log(prefixes.event, ...message)
}

function trace(...message) {
  console.log(prefixes.trace, ...message)
}

export const logger = {
  wait,
  error,
  warn,
  ready,
  info,
  event,
  trace,
}
