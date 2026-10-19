import type { PressableStateCallbackType } from "react-native";
import { memo, useCallback } from "react";

import {
  useComponentsTokens,
  useStyleProps,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { ControlTriggerProps } from "../../types";
import { useControlContext } from "../../hooks/use-control-context.hook";
import { Pressable } from "../atoms/pressable";
import { controlContainerStyles } from "./container.styles";

export const ControlTrigger = memo(function ControlTrigger({
  disabled: disabledProp,
  style,
  ...props
}: ControlTriggerProps) {
  const { size, variant, disabled, error } = useControlContext();
  const tokens = useComponentsTokens().pressable;
  const resolvedDisabled = Boolean(disabled) || disabledProp === true;
  const styles = useThemedStyles(
    controlContainerStyles,
    { size, variant, disabled: resolvedDisabled, error },
    [size, variant, resolvedDisabled, error],
  );
  const extractedStyleProps = useStyleProps(props);

  const triggerStyle = useCallback(
    (state: PressableStateCallbackType) => [
      styles.inputContainer,
      {
        opacity:
          styles.inputContainer.opacity *
          (state.pressed ? tokens.pressedOpacity : 1),
      },
      extractedStyleProps,
      typeof style === "function" ? style(state) : style,
    ],
    [extractedStyleProps, style, styles.inputContainer, tokens.pressedOpacity],
  );

  return (
    <Pressable {...props} disabled={resolvedDisabled} style={triggerStyle} />
  );
});
