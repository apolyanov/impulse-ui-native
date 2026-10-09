import type {
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Pressable, Typography } from "@impulse-ui-native/primitives";
import {
  getControlStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { AccordionTriggerProps } from "../types";
import type { AccordionTriggerThemeProps } from "../types/accordion-theme.types";
import { useAccordionContext, useAccordionItemContext } from "../hooks";

export const AccordionTrigger = memo(function AccordionTrigger({
  children,
  disabled,
  onPress,
  style,
  ...props
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordionContext();
  const item = useAccordionItemContext();

  const resolvedDisabled = item.disabled || disabled === true;

  const styles = useThemedStyles(themedStyles, { disabled: resolvedDisabled }, [
    resolvedDisabled,
  ]);

  const triggerStyle = useCallback(
    ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => [
      styles.trigger,
      pressed ? styles.triggerPressed : undefined,
      typeof style === "function" ? style({ pressed }) : style,
    ],
    [style, styles.trigger, styles.triggerPressed],
  );

  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    if (resolvedDisabled) {
      return;
    }

    toggleItem(item.value);
    onPress?.(event);
  });

  return (
    <Pressable
      {...props}
      disabled={resolvedDisabled}
      onPress={handlePress}
      style={triggerStyle}
    >
      {typeof children === "string" || typeof children === "number" ? (
        <Typography.Label style={styles.title}>{children}</Typography.Label>
      ) : (
        children
      )}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: AccordionTriggerThemeProps) {
  const { disabled } = props;
  const accordionTokens = theme.components.accordion;
  const appearanceTokens = getControlStateTokens(
    accordionTokens.trigger.states,
    { disabled },
  );

  return StyleSheet.create({
    title: {
      flex: 1,
      color: appearanceTokens.titleColor,
    },
    trigger: {
      alignItems: "center",
      backgroundColor: appearanceTokens.backgroundColor,
      flexDirection: "row",
      gap: accordionTokens.trigger.gap,
      justifyContent: "space-between",
      minHeight: accordionTokens.trigger.minHeight,
      opacity: appearanceTokens.opacity,
      paddingHorizontal: accordionTokens.trigger.paddingHorizontal,
      paddingVertical: accordionTokens.trigger.paddingVertical,
    },
    triggerPressed: {
      opacity: appearanceTokens.pressedOpacity,
    },
  });
}
