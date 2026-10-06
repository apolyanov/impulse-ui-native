import { memo } from "react";
import { ScrollView, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { CarouselViewportProps } from "../types/carousel-parts.types";
import { getSlideKey } from "../utils/carousel.utils";
import { CarouselSlide } from "./carousel-slide";

export const CarouselViewport = memo(function CarouselViewport({
  layout,
  controller,
  disabled,
}: CarouselViewportProps) {
  const { slides, width, slideWidth, slideHeight, snapOffsets, onLayout } =
    layout;

  const styles = useThemedStyles(themedStyles, { slideHeight }, [slideHeight]);

  const handleContentSize = useEventCallback(() =>
    controller.syncPosition(false),
  );

  return (
    <View onLayout={onLayout} style={styles.root}>
      {width > 0 && slides.length > 0 ? (
        <ScrollView
          ref={controller.scrollRef}
          horizontal
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={!disabled && slides.length > 1}
          bounces={false}
          overScrollMode="never"
          decelerationRate="fast"
          disableIntervalMomentum
          snapToOffsets={snapOffsets}
          snapToAlignment="start"
          scrollEventThrottle={16}
          directionalLockEnabled
          onScroll={controller.handleScroll}
          onScrollBeginDrag={controller.handleBeginDrag}
          onScrollEndDrag={controller.handleEndDrag}
          onMomentumScrollBegin={controller.handleMomentumBegin}
          onMomentumScrollEnd={controller.handleMomentumEnd}
          onContentSizeChange={handleContentSize}
        >
          {slides.map((slide, index) => (
            <CarouselSlide
              key={getSlideKey(slide, index)}
              width={slideWidth}
              height={slideHeight}
            >
              {slide}
            </CarouselSlide>
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
});

function themedStyles(theme: AppTheme, props: { slideHeight: number }) {
  const tokens = theme.components.carousel;

  return StyleSheet.create({
    root: {
      overflow: "hidden",
      borderRadius: tokens.borderRadius,
      height: props.slideHeight,
    },
    content: {
      flexDirection: "row",
      gap: tokens.slideGap,
    },
  });
}
