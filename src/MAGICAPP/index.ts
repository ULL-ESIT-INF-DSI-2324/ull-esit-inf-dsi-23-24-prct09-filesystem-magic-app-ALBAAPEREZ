import yargs from 'yargs';
import { CommandHandler } from './CommandHandler.js';

// Pasamos yargs a CommandHandler.addCommand
const command = CommandHandler.addCommand(yargs(process.argv.slice(2)));

command
    .scriptName('magic-app')
    .usage('$0 <cmd> [args]')
    // Add other commands here using CommandHandler methods
    .demandCommand(1, 'You need at least one command before moving on')
    .help()
    .argv;