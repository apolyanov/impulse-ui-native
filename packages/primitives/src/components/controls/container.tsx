import { memo, useMemo } from "react";

import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ControlContainerProps } from "../../types";
import { useControlContext } from "../../hooks/use-control-context.hook";
import { View } from "../atoms/view";
import { controlContainerStyles } from "./container.styles";

export const ControlContainer = memo(function ControlContainer({
  style,
  ...props
}: ControlContainerProps) {
  const { size, variant, disabled, error } = useControlContext();
  const styles = useThemedStyles(
    controlContainerStyles,
    { size, variant, disabled, error },
    [size, variant, disabled, error],
  );
  const containerStyle = useMemo(
    () => [styles.inputContainer, style],
    [styles.inputContainer, style],
  );

  return <View {...props} style={containerStyle} />;
});
