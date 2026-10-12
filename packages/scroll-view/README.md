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
