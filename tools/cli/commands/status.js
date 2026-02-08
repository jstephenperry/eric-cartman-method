/**
 * ECM Status Command
 * Shows current cycle status and hill chart
 */

const fs = require('fs-extra');
const path = require('node:path');
const yaml = require('js-yaml');

// Simple color functions for terminals that support ANSI
const colors = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  blue: (s) => `\x1b[34m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  gray: (s) => `\x1b[90m${s}\x1b[0m`,
  white: (s) => `\x1b[37m${s}\x1b[0m`,
};

module.exports = {
  command: 'status',
  description: 'Show current cycle status and hill chart',
  options: [['-d, --dir <directory>', 'Project directory', process.cwd()]],
  action: async (options) => {
    const targetDir = path.resolve(options.dir);
    const ecmDir = path.join(targetDir, '_ecm');
    const outputDir = path.join(targetDir, '_ecm-output');

    console.log(colors.cyan('\n🎯 ECM Status\n'));

    // Check if installed
    if (!fs.existsSync(ecmDir)) {
      console.log(colors.yellow('⚠️  ECM not installed in this directory.'));
      console.log(colors.gray('Run `ecm install` first.\n'));
      process.exit(1);
    }

    try {
      // Load config
      const configPath = path.join(ecmDir, 'ecm', 'config.yaml');
      const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

      console.log(colors.white('Project:'), colors.green(config.project_name));
      console.log(colors.white('Cycle Type:'), colors.green(config.cycle_type));
      console.log();

      // Find active cycles
      const cyclesDir = path.join(outputDir, 'building', 'cycles');
      if (fs.existsSync(cyclesDir)) {
        const cycleDirs = fs.readdirSync(cyclesDir).filter((f) => {
          return fs.statSync(path.join(cyclesDir, f)).isDirectory();
        });

        if (cycleDirs.length > 0) {
          console.log(colors.cyan('📊 Active Cycles:\n'));

          for (const cycleDir of cycleDirs) {
            const statusPath = path.join(cyclesDir, cycleDir, 'cycle-status.yaml');
            if (fs.existsSync(statusPath)) {
              const cycleStatus = yaml.load(fs.readFileSync(statusPath, 'utf8'));
              displayCycleStatus(cycleStatus);
            }
          }
        } else {
          console.log(colors.gray('No active cycles. Start one with Cycle Planning (CP).\n'));
        }
      } else {
        console.log(colors.gray('No cycles yet. Start shaping with Shape Problem (SP).\n'));
      }

      // Count artifacts
      await displayArtifactCounts(outputDir);

      // Show available workflows
      console.log(colors.cyan('\n🔧 Available Workflows:\n'));
      console.log(colors.white('  Shaping:'));
      console.log(colors.gray('    SP - Shape Problem    BB - Breadboard'));
      console.log(colors.gray('    SS - Shape Solution   DR - De-Risk'));
      console.log(colors.gray('    WP - Write Pitch'));
      console.log(colors.white('  Betting:'));
      console.log(colors.gray('    BT - Betting Table    AS - Appetite Setting'));
      console.log(colors.white('  Building:'));
      console.log(colors.gray('    CP - Cycle Planning   DS - Dev Scope'));
      console.log(colors.gray('    CS - Create Scope     UH - Update Hill'));
      console.log(colors.gray('    CR - Code Review      CB - Circuit Breaker'));
      console.log(colors.white('  Cool-down:'));
      console.log(colors.gray('    BG - Bug Bash         TD - Tech Debt'));
      console.log(colors.gray('    EX - Exploration'));
      console.log(colors.white('  Quick Flow:'));
      console.log(colors.gray('    QS - Quick Spec       QD - Quick Dev'));
      console.log();
    } catch (error) {
      console.error(colors.red('Error:'), error.message);
      process.exit(1);
    }
  },
};

function displayCycleStatus(cycle) {
  console.log(colors.white(`  Cycle: ${cycle.cycle_id}`));
  console.log(colors.gray(`    Type: ${cycle.cycle_type}`));
  console.log(colors.gray(`    Pitch: ${cycle.pitch?.title || 'Unknown'}`));
  console.log(colors.gray(`    Dates: ${cycle.start_date} → ${cycle.end_date}`));
  console.log(colors.gray(`    Status: ${cycle.status}`));

  if (cycle.scopes && Object.keys(cycle.scopes).length > 0) {
    console.log(colors.white('\n    Hill Chart:'));
    displayHillChart(cycle.scopes);
  }

  console.log();
}

function displayHillChart(scopes) {
  // ASCII hill chart
  console.log(colors.gray('                     ╱╲'));
  console.log(colors.gray('                    ╱  ╲'));
  console.log(colors.gray('                   ╱    ╲'));
  console.log(colors.gray('                  ╱      ╲'));
  console.log(colors.gray('                 ╱        ╲'));
  console.log(colors.gray('                ╱          ╲'));
  console.log(colors.gray('               ╱            ╲'));
  console.log(colors.gray('              ╱              ╲'));
  console.log(colors.gray('             ╱                ╲'));
  console.log(colors.gray('            0   25   50   75   100'));
  console.log();

  for (const [name, scope] of Object.entries(scopes)) {
    const pos = scope.hill_position || 0;
    const status = pos < 50 ? 'uphill' : 'downhill';
    const color = pos === 100 ? colors.green : pos >= 50 ? colors.blue : colors.yellow;
    console.log(color(`      ${name}: ${pos}/100 (${status})`));
  }
}

async function displayArtifactCounts(outputDir) {
  const counts = {
    problems: 0,
    solutions: 0,
    pitches: 0,
    scopes: 0,
  };

  const shapingDir = path.join(outputDir, 'shaping');
  const buildingDir = path.join(outputDir, 'building');

  if (fs.existsSync(path.join(shapingDir, 'problems'))) {
    counts.problems = fs.readdirSync(path.join(shapingDir, 'problems')).length;
  }
  if (fs.existsSync(path.join(shapingDir, 'solutions'))) {
    counts.solutions = fs.readdirSync(path.join(shapingDir, 'solutions')).length;
  }
  if (fs.existsSync(path.join(shapingDir, 'pitches'))) {
    counts.pitches = fs.readdirSync(path.join(shapingDir, 'pitches')).length;
  }

  console.log(colors.cyan('📁 Artifacts:\n'));
  console.log(colors.gray(`  Problems: ${counts.problems}`));
  console.log(colors.gray(`  Solutions: ${counts.solutions}`));
  console.log(colors.gray(`  Pitches: ${counts.pitches}`));
}
