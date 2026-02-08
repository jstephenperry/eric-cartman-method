#!/usr/bin/env node

/**
 * ECM Agent Schema Validator
 * Validates all agent YAML files against the schema
 */

const fs = require('fs-extra');
const path = require('node:path');
const yaml = require('js-yaml');
const { glob } = require('glob');
const { validateAgentWithErrors, checkDuplicateTriggers } = require('./schema/agent');

// Simple color functions for terminals that support ANSI
const colors = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  gray: (s) => `\x1b[90m${s}\x1b[0m`,
  white: (s) => `\x1b[37m${s}\x1b[0m`,
};

async function main() {
  console.log(colors.cyan('\n🔍 ECM Agent Schema Validation\n'));

  const srcDir = path.join(__dirname, '..', 'src');
  const agentPattern = path.join(srcDir, '**', '*.agent.yaml');

  // Find all agent files
  const agentFiles = await glob(agentPattern, { windowsPathsNoEscape: true });

  if (agentFiles.length === 0) {
    console.log(colors.yellow('No agent files found.'));
    process.exit(0);
  }

  console.log(colors.gray(`Found ${agentFiles.length} agent file(s)\n`));

  let hasErrors = false;
  let validCount = 0;
  let invalidCount = 0;

  for (const filePath of agentFiles) {
    const relativePath = path.relative(srcDir, filePath);

    try {
      // Load and parse YAML
      const content = fs.readFileSync(filePath, 'utf8');
      const agentData = yaml.load(content);

      // Validate against schema
      const result = validateAgentWithErrors(agentData);

      if (!result.valid) {
        hasErrors = true;
        invalidCount++;
        console.log(colors.red(`✗ ${relativePath}`));

        for (const error of result.errors) {
          console.log(colors.gray(`  → ${error.path}: ${error.message}`));
        }
        console.log();
        continue;
      }

      // Check for duplicate triggers
      const duplicates = checkDuplicateTriggers(agentData.agent.menu);
      if (duplicates.length > 0) {
        hasErrors = true;
        invalidCount++;
        console.log(colors.red(`✗ ${relativePath}`));
        console.log(colors.gray(`  → Duplicate triggers: ${duplicates.join(', ')}`));
        console.log();
        continue;
      }

      validCount++;
      console.log(colors.green(`✓ ${relativePath}`));
    } catch (error) {
      hasErrors = true;
      invalidCount++;
      console.log(colors.red(`✗ ${relativePath}`));
      console.log(colors.gray(`  → Parse error: ${error.message}`));
      console.log();
    }
  }

  // Summary
  console.log();
  console.log(colors.cyan('━'.repeat(50)));
  console.log(colors.white(`Valid:   ${validCount}`));
  console.log(colors.white(`Invalid: ${invalidCount}`));
  console.log(colors.cyan('━'.repeat(50)));

  if (hasErrors) {
    console.log(colors.red('\n❌ Validation failed\n'));
    process.exit(1);
  } else {
    console.log(colors.green('\n✅ All agents valid\n'));
    process.exit(0);
  }
}

main().catch((error) => {
  console.error(colors.red('Error:'), error.message);
  process.exit(1);
});
