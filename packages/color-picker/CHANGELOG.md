# @impulse-ui-native/color-picker

## 9.1.0

### Patch Changes

- Updated dependencies [bffa719]
  - @impulse-ui-native/theme@9.1.0
  - @impulse-ui-native/icon@9.1.0
  - @impulse-ui-native/input@9.1.0
  - @impulse-ui-native/primitives@9.1.0
  - @impulse-ui-native/slider@9.1.0
  - @impulse-ui-native/core@9.1.0

## 9.0.0

### Minor Changes

- 91eba29: Add a modular native ColorPicker with saturation/brightness spectrum, hue and alpha sliders, hex/RGB/opacity entry, theme presets, controlled/uncontrolled selection, and staged Apply/Cancel behavior. Add component tokens and toolkit exports. Slider now accepts custom track content and uses a tokenized minimum interaction height.

  Render gradient transparency with explicit stop opacity. Activate spectrum drags on touch-down with Gesture Handler on the UI thread so parent native scrolling cannot interrupt color selection. The color picker requires Gesture Handler, Reanimated, Worklets, and GestureHandlerRootView.

  Allow customizing the preset palette heading through presetsLabel, defaulting to "Theme colors", and hiding the entire preset section with showPresets={false}.

  Expose dedicated color-picker tokens for internal spacing, field proportions, surface radii, swatch rings and checkmark sizes, and spectrum indicator borders and shadows. Preserve the default appearance while allowing independent customization.

### Patch Changes

- 91eba29: Remove unsupported right-to-left mirroring from color selection, sliders, switches, progress indicators, pagination arrows, and initial scroll reveal calculations. Use left-to-right behavior consistently and remove RTL support claims from current documentation.

  Remove the typography writingDirection style prop.

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

- Updated dependencies [91eba29]
- Updated dependencies [91eba29]
- Updated dependencies [cf6e434]
  - @impulse-ui-native/theme@9.0.0
  - @impulse-ui-native/slider@9.0.0
  - @impulse-ui-native/primitives@9.0.0
  - @impulse-ui-native/core@9.0.0
  - @impulse-ui-native/icon@9.0.0
  - @impulse-ui-native/input@9.0.0

Initial development of the modular color picker.
