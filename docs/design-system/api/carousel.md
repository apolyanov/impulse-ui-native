# @impulse-ui-native/carousel

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/carousel

Finite, horizontal native carousels for iOS and Android. Each child is one slide.

## Installation

```sh
pnpm add @impulse-ui-native/carousel @impulse-ui-native/theme react-native-svg
```

Requires React >=18, React Native >=0.73, react-native-svg >=13.9 and a
`ThemeProvider`. Load the theme's Montserrat fonts in your host application.
No Reanimated or Gesture Handler setup is required by this package.

## Usage

```tsx
import { Image, StyleSheet } from "react-native";

import { Carousel } from "@impulse-ui-native/carousel";
import { ThemeProvider } from "@impulse-ui-native/theme";

const styles = StyleSheet.create({ image: { width: "100%", height: "100%" } });

export function Gallery() {
  return (
    <ThemeProvider>
      <Carousel peek={32} defaultIndex={1}>
        <Image
          key="lake"
          source={{ uri: "https://example.com/lake.jpg" }}
          style={styles.image}
        />
        <Image
          key="coast"
          source={{ uri: "https://example.com/coast.jpg" }}
          style={styles.image}
        />
        <Image
          key="mountain"
          source={{ uri: "https://example.com/mountain.jpg" }}
          style={styles.image}
        />
      </Carousel>
    </ThemeProvider>
  );
}
```

## Public API

Exports: `Carousel`, `CarouselProps`, `CarouselPagination`. Also re-exported by
`@impulse-ui-native/toolkit`.

| Prop                                       | Default           | Behavior                                                                                                                                                                                             |
| ------------------------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index` / `defaultIndex` / `onIndexChange` | uncontrolled, `0` | Zero-based slide index. Swipe requests fire when scrolling settles; navigation requests fire on press. Controlled changes require the parent to update `index`.                                      |
| `pagination`                               | `"dots"`          | `"dots"`, `"segments"`, `"counter"`, or `"none"`. Dots and segments fall back to a counter when their tap targets cannot fit.                                                                        |
| `showNavigation`                           | `true`            | Previous/next medium filled IconButtons; their disabled state follows the nearest slide.                                                                                                             |
| `peek`                                     | `0`               | Neighbor preview width at the first and last slides. Middle slides divide the available space equally between both sides. The theme supplies the gap; preview space is bounded to half the viewport. |
| `slideAspectRatio`                         | `16 / 9`          | Uniform slide sizing. Fill the child surface or compose content within it.                                                                                                                           |
| `disabled`                                 | `false`           | Blocks swipes, navigation, and indicators. Child content remains consumer-owned.                                                                                                                     |

Root props extend the library's `ViewProps`. No scroll-view implementation props
or infinite looping are exposed. Children are mounted eagerly: use modest slide
counts, stable keys and appropriately sized images rather than large data feeds.

## State and motion

- With `peek`, the first slide snaps to the left edge, middle slides snap to the
  center with previews on both sides, and the final slide snaps to the right edge
  with a preview of the previous slide on the left.
- Pagination and navigation buttons follow the nearest slide during scrolling,
  switching halfway between neighboring snap positions for both swipes and animated navigation.
- Swipe commits the nearest logical index once native scrolling settles. A parent
  that declines a controlled change keeps its index and the viewport returns to it.
- Invalid indices are clamped for display. Changing the slide count or viewport
  size realigns the viewport; supply a valid index when updating controlled data.
  A clamp caused by removing slides does not emit `onIndexChange`.

## Theme

Carousel geometry and indicator colors live in `components.carousel` and are
created by `createCarouselTokens`. Navigation consumes the existing `iconButton`
tokens without local button overrides. Customize through
`ThemeProvider components`, including callback overrides derived from the theme.

The default dark scheme currently shares the light palette. The dark Storybook
example uses explicit primitive color overrides, as shown in the approved design.

## Verification

Exercise Storybook on iOS and Android to validate snapping, resizing, preview
bounds, centered alignment, midpoint transitions, empty/invalid indices, and
native gestures.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/carousel/src/components/carousel.tsx

```tsx
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
```

### packages/carousel/src/components/index.ts

```tsx
export { Carousel } from "./carousel";
```

### packages/carousel/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/carousel/src/types/carousel.types.ts

```tsx
import type { ReactNode } from "react";

import type { ViewProps } from "@impulse-ui-native/primitives";

export type CarouselPagination = "dots" | "segments" | "counter" | "none";

export interface CarouselProps extends ViewProps {
  children?: ReactNode;
  /** Zero-based logical slide index. */
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  disabled?: boolean;
  pagination?: CarouselPagination;
  showNavigation?: boolean;
  /** Visible neighboring-slide preview; the final slide previews its predecessor. */
  peek?: number;
  slideAspectRatio?: number;
}

export interface CarouselBehaviorOptions {
  count: number;
  index?: number;
  defaultIndex: number;
  onIndexChange?: (index: number) => void;
  disabled: boolean;
  stride: number;
  endInset: number;
}

export interface CarouselIndicatorProps {
  active: boolean;
  disabled: boolean;
  index: number;
  variant: "dots" | "segments";
  onSelect: (index: number) => void;
}
```

### packages/carousel/src/types/index.ts

```tsx
export type { CarouselProps, CarouselPagination } from "./carousel.types";
```
