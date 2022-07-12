import { createApp, App } from "vue";
import properties from "./properties";

export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  const files = require.context(".", false, /\.ts/);
  files.keys().forEach((key) => {
    !key.includes("index.ts") &&
      files(key).default &&
      typeof files(key).default == "function" &&
      files(key).default(app);
  });
}

export function globalProperties(app: App): void {
  app.use(properties);
}
