import type { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { OverlayHost } from "@impulse-ui-native/overlay";
import { PortalsHost } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

export function RecipeSurface({ children }: PropsWithChildren) {
  const theme = useTheme();
  return (
    <View flex={1} backgroundColor={theme.colors.surface.canvas.value}>
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      <PortalsHost />
      <OverlayHost />
    </View>
  );
}
