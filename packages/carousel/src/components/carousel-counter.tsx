import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Typography } from "@impulse-ui-native/primitives";
import {
  getAvailabilityStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { CarouselCounterProps } from "../types/carousel-parts.types";

export const CarouselCounter = memo(function CarouselCounter({
  count,
  index,
  disabled,
}: CarouselCounterProps) {
  const styles = useThemedStyles(themedStyles, { disabled }, [disabled]);

  return (
    <Typography.Label
      numeric
      style={styles.label}
    >{`${index + 1} / ${count}`}</Typography.Label>
  );
});

function themedStyles(
  theme: AppTheme,
  props: Pick<CarouselCounterProps, "disabled">,
) {
  const appearance = getAvailabilityStateTokens(
    theme.components.carousel.counter.states,
    props,
  );

  return StyleSheet.create({ label: { color: appearance.color } });
}
