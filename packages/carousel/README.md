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
| `reducedMotion`                            | `false`           | Makes programmatic changes instant. The system reduced-motion setting is always honored.                                                                                                             |

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
- System reduced motion makes programmatic changes instant.
  User-driven native dragging remains available. Motion stays disabled until the
  initial native preference resolves.

## Theme

Carousel geometry and indicator colors live in `components.carousel` and are
created by `createCarouselTokens`. Navigation consumes the existing `iconButton`
tokens without local button overrides. Customize through
`ThemeProvider components`, including callback overrides derived from the theme.

The default dark scheme currently shares the light palette. The dark Storybook
example uses explicit primitive color overrides, as shown in the approved design.

## Verification

`pnpm --filter @impulse-ui-native/carousel test` runs Node's built-in test runner
against the pure index and geometry utilities. It requires Node >=22.21 with
TypeScript stripping enabled. These checks cover snap offsets, resizing, preview
bounds, centered alignment, midpoint transitions, and empty/invalid indices; they do not simulate native gestures or timers.
Exercise Storybook on iOS and Android to validate those behaviors.
