# @impulse-ui-native/scroll-view

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/scroll-view

Native React Native ScrollView and a small hook to reveal an initially selected child with its actual measured size.

## Installation

```sh
pnpm add @impulse-ui-native/scroll-view
```

React and React Native are peer dependencies. No theme provider is required. The toolkit also exports this package.

## Usage

```tsx
import { useRef } from "react";
import { Pressable, Text } from "react-native";

import {
  ScrollView,
  useScrollViewInitialScroll,
} from "@impulse-ui-native/scroll-view";

function Options({ items, selectedValue }) {
  const initialValue = useRef(selectedValue).current;
  const scroll = useScrollViewInitialScroll({ horizontal: true });

  return (
    <ScrollView
      ref={scroll.scrollViewRef}
      horizontal
      onLayout={scroll.onLayout}
      onContentSizeChange={scroll.onContentSizeChange}
      onScrollBeginDrag={scroll.onScrollBeginDrag}
    >
      {items.map((item) => (
        <Pressable
          key={item.value}
          ref={item.value === initialValue ? scroll.targetRef : undefined}
          onLayout={
            item.value === initialValue ? scroll.onTargetLayout : undefined
          }
        >
          <Text>{item.label}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
```

The hook waits for viewport, content, and target layout, then measures the target relative to the native ScrollView with `measureLayout`. This uses layout coordinates rather than the current visual scroll position. Nested native wrappers, padding, gaps, and variable item sizes are included. Attach `targetRef` to one native View or a component forwarding its native View ref. Compose `onTargetLayout` with any existing item layout callback.

It scrolls only far enough to reveal the target, without animation. Already visible items retain the initial position; oversized items align at their leading edge. The default axis is vertical; pass `horizontal: true` to the hook and ScrollView for horizontal content.

Pass `enabled: false` to skip positioning. Pass native `contentOffset` to both the hook and ScrollView to preserve an explicit starting position. Existing `onLayout`, `onContentSizeChange`, and `onScrollBeginDrag` callbacks can be passed to the hook; its returned handlers invoke them with the original arguments. Other native props remain available because `ScrollView` is the native component.

Positioning happens once per mount. A user drag cancels pending positioning. Later selection and layout changes do not scroll again. Mount with the initial selection and content available, and remount when a fresh initial position is needed. This hook is for ordinary, unzoomed ScrollViews without automatic/custom content insets or snapping.

Exports: `ScrollView`, `ScrollViewProps`, `useScrollViewInitialScroll`, and `UseScrollViewInitialScrollOptions`.


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/scroll-view/src/hooks/index.ts

```tsx
export * from "./use-scroll-view-initial-scroll.hook";
```

### packages/scroll-view/src/hooks/use-scroll-view-initial-scroll.hook.ts

```tsx
import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from "react-native";
import { useRef } from "react";

import { useEventCallback } from "@impulse-ui-native/core";

import type { UseScrollViewInitialScrollOptions } from "../types";
import type { ScrollViewMeasurement } from "../types/scroll-view-measurement.types";
import { getScrollViewRevealOffset } from "../utils/get-scroll-view-reveal-offset";

export function useScrollViewInitialScroll({
  enabled = true,
  horizontal = false,
  contentOffset,
  onLayout,
  onContentSizeChange,
  onScrollBeginDrag,
}: UseScrollViewInitialScrollOptions = {}) {
  const scrollViewRef = useRef<ScrollView>(null);
  const targetRef = useRef<View>(null);
  const viewportSizeRef = useRef(0);
  const contentSizeRef = useRef(0);
  const completedRef = useRef(false);
  const measuringRef = useRef(false);

  const handleMeasurement = useEventCallback(
    ({ scrollView, target, layout }: ScrollViewMeasurement) => {
      measuringRef.current = false;

      if (!enabled || contentOffset || completedRef.current) {
        return;
      }

      if (
        scrollViewRef.current !== scrollView ||
        targetRef.current !== target
      ) {
        return;
      }

      const targetSize = horizontal ? layout.width : layout.height;

      if (targetSize <= 0) {
        return;
      }

      const offset = getScrollViewRevealOffset({
        layout,
        viewportSize: viewportSizeRef.current,
        contentSize: contentSizeRef.current,
        horizontal: Boolean(horizontal),
      });

      completedRef.current = true;

      if (offset !== null) {
        scrollView.scrollTo(
          horizontal
            ? { x: offset, animated: false }
            : { y: offset, animated: false },
        );
      }
    },
  );

  const handleMeasurementFailure = useEventCallback(() => {
    measuringRef.current = false;
  });

  const revealTarget = useEventCallback(() => {
    const scrollView = scrollViewRef.current;
    const target = targetRef.current;

    if (
      !enabled ||
      contentOffset ||
      completedRef.current ||
      measuringRef.current
    ) {
      return;
    }

    if (
      !scrollView ||
      !target ||
      viewportSizeRef.current <= 0 ||
      contentSizeRef.current <= 0
    ) {
      return;
    }

    const nativeScrollView = scrollView.getNativeScrollRef();

    if (nativeScrollView == null) {
      return;
    }

    measuringRef.current = true;
    target.measureLayout(
      nativeScrollView,
      (x, y, width, height) => {
        handleMeasurement({
          scrollView,
          target,
          layout: { x, y, width, height },
        });
      },
      handleMeasurementFailure,
    );
  });

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    viewportSizeRef.current = horizontal
      ? event.nativeEvent.layout.width
      : event.nativeEvent.layout.height;

    revealTarget();
    onLayout?.(event);
  });

  const handleContentSizeChange = useEventCallback(
    (width: number, height: number) => {
      contentSizeRef.current = horizontal ? width : height;

      revealTarget();
      onContentSizeChange?.(width, height);
    },
  );

  const handleScrollBeginDrag = useEventCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      completedRef.current = true;

      onScrollBeginDrag?.(event);
    },
  );

  return {
    scrollViewRef,
    targetRef,
    onTargetLayout: revealTarget,
    onLayout: handleLayout,
    onContentSizeChange: handleContentSizeChange,
    onScrollBeginDrag: handleScrollBeginDrag,
  };
}
```

### packages/scroll-view/src/index.ts

```tsx
export { ScrollView } from "react-native";
export * from "./hooks";
export * from "./types";
```

### packages/scroll-view/src/types/index.ts

```tsx
export type { ScrollViewProps } from "react-native";
export * from "./use-scroll-view-initial-scroll.types";
```

### packages/scroll-view/src/types/use-scroll-view-initial-scroll.types.ts

```tsx
import type { ScrollViewProps } from "react-native";

export interface UseScrollViewInitialScrollOptions extends Pick<
  ScrollViewProps,
  | "horizontal"
  | "contentOffset"
  | "onLayout"
  | "onContentSizeChange"
  | "onScrollBeginDrag"
> {
  /** Reveal the target once per mount. Explicit contentOffset takes precedence. */
  enabled?: boolean;
}
```
