const {Command} = require('@oclif/command')

class RunCommand extends Command {
  async run() {
    const {args} = this.parse(RunCommand)
    const file = args.file
    this.log(`js file path is: ${file}`)
  }
}

RunCommand.description = 'Run a JS file in a secure isolated process or thread'

RunCommand.args = [{
  name: 'file',
  description: 'path to js file to run',
  required: true,
}]

module.exports = RunCommand
