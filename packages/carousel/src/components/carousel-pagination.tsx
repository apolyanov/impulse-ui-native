import type { LayoutChangeEvent } from "react-native";
import { memo, useMemo, useState } from "react";
import { StyleSheet } from "react-native";

import { useEventCallback } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { CarouselPaginationProps } from "../types/carousel-parts.types";
import { CarouselCounter } from "./carousel-counter";
import { CarouselIndicator } from "./carousel-indicator";

export const CarouselPagination = memo(function CarouselPagination({
  count,
  index,
  disabled,
  variant,
  onSelect,
}: CarouselPaginationProps) {
  const [width, setWidth] = useState(0);

  const tokens = useComponentsTokens().carousel;

  const styles = useThemedStyles(themedStyles);

  const indices = useMemo(
    () => Array.from({ length: count }, (_, position) => position),
    [count],
  );

  const showCounter =
    variant === "counter" || count * tokens.indicator.targetSize > width;

  const handleLayout = useEventCallback((event: LayoutChangeEvent) =>
    setWidth(event.nativeEvent.layout.width),
  );

  return (
    <View onLayout={handleLayout} style={styles.root}>
      {variant !== "none" && showCounter ? (
        <CarouselCounter count={count} index={index} disabled={disabled} />
      ) : null}
      {!showCounter && (variant === "dots" || variant === "segments")
        ? indices.map((position) => (
            <CarouselIndicator
              key={position}
              index={position}
              active={position === index}
              disabled={disabled || count < 2}
              variant={variant}
              onSelect={onSelect}
            />
          ))
        : null}
    </View>
  );
});

function themedStyles() {
  return StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 0,
    },
  });
}
