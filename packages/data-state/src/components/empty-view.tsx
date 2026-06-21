import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import { EmptyViewProps } from "../types";

export const EmptyView = memo(function EmptyView(props: EmptyViewProps) {
  const {
    variant,
    text,
    isEmpty,
    onPressPrimaryAction,
    primaryActionLabel,
    onPressSecondaryAction,
    secondaryActionLabel,
    contentContainerStyle,
    children,
    ...rest
  } = props;

  return (
    <View {...rest}>
      <View style={contentContainerStyle}>{children}</View>
    </View>
  );
});
