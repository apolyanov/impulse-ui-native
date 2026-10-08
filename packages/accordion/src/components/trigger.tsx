import type {
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon";
import { CaretDownIcon } from "@impulse-ui-native/icon/icons/caret-down";
import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import {
  getControlStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { AccordionTriggerProps } from "../types";
import { useAccordionContext, useAccordionItemContext } from "../contexts";
import { useAccordionIndicatorAnimation } from "../hooks";

export const AccordionTrigger = memo(function AccordionTrigger({
  children,
  disabled,
  hideIndicator = false,
  indicator,
  onPress,
  style,
  ...props
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordionContext();
  const item = useAccordionItemContext();

  const tokens = useComponentsTokens().accordion;
  const resolvedDisabled = item.disabled || disabled === true;

  const indicatorStyle = useAccordionIndicatorAnimation({
    duration: tokens.animationDuration,
    open: item.open,
  });
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
      <View flex={1} pointerEvents="none">
        {typeof children === "string" || typeof children === "number" ? (
          <Typography.Label style={styles.title}>{children}</Typography.Label>
        ) : (
          children
        )}
      </View>

      {!hideIndicator ? (
        <Animated.View pointerEvents="none" style={indicatorStyle}>
          {indicator}
          {indicator === null || indicator === undefined ? (
            <Icon
              color={styles.icon.color}
              icon={CaretDownIcon}
              size={tokens.iconSize}
            />
          ) : null}
        </Animated.View>
      ) : null}
    </Pressable>
  );
});

interface AccordionTriggerThemeProps {
  disabled: boolean;
}

function themedStyles(theme: AppTheme, props: AccordionTriggerThemeProps) {
  const { disabled } = props;
  const accordionTokens = theme.components.accordion;
  const appearanceTokens = getControlStateTokens(
    accordionTokens.trigger.states,
    { disabled },
  );

  return StyleSheet.create({
    title: {
      color: appearanceTokens.titleColor,
    },
    icon: {
      color: appearanceTokens.iconColor,
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
