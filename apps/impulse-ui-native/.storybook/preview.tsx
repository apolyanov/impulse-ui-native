import type { Preview } from "@storybook/react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  OverlayHost,
  OverlayProvider,
  OverlayStore,
} from "@impulse-ui-native/overlay";
import {
  PortalProvider,
  PortalsHost,
  PortalStore,
  View,
} from "@impulse-ui-native/toolkit";

import { StorybookThemeProvider } from "../components/storybook-theme-provider";

const portalStore = new PortalStore();
const overlayStore = new OverlayStore();

const withTheme = (Story: React.ComponentType) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <OverlayProvider store={overlayStore}>
        <PortalProvider store={portalStore}>
          <StorybookThemeProvider
            overlays={
              <>
                <OverlayHost />
                <PortalsHost />
              </>
            }
          >
            <View flex={1}>
              <Story />
            </View>
          </StorybookThemeProvider>
        </PortalProvider>
      </OverlayProvider>
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
