# @impulse-ui-native/color-picker

A modular full-spectrum color picker for native iOS and Android. Reuses ImpulseUI Input, Slider, Button, Typography, and theme utilities. Gradients and transparency previews use react-native-svg.

## Installation

```sh
pnpm add @impulse-ui-native/color-picker react-native-svg react-native-gesture-handler react-native-reanimated react-native-worklets
```

Requires React >=18, React Native >=0.73, react-native-svg >=13.9.0, Gesture Handler >=2, Reanimated >=4, and Worklets >=0.5. Complete Gesture Handler and Reanimated's native setup. Render inside GestureHandlerRootView and ThemeProvider and load the theme's fonts, as for other ImpulseUI controls. No overlay providers are required for this inline picker.

## Usage

```tsx
import { useState } from "react";

import { ColorPicker } from "@impulse-ui-native/color-picker";
import { ThemeProvider } from "@impulse-ui-native/theme";

export function BrandColor() {
  const [color, setColor] = useState("#F55D6B");

  return (
    <ThemeProvider>
      <ColorPicker value={color} onChange={setColor} commitMode="confirm" />
    </ThemeProvider>
  );
}
```

Use defaultValue for uncontrolled selection. Without an initial value, the theme primary color is used. Both modes use onChange. Immediate mode is the default; confirm mode stages edits, commits on Apply, and restores the committed color on Cancel. External controlled value changes invalidate the draft. The picker stays inline after Apply or Cancel; modal/sheet dismissal belongs to its owner.

Values accept RGB, RGBA, RRGGBB, or RRGGBBAA hex strings, with an optional #. Changes emit uppercase #RRGGBB for opaque colors and #RRGGBBAA for transparent colors. CSS names, rgb(), and theme paths are not accepted. Invalid incoming values fall back to theme primary. Invalid or incomplete typed values retain the last valid selection; blur/submission shows an error. Valid fields update the current selection as you type, so Apply uses the latest valid edit. RGB channels accept integers 0-255, and opacity accepts percentages 0-100. Hue is retained when editing achromatic colors.

showAlpha={false} hides opacity controls; it preserves existing alpha and still allows alpha in hex input. Pass showPresets={false} to hide the preset palette and its label. It defaults to true. Supply presets with { label, color, disabled? } entries to customize the palette; presets={[]} also hides it. Default preset colors resolve from the current theme, while the selected custom hex color stays unchanged across theme switches. Sizes are small, medium, and large. Disabled roots block every interactive part.

Use presetsLabel="Brand colors" to customize the heading above the preset palette. It defaults to "Theme colors" and appears only when presets are available.

## Composition

```tsx
<ColorPicker.Root defaultValue="#1864AB" commitMode="confirm">
  <ColorPicker.Spectrum />
  <ColorPicker.HueSlider />
  <ColorPicker.AlphaSlider />
  <ColorPicker.Preview />
  <ColorPicker.HexInput label="Custom hex" />
  <ColorPicker.ChannelInput channel="r" label="Red" />
  <ColorPicker.AlphaInput label="Opacity (%)" />
  <ColorPicker.Swatch color="#1864AB">{customMark}</ColorPicker.Swatch>
  <ColorPicker.Cancel>Discard</ColorPicker.Cancel>
  <ColorPicker.Apply>Use color</ColorPicker.Apply>
</ColorPicker.Root>
```

Root owns state and renders supplied children. Omit or reorder any parts. Swatch renders the supplied children over its intrinsic color preview; the ready-made picker supplies the selected checkmark. Actions render supplied button content and preserve native onPress callbacks after the semantic action. Wrap multiple fields/actions in View for your layout. Parts require Root; sibling roots maintain independent selections.

The package exports ColorPicker and its prop/value types. The toolkit also re-exports the picker. Customize components.colorPicker through ThemeProvider: geometry, surface and border colors, selected ring, checkerboard, disabled opacity, presets, and size-specific dimensions. Controls continue to use the existing Input, Slider, and Button tokens. Spectrum colors are intrinsic color-space values rather than brand tokens; surrounding chrome and presets follow light/dark themes.

Internal spacing has independent tokens: rowGap, sliderLabelGap, presetsLabelGap (heading to palette), presetsGap (between presets), and presetLabelGap (swatch to caption). Surface radii, swatch ring padding/borders, alpha field proportions, checkmark sizes, and spectrum indicator borders/shadows also have dedicated tokens.

```tsx
<ThemeProvider
  components={{ colorPicker: { presetsLabelGap: 12, presetsGap: 8 } }}
>
  <ColorPicker />
</ThemeProvider>
```

Touches that start in the enabled spectrum activate a native pan gesture on touch-down and stay with the panel until release, blocking parent scrolling while selecting saturation and brightness. Dragging beyond the panel clamps selection to its edges. The spectrum indicator
updates on the UI thread at the native gesture rate. Spectrum color updates are
limited to approximately 60 Hz, with the final selection always flushed on
release or interruption. Hue and alpha thumbs also move continuously on the UI thread, while their
emitted values follow the configured slider steps;
unchanged slider steps and repeated colors skip redundant updates. Disabled spectra leave scrolling available.

The color preview, spectrum hue background, and opacity gradient share UI-thread
color state with the gestures. They update without waiting for React renders or
`onChange`. During a drag, React-rendered hex/RGB fields and preset selection
keep their previous snapshot; releasing publishes the final normalized color.
Immediate-mode `onChange` still emits live values. Apply, Cancel, and gesture
completion reconcile the visual color to the accepted selection.

Native device verification of dragging, keyboard entry, font scaling, and nested scrolling remains necessary; package checks are not interaction tests.
