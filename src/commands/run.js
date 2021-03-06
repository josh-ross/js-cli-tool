const {Command, flags} = require('@oclif/command')

class RunCommand extends Command {
  async run() {
    const {flags} = this.parse(RunCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/joshross/Documents/Github/js-cli-tool/src/commands/run.js`)
  }
}

RunCommand.description = `Describe the command here
...
Extra documentation goes here
`

RunCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = RunCommand
