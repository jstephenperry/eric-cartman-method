/**
 * ECM Configuration Utilities
 */

const fs = require('fs-extra');
const path = require('node:path');
const yaml = require('js-yaml');

class Config {
  constructor(configPath) {
    this.configPath = configPath;
    this.config = null;
  }

  /**
   * Load configuration from YAML file
   */
  async load() {
    if (!fs.existsSync(this.configPath)) {
      throw new Error(`Config file not found: ${this.configPath}`);
    }
    const content = await fs.readFile(this.configPath, 'utf8');
    this.config = yaml.load(content);
    return this.config;
  }

  /**
   * Save configuration to YAML file
   */
  async save() {
    if (!this.config) {
      throw new Error('No configuration to save');
    }
    const content = yaml.dump(this.config);
    await fs.writeFile(this.configPath, content, 'utf8');
  }

  /**
   * Get a configuration value
   */
  get(key, defaultValue = null) {
    if (!this.config) {
      throw new Error('Configuration not loaded');
    }
    return this.config[key] ?? defaultValue;
  }

  /**
   * Set a configuration value
   */
  set(key, value) {
    if (!this.config) {
      this.config = {};
    }
    this.config[key] = value;
  }

  /**
   * Process path templates
   */
  resolvePath(template, projectRoot) {
    if (!template) return template;

    return template
      .replace('{project-root}', projectRoot)
      .replace('{output_folder}', this.get('output_folder', '_ecm-output'))
      .replace('{shaping_artifacts}', this.get('shaping_artifacts', '_ecm-output/shaping'))
      .replace('{building_artifacts}', this.get('building_artifacts', '_ecm-output/building'));
  }
}

/**
 * Load ECM config from a project directory
 */
async function loadProjectConfig(projectDir) {
  const configPath = path.join(projectDir, '_ecm', 'ecm', 'config.yaml');
  const config = new Config(configPath);
  await config.load();
  return config;
}

/**
 * Check if ECM is installed in a directory
 */
function isEcmInstalled(projectDir) {
  return fs.existsSync(path.join(projectDir, '_ecm'));
}

module.exports = {
  Config,
  loadProjectConfig,
  isEcmInstalled,
};
