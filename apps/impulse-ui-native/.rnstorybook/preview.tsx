import type { Preview } from "@storybook/react-native";
import { Platform } from "react-native";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";

import { ThemeProvider, View } from "@impulse-ui-native/toolkit";

if (Platform.OS === "web") {
  // @ts-ignore
  global.ProgressTransitionRegister = {};
  // @ts-ignore
  global.UpdatePropsManager = {};
}

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider>
    <View flex={1}>
      <Story />
    </View>
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [withBackgrounds, withTheme],

  parameters: {
    backgrounds: {
      default: "plain",
      values: [
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
