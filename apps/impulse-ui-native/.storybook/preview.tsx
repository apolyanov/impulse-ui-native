import type { Preview } from "@storybook/react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  LayerCenter,
  PortalProvider,
  PortalsHost,
  PortalStore,
  ThemeProvider,
  View,
} from "@impulse-ui-native/toolkit";

const portalStore = new PortalStore();

const withTheme = (Story: React.ComponentType) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <ThemeProvider>
        <PortalProvider store={portalStore}>
          <View flex={1}>
            <Story />
          </View>
          <LayerCenter />
          <PortalsHost />
        </PortalProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
