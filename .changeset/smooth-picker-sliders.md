---
"@impulse-ui-native/core": patch
"@impulse-ui-native/slider": major
"@impulse-ui-native/color-picker": patch
---

Move slider, range-slider, and color-spectrum drag visuals onto the UI thread.
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
