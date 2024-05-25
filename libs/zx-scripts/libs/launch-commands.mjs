import Debug from 'debug'

export async function launchCommands({ commands, task, scriptName }) {
  const dbg = Debug(scriptName)

  return Promise.all(
    commands.map(async (fn) => {
      dbg(`Beginning ${fn.name} task`)
      const result = await fn(task)
      dbg(`Finished ${fn.name} task`)
      return result
    }),
  )
}
