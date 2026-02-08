/**
 * ECM Agent Schema Validation
 * Uses Zod for schema validation of agent YAML files
 */

const { z } = require('zod');

// Trigger patterns
const TRIGGER_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/; // kebab-case
const COMPOUND_TRIGGER_PATTERN = /^([A-Z]{1,3}) or fuzzy match on ([a-z0-9]+(?:-[a-z0-9]+)*)$/;

// Command target keys - menu items must have exactly one
const COMMAND_TARGET_KEYS = ['workflow', 'validate-workflow', 'exec', 'action', 'tmpl', 'data'];

// Metadata schema
const MetadataSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  title: z.string().min(1),
  icon: z.string().min(1),
  module: z.string().optional(),
  hasSidecar: z.boolean(),
});

// Persona schema
const PersonaSchema = z.object({
  role: z.string().min(1),
  identity: z.string().min(1),
  communication_style: z.string().min(1),
  principles: z.string().min(1),
});

// Menu item schema
const MenuItemSchema = z
  .object({
    trigger: z.string(),
    description: z.string().min(1),
    workflow: z.string().optional(),
    'validate-workflow': z.string().optional(),
    exec: z.string().optional(),
    action: z.string().optional(),
    tmpl: z.string().optional(),
    data: z.string().optional(),
  })
  .refine(
    (item) => {
      // Check trigger format
      const isKebab = TRIGGER_PATTERN.test(item.trigger);
      const isCompound = COMPOUND_TRIGGER_PATTERN.test(item.trigger);
      return isKebab || isCompound;
    },
    { message: 'Trigger must be kebab-case or compound format (XX or fuzzy match on xxx)' }
  )
  .refine(
    (item) => {
      // Must have exactly one command target
      const targets = COMMAND_TARGET_KEYS.filter((key) => item[key] !== undefined);
      return targets.length === 1;
    },
    { message: 'Menu item must have exactly one command target' }
  )
  .refine(
    (item) => {
      // Description should start with shortcut
      if (COMPOUND_TRIGGER_PATTERN.test(item.trigger)) {
        const match = item.trigger.match(COMPOUND_TRIGGER_PATTERN);
        const shortcut = match[1];
        return item.description.startsWith(`[${shortcut}]`);
      }
      return true;
    },
    { message: 'Description should start with [SHORTCUT] matching trigger' }
  );

// Agent schema
const AgentSchema = z.object({
  agent: z.object({
    metadata: MetadataSchema,
    persona: PersonaSchema,
    critical_actions: z.array(z.string()).optional(),
    menu: z.array(MenuItemSchema).min(1),
  }),
});

/**
 * Validate an agent object
 */
function validateAgent(agentData) {
  return AgentSchema.safeParse(agentData);
}

/**
 * Validate and return detailed errors
 */
function validateAgentWithErrors(agentData) {
  const result = AgentSchema.safeParse(agentData);

  if (!result.success) {
    return {
      valid: false,
      errors: result.error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      })),
    };
  }

  return { valid: true, errors: [] };
}

/**
 * Check for duplicate triggers in menu
 */
function checkDuplicateTriggers(menuItems) {
  const triggers = new Set();
  const duplicates = [];

  for (const item of menuItems) {
    if (triggers.has(item.trigger)) {
      duplicates.push(item.trigger);
    }
    triggers.add(item.trigger);
  }

  return duplicates;
}

module.exports = {
  AgentSchema,
  MetadataSchema,
  PersonaSchema,
  MenuItemSchema,
  validateAgent,
  validateAgentWithErrors,
  checkDuplicateTriggers,
  TRIGGER_PATTERN,
  COMPOUND_TRIGGER_PATTERN,
  COMMAND_TARGET_KEYS,
};
