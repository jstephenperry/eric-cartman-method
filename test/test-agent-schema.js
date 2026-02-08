#!/usr/bin/env node

/**
 * ECM Agent Schema Tests
 * Tests for agent YAML schema validation
 */

const path = require('node:path');
const fs = require('node:fs');
const yaml = require('js-yaml');
const {
  validateAgentWithErrors,
  checkDuplicateTriggers,
  TRIGGER_PATTERN,
  COMPOUND_TRIGGER_PATTERN,
} = require('../tools/schema/agent');

// Test results
let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
    passed++;
  } catch (error) {
    console.log(`✗ ${name}`);
    console.log(`  Error: ${error.message}`);
    failed++;
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`);
  }
}

function assertTrue(value, message) {
  if (!value) {
    throw new Error(message);
  }
}

function assertFalse(value, message) {
  if (value) {
    throw new Error(message);
  }
}

// Run tests
console.log('\n🧪 ECM Agent Schema Tests\n');

// Trigger Pattern Tests
console.log('Trigger Patterns:\n');

test('kebab-case trigger is valid', () => {
  assertTrue(TRIGGER_PATTERN.test('shape-problem'), 'shape-problem should match');
  assertTrue(TRIGGER_PATTERN.test('write-pitch'), 'write-pitch should match');
  assertTrue(TRIGGER_PATTERN.test('quick-spec'), 'quick-spec should match');
  assertTrue(TRIGGER_PATTERN.test('help'), 'help should match');
});

test('compound trigger is valid', () => {
  assertTrue(
    COMPOUND_TRIGGER_PATTERN.test('SP or fuzzy match on shape-problem'),
    'SP compound trigger should match'
  );
  assertTrue(
    COMPOUND_TRIGGER_PATTERN.test('WP or fuzzy match on write-pitch'),
    'WP compound trigger should match'
  );
  assertTrue(
    COMPOUND_TRIGGER_PATTERN.test('BT or fuzzy match on betting-table'),
    'BT compound trigger should match'
  );
});

test('invalid triggers are rejected', () => {
  assertFalse(TRIGGER_PATTERN.test('Shape-Problem'), 'uppercase should fail');
  assertFalse(TRIGGER_PATTERN.test('shape_problem'), 'underscore should fail');
  assertFalse(TRIGGER_PATTERN.test('shape problem'), 'space should fail');
});

// Schema Validation Tests
console.log('\nSchema Validation:\n');

test('minimal valid agent passes', () => {
  const agent = {
    agent: {
      metadata: {
        id: 'test-agent',
        name: 'Test',
        title: 'Test Agent',
        icon: '🧪',
        hasSidecar: false,
      },
      persona: {
        role: 'Test role',
        identity: 'Test identity',
        communication_style: 'Test style',
        principles: 'Test principles',
      },
      menu: [
        {
          trigger: 'help',
          description: 'Show help',
          action: 'display_help',
        },
      ],
    },
  };

  const result = validateAgentWithErrors(agent);
  assertTrue(result.valid, 'Minimal agent should be valid');
});

test('agent with compound trigger passes', () => {
  const agent = {
    agent: {
      metadata: {
        id: 'test-agent',
        name: 'Test',
        title: 'Test Agent',
        icon: '🧪',
        hasSidecar: false,
      },
      persona: {
        role: 'Test role',
        identity: 'Test identity',
        communication_style: 'Test style',
        principles: 'Test principles',
      },
      menu: [
        {
          trigger: 'SP or fuzzy match on shape-problem',
          description: '[SP] Shape Problem: Test',
          workflow: '/path/to/workflow',
        },
      ],
    },
  };

  const result = validateAgentWithErrors(agent);
  assertTrue(result.valid, 'Agent with compound trigger should be valid');
});

test('missing metadata fails', () => {
  const agent = {
    agent: {
      persona: {
        role: 'Test',
        identity: 'Test',
        communication_style: 'Test',
        principles: 'Test',
      },
      menu: [
        {
          trigger: 'help',
          description: 'Help',
          action: 'help',
        },
      ],
    },
  };

  const result = validateAgentWithErrors(agent);
  assertFalse(result.valid, 'Missing metadata should fail');
});

test('menu with multiple targets fails', () => {
  const agent = {
    agent: {
      metadata: {
        id: 'test-agent',
        name: 'Test',
        title: 'Test Agent',
        icon: '🧪',
        hasSidecar: false,
      },
      persona: {
        role: 'Test',
        identity: 'Test',
        communication_style: 'Test',
        principles: 'Test',
      },
      menu: [
        {
          trigger: 'test',
          description: 'Test',
          action: 'test',
          workflow: '/path',
        },
      ],
    },
  };

  const result = validateAgentWithErrors(agent);
  assertFalse(result.valid, 'Menu with multiple targets should fail');
});

// Duplicate Trigger Tests
console.log('\nDuplicate Triggers:\n');

test('no duplicates returns empty array', () => {
  const menu = [
    { trigger: 'help' },
    { trigger: 'status' },
    { trigger: 'start' },
  ];
  const duplicates = checkDuplicateTriggers(menu);
  assertEqual(duplicates.length, 0, 'Should have no duplicates');
});

test('duplicates are detected', () => {
  const menu = [
    { trigger: 'help' },
    { trigger: 'status' },
    { trigger: 'help' },
  ];
  const duplicates = checkDuplicateTriggers(menu);
  assertEqual(duplicates.length, 1, 'Should detect one duplicate');
  assertEqual(duplicates[0], 'help', 'Duplicate should be help');
});

// Live Agent Validation
console.log('\nLive Agent Files:\n');

const agentsDir = path.join(__dirname, '..', 'src');
const agentFiles = [];

function findAgentFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findAgentFiles(fullPath);
    } else if (item.endsWith('.agent.yaml')) {
      agentFiles.push(fullPath);
    }
  }
}

findAgentFiles(agentsDir);

for (const filePath of agentFiles) {
  const relativePath = path.relative(agentsDir, filePath);
  test(`Agent file: ${relativePath}`, () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const agentData = yaml.load(content);
    const result = validateAgentWithErrors(agentData);
    if (!result.valid) {
      const errors = result.errors.map((e) => `${e.path}: ${e.message}`).join('; ');
      throw new Error(errors);
    }
  });
}

// Summary
console.log('\n' + '━'.repeat(50));
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log('━'.repeat(50));

if (failed > 0) {
  console.log('\n❌ Some tests failed\n');
  process.exit(1);
} else {
  console.log('\n✅ All tests passed\n');
  process.exit(0);
}
