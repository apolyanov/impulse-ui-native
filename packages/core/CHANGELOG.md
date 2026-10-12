# @impulse-ui-native/core

## 9.0.0

### Patch Changes

- cf6e434: Move slider, range-slider, and color-spectrum drag visuals onto the UI thread.
  Skip repeated snapped values, cache mark labels and alpha gradients, and limit
  spectrum React updates while preserving the final selection. Fix consecutive
  controllable-state updates that arrive before a render. Standalone slider installs
  now require Gesture Handler, Reanimated, and Worklets native setup, including a
  GestureHandlerRootView ancestor. This is a breaking setup change for standalone
  slider consumers; toolkit consumers already declare these runtime peers.

  Consolidate slider mark layout and spectrum coordinate conversion, separate
  internal styling and state types from public props, and remove unused track math.
  Preserve scientific-notation steps and fractional upper limits, and enforce
  range gaps when bounds do not align with the step grid.

  Initialize numeric worklet helpers before the worklets that capture them to
  prevent an undefined-function crash when rendering Slider or ColorPicker through
  the native Expo Babel pipeline.

  Separate continuous thumb and fill positions from stepped values so dragging
  remains smooth between steps, including ColorPicker hue and alpha controls.
  Range visuals retain their minimum gap, and release reconciles to the normalized
  selection.

  Drive ColorPicker preview and gradient visuals from shared UI-thread color state.
  Add Slider.onValueChangeWorklet for linking continuous drag values to Reanimated
  visuals before normalizing JavaScript value callbacks.

  Keep ColorPicker context and text fields stable during native drags while
  preserving live value notifications. Compute UI RGBA once per color update and
  pass unprocessed color strings to Reanimated so RGB and alpha survive native
  color processing. Add a native Storybook frame-time probe to compare the
  isolated spectrum and full picker.

  Keep off-grid slider maxima reachable and preserve controlled color change
  notifications when dragging back to an unchanged owner value.

## 8.3.0

## 8.2.0

### Patch Changes

- 0cd457e: Expose shared shadows, the code font, chart palette and geometry, Slider detail
  dimensions, overlay animation timing, and Toast action weight through the active
  theme. Preserve explicit visual prop overrides and existing runtime defaults.
  Keep chart stroke layout aligned with its themed rendering width, preserve arrays
  when merging theme palettes, and theme shared Storybook preview styling.

## 8.1.0

## 8.0.0

## 7.0.1

## 7.0.0

## 6.3.1

## 6.3.0

## 6.2.0

### Minor Changes

- 5552924: Add a shared useBackHandler hook with optional enablement, latest callbacks, and subscription cleanup. Reuse it for Popover's Android Back dismissal.
- 5552924: Add a shared one-shot useTimer hook with cancellation and optional native background pausing. Reuse it for Toast and Tooltip dismissal, and prevent completed timers from restarting on foregrounding.

## 6.1.0

## 6.0.0

## 5.0.0

## 4.0.0

## 3.0.0

## 2.9.0

## 2.8.0

### Patch Changes

- e899f0a: Add an accessible compound Accordion with single and multiple expansion, animated height, keyboard navigation, and nested content support. Forward refs through the shared Pressable primitive, use it consistently across package implementations, and stabilize render-created callbacks, styles, derived structures, and hook result objects across the affected controls.

## 2.7.0

## 2.6.0

## 2.5.0

### Minor Changes

- Theme tokens cleanup

## 2.4.0

## 2.3.5

### Patch Changes

- Adding missing props in the package.json

## 2.3.4

### Patch Changes

- Adding licenses to packages

## 2.1.6

### Patch Changes

- f169c09: Fixing wrong tag flex prop

## 2.1.5

## 2.1.4

### Patch Changes

- 13ae4f4: Updating README docs

## 2.1.3

## 2.1.2

## 2.1.1

### Patch Changes

- f5d8cc1: Emit tree-shakeable package modules without flattening internal imports into a single bundle.

## 2.1.0

### Minor Changes

- 69e91a4: Add styled line and multi-line charts with shared axes, grids, labels, and theme color support.

## 2.0.1

### Patch Changes

- Updating READMEs

## 2.0.0

### Major Changes

- Initial major public release
