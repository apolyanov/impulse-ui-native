import { memo, useMemo } from "react";
import Animated from "react-native-reanimated";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { AccordionIndicatorProps } from "../types";
import {
  useAccordionIndicatorAnimation,
  useAccordionItemContext,
} from "../hooks";

export const AccordionIndicator = memo(function AccordionIndicator({
  children,
  style,
  ...props
}: AccordionIndicatorProps) {
  const { open } = useAccordionItemContext();
  const tokens = useComponentsTokens().accordion;
  const animatedStyle = useAccordionIndicatorAnimation({
    duration: tokens.animationDuration,
    open,
  });
  const indicatorStyle = useMemo(
    () => [style, animatedStyle],
    [animatedStyle, style],
  );

  return (
    <Animated.View {...props} pointerEvents="none" style={indicatorStyle}>
      {children}
    </Animated.View>
  );
});
