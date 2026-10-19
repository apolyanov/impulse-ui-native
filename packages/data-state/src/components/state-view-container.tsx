import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import type { StateContainerProps } from "../types";

export const StateViewContainer = memo(function StateViewContainer({
  children,
  contentContainerStyle,
  ...props
}: StateContainerProps) {
  return (
    <View {...props}>
      <View style={contentContainerStyle}>{children}</View>
    </View>
  );
});
