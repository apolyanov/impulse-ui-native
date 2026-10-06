import type { PropsWithChildren, ReactNode } from "react";
import { memo } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import type { ColorScheme } from "@impulse-ui-native/toolkit";
import { Button, Typography, useTheme, View } from "@impulse-ui-native/toolkit";

interface StorybookThemeFrameProps extends PropsWithChildren {
  overlays?: ReactNode;
  scheme: ColorScheme;
  onToggleScheme: () => void;
}

export const StorybookThemeFrame = memo(function StorybookThemeFrame({
  children,
  overlays,
  scheme,
  onToggleScheme,
}: StorybookThemeFrameProps) {
  const { colors, space, borderSize } = useTheme();

  return (
    <View flex={1} backgroundColor={colors.surface.primary.value}>
      <SafeAreaView edges={["top"]}>
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          padding={space.xs}
          gap={space.sm}
          backgroundColor={colors.surface.secondary.value}
          borderBottomWidth={borderSize.sm}
          borderColor={colors.border.subtle.value}
        >
          <Typography.Label>
            Theme: {scheme === "dark" ? "Dark" : "Light"}
          </Typography.Label>
          <Button size="small" variant="outlined" onPress={onToggleScheme}>
            {scheme === "dark" ? "Switch to light" : "Switch to dark"}
          </Button>
        </View>
      </SafeAreaView>
      <View flex={1}>{children}</View>
      <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
        {overlays}
      </View>
    </View>
  );
});
