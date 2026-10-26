import type { PropsWithChildren } from "react";
import { ScrollView } from "react-native";

import { View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

export function RecipeFrame({
  children,
  scrollable = true,
}: PropsWithChildren<{ scrollable?: boolean }>) {
  const theme = useTheme();
  if (!scrollable)
    return (
      <View
        flex={1}
        backgroundColor={theme.colors.surface.canvas.value}
        padding={theme.space.sm}
        gap={theme.space.sm}
      >
        {children}
      </View>
    );

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.surface.canvas.value }}
      contentContainerStyle={{ padding: theme.space.sm, flexGrow: 1 }}
    >
      <View gap={theme.space.sm}>{children}</View>
    </ScrollView>
  );
}
