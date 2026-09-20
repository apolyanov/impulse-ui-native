import type { AccessibilityState } from "react-native";
import { memo, useMemo } from "react";

import { Control, Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { TextareaProps } from "../types";
import { useTextarea } from "../hooks";
import { textareaStyles } from "./textarea.styles";

export const Textarea = memo(function Textarea({
  accessibilityLabel,
  accessibilityState,
  autoGrow = false,
  containerStyle,
  defaultValue = "",
  disabled = false,
  error,
  label,
  maxLength,
  maxRows = 8,
  minRows = 3,
  onChangeText,
  onContentSizeChange,
  scrollEnabled: scrollEnabledProp,
  showCharacterCount = false,
  size = "medium",
  style,
  value: valueProp,
  variant = "outlined",
  ...props
}: TextareaProps) {
  const componentsTokens = useComponentsTokens();
  const controlContainerTokens = componentsTokens.controlContainer;
  const textareaTokens = componentsTokens.textarea;
  const sizeTokens = textareaTokens.sizes[size];
  const styles = useThemedStyles(
    textareaStyles,
    { disabled, error: Boolean(error), size },
    [disabled, error, size],
  );
  const textarea = useTextarea({
    autoGrow,
    borderWidth: controlContainerTokens.borderWidth,
    defaultValue,
    maxRows,
    minRows,
    onChangeText,
    onContentSizeChange,
    paddingVertical: sizeTokens.paddingVertical,
    rowHeight: sizeTokens.lineHeight,
    value: valueProp,
  });

  const resolvedAccessibilityState = useMemo<AccessibilityState>(
    () => ({
      ...accessibilityState,
      disabled,
      invalid: Boolean(error),
    }),
    [accessibilityState, disabled, error],
  );
  const resolvedContainerStyle = useMemo(
    () => [styles.container, containerStyle, { height: textarea.height }],
    [containerStyle, styles.container, textarea.height],
  );
  const resolvedInputStyle = useMemo(
    () => [styles.input, style],
    [style, styles.input],
  );
  const counterLabel =
    maxLength === undefined
      ? `${textarea.characterCount}`
      : `${textarea.characterCount} / ${maxLength}`;
  const hasFooter = Boolean(error) || showCharacterCount;

  return (
    <Control.Provider
      disabled={disabled}
      error={error}
      size={size}
      variant={variant}
    >
      <Control.Root>
        <Control.Label disabled={disabled}>{label}</Control.Label>
        <Control.Container style={resolvedContainerStyle}>
          <Control.Input
            {...props}
            accessibilityLabel={accessibilityLabel ?? label}
            accessibilityState={resolvedAccessibilityState}
            maxLength={maxLength}
            multiline
            numberOfLines={textarea.numberOfLines}
            onChangeText={textarea.handleChangeText}
            onContentSizeChange={textarea.handleContentSizeChange}
            scrollEnabled={
              autoGrow ? textarea.scrollEnabled : scrollEnabledProp
            }
            style={resolvedInputStyle}
            value={textarea.value}
          />
        </Control.Container>
        {hasFooter ? (
          <View style={styles.footer}>
            <Control.Error style={styles.error} />
            {showCharacterCount ? (
              <Typography.Caption
                accessibilityLabel={`Character count: ${counterLabel}`}
                style={styles.counter}
              >
                {counterLabel}
              </Typography.Caption>
            ) : null}
          </View>
        ) : null}
      </Control.Root>
    </Control.Provider>
  );
});
