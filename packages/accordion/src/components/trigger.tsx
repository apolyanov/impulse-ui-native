import type { ComponentRef } from "react";
import type {
  GestureResponderEvent,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Platform, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { useEventCallback } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon/components/icon";
import { CaretDownIcon } from "@impulse-ui-native/icon/icons/caret-down";
import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { AccordionKeyDownEvent, AccordionTriggerProps } from "../types";
import { useAccordionContext, useAccordionItemContext } from "../contexts";
import { useAccordionIndicatorAnimation } from "../hooks";
import { getAccordionFocusDirection } from "../utils";

export const AccordionTrigger = memo(function AccordionTrigger({
  accessibilityState,
  onBlur,
  children,
  disabled,
  hideIndicator = false,
  indicator,
  onFocus,
  onKeyDown,
  onPress,
  style,
  ...props
}: AccordionTriggerProps) {
  const { focusTrigger, registerTrigger, toggleItem } = useAccordionContext();
  const item = useAccordionItemContext();
  const tokens = useComponentsTokens().accordion;
  const [focused, setFocused] = useState(false);
  // The host ref is required for roving keyboard focus between triggers.
  const triggerRef = useRef<ComponentRef<typeof Pressable>>(null);
  const resolvedDisabled = item.disabled || disabled === true;
  const indicatorStyle = useAccordionIndicatorAnimation({
    duration: tokens.animationDuration,
    open: item.open,
  });

  const resolvedAccessibilityState = useMemo(
    () => ({
      ...accessibilityState,
      disabled: resolvedDisabled,
      expanded: item.open,
    }),
    [accessibilityState, item.open, resolvedDisabled],
  );
  const titleStyle = useMemo(
    () => ({
      color: resolvedDisabled ? tokens.disabledColor : tokens.titleColor,
    }),
    [resolvedDisabled, tokens.disabledColor, tokens.titleColor],
  );

  const triggerStyle = useCallback(
    ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => [
      styles.trigger,
      {
        backgroundColor: focused ? tokens.focusBackgroundColor : "transparent",
        gap: tokens.trigger.gap,
        minHeight: tokens.trigger.minHeight,
        opacity: resolvedDisabled
          ? tokens.disabledOpacity
          : pressed
            ? tokens.pressedOpacity
            : 1,
        paddingHorizontal: tokens.trigger.paddingHorizontal,
        paddingVertical: tokens.trigger.paddingVertical,
      },
      typeof style === "function" ? style({ pressed }) : style,
    ],
    [focused, resolvedDisabled, style, tokens],
  );

  const handleBlur = useEventCallback<NonNullable<PressableProps["onBlur"]>>(
    (event) => {
      setFocused(false);
      onBlur?.(event);
    },
  );

  const handleFocus = useEventCallback<NonNullable<PressableProps["onFocus"]>>(
    (event) => {
      setFocused(true);
      onFocus?.(event);
    },
  );

  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    toggleItem(item.value);
    onPress?.(event);
  });

  const handleKeyDown = useEventCallback((event: AccordionKeyDownEvent) => {
    onKeyDown?.(event);

    if (event.isDefaultPrevented()) return;

    const direction = getAccordionFocusDirection(event.nativeEvent.key);

    if (direction) {
      event.preventDefault();
      focusTrigger(item.value, direction);
    }
  });

  const webInteractionProps = useMemo(
    () =>
      Platform.OS === "web"
        ? ({
            "aria-controls": item.contentId,
            onKeyDown: handleKeyDown,
          } as PressableProps)
        : undefined,
    [handleKeyDown, item.contentId],
  );

  useEffect(
    () =>
      registerTrigger({
        disabled: resolvedDisabled,
        ref: triggerRef,
        value: item.value,
      }),
    [item.value, registerTrigger, resolvedDisabled],
  );

  return (
    <Pressable
      {...props}
      {...webInteractionProps}
      ref={triggerRef}
      aria-expanded={item.open}
      accessibilityRole="button"
      accessibilityState={resolvedAccessibilityState}
      disabled={resolvedDisabled}
      focusable={!resolvedDisabled}
      nativeID={item.triggerId}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onPress={handlePress}
      style={triggerStyle}
    >
      <View flex={1} pointerEvents="none">
        {typeof children === "string" || typeof children === "number" ? (
          <Typography.Label style={titleStyle}>{children}</Typography.Label>
        ) : (
          children
        )}
      </View>

      {hideIndicator ? null : (
        <Animated.View pointerEvents="none" style={indicatorStyle}>
          {indicator ?? (
            <Icon
              color={resolvedDisabled ? tokens.disabledColor : tokens.iconColor}
              icon={CaretDownIcon}
              size={tokens.iconSize}
            />
          )}
        </Animated.View>
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  trigger: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
