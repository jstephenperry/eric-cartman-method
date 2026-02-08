#!/usr/bin/env node

/**
 * Eric Cartman Method CLI
 * AI-driven Shape Up methodology for software development
 */

const { program } = require('commander');
const path = require('node:path');
const fs = require('node:fs');

// Load package.json for version
const packageJsonPath = path.join(__dirname, '..', '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Load command modules
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

const commands = {};
for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  commands[command.command] = command;
}

// Set up main program
program
  .name('ecm')
  .version(packageJson.version)
  .description('Eric Cartman Method - AI-driven Shape Up methodology');

// Register all commands
for (const [name, cmd] of Object.entries(commands)) {
  const command = program.command(name).description(cmd.description);

  // Add options if any
  if (cmd.options) {
    for (const option of cmd.options) {
      command.option(...option);
    }
  }

  // Set action
  command.action(cmd.action);
}

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (process.argv.slice(2).length === 0) {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║           Eric Cartman Method (ECM) v${packageJson.version}            ║
║       AI-driven Shape Up methodology for development      ║
╚═══════════════════════════════════════════════════════════╝

  "Fixed time, variable scope" - Respect my authority!

Commands:
  install    Install ECM agents and workflows into your project
  status     Show current cycle status and hill chart

Shape Up Phases:
  1. Shaping   - Shape problems and solutions before betting
  2. Betting   - Make strategic commitments at the betting table
  3. Building  - Execute with scopes and hill charts
  4. Cool-down - Bugs, tech debt, and exploration

For more info: ecm --help
`);
}
