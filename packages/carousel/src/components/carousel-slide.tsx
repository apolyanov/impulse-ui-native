import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { CarouselSlideProps } from "../types/carousel-parts.types";

export const CarouselSlide = memo(function CarouselSlide({
  children,
  width,
  height,
}: CarouselSlideProps) {
  const styles = useThemedStyles(themedStyles, { width, height }, [
    width,
    height,
  ]);

  return <View style={styles.root}>{children}</View>;
});

function themedStyles(
  theme: AppTheme,
  props: Pick<CarouselSlideProps, "width" | "height">,
) {
  return StyleSheet.create({
    root: {
      width: props.width,
      height: props.height,
      borderRadius: theme.components.carousel.borderRadius,
      overflow: "hidden",
    },
  });
}
