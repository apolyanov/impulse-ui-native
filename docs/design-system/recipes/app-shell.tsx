import type { PropsWithChildren } from "react";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import type { ColorScheme } from "@impulse-ui-native/theme";
import { OverlayProvider, OverlayStore } from "@impulse-ui-native/overlay";
import { PortalProvider, PortalStore } from "@impulse-ui-native/portal";
import { ThemeProvider } from "@impulse-ui-native/theme";

import { RecipeSurface } from "./recipe-surface";

// Load the configured fonts and complete native peer setup in the application host.
export function AppShellRecipe({
  children,
  scheme = "light",
}: PropsWithChildren<{ scheme?: ColorScheme }>) {
  const [portals] = useState(() => new PortalStore());
  const [overlays] = useState(() => new OverlayStore());

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider scheme={scheme}>
          <PortalProvider store={portals}>
            <OverlayProvider store={overlays}>
              <RecipeSurface>{children}</RecipeSurface>
            </OverlayProvider>
          </PortalProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
