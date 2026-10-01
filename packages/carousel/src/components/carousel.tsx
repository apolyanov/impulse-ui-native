import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { CarouselProps } from "../types";
import { DefaultSlideAspectRatio } from "../constants/carousel.constants";
import { useCarouselLayout } from "../hooks/use-carousel-layout.hook";
import { useCarousel } from "../hooks/use-carousel.hook";
import { CarouselControls } from "./carousel-controls";
import { CarouselViewport } from "./carousel-viewport";

export const Carousel = memo(function Carousel({
  children,
  index,
  defaultIndex = 0,
  onIndexChange,
  disabled = false,
  pagination = "dots",
  showNavigation = true,
  peek = 0,
  slideAspectRatio = DefaultSlideAspectRatio,
  reducedMotion = false,
  style,
  ...props
}: CarouselProps) {
  const layout = useCarouselLayout({ children, peek, slideAspectRatio });
  const count = layout.slides.length;
  const controller = useCarousel({
    count,
    index,
    defaultIndex,
    onIndexChange,
    disabled,
    reducedMotion,
    stride: layout.stride,
    endInset: layout.endInset,
  });
  const styles = useThemedStyles(themedStyles);
  const rootStyle = useMemo(() => [styles.root, style], [styles.root, style]);

  return (
    <View {...props} style={rootStyle}>
      <CarouselViewport
        layout={layout}
        controller={controller}
        disabled={disabled}
      />
      <CarouselControls
        count={count}
        index={controller.displayedIndex}
        disabled={disabled}
        pagination={pagination}
        showNavigation={showNavigation}
        onSelect={controller.select}
      />
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    root: { gap: theme.components.carousel.gap, width: "100%" },
  });
}
