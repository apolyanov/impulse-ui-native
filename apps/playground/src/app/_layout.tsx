import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { LayerCenter } from "@impulse-ui-native/layers";
import {
  PortalProvider,
  PortalsHost,
  PortalStore,
} from "@impulse-ui-native/portal";
import { ThemeProvider } from "@impulse-ui-native/theme";

const portalStore = new PortalStore();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <PortalProvider store={portalStore}>
            <Stack />
            <LayerCenter />
            <PortalsHost />
          </PortalProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
