import type {
  ComponentRef,
  NamedExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import { forwardRef, memo, useMemo } from "react";
import { StyleSheet, TextInput } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { getFieldStateTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { ControlInputProps } from "../../types";
import type { ControlFieldThemeProps } from "../../types/control-theme.types";
import { useControlContext } from "../../hooks/use-control-context.hook";

export const ControlInput: NamedExoticComponent<
  PropsWithoutRef<ControlInputProps> &
    RefAttributes<ComponentRef<typeof TextInput>>
> = memo(
  forwardRef<ComponentRef<typeof TextInput>, ControlInputProps>(
    function ControlInput(props, ref) {
      const { onPress: _onPress, editable, style, ...rest } = props;

      const {
        size,
        variant,
        tone = "neutral",
        disabled,
        error,
      } = useControlContext();

      const styles = useThemedStyles(
        themedStyles,
        {
          size,
          variant,
          tone,
          disabled,
          error,
        },
        [size, variant, tone, disabled, error],
      );

      const inputStyles = useMemo(
        () => [styles.input, style],
        [styles.input, style],
      );

      return (
        <TextInput
          {...rest}
          ref={ref}
          style={inputStyles}
          placeholderTextColor={styles.placeholder.color}
          editable={!disabled && editable !== false}
        />
      );
    },
  ),
);

function themedStyles(
  theme: AppTheme,
  { size, variant, tone = "neutral", disabled, error }: ControlFieldThemeProps,
) {
  const controlInputTokens = theme.components.controlInput;
  const sizeTokens = controlInputTokens.sizes[size];
  const appearanceTokens = getFieldStateTokens(
    controlInputTokens.colors[tone][variant],
    { disabled, error: Boolean(error) },
  );

  return StyleSheet.create({
    input: {
      flex: controlInputTokens.flex,
      color: appearanceTokens.color,
      fontSize: sizeTokens.fontSize,
      fontFamily: controlInputTokens.fontFamily,
      paddingHorizontal: controlInputTokens.paddingHorizontal,
      height: "100%",
    },

    placeholder: {
      color: appearanceTokens.placeholderColor,
    },
  });
}
