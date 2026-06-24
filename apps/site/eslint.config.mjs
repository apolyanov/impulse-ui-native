import { baseConfig } from "@impulse-ui-native/eslint-config/base";
import { nextjsConfig } from "@impulse-ui-native/eslint-config/nextjs";
import { reactConfig } from "@impulse-ui-native/eslint-config/react";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  baseConfig,
  reactConfig,
  nextjsConfig,
  { ignores: [".next/**", "out/**", "next-env.d.ts"] },
]);

export default eslintConfig;
