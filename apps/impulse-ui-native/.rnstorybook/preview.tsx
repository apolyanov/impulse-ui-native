import type { Preview } from "@storybook/react-native";
import { Platform } from "react-native";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";

import { StorybookCanvas } from "../components/storybook-canvas";

if (Platform.OS === "web") {
  // @ts-ignore
  global.ProgressTransitionRegister = {};
  // @ts-ignore
  global.UpdatePropsManager = {};
}

const preview: Preview = {
  decorators: [
    withBackgrounds,
    (Story) => (
      <StorybookCanvas>
        <Story />
      </StorybookCanvas>
    ),
  ],

  parameters: {
    backgrounds: {
      default: "theme",
      values: [
        { name: "theme", value: "transparent" },
        { name: "plain", value: "white" },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
