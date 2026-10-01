import type { PropsWithChildren } from "react";
import { memo } from "react";

import { useColors, View } from "@impulse-ui-native/toolkit";

export const StorybookCanvas = memo(function StorybookCanvas({
  children,
}: PropsWithChildren) {
  const colors = useColors();

  return (
    <View flex={1} backgroundColor={colors.surface.primary.value}>
      {children}
    </View>
  );
});
