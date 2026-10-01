import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import {
  OverlayHost,
  OverlayProvider,
  OverlayStore,
} from "@impulse-ui-native/overlay";
import {
  PortalProvider,
  PortalsHost,
  PortalStore,
} from "@impulse-ui-native/toolkit";

import { StorybookThemeProvider } from "../components/storybook-theme-provider";

const portalStore = new PortalStore();
const overlayStore = new OverlayStore();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StorybookThemeProvider>
          <OverlayProvider store={overlayStore}>
            <PortalProvider store={portalStore}>
              <Stack screenOptions={{ headerShown: false }} />
              <OverlayHost />
              <PortalsHost />
            </PortalProvider>
          </OverlayProvider>
        </StorybookThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
