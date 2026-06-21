import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import { ErrorViewProps } from "../types";

export const ErrorView = memo(function ErrorView(props: ErrorViewProps) {
  const {
    variant,
    text,
    error,
    onPressPrimaryAction,
    onPressSecondaryAction,
    primaryActionLabel,
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
