import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Pressable, View } from "@impulse-ui-native/primitives";
import {
  getSelectionStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { CarouselIndicatorProps } from "../types/carousel.types";

export const CarouselIndicator = memo(function CarouselIndicator({
  active,
  disabled,
  index,
  variant,
  tone,
  onSelect,
}: CarouselIndicatorProps) {
  const styles = useThemedStyles(
    themedStyles,
    { active, disabled, variant, tone },
    [active, disabled, variant, tone],
  );

  const handlePress = useEventCallback(() => onSelect(index));

  return (
    <Pressable disabled={disabled} onPress={handlePress} style={styles.target}>
      <View style={styles.mark} />
    </Pressable>
  );
});

function themedStyles(
  theme: AppTheme,
  props: Pick<
    CarouselIndicatorProps,
    "active" | "disabled" | "variant" | "tone"
  >,
) {
  const tokens = theme.components.carousel.indicator;
  const geometry = tokens.variants[props.variant];
  const appearance = getSelectionStateTokens(tokens.colors[props.tone], {
    selected: props.active,
    disabled: props.disabled,
  });

  return StyleSheet.create({
    target: {
      width: tokens.targetSize,
      height: tokens.targetSize,
      alignItems: "center",
      justifyContent: "center",
    },
    mark: {
      width: geometry.width,
      height: geometry.height,
      borderRadius: tokens.borderRadius,
      backgroundColor: appearance.backgroundColor,
    },
  });
}
