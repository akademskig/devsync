import { loadConfig, saveConfig, DevSyncConfig, defaultConfig } from "../utils/config";
import log from "../utils/logger";

export const setConfigHandler = (key: keyof DevSyncConfig, value: any): void => {
  const config = loadConfig();
  if (key in defaultConfig) {
    if (key === "encrypt") {
      value = value === "true" || value === true;
    }
    (config[key] as any) = value;
    log.info(`✅ Config key "${key}" set to: ${value}`);
  } else {
    log.error(`❌ Invalid config key: ${key}`);
    return;
  }
  saveConfig(config);
};

export const getConfigHandler = (key: keyof DevSyncConfig): any => {
  const config = loadConfig();
  return config[key] || null;
};

export const listConfigHandler = () => {
  console.table(loadConfig());
};
