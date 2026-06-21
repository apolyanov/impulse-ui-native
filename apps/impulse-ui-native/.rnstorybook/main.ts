import type { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: [
    "../../../packages/**/*.stories.?(ts|tsx|js|jsx)",
    "../../../packages/**/*.story.?(ts|tsx|js|jsx)",
    "../stories/**/*.stories.?(ts|tsx|js|jsx)",
    "../stories/**/*.story.?(ts|tsx|js|jsx)",
  ],
  deviceAddons: [
    "@storybook/addon-ondevice-notes",
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-backgrounds",
    "@storybook/addon-ondevice-actions",
  ],
  framework: "@storybook/react-native",
};

export default main;
