/**
 * ECM Install Command
 * Installs ECM agents and workflows into a project
 */

const fs = require('fs-extra');
const path = require('node:path');

// Simple color functions for terminals that support ANSI
const colors = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  gray: (s) => `\x1b[90m${s}\x1b[0m`,
  white: (s) => `\x1b[37m${s}\x1b[0m`,
};

// Simple spinner
const createSpinner = (text) => {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  let interval;
  return {
    start() {
      process.stdout.write('\n');
      interval = setInterval(() => {
        process.stdout.write(`\r${frames[i++ % frames.length]} ${this.text}`);
      }, 80);
      return this;
    },
    text,
    succeed(msg) {
      clearInterval(interval);
      process.stdout.write(`\r${colors.green('✓')} ${msg}\n`);
    },
    fail(msg) {
      clearInterval(interval);
      process.stdout.write(`\r${colors.red('✗')} ${msg}\n`);
    },
  };
};

module.exports = {
  command: 'install',
  description: 'Install ECM agents and workflows into your project',
  options: [
    ['-d, --dir <directory>', 'Target directory for installation', process.cwd()],
    ['-f, --force', 'Overwrite existing installation'],
  ],
  action: async (options) => {
    const targetDir = path.resolve(options.dir);
    const ecmDir = path.join(targetDir, '_ecm');

    console.log(colors.cyan('\n🎯 Eric Cartman Method Installation\n'));
    console.log(colors.gray(`Target: ${targetDir}`));

    // Check if already installed
    if (fs.existsSync(ecmDir) && !options.force) {
      console.log(colors.yellow('\n⚠️  ECM already installed in this directory.'));
      console.log(colors.gray('Use --force to overwrite.\n'));
      process.exit(1);
    }

    const spinner = createSpinner('Installing ECM...');
    spinner.start();

    try {
      // Get source directory (the src folder in this package)
      const srcDir = path.join(__dirname, '..', '..', '..', 'src');

      // Create _ecm directory
      await fs.ensureDir(ecmDir);

      // Copy core module
      spinner.text = 'Installing core module...';
      await fs.copy(path.join(srcDir, 'core'), path.join(ecmDir, 'core'));

      // Copy ecm module
      spinner.text = 'Installing ECM module...';
      await fs.copy(path.join(srcDir, 'ecm'), path.join(ecmDir, 'ecm'));

      // Create config files
      spinner.text = 'Creating configuration...';
      await createConfig(ecmDir, targetDir);

      // Create output directories
      spinner.text = 'Creating output directories...';
      const outputDir = path.join(targetDir, '_ecm-output');
      await fs.ensureDir(path.join(outputDir, 'shaping'));
      await fs.ensureDir(path.join(outputDir, 'building'));
      await fs.ensureDir(path.join(outputDir, 'shaping', 'problems'));
      await fs.ensureDir(path.join(outputDir, 'shaping', 'solutions'));
      await fs.ensureDir(path.join(outputDir, 'shaping', 'breadboards'));
      await fs.ensureDir(path.join(outputDir, 'shaping', 'de-risk'));
      await fs.ensureDir(path.join(outputDir, 'shaping', 'pitches'));
      await fs.ensureDir(path.join(outputDir, 'shaping', 'betting'));
      await fs.ensureDir(path.join(outputDir, 'shaping', 'exploration'));
      await fs.ensureDir(path.join(outputDir, 'shaping', 'quick-specs'));
      await fs.ensureDir(path.join(outputDir, 'building', 'cycles'));
      await fs.ensureDir(path.join(outputDir, 'building', 'cooldown'));
      await fs.ensureDir(path.join(outputDir, 'building', 'quick-flow'));

      // Generate Claude commands for native AI integration
      spinner.text = 'Generating AI commands...';
      const claudeDir = path.join(targetDir, '.claude');
      await generateClaudeCommands(ecmDir, claudeDir);

      spinner.succeed('ECM installed successfully!');

      console.log(colors.green('\n✅ Installation complete!\n'));
      console.log(colors.white('ECM Structure:'));
      console.log(colors.gray(`  ${ecmDir}/`));
      console.log(colors.gray('  ├── core/           Core framework'));
      console.log(colors.gray('  └── ecm/            Shape Up module'));
      console.log(colors.gray(`  ${outputDir}/`));
      console.log(colors.gray('  ├── shaping/        Pitches, problems, etc.'));
      console.log(colors.gray('  └── building/       Cycles, scopes, etc.'));
      console.log(colors.gray(`  ${claudeDir}/`));
      console.log(colors.gray('  └── commands/ecm/   AI tool commands'));

      console.log(colors.cyan('\n🚀 Next Steps:'));
      console.log(colors.white('  Open this project in Claude Code, Cursor, or another AI tool.'));
      console.log(colors.white('  Then invoke ECM workflows by saying:'));
      console.log(colors.gray('    - "SP" to shape a problem with Maya'));
      console.log(colors.gray('    - "WP" to write a pitch with Parker'));
      console.log(colors.gray('    - "BT" to run the betting table'));
      console.log(colors.gray('    - "CP" to start a cycle'));
      console.log(colors.gray('    - "DS" to develop a scope'));
      console.log(colors.gray('    - "CB" to run the circuit breaker'));

      console.log(colors.cyan('\n🤖 AI Tool Integration:'));
      console.log(colors.white('  Commands appear in Claude Code command palette (search "ecm").'));
      console.log(colors.white('  Or invoke agents directly:'));
      console.log(colors.gray('    "Load @_ecm/ecm/agents/shaper.agent.yaml and embody Maya"'));

      console.log(colors.gray('\nSee CLAUDE.md for full AI integration guide.\n'));
    } catch (error) {
      spinner.fail('Installation failed');
      console.error(colors.red('\nError:'), error.message);
      process.exit(1);
    }
  },
};

async function createConfig(ecmDir, projectDir) {
  const coreConfig = {
    user_name: 'Cartman',
    communication_language: 'English',
    document_output_language: 'English',
    output_folder: '_ecm-output',
  };

  const ecmConfig = {
    project_name: path.basename(projectDir),
    user_skill_level: 'intermediate',
    cycle_type: 'big-batch',
    shaping_artifacts: '_ecm-output/shaping',
    building_artifacts: '_ecm-output/building',
    project_knowledge: 'docs',
    ...coreConfig,
  };

  await fs.writeFile(
    path.join(ecmDir, 'core', 'config.yaml'),
    generateYaml(coreConfig),
    'utf8'
  );

  await fs.writeFile(
    path.join(ecmDir, 'ecm', 'config.yaml'),
    generateYaml(ecmConfig),
    'utf8'
  );
}

function generateYaml(obj) {
  let yaml = '# ECM Configuration\n# Generated by ecm install\n\n';
  for (const [key, value] of Object.entries(obj)) {
    yaml += `${key}: "${value}"\n`;
  }
  return yaml;
}

async function generateClaudeCommands(ecmDir, claudeDir) {
  const { AgentCommandGenerator } = require('../installers/lib/ide/agent-command-generator');
  const { WorkflowCommandGenerator } = require('../installers/lib/ide/workflow-command-generator');

  // Generate agent commands
  const agentGen = new AgentCommandGenerator(ecmDir, claudeDir);
  await agentGen.generate();

  // Generate workflow commands
  const workflowGen = new WorkflowCommandGenerator(ecmDir, claudeDir);
  await workflowGen.generate();
}
