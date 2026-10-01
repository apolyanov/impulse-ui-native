import type { LayoutChangeEvent } from "react-native";
import { Children, useMemo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type {
  CarouselLayout,
  CarouselLayoutOptions,
} from "../types/carousel-parts.types";
import { DefaultSlideAspectRatio } from "../constants/carousel.constants";
import { getSlideWidth, getSnapOffsets } from "../utils/carousel.utils";

export function useCarouselLayout({
  children,
  peek,
  slideAspectRatio,
}: CarouselLayoutOptions): CarouselLayout {
  const [width, setWidth] = useState(0);
  const tokens = useComponentsTokens().carousel;
  const slides = useMemo(() => Children.toArray(children), [children]);
  const slideWidth = getSlideWidth(
    width,
    slides.length > 1 ? peek : 0,
    tokens.slideGap,
  );
  const ratio =
    Number.isFinite(slideAspectRatio) && slideAspectRatio > 0
      ? slideAspectRatio
      : DefaultSlideAspectRatio;
  const slideHeight = width > 0 ? slideWidth / ratio : 0;
  const stride = width > 0 ? slideWidth + tokens.slideGap : 0;
  const endInset = Math.max(0, width - slideWidth);
  const snapOffsets = useMemo(
    () => getSnapOffsets(slides.length, stride, endInset),
    [slides.length, stride, endInset],
  );
  const onLayout = useEventCallback((event: LayoutChangeEvent) =>
    setWidth(event.nativeEvent.layout.width),
  );
  return useMemo(
    () => ({
      slides,
      width,
      slideWidth,
      slideHeight,
      stride,
      endInset,
      snapOffsets,
      onLayout,
    }),
    [
      slides,
      width,
      slideWidth,
      slideHeight,
      stride,
      endInset,
      snapOffsets,
      onLayout,
    ],
  );
}
