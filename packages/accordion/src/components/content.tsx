import type { LayoutChangeEvent } from "react-native";
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { AccordionContentProps } from "../types";
import { useAccordionItemContext } from "../contexts";
import { useAccordionContentAnimation } from "../hooks";

export const AccordionContent = memo(function AccordionContent({
  children,
  onLayout,
  style,
  ...props
}: AccordionContentProps) {
  const item = useAccordionItemContext();
  const tokens = useComponentsTokens().accordion;
  const styles = useThemedStyles(themedStyles);
  const { contentStyle, setContentHeight } = useAccordionContentAnimation({
    duration: tokens.animationDuration,
    open: item.open,
  });

  const viewportStyle = useMemo(
    () => [styles.viewport, contentStyle],
    [contentStyle, styles.viewport],
  );
  const innerStyle = useMemo(
    () => [styles.content, style],
    [style, styles.content],
  );

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    setContentHeight(event.nativeEvent.layout.height);
    onLayout?.(event);
  });

  return (
    <Animated.View
      aria-hidden={!item.open}
      accessibilityElementsHidden={!item.open}
      importantForAccessibility={item.open ? "auto" : "no-hide-descendants"}
      pointerEvents={item.open ? "auto" : "none"}
      style={viewportStyle}
    >
      <View
        {...props}
        aria-labelledby={item.triggerId}
        accessibilityLabelledBy={item.triggerId}
        nativeID={item.contentId}
        onLayout={handleLayout}
        style={innerStyle}
      >
        {children}
      </View>
    </Animated.View>
  );
});

function themedStyles(theme: AppTheme) {
  const contentTokens = theme.components.accordion.content;

  return StyleSheet.create({
    content: {
      left: 0,
      paddingBottom: contentTokens.paddingBottom,
      paddingHorizontal: contentTokens.paddingHorizontal,
      position: "absolute",
      right: 0,
      top: 0,
    },
    viewport: {
      overflow: "hidden",
    },
  });
}
