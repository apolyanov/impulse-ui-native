import { defineConfig } from "eslint/config";

import { baseConfig } from "@impulse-ui-native/eslint-config/base";
import { reactConfig } from "@impulse-ui-native/eslint-config/react";

export default defineConfig([
  baseConfig,
  reactConfig,
  { ignores: ["dist/**"] },
]);
