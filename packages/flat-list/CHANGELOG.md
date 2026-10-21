# @impulse-ui-native/flat-list

## 11.0.1

## 11.0.0

## 10.0.0

### Patch Changes

- Support the React Native 0.88 strict TypeScript API and Gesture Handler 3 used by
  Expo SDK 58. Update native ref, style, gesture, and text-input event declarations,
  and normalize an omitted FlatList initial index to undefined.

## 9.1.2

### Patch Changes

- 0f2d6de: Publish compiled React Native entry points while preserving source exports for instant workspace development in Storybook and the playground.

## 9.1.1

## 9.1.0

## 9.0.0

## 8.3.0

### Minor Changes

- a4b32bf: Add native FlatList and useFlatListInitialScroll, a small hook providing initialScrollIndex and accurate fixed-row getItemLayout. Use themed fixed-height, single-line Select options to reveal the opening selection. Reuse the hook in TimePicker and export it through the toolkit.
