# @impulse-ui-native/color-picker

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/color-picker

A modular full-spectrum color picker for native iOS and Android. Reuses ImpulseUI Input, Slider, Button, Typography, and theme utilities. Gradients and transparency previews use react-native-svg.

## Installation

```sh
pnpm add @impulse-ui-native/color-picker react-native-svg react-native-gesture-handler react-native-reanimated react-native-worklets
```

Requires React >=18, React Native >=0.73, react-native-svg >=13.9.0, Gesture Handler >=2, Reanimated >=4, and Worklets >=0.5. Complete Gesture Handler, Reanimated, and Worklets native setup. Render inside `GestureHandlerRootView` and `ThemeProvider` from `@impulse-ui-native/theme` and load the theme's fonts, as for other ImpulseUI controls. ColorPicker also requires react-native-svg for gradients and transparency previews. No overlay providers are required for this inline picker.

## Usage

```tsx
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ColorPicker } from "@impulse-ui-native/color-picker";
import { ThemeProvider } from "@impulse-ui-native/theme";

export function BrandColor() {
  const [color, setColor] = useState("#F55D6B");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <ColorPicker value={color} onChange={setColor} commitMode="confirm" />
      </ThemeProvider>
    </GestureHandlerRootView>
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


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/color-picker/src/components/index.ts

```tsx
import { ColorPickerAlphaInput } from "./alpha-input";
import { ColorPickerAlphaSlider } from "./alpha-slider";
import { ColorPickerApply } from "./apply";
import { ColorPickerCancel } from "./cancel";
import { ColorPickerChannelInput } from "./channel-input";
import { ColorPickerComponent } from "./color-picker";
import { ColorPickerHexInput } from "./hex-input";
import { ColorPickerHueSlider } from "./hue-slider";
import { ColorPickerPreview } from "./preview";
import { ColorPickerRoot } from "./root";
import { ColorPickerSpectrum } from "./spectrum";
import { ColorPickerSwatch } from "./swatch";

export const ColorPicker = Object.assign(ColorPickerComponent, {
  Root: ColorPickerRoot,
  Spectrum: ColorPickerSpectrum,
  HueSlider: ColorPickerHueSlider,
  AlphaSlider: ColorPickerAlphaSlider,
  Preview: ColorPickerPreview,
  HexInput: ColorPickerHexInput,
  ChannelInput: ColorPickerChannelInput,
  AlphaInput: ColorPickerAlphaInput,
  Swatch: ColorPickerSwatch,
  Apply: ColorPickerApply,
  Cancel: ColorPickerCancel,
});
```

### packages/color-picker/src/index.ts

```tsx
export * from "./components";
export type {
  ColorChannel,
  ColorPickerActionProps,
  ColorPickerAlphaInputProps,
  ColorPickerChannelInputProps,
  ColorPickerCommitMode,
  ColorPickerProps,
  ColorPickerRootProps,
  ColorPickerSwatchProps,
} from "./types";
export type { ColorPickerPreset } from "@impulse-ui-native/theme";
export type { ColorPickerHexInputProps } from "./types/color-input.types";
```

### packages/color-picker/src/types/color-input.types.ts

```tsx
import type { InputProps } from "@impulse-ui-native/input";

export type ColorPickerHexInputProps = Omit<
  InputProps,
  "value" | "defaultValue" | "onChange" | "onChangeText"
>;

export interface ColorInputOptions {
  resetKey: number;
  value: string;
  disabled: boolean;
  commit: (value: string) => string | undefined;
}

export interface ColorInputDraft {
  resetKey: number;
  base: string;
  text: string;
  invalid: boolean;
}
```

### packages/color-picker/src/types/color-picker-internal.types.ts

```tsx
import type { DerivedValue, SharedValue } from "react-native-reanimated";

import type {
  ColorPickerPreset,
  ComponentSize,
} from "@impulse-ui-native/theme";

import type {
  ColorChannel,
  ColorPickerCommitMode,
  HsvaColor,
  RgbaColor,
} from "./color.types";

export interface ColorPickerPresetEntryProps {
  preset: ColorPickerPreset;
}

export interface ColorPickerContextData {
  gesture: ColorPickerGestureHandlers;
  motion: ColorPickerMotion;
  resetKey: number;
  value: string;
  rgba: RgbaColor;
  hsva: HsvaColor;
  disabled: boolean;
  size: ComponentSize;
  commitMode: ColorPickerCommitMode;
  setColor: (color: string) => boolean;
  setHue: (hue: number) => void;
  setAlpha: (alpha: number) => void;
  setSpectrum: (saturation: number, brightness: number) => void;
  setChannel: (channel: ColorChannel, value: number) => void;
  apply: () => void;
  cancel: () => void;
}

export interface ColorPickerGestureHandlers {
  setHue: (hue: number) => void;
  setAlpha: (alpha: number) => void;
  setSpectrum: (saturation: number, brightness: number) => void;
}

export interface ColorPickerMotion {
  color: SharedValue<HsvaColor>;
  rgba: DerivedValue<RgbaColor>;
  hue: DerivedValue<number>;
  setHue: (hue: number) => void;
  setAlpha: (alpha: number) => void;
  setSpectrum: (saturation: number, brightness: number) => void;
  finish: () => void;
}

export interface ColorPickerDraft {
  commitMode: ColorPickerCommitMode;
  base: string;
  hsva: HsvaColor;
}

export interface ColorPickerSizeThemeProps {
  size: ComponentSize;
  disabled?: boolean;
}

export interface ColorPickerSwatchThemeProps extends ColorPickerSizeThemeProps {
  selected: boolean;
}
```

### packages/color-picker/src/types/color-picker.types.ts

```tsx
import type { PropsWithChildren, ReactNode } from "react";

import type {
  ButtonProps,
  PressableCoreProps,
  ViewProps,
} from "@impulse-ui-native/primitives";
import type {
  ColorPickerPreset,
  ComponentSize,
} from "@impulse-ui-native/theme";

import type { ColorChannel, ColorPickerCommitMode } from "./color.types";

export interface ColorPickerRootProps extends ViewProps {
  /** Hex: RGB, RGBA, RRGGBB, or RRGGBBAA, with an optional #. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: ComponentSize;
  /** Confirm mode stages changes until Apply and discards them on Cancel. */
  commitMode?: ColorPickerCommitMode;
}

export interface ColorPickerProps extends Omit<
  ColorPickerRootProps,
  "children"
> {
  showAlpha?: boolean;
  /** Show the preset palette and its label. Defaults to true. */
  showPresets?: boolean;
  /** An empty array hides presets. Defaults to the active theme palette. */
  presets?: readonly ColorPickerPreset[];
  /** Label above the preset palette. Defaults to "Theme colors". */
  presetsLabel?: string;
}

export interface ColorPickerChannelInputProps {
  channel: ColorChannel;
  label?: string;
}

export interface ColorPickerAlphaInputProps {
  label?: string;
}

export interface ColorPickerSwatchProps extends Omit<
  PressableCoreProps,
  "loading" | "children"
> {
  children?: ReactNode;
  color: string;
}

export type ColorPickerActionProps = PropsWithChildren<ButtonProps>;
```

### packages/color-picker/src/types/color.types.ts

```tsx
export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface HsvaColor {
  h: number;
  s: number;
  v: number;
  a: number;
}

export type ColorChannel = "r" | "g" | "b";
export type ColorPickerCommitMode = "immediate" | "confirm";
```

### packages/color-picker/src/types/index.ts

```tsx
export * from "./color.types";
export * from "./color-picker.types";
export * from "./color-picker-internal.types";
```
