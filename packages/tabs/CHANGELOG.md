# @impulse-ui-native/tabs

## 11.0.0

### Patch Changes

- Updated dependencies [4aa2862]
- Updated dependencies [75fabf6]
  - @impulse-ui-native/theme@11.0.0
  - @impulse-ui-native/primitives@11.0.0
  - @impulse-ui-native/core@11.0.0
  - @impulse-ui-native/scroll-view@11.0.0

## 10.0.0

### Patch Changes

- Support the React Native 0.88 strict TypeScript API and Gesture Handler 3 used by
  Expo SDK 58. Update native ref, style, gesture, and text-input event declarations,
  and normalize an omitted FlatList initial index to undefined.
- ffa7afb: Add shared Control.Field, Control.Trigger, and Control.Icon composition and
  shared overlay timing. Reuse picker draft handling, preserve calendar clipping,
  and remove redundant wrappers, memoization, style flattening, and icon variant
  map construction. Correct style-prop caching and retain compatible date-guard
  aliases. Remove legacy text, variant, action, isEmpty, and error props from EmptyView
  and ErrorView. These standalone containers now accept only View props, children,
  and contentContainerStyle; use DataView for state selection and configured
  details.
- Updated dependencies
- Updated dependencies [a80ff6d]
- Updated dependencies [ffa7afb]
  - @impulse-ui-native/primitives@10.0.0
  - @impulse-ui-native/scroll-view@10.0.0
  - @impulse-ui-native/theme@10.0.0
  - @impulse-ui-native/core@10.0.0

## 9.1.2

### Patch Changes

- 0f2d6de: Publish compiled React Native entry points while preserving source exports for instant workspace development in Storybook and the playground.
- Updated dependencies [0f2d6de]
  - @impulse-ui-native/core@9.1.2
  - @impulse-ui-native/primitives@9.1.2
  - @impulse-ui-native/scroll-view@9.1.2
  - @impulse-ui-native/theme@9.1.2

## 9.1.1

### Patch Changes

- Updated dependencies [29ca8cf]
  - @impulse-ui-native/theme@9.1.1
  - @impulse-ui-native/primitives@9.1.1
  - @impulse-ui-native/core@9.1.1
  - @impulse-ui-native/scroll-view@9.1.1

## 9.1.0

### Patch Changes

- Updated dependencies [bffa719]
  - @impulse-ui-native/theme@9.1.0
  - @impulse-ui-native/primitives@9.1.0
  - @impulse-ui-native/core@9.1.0
  - @impulse-ui-native/scroll-view@9.1.0

## 9.0.0

### Patch Changes

- Updated dependencies [91eba29]
- Updated dependencies [91eba29]
- Updated dependencies [cf6e434]
  - @impulse-ui-native/theme@9.0.0
  - @impulse-ui-native/scroll-view@9.0.0
  - @impulse-ui-native/primitives@9.0.0
  - @impulse-ui-native/core@9.0.0

## 8.3.0

### Minor Changes

- eea73db: Add a shared native ScrollView initial-scroll hook and reveal the initially selected item in scrollable Tabs and SegmentedControl. Measure actual item positions, preserve consumer callbacks and explicit offsets, and allow opting out with initialScrollToSelected.

### Patch Changes

- Updated dependencies [a4b32bf]
- Updated dependencies [eea73db]
  - @impulse-ui-native/theme@8.3.0
  - @impulse-ui-native/scroll-view@8.3.0
  - @impulse-ui-native/primitives@8.3.0
  - @impulse-ui-native/core@8.3.0

## 8.2.0

### Patch Changes

- Updated dependencies [0cd457e]
  - @impulse-ui-native/theme@8.2.0
  - @impulse-ui-native/primitives@8.2.0
  - @impulse-ui-native/core@8.2.0

## 8.1.0

### Minor Changes

- be262a8: Add token-aware underline Tabs with a flat items API, controlled and uncontrolled selection, disabled tabs, scrollable lists, and conditional active-panel rendering.

### Patch Changes

- Updated dependencies [be262a8]
  - @impulse-ui-native/theme@8.1.0
  - @impulse-ui-native/primitives@8.1.0
  - @impulse-ui-native/core@8.1.0
