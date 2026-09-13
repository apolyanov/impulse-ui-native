import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-native-web-vite";
import { mergeConfig } from "vite";

const assetRegistryPath = fileURLToPath(
  new URL(
    "../../../node_modules/react-native-web/src/modules/AssetRegistry/index.js",
    import.meta.url,
  ),
);

const main: StorybookConfig = {
  stories: ["../../../packages/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: ["@storybook/addon-docs", "@chromatic-com/storybook"],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },

  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "react-native/Libraries/Image/AssetRegistry": assetRegistryPath,
        },
      },
    });
  },
};

export default main;
