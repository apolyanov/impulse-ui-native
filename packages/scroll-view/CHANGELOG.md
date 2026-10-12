# @impulse-ui-native/scroll-view

## 9.0.0

### Patch Changes

- 91eba29: Remove unsupported right-to-left mirroring from color selection, sliders, switches, progress indicators, pagination arrows, and initial scroll reveal calculations. Use left-to-right behavior consistently and remove RTL support claims from current documentation.

  Remove the typography writingDirection style prop.

- Updated dependencies [cf6e434]
  - @impulse-ui-native/core@9.0.0

## 8.3.0

### Minor Changes

- eea73db: Add a shared native ScrollView initial-scroll hook and reveal the initially selected item in scrollable Tabs and SegmentedControl. Measure actual item positions, preserve consumer callbacks and explicit offsets, and allow opting out with initialScrollToSelected.

### Patch Changes

- @impulse-ui-native/core@8.3.0
