import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { CaretLeftIcon } from "@impulse-ui-native/icon/icons/caret-left";
import { CaretRightIcon } from "@impulse-ui-native/icon/icons/caret-right";
import { IconButton, View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { CarouselControlsProps } from "../types/carousel-parts.types";
import { CarouselPagination } from "./carousel-pagination";

export const CarouselControls = memo(function CarouselControls({
  count,
  index,
  disabled,
  pagination,
  showNavigation,
  onSelect,
}: CarouselControlsProps) {
  const styles = useThemedStyles(themedStyles);
  const previous = useEventCallback(() => onSelect(index - 1));
  const next = useEventCallback(() => onSelect(index + 1));

  if (count === 0 || (!showNavigation && pagination === "none")) return null;

  return (
    <View style={styles.root}>
      {showNavigation ? (
        <IconButton
          icon={CaretLeftIcon}
          disabled={disabled || index === 0}
          onPress={previous}
        />
      ) : null}
      <CarouselPagination
        count={count}
        index={index}
        disabled={disabled}
        variant={pagination}
        onSelect={onSelect}
      />
      {showNavigation ? (
        <IconButton
          icon={CaretRightIcon}
          disabled={disabled || index === count - 1}
          onPress={next}
        />
      ) : null}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    root: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.components.carousel.indicatorGap,
    },
  });
}
