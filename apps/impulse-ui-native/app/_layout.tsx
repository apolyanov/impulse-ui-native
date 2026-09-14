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
  ThemeProvider,
} from "@impulse-ui-native/toolkit";

const portalStore = new PortalStore();
const overlayStore = new OverlayStore();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <OverlayProvider store={overlayStore}>
            <PortalProvider store={portalStore}>
              <Stack />
              <OverlayHost />
              <PortalsHost />
            </PortalProvider>
          </OverlayProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
