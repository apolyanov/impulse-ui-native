# @impulse-ui-native/toolkit

## 8.1.0

### Minor Changes

- be262a8: Add token-aware underline Tabs with a flat items API, controlled and uncontrolled selection, disabled tabs, scrollable lists, and conditional active-panel rendering.

### Patch Changes

- Updated dependencies [be262a8]
  - @impulse-ui-native/tabs@8.1.0
  - @impulse-ui-native/theme@8.1.0
  - @impulse-ui-native/accordion@8.1.0
  - @impulse-ui-native/card@8.1.0
  - @impulse-ui-native/carousel@8.1.0
  - @impulse-ui-native/charts@8.1.0
  - @impulse-ui-native/checkbox@8.1.0
  - @impulse-ui-native/data-state@8.1.0
  - @impulse-ui-native/datetime@8.1.0
  - @impulse-ui-native/flyout@8.1.0
  - @impulse-ui-native/form-field@8.1.0
  - @impulse-ui-native/input@8.1.0
  - @impulse-ui-native/list@8.1.0
  - @impulse-ui-native/modal@8.1.0
  - @impulse-ui-native/pagination@8.1.0
  - @impulse-ui-native/popover@8.1.0
  - @impulse-ui-native/primitives@8.1.0
  - @impulse-ui-native/progress@8.1.0
  - @impulse-ui-native/radio@8.1.0
  - @impulse-ui-native/segmented-control@8.1.0
  - @impulse-ui-native/select@8.1.0
  - @impulse-ui-native/skeleton@8.1.0
  - @impulse-ui-native/slider@8.1.0
  - @impulse-ui-native/stepper@8.1.0
  - @impulse-ui-native/switch@8.1.0
  - @impulse-ui-native/toast@8.1.0
  - @impulse-ui-native/core@8.1.0
  - @impulse-ui-native/echo@8.1.0
  - @impulse-ui-native/endpoint@8.1.0
  - @impulse-ui-native/overlay@8.1.0
  - @impulse-ui-native/portal@8.1.0

## 8.0.0

### Patch Changes

- Updated dependencies [f67c73d]
  - @impulse-ui-native/primitives@8.0.0
  - @impulse-ui-native/accordion@8.0.0
  - @impulse-ui-native/input@8.0.0
  - @impulse-ui-native/select@8.0.0
  - @impulse-ui-native/datetime@8.0.0
  - @impulse-ui-native/form-field@8.0.0
  - @impulse-ui-native/segmented-control@8.0.0
  - @impulse-ui-native/modal@8.0.0
  - @impulse-ui-native/toast@8.0.0
  - @impulse-ui-native/flyout@8.0.0
  - @impulse-ui-native/card@8.0.0
  - @impulse-ui-native/carousel@8.0.0
  - @impulse-ui-native/charts@8.0.0
  - @impulse-ui-native/checkbox@8.0.0
  - @impulse-ui-native/data-state@8.0.0
  - @impulse-ui-native/list@8.0.0
  - @impulse-ui-native/pagination@8.0.0
  - @impulse-ui-native/popover@8.0.0
  - @impulse-ui-native/radio@8.0.0
  - @impulse-ui-native/skeleton@8.0.0
  - @impulse-ui-native/slider@8.0.0
  - @impulse-ui-native/stepper@8.0.0
  - @impulse-ui-native/switch@8.0.0
  - @impulse-ui-native/core@8.0.0
  - @impulse-ui-native/echo@8.0.0
  - @impulse-ui-native/endpoint@8.0.0
  - @impulse-ui-native/overlay@8.0.0
  - @impulse-ui-native/portal@8.0.0
  - @impulse-ui-native/theme@8.0.0
  - @impulse-ui-native/progress@8.0.0

## 7.0.1

### Patch Changes

- Updated dependencies [7292823]
  - @impulse-ui-native/segmented-control@7.0.1
  - @impulse-ui-native/accordion@7.0.1
  - @impulse-ui-native/charts@7.0.1
  - @impulse-ui-native/checkbox@7.0.1
  - @impulse-ui-native/core@7.0.1
  - @impulse-ui-native/data-state@7.0.1
  - @impulse-ui-native/datetime@7.0.1
  - @impulse-ui-native/echo@7.0.1
  - @impulse-ui-native/endpoint@7.0.1
  - @impulse-ui-native/flyout@7.0.1
  - @impulse-ui-native/form-field@7.0.1
  - @impulse-ui-native/input@7.0.1
  - @impulse-ui-native/overlay@7.0.1
  - @impulse-ui-native/pagination@7.0.1
  - @impulse-ui-native/portal@7.0.1
  - @impulse-ui-native/primitives@7.0.1
  - @impulse-ui-native/radio@7.0.1
  - @impulse-ui-native/select@7.0.1
  - @impulse-ui-native/skeleton@7.0.1
  - @impulse-ui-native/stepper@7.0.1
  - @impulse-ui-native/switch@7.0.1
  - @impulse-ui-native/slider@7.0.1
  - @impulse-ui-native/theme@7.0.1
  - @impulse-ui-native/carousel@7.0.1
  - @impulse-ui-native/toast@7.0.1
  - @impulse-ui-native/card@7.0.1
  - @impulse-ui-native/list@7.0.1
  - @impulse-ui-native/progress@7.0.1
  - @impulse-ui-native/popover@7.0.1
  - @impulse-ui-native/modal@7.0.1

## 7.0.0

### Minor Changes

- 7d5a077: Add Modal's OverlayComponentProps lifecycle for local Portal usage and global
  OverlayHost registration. Root handles safe-area positioning, backdrop and Android
  back dismissal, layered rendering, and cancelable entry/exit animations. Preserve
  independent presentation parts and non-scrollable content, and add hosted title
  composition and interactive documentation.
- d20d471: Add presentation-only Modal parts with a styled Root, Header, Content, Footer,
  Title, and Description. Include a convenience composition and token-driven
  small/medium/large sizes. Dialog behavior remains deferred.
- 51a7e4d: Add a provider-independent useOverlayLifecycle hook with lifecycle status,
  readiness, guarded transition completion, and lifecycle notifications. Track
  hosted status through onStatusChange and expose useOverlayStatus for observers.

### Patch Changes

- Updated dependencies [cea3a04]
- Updated dependencies [8e6ef63]
- Updated dependencies [7d5a077]
- Updated dependencies [d20d471]
- Updated dependencies [4005900]
- Updated dependencies [9398849]
- Updated dependencies [bf78005]
- Updated dependencies [2a7db15]
- Updated dependencies [51a7e4d]
  - @impulse-ui-native/flyout@7.0.0
  - @impulse-ui-native/modal@7.0.0
  - @impulse-ui-native/theme@7.0.0
  - @impulse-ui-native/toast@7.0.0
  - @impulse-ui-native/popover@7.0.0
  - @impulse-ui-native/overlay@7.0.0
  - @impulse-ui-native/datetime@7.0.0
  - @impulse-ui-native/select@7.0.0
  - @impulse-ui-native/accordion@7.0.0
  - @impulse-ui-native/card@7.0.0
  - @impulse-ui-native/carousel@7.0.0
  - @impulse-ui-native/charts@7.0.0
  - @impulse-ui-native/checkbox@7.0.0
  - @impulse-ui-native/data-state@7.0.0
  - @impulse-ui-native/form-field@7.0.0
  - @impulse-ui-native/input@7.0.0
  - @impulse-ui-native/list@7.0.0
  - @impulse-ui-native/pagination@7.0.0
  - @impulse-ui-native/primitives@7.0.0
  - @impulse-ui-native/progress@7.0.0
  - @impulse-ui-native/radio@7.0.0
  - @impulse-ui-native/segmented-control@7.0.0
  - @impulse-ui-native/skeleton@7.0.0
  - @impulse-ui-native/slider@7.0.0
  - @impulse-ui-native/stepper@7.0.0
  - @impulse-ui-native/switch@7.0.0
  - @impulse-ui-native/core@7.0.0
  - @impulse-ui-native/echo@7.0.0
  - @impulse-ui-native/endpoint@7.0.0
  - @impulse-ui-native/portal@7.0.0

## 6.3.1

### Patch Changes

- Updated dependencies [09c3cf2]
  - @impulse-ui-native/popover@6.3.1
  - @impulse-ui-native/theme@6.3.1
  - @impulse-ui-native/accordion@6.3.1
  - @impulse-ui-native/card@6.3.1
  - @impulse-ui-native/carousel@6.3.1
  - @impulse-ui-native/charts@6.3.1
  - @impulse-ui-native/checkbox@6.3.1
  - @impulse-ui-native/data-state@6.3.1
  - @impulse-ui-native/datetime@6.3.1
  - @impulse-ui-native/flyout@6.3.1
  - @impulse-ui-native/form-field@6.3.1
  - @impulse-ui-native/input@6.3.1
  - @impulse-ui-native/list@6.3.1
  - @impulse-ui-native/pagination@6.3.1
  - @impulse-ui-native/primitives@6.3.1
  - @impulse-ui-native/progress@6.3.1
  - @impulse-ui-native/radio@6.3.1
  - @impulse-ui-native/segmented-control@6.3.1
  - @impulse-ui-native/select@6.3.1
  - @impulse-ui-native/skeleton@6.3.1
  - @impulse-ui-native/slider@6.3.1
  - @impulse-ui-native/stepper@6.3.1
  - @impulse-ui-native/switch@6.3.1
  - @impulse-ui-native/toast@6.3.1
  - @impulse-ui-native/core@6.3.1
  - @impulse-ui-native/echo@6.3.1
  - @impulse-ui-native/endpoint@6.3.1
  - @impulse-ui-native/overlay@6.3.1
  - @impulse-ui-native/portal@6.3.1

## 6.3.0

### Patch Changes

- Updated dependencies [9f7f2a2]
  - @impulse-ui-native/theme@6.3.0
  - @impulse-ui-native/accordion@6.3.0
  - @impulse-ui-native/card@6.3.0
  - @impulse-ui-native/carousel@6.3.0
  - @impulse-ui-native/charts@6.3.0
  - @impulse-ui-native/checkbox@6.3.0
  - @impulse-ui-native/data-state@6.3.0
  - @impulse-ui-native/datetime@6.3.0
  - @impulse-ui-native/flyout@6.3.0
  - @impulse-ui-native/form-field@6.3.0
  - @impulse-ui-native/input@6.3.0
  - @impulse-ui-native/list@6.3.0
  - @impulse-ui-native/pagination@6.3.0
  - @impulse-ui-native/popover@6.3.0
  - @impulse-ui-native/primitives@6.3.0
  - @impulse-ui-native/progress@6.3.0
  - @impulse-ui-native/radio@6.3.0
  - @impulse-ui-native/segmented-control@6.3.0
  - @impulse-ui-native/select@6.3.0
  - @impulse-ui-native/skeleton@6.3.0
  - @impulse-ui-native/slider@6.3.0
  - @impulse-ui-native/stepper@6.3.0
  - @impulse-ui-native/switch@6.3.0
  - @impulse-ui-native/toast@6.3.0
  - @impulse-ui-native/core@6.3.0
  - @impulse-ui-native/echo@6.3.0
  - @impulse-ui-native/endpoint@6.3.0
  - @impulse-ui-native/overlay@6.3.0
  - @impulse-ui-native/portal@6.3.0

## 6.2.0

### Minor Changes

- 5552924: Add token-driven Tooltip and compound Popover components with Portal rendering, anchor measurement, safe-area collision handling, and native press/long-press triggers.

### Patch Changes

- Updated dependencies [5552924]
- Updated dependencies [48403d8]
- Updated dependencies [5552924]
- Updated dependencies [5552924]
  - @impulse-ui-native/popover@6.2.0
  - @impulse-ui-native/theme@6.2.0
  - @impulse-ui-native/overlay@6.2.0
  - @impulse-ui-native/toast@6.2.0
  - @impulse-ui-native/core@6.2.0
  - @impulse-ui-native/accordion@6.2.0
  - @impulse-ui-native/card@6.2.0
  - @impulse-ui-native/carousel@6.2.0
  - @impulse-ui-native/charts@6.2.0
  - @impulse-ui-native/checkbox@6.2.0
  - @impulse-ui-native/data-state@6.2.0
  - @impulse-ui-native/datetime@6.2.0
  - @impulse-ui-native/flyout@6.2.0
  - @impulse-ui-native/form-field@6.2.0
  - @impulse-ui-native/input@6.2.0
  - @impulse-ui-native/list@6.2.0
  - @impulse-ui-native/pagination@6.2.0
  - @impulse-ui-native/primitives@6.2.0
  - @impulse-ui-native/progress@6.2.0
  - @impulse-ui-native/radio@6.2.0
  - @impulse-ui-native/segmented-control@6.2.0
  - @impulse-ui-native/select@6.2.0
  - @impulse-ui-native/skeleton@6.2.0
  - @impulse-ui-native/slider@6.2.0
  - @impulse-ui-native/stepper@6.2.0
  - @impulse-ui-native/switch@6.2.0
  - @impulse-ui-native/echo@6.2.0
  - @impulse-ui-native/endpoint@6.2.0
  - @impulse-ui-native/portal@6.2.0

## 6.1.0

### Patch Changes

- Updated dependencies [3940c3f]
  - @impulse-ui-native/overlay@6.1.0
  - @impulse-ui-native/toast@6.1.0
  - @impulse-ui-native/theme@6.1.0
  - @impulse-ui-native/flyout@6.1.0
  - @impulse-ui-native/accordion@6.1.0
  - @impulse-ui-native/card@6.1.0
  - @impulse-ui-native/carousel@6.1.0
  - @impulse-ui-native/charts@6.1.0
  - @impulse-ui-native/checkbox@6.1.0
  - @impulse-ui-native/data-state@6.1.0
  - @impulse-ui-native/datetime@6.1.0
  - @impulse-ui-native/form-field@6.1.0
  - @impulse-ui-native/input@6.1.0
  - @impulse-ui-native/list@6.1.0
  - @impulse-ui-native/pagination@6.1.0
  - @impulse-ui-native/primitives@6.1.0
  - @impulse-ui-native/progress@6.1.0
  - @impulse-ui-native/radio@6.1.0
  - @impulse-ui-native/segmented-control@6.1.0
  - @impulse-ui-native/select@6.1.0
  - @impulse-ui-native/skeleton@6.1.0
  - @impulse-ui-native/slider@6.1.0
  - @impulse-ui-native/stepper@6.1.0
  - @impulse-ui-native/switch@6.1.0
  - @impulse-ui-native/core@6.1.0
  - @impulse-ui-native/echo@6.1.0
  - @impulse-ui-native/endpoint@6.1.0
  - @impulse-ui-native/portal@6.1.0

## 6.0.0

### Major Changes

- 9556669: Remove Carousel's reducedMotion prop and explicit system reduced-motion detection. Programmatic navigation now uses native animated scrolling without consulting the motion preference. Reanimated-based components retain their existing behavior.

### Minor Changes

- ce02232: Add token-driven compound Toast notifications using OverlayProvider, with top/bottom placements, timed or persistent dismissal, and actions.

  Provide a ready-made Toast component assembled from child-only composable parts, following Input's composition model.

- e4de9ad: Move Card, List, Progress, and their prop types out of primitives into dedicated packages. Import them from their owning packages or the toolkit. Add ready-made Card and List components assembled from their child-only namespaced parts, and use Reanimated for indeterminate Progress.

### Patch Changes

- Updated dependencies [ce02232]
- Updated dependencies [ce02232]
- Updated dependencies [9556669]
- Updated dependencies [e4de9ad]
  - @impulse-ui-native/toast@6.0.0
  - @impulse-ui-native/theme@6.0.0
  - @impulse-ui-native/carousel@6.0.0
  - @impulse-ui-native/card@6.0.0
  - @impulse-ui-native/list@6.0.0
  - @impulse-ui-native/progress@6.0.0
  - @impulse-ui-native/primitives@6.0.0
  - @impulse-ui-native/accordion@6.0.0
  - @impulse-ui-native/charts@6.0.0
  - @impulse-ui-native/checkbox@6.0.0
  - @impulse-ui-native/data-state@6.0.0
  - @impulse-ui-native/datetime@6.0.0
  - @impulse-ui-native/flyout@6.0.0
  - @impulse-ui-native/form-field@6.0.0
  - @impulse-ui-native/input@6.0.0
  - @impulse-ui-native/pagination@6.0.0
  - @impulse-ui-native/radio@6.0.0
  - @impulse-ui-native/segmented-control@6.0.0
  - @impulse-ui-native/select@6.0.0
  - @impulse-ui-native/skeleton@6.0.0
  - @impulse-ui-native/slider@6.0.0
  - @impulse-ui-native/stepper@6.0.0
  - @impulse-ui-native/switch@6.0.0
  - @impulse-ui-native/core@6.0.0
  - @impulse-ui-native/echo@6.0.0
  - @impulse-ui-native/endpoint@6.0.0
  - @impulse-ui-native/overlay@6.0.0
  - @impulse-ui-native/portal@6.0.0

## 5.0.0

### Minor Changes

- 0b4016a: Add a native Carousel with edge and center snapping, neighboring-slide previews, controlled or uncontrolled indices, dots/segments/counter pagination, and default filled navigation buttons that honor reduced motion. Pagination and navigation follow the nearest slide during scrolling.
- 58a5c7e: Add native token-driven Pagination with adaptive and compact page-window
  layouts, controlled and uncontrolled state, and shared Pressable feedback.

### Patch Changes

- Updated dependencies [9ab7bb5]
- Updated dependencies [666a2bf]
- Updated dependencies [0fcbabd]
- Updated dependencies [0fcbabd]
- Updated dependencies [e1a8def]
- Updated dependencies [0b4016a]
- Updated dependencies [f618637]
- Updated dependencies [58a5c7e]
- Updated dependencies [b5a7c24]
- Updated dependencies [0fcbabd]
- Updated dependencies [0fcbabd]
  - @impulse-ui-native/segmented-control@5.0.0
  - @impulse-ui-native/skeleton@5.0.0
  - @impulse-ui-native/theme@5.0.0
  - @impulse-ui-native/accordion@5.0.0
  - @impulse-ui-native/checkbox@5.0.0
  - @impulse-ui-native/flyout@5.0.0
  - @impulse-ui-native/form-field@5.0.0
  - @impulse-ui-native/input@5.0.0
  - @impulse-ui-native/primitives@5.0.0
  - @impulse-ui-native/radio@5.0.0
  - @impulse-ui-native/slider@5.0.0
  - @impulse-ui-native/switch@5.0.0
  - @impulse-ui-native/carousel@5.0.0
  - @impulse-ui-native/pagination@5.0.0
  - @impulse-ui-native/data-state@5.0.0
  - @impulse-ui-native/charts@5.0.0
  - @impulse-ui-native/datetime@5.0.0
  - @impulse-ui-native/select@5.0.0
  - @impulse-ui-native/stepper@5.0.0
  - @impulse-ui-native/core@5.0.0
  - @impulse-ui-native/echo@5.0.0
  - @impulse-ui-native/endpoint@5.0.0
  - @impulse-ui-native/overlay@5.0.0
  - @impulse-ui-native/portal@5.0.0

## 4.0.0

### Patch Changes

- Updated dependencies [cfd0e78]
  - @impulse-ui-native/checkbox@4.0.0
  - @impulse-ui-native/datetime@4.0.0
  - @impulse-ui-native/input@4.0.0
  - @impulse-ui-native/primitives@4.0.0
  - @impulse-ui-native/radio@4.0.0
  - @impulse-ui-native/select@4.0.0
  - @impulse-ui-native/slider@4.0.0
  - @impulse-ui-native/switch@4.0.0
  - @impulse-ui-native/theme@4.0.0
  - @impulse-ui-native/accordion@4.0.0
  - @impulse-ui-native/charts@4.0.0
  - @impulse-ui-native/data-state@4.0.0
  - @impulse-ui-native/flyout@4.0.0
  - @impulse-ui-native/form-field@4.0.0
  - @impulse-ui-native/skeleton@4.0.0
  - @impulse-ui-native/stepper@4.0.0
  - @impulse-ui-native/core@4.0.0
  - @impulse-ui-native/echo@4.0.0
  - @impulse-ui-native/endpoint@4.0.0
  - @impulse-ui-native/overlay@4.0.0
  - @impulse-ui-native/portal@4.0.0

## 3.0.0

### Major Changes

- 8873b55: Add token-driven Slider and RangeSlider controls with shared sizes, filled, outlined, and soft variants, steps, marks, value labels, pointer gestures, keyboard input, and adjustable accessibility semantics.

  Rename the public theme constant `shadowScale` to `ShadowScale` to follow the PascalCase constants convention.

### Patch Changes

- Updated dependencies [8873b55]
  - @impulse-ui-native/slider@3.0.0
  - @impulse-ui-native/theme@3.0.0
  - @impulse-ui-native/accordion@3.0.0
  - @impulse-ui-native/charts@3.0.0
  - @impulse-ui-native/checkbox@3.0.0
  - @impulse-ui-native/data-state@3.0.0
  - @impulse-ui-native/datetime@3.0.0
  - @impulse-ui-native/flyout@3.0.0
  - @impulse-ui-native/form-field@3.0.0
  - @impulse-ui-native/input@3.0.0
  - @impulse-ui-native/primitives@3.0.0
  - @impulse-ui-native/radio@3.0.0
  - @impulse-ui-native/select@3.0.0
  - @impulse-ui-native/skeleton@3.0.0
  - @impulse-ui-native/stepper@3.0.0
  - @impulse-ui-native/switch@3.0.0
  - @impulse-ui-native/core@3.0.0
  - @impulse-ui-native/echo@3.0.0
  - @impulse-ui-native/endpoint@3.0.0
  - @impulse-ui-native/overlay@3.0.0
  - @impulse-ui-native/portal@3.0.0

## 2.9.0

### Patch Changes

- Updated dependencies [3b7df07]
  - @impulse-ui-native/primitives@2.9.0
  - @impulse-ui-native/theme@2.9.0
  - @impulse-ui-native/accordion@2.9.0
  - @impulse-ui-native/datetime@2.9.0
  - @impulse-ui-native/flyout@2.9.0
  - @impulse-ui-native/skeleton@2.9.0
  - @impulse-ui-native/charts@2.9.0
  - @impulse-ui-native/checkbox@2.9.0
  - @impulse-ui-native/data-state@2.9.0
  - @impulse-ui-native/form-field@2.9.0
  - @impulse-ui-native/input@2.9.0
  - @impulse-ui-native/radio@2.9.0
  - @impulse-ui-native/select@2.9.0
  - @impulse-ui-native/stepper@2.9.0
  - @impulse-ui-native/switch@2.9.0
  - @impulse-ui-native/core@2.9.0
  - @impulse-ui-native/echo@2.9.0
  - @impulse-ui-native/endpoint@2.9.0
  - @impulse-ui-native/overlay@2.9.0
  - @impulse-ui-native/portal@2.9.0

## 2.8.0

### Minor Changes

- 385bd4f: Add accessible linear and circular progress indicators with determinate and reduced-motion-aware indeterminate states.
- 6a63019: Add a token-aware compound Card with static, media, section, and pressable composition APIs.
- e899f0a: Add an accessible compound Accordion with single and multiple expansion, animated height, keyboard navigation, and nested content support. Forward refs through the shared Pressable primitive, use it consistently across package implementations, and stabilize render-created callbacks, styles, derived structures, and hook result objects across the affected controls.
- 1256f76: Add a token-aware Avatar with shared visual variants, image, initials, custom fallback, sizes, and semantic presence status.
- 598ea3d: Add a token-aware Divider with horizontal and vertical orientations, logical insets, and semantic colors.
- c6fb200: Add a token-aware Spinner primitive and use it across button, field, and switch loading states.

### Patch Changes

- Updated dependencies [385bd4f]
- Updated dependencies [6a63019]
- Updated dependencies [e899f0a]
- Updated dependencies [1256f76]
- Updated dependencies [598ea3d]
- Updated dependencies [c6fb200]
  - @impulse-ui-native/primitives@2.8.0
  - @impulse-ui-native/theme@2.8.0
  - @impulse-ui-native/accordion@2.8.0
  - @impulse-ui-native/charts@2.8.0
  - @impulse-ui-native/core@2.8.0
  - @impulse-ui-native/flyout@2.8.0
  - @impulse-ui-native/input@2.8.0
  - @impulse-ui-native/switch@2.8.0
  - @impulse-ui-native/select@2.8.0
  - @impulse-ui-native/skeleton@2.8.0
  - @impulse-ui-native/datetime@2.8.0
  - @impulse-ui-native/checkbox@2.8.0
  - @impulse-ui-native/data-state@2.8.0
  - @impulse-ui-native/form-field@2.8.0
  - @impulse-ui-native/radio@2.8.0
  - @impulse-ui-native/stepper@2.8.0
  - @impulse-ui-native/echo@2.8.0
  - @impulse-ui-native/endpoint@2.8.0
  - @impulse-ui-native/overlay@2.8.0
  - @impulse-ui-native/portal@2.8.0

## 2.7.0

### Minor Changes

- 3c5cb51: Add a themed Textarea control with character counting, validation feedback, accessible disabled and invalid states, and bounded auto-grow behavior.
- 6a3c644: Add an accessible, token-aware Switch component with controlled and uncontrolled state, loading and disabled behavior, RTL support, and reduced-motion-aware Reanimated transitions.
- 3c5cb51: Add a FormField composition component for accessible labels, descriptions, required markers, validation feedback, disabled state, and custom-control wiring.

### Patch Changes

- Updated dependencies [3c5cb51]
- Updated dependencies [6a3c644]
- Updated dependencies [3c5cb51]
- Updated dependencies [683305b]
  - @impulse-ui-native/input@2.7.0
  - @impulse-ui-native/theme@2.7.0
  - @impulse-ui-native/switch@2.7.0
  - @impulse-ui-native/form-field@2.7.0
  - @impulse-ui-native/primitives@2.7.0
  - @impulse-ui-native/select@2.7.0
  - @impulse-ui-native/charts@2.7.0
  - @impulse-ui-native/checkbox@2.7.0
  - @impulse-ui-native/data-state@2.7.0
  - @impulse-ui-native/datetime@2.7.0
  - @impulse-ui-native/flyout@2.7.0
  - @impulse-ui-native/radio@2.7.0
  - @impulse-ui-native/skeleton@2.7.0
  - @impulse-ui-native/stepper@2.7.0
  - @impulse-ui-native/core@2.7.0
  - @impulse-ui-native/echo@2.7.0
  - @impulse-ui-native/endpoint@2.7.0
  - @impulse-ui-native/overlay@2.7.0
  - @impulse-ui-native/portal@2.7.0

## 2.6.0

### Minor Changes

- f5dec23: Add the accessible, themeable Checkbox component with controlled and uncontrolled checked, unchecked, and indeterminate states.
- e34f2c3: Add the accessible, themeable Radio component with controlled and uncontrolled selection, shared sizes, and shared variants.

### Patch Changes

- 6f49e9f: Apply `ThemeProvider` component-token overrides and declare Skia as a toolkit peer dependency.
- Updated dependencies [f5dec23]
- Updated dependencies [6f49e9f]
- Updated dependencies [e34f2c3]
  - @impulse-ui-native/checkbox@2.6.0
  - @impulse-ui-native/theme@2.6.0
  - @impulse-ui-native/radio@2.6.0
  - @impulse-ui-native/charts@2.6.0
  - @impulse-ui-native/data-state@2.6.0
  - @impulse-ui-native/datetime@2.6.0
  - @impulse-ui-native/flyout@2.6.0
  - @impulse-ui-native/primitives@2.6.0
  - @impulse-ui-native/select@2.6.0
  - @impulse-ui-native/skeleton@2.6.0
  - @impulse-ui-native/stepper@2.6.0
  - @impulse-ui-native/input@2.6.0
  - @impulse-ui-native/core@2.6.0
  - @impulse-ui-native/echo@2.6.0
  - @impulse-ui-native/endpoint@2.6.0
  - @impulse-ui-native/overlay@2.6.0
  - @impulse-ui-native/portal@2.6.0

## 2.5.0

### Minor Changes

- Theme tokens cleanup

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/charts@2.5.0
  - @impulse-ui-native/core@2.5.0
  - @impulse-ui-native/data-state@2.5.0
  - @impulse-ui-native/datetime@2.5.0
  - @impulse-ui-native/echo@2.5.0
  - @impulse-ui-native/endpoint@2.5.0
  - @impulse-ui-native/flyout@2.5.0
  - @impulse-ui-native/input@2.5.0
  - @impulse-ui-native/overlay@2.5.0
  - @impulse-ui-native/portal@2.5.0
  - @impulse-ui-native/primitives@2.5.0
  - @impulse-ui-native/select@2.5.0
  - @impulse-ui-native/skeleton@2.5.0
  - @impulse-ui-native/stepper@2.5.0
  - @impulse-ui-native/theme@2.5.0

## 2.4.0

### Patch Changes

- fe0bf8e: Replace the layers registry with a typed overlay store, provider, and host API.
- Updated dependencies [fe0bf8e]
- Updated dependencies [7bc2723]
- Updated dependencies [e0a9246]
  - @impulse-ui-native/overlay@2.4.0
  - @impulse-ui-native/echo@2.4.0
  - @impulse-ui-native/flyout@2.4.0
  - @impulse-ui-native/select@2.4.0
  - @impulse-ui-native/types@2.4.0
  - @impulse-ui-native/datetime@2.4.0
  - @impulse-ui-native/charts@2.4.0
  - @impulse-ui-native/core@2.4.0
  - @impulse-ui-native/data-state@2.4.0
  - @impulse-ui-native/endpoint@2.4.0
  - @impulse-ui-native/input@2.4.0
  - @impulse-ui-native/portal@2.4.0
  - @impulse-ui-native/primitives@2.4.0
  - @impulse-ui-native/skeleton@2.4.0
  - @impulse-ui-native/stepper@2.4.0
  - @impulse-ui-native/theme@2.4.0

## 2.3.5

### Patch Changes

- Adding missing props in the package.json
- Updated dependencies
  - @impulse-ui-native/charts@2.3.5
  - @impulse-ui-native/core@2.3.5
  - @impulse-ui-native/data-state@2.3.5
  - @impulse-ui-native/datetime@2.3.5
  - @impulse-ui-native/echo@2.3.5
  - @impulse-ui-native/endpoint@2.3.5
  - @impulse-ui-native/flyout@2.3.5
  - @impulse-ui-native/input@2.3.5
  - @impulse-ui-native/layers@2.3.5
  - @impulse-ui-native/portal@2.3.5
  - @impulse-ui-native/primitives@2.3.5
  - @impulse-ui-native/select@2.3.5
  - @impulse-ui-native/skeleton@2.3.5
  - @impulse-ui-native/stepper@2.3.5
  - @impulse-ui-native/theme@2.3.5
  - @impulse-ui-native/types@2.3.5

## 2.3.4

### Patch Changes

- Adding licenses to packages
- Updated dependencies
  - @impulse-ui-native/charts@2.3.4
  - @impulse-ui-native/core@2.3.4
  - @impulse-ui-native/data-state@2.3.4
  - @impulse-ui-native/datetime@2.3.4
  - @impulse-ui-native/echo@2.3.4
  - @impulse-ui-native/endpoint@2.3.4
  - @impulse-ui-native/flyout@2.3.4
  - @impulse-ui-native/input@2.3.4
  - @impulse-ui-native/layers@2.3.4
  - @impulse-ui-native/portal@2.3.4
  - @impulse-ui-native/primitives@2.3.4
  - @impulse-ui-native/select@2.3.4
  - @impulse-ui-native/skeleton@2.3.4
  - @impulse-ui-native/stepper@2.3.4
  - @impulse-ui-native/theme@2.3.4
  - @impulse-ui-native/types@2.3.4

## 2.1.6

### Patch Changes

- f169c09: Fixing wrong tag flex prop
- Updated dependencies [f169c09]
  - @impulse-ui-native/charts@2.3.3
  - @impulse-ui-native/core@2.1.6
  - @impulse-ui-native/data-state@2.1.6
  - @impulse-ui-native/datetime@2.1.6
  - @impulse-ui-native/echo@2.1.6
  - @impulse-ui-native/endpoint@2.1.6
  - @impulse-ui-native/flyout@2.1.6
  - @impulse-ui-native/input@2.1.6
  - @impulse-ui-native/layers@2.1.6
  - @impulse-ui-native/portal@2.1.6
  - @impulse-ui-native/primitives@2.1.6
  - @impulse-ui-native/select@2.1.6
  - @impulse-ui-native/skeleton@2.1.6
  - @impulse-ui-native/stepper@2.1.6
  - @impulse-ui-native/theme@2.1.6
  - @impulse-ui-native/types@2.1.6

## 2.1.5

### Patch Changes

- Updated dependencies [fd608af]
- Updated dependencies [fd608af]
- Updated dependencies [fd608af]
- Updated dependencies [fd608af]
  - @impulse-ui-native/primitives@2.1.5
  - @impulse-ui-native/stepper@2.1.5
  - @impulse-ui-native/charts@2.3.2
  - @impulse-ui-native/data-state@2.1.5
  - @impulse-ui-native/datetime@2.1.5
  - @impulse-ui-native/flyout@2.1.5
  - @impulse-ui-native/input@2.1.5
  - @impulse-ui-native/select@2.1.5
  - @impulse-ui-native/skeleton@2.1.5
  - @impulse-ui-native/layers@2.1.5
  - @impulse-ui-native/core@2.1.5
  - @impulse-ui-native/echo@2.1.5
  - @impulse-ui-native/endpoint@2.1.5
  - @impulse-ui-native/portal@2.1.5
  - @impulse-ui-native/theme@2.1.5
  - @impulse-ui-native/types@2.1.5

## 2.1.4

### Patch Changes

- 13ae4f4: Updating README docs
- Updated dependencies [13ae4f4]
  - @impulse-ui-native/charts@2.3.1
  - @impulse-ui-native/core@2.1.4
  - @impulse-ui-native/data-state@2.1.4
  - @impulse-ui-native/datetime@2.1.4
  - @impulse-ui-native/echo@2.1.4
  - @impulse-ui-native/endpoint@2.1.4
  - @impulse-ui-native/flyout@2.1.4
  - @impulse-ui-native/input@2.1.4
  - @impulse-ui-native/layers@2.1.4
  - @impulse-ui-native/portal@2.1.4
  - @impulse-ui-native/primitives@2.1.4
  - @impulse-ui-native/select@2.1.4
  - @impulse-ui-native/skeleton@2.1.4
  - @impulse-ui-native/stepper@2.1.4
  - @impulse-ui-native/theme@2.1.4
  - @impulse-ui-native/types@2.1.4

## 2.1.3

### Patch Changes

- Updated dependencies [220d0ac]
  - @impulse-ui-native/charts@2.3.0
  - @impulse-ui-native/core@2.1.3
  - @impulse-ui-native/data-state@2.1.3
  - @impulse-ui-native/datetime@2.1.3
  - @impulse-ui-native/echo@2.1.3
  - @impulse-ui-native/endpoint@2.1.3
  - @impulse-ui-native/flyout@2.1.3
  - @impulse-ui-native/input@2.1.3
  - @impulse-ui-native/layers@2.1.3
  - @impulse-ui-native/portal@2.1.3
  - @impulse-ui-native/primitives@2.1.3
  - @impulse-ui-native/select@2.1.3
  - @impulse-ui-native/skeleton@2.1.3
  - @impulse-ui-native/stepper@2.1.3
  - @impulse-ui-native/theme@2.1.3
  - @impulse-ui-native/types@2.1.3

## 2.1.2

### Patch Changes

- Updated dependencies [738c37f]
- Updated dependencies [738c37f]
  - @impulse-ui-native/stepper@2.1.2
  - @impulse-ui-native/charts@2.2.0
  - @impulse-ui-native/core@2.1.2
  - @impulse-ui-native/data-state@2.1.2
  - @impulse-ui-native/datetime@2.1.2
  - @impulse-ui-native/echo@2.1.2
  - @impulse-ui-native/endpoint@2.1.2
  - @impulse-ui-native/flyout@2.1.2
  - @impulse-ui-native/input@2.1.2
  - @impulse-ui-native/layers@2.1.2
  - @impulse-ui-native/portal@2.1.2
  - @impulse-ui-native/primitives@2.1.2
  - @impulse-ui-native/select@2.1.2
  - @impulse-ui-native/skeleton@2.1.2
  - @impulse-ui-native/theme@2.1.2
  - @impulse-ui-native/types@2.1.2

## 2.1.1

### Patch Changes

- Updated dependencies [f5d8cc1]
  - @impulse-ui-native/charts@2.1.1
  - @impulse-ui-native/core@2.1.1
  - @impulse-ui-native/data-state@2.1.1
  - @impulse-ui-native/datetime@2.1.1
  - @impulse-ui-native/echo@2.1.1
  - @impulse-ui-native/flyout@2.1.1
  - @impulse-ui-native/input@2.1.1
  - @impulse-ui-native/layers@2.1.1
  - @impulse-ui-native/primitives@2.1.1
  - @impulse-ui-native/select@2.1.1
  - @impulse-ui-native/theme@2.1.1
  - @impulse-ui-native/skeleton@2.1.1
  - @impulse-ui-native/stepper@2.1.1
  - @impulse-ui-native/endpoint@2.1.1
  - @impulse-ui-native/portal@2.1.1
  - @impulse-ui-native/types@2.1.1

## 2.1.0

### Patch Changes

- Updated dependencies [69e91a4]
  - @impulse-ui-native/charts@2.1.0
  - @impulse-ui-native/core@2.1.0
  - @impulse-ui-native/theme@2.1.0
  - @impulse-ui-native/data-state@2.1.0
  - @impulse-ui-native/datetime@2.1.0
  - @impulse-ui-native/echo@2.1.0
  - @impulse-ui-native/flyout@2.1.0
  - @impulse-ui-native/input@2.1.0
  - @impulse-ui-native/layers@2.1.0
  - @impulse-ui-native/primitives@2.1.0
  - @impulse-ui-native/select@2.1.0
  - @impulse-ui-native/skeleton@2.1.0
  - @impulse-ui-native/stepper@2.1.0
  - @impulse-ui-native/endpoint@2.1.0
  - @impulse-ui-native/portal@2.1.0
  - @impulse-ui-native/types@2.1.0

## 2.0.1

### Patch Changes

- Updating READMEs
- Updated dependencies
  - @impulse-ui-native/core@2.0.1
  - @impulse-ui-native/data-state@2.0.1
  - @impulse-ui-native/datetime@2.0.1
  - @impulse-ui-native/echo@2.0.1
  - @impulse-ui-native/endpoint@2.0.1
  - @impulse-ui-native/flyout@2.0.1
  - @impulse-ui-native/icon@2.0.1
  - @impulse-ui-native/input@2.0.1
  - @impulse-ui-native/layers@2.0.1
  - @impulse-ui-native/portal@2.0.1
  - @impulse-ui-native/primitives@2.0.1
  - @impulse-ui-native/select@2.0.1
  - @impulse-ui-native/skeleton@2.0.1
  - @impulse-ui-native/stepper@2.0.1
  - @impulse-ui-native/theme@2.0.1
  - @impulse-ui-native/types@2.0.1

## 2.0.0

### Major Changes

- Initial major public release

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/core@2.0.0
  - @impulse-ui-native/data-state@2.0.0
  - @impulse-ui-native/datetime@2.0.0
  - @impulse-ui-native/echo@2.0.0
  - @impulse-ui-native/endpoint@2.0.0
  - @impulse-ui-native/flyout@2.0.0
  - @impulse-ui-native/icon@2.0.0
  - @impulse-ui-native/input@2.0.0
  - @impulse-ui-native/layers@2.0.0
  - @impulse-ui-native/portal@2.0.0
  - @impulse-ui-native/primitives@2.0.0
  - @impulse-ui-native/select@2.0.0
  - @impulse-ui-native/skeleton@2.0.0
  - @impulse-ui-native/stepper@2.0.0
  - @impulse-ui-native/theme@2.0.0
  - @impulse-ui-native/types@2.0.0
