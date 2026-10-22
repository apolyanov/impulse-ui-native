# @impulse-ui-native/slider

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/slider

Token-aware slider and range slider controls for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/slider react-native-gesture-handler react-native-reanimated react-native-worklets
```

Complete Gesture Handler, Reanimated, and Worklets native setup. Render sliders inside
`GestureHandlerRootView` and `ThemeProvider` from `@impulse-ui-native/theme`.
Requires Gesture Handler >=2, Reanimated >=4, and Worklets >=0.5.

## Main exports

- `Slider` selects one numeric value.
- `RangeSlider` selects a lower and upper numeric value.
- `SliderProps`, `RangeSliderProps`, and `SliderValue` describe the public API.

## Usage

```tsx
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { RangeSlider, Slider } from "@impulse-ui-native/slider";
import { ThemeProvider } from "@impulse-ui-native/theme";

export function PriceControls() {
  const [rating, setRating] = useState(60);
  const [priceRange, setPriceRange] = useState<readonly [number, number]>([
    25, 75,
  ]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <Slider
          value={rating}
          onValueChange={setRating}
          min={0}
          max={100}
          step={5}
          marks={[0, 25, 50, 75, 100]}
          showMinMax
          showValueBubble
        />

        <RangeSlider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={100}
          step={5}
          minStepsBetweenThumbs={1}
          showValueBubble
        />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
```

Use `defaultValue` for uncontrolled state. Values are clamped to `min` and `max`, then snapped to `step`. `RangeSlider` keeps its values ordered and can enforce a gap with `minStepsBetweenThumbs`.

`filled`, `outlined`, and `soft` are the supported visual variants. `small`, `medium`, and `large` adjust the track, thumb, marks, and hit slop together. Pass `marks` to render explicit positions; enable `showMarkLabels`, `showMinMax`, and `showValueBubble` only when the extra value context is useful.

Drag or press the track to change the value. Native gestures update the thumb and
active fill continuously on the UI thread, independently of the step grid.
`onValueChange` emits changed, snapped values;
`onSlidingComplete` receives the final selection on release or interruption.
Controlled sliders track the gesture locally and reconcile to the supplied
`value` after interaction ends. Uncontrolled sliders settle to the normalized
selection on release. Range thumbs move continuously while respecting their
minimum gap. Enabled sliders keep touches that start on the
track, including inside a scrolling container.

Use `formatValue` to customize visible value text, including units or localized formatting.

## Additional theme geometry

Customize `components.slider.markLabelWidth`, `thumbHighlightSize`, and
`valueBubbleMinWidth` through `ThemeProvider`. Defaults remain 48, 4, and 40.
Mark-label centering follows half of the configured width.

## Custom tracks

Pass `onValueChangeWorklet` to connect continuous drag positions to other
Reanimated visuals. The callback must be a worklet and runs on the UI thread
before step snapping; keep React state updates in `onValueChange`.

Slider accepts trackContent for gradient or other custom track visuals. It renders the supplied content inside the clipped track and omits the numeric active fill. Touch handling, thumb, and callbacks remain unchanged. The theme token components.slider.interactionMinHeight defaults to 44 for native touch targets.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/slider/src/components/index.ts

```tsx
export { RangeSlider } from "./range-slider";
export { Slider } from "./slider";
```

### packages/slider/src/components/range-slider.tsx

```tsx
import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import type { RangeSliderProps } from "../types";
import {
  DefaultMax,
  DefaultMin,
  DefaultRangeValue,
  DefaultStep,
} from "../constants";
import { useRangeSlider } from "../hooks";
import { formatSliderValue } from "../utils";
import { SliderLabels } from "./slider-labels";
import { SliderThumbControl } from "./slider-thumb";
import { SliderTrack } from "./slider-track";

export const RangeSlider = memo(function RangeSlider({
  defaultValue = DefaultRangeValue,
  disabled = false,
  formatValue,
  marks,
  max = DefaultMax,
  min = DefaultMin,
  minStepsBetweenThumbs = 0,
  onLayout,
  onSlidingComplete,
  onSlidingStart,
  onValueChange,
  showMarkLabels = false,
  showMinMax = false,
  showValueBubble = false,
  size = "medium",
  step = DefaultStep,
  style,
  value,
  variant = "filled",
  ...props
}: RangeSliderProps) {
  const slider = useRangeSlider({
    defaultValue,
    disabled,
    formatValue,
    marks,
    max,
    min,
    minStepsBetweenThumbs,
    onLayout,
    onSlidingComplete,
    onSlidingStart,
    onValueChange,
    step,
    value,
  });

  return (
    <View {...props} style={style}>
      <SliderTrack
        gesture={slider.gesture}
        onLayout={slider.handleLayout}
        activeTrackStyle={slider.activeTrackStyle}
        disabled={disabled}
        marks={slider.marks}
        showValueBubble={showValueBubble}
        size={size}
        variant={variant}
      >
        <SliderThumbControl
          disabled={disabled}
          positionStyle={slider.startThumb.positionStyle}
          showValueBubble={showValueBubble}
          size={size}
          valueLabel={slider.startThumb.valueLabel}
          variant={variant}
        />
        <SliderThumbControl
          disabled={disabled}
          positionStyle={slider.endThumb.positionStyle}
          showValueBubble={showValueBubble}
          size={size}
          valueLabel={slider.endThumb.valueLabel}
          variant={variant}
        />
      </SliderTrack>

      <SliderLabels
        disabled={disabled}
        marks={slider.labelMarks}
        maxLabel={formatSliderValue(slider.bounds.max, formatValue)}
        minLabel={formatSliderValue(slider.bounds.min, formatValue)}
        showMarkLabels={showMarkLabels}
        showMinMax={showMinMax}
        variant={variant}
      />
    </View>
  );
});
```

### packages/slider/src/components/slider.tsx

```tsx
import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import type { SliderProps } from "../types";
import {
  DefaultMax,
  DefaultMin,
  DefaultStep,
  DefaultValue,
} from "../constants";
import { useSlider } from "../hooks";
import { formatSliderValue } from "../utils";
import { SliderLabels } from "./slider-labels";
import { SliderThumbControl } from "./slider-thumb";
import { SliderTrack } from "./slider-track";

export const Slider = memo(function Slider({
  defaultValue = DefaultValue,
  disabled = false,
  formatValue,
  marks,
  max = DefaultMax,
  min = DefaultMin,
  onLayout,
  onSlidingComplete,
  onSlidingStart,
  onValueChange,
  onValueChangeWorklet,
  showMarkLabels = false,
  showMinMax = false,
  showValueBubble = false,
  size = "medium",
  step = DefaultStep,
  style,
  trackContent,
  value,
  variant = "filled",
  ...props
}: SliderProps) {
  const slider = useSlider({
    defaultValue,
    disabled,
    formatValue,
    marks,
    max,
    min,
    onLayout,
    onSlidingComplete,
    onSlidingStart,
    onValueChange,
    onValueChangeWorklet,
    step,
    value,
  });

  return (
    <View {...props} style={style}>
      <SliderTrack
        gesture={slider.gesture}
        onLayout={slider.handleLayout}
        activeTrackStyle={slider.activeTrackStyle}
        disabled={disabled}
        marks={slider.marks}
        showValueBubble={showValueBubble}
        size={size}
        trackContent={trackContent}
        variant={variant}
      >
        <SliderThumbControl
          disabled={disabled}
          positionStyle={slider.positionStyle}
          showValueBubble={showValueBubble}
          size={size}
          valueLabel={slider.valueLabel}
          variant={variant}
        />
      </SliderTrack>

      <SliderLabels
        disabled={disabled}
        marks={slider.labelMarks}
        maxLabel={formatSliderValue(slider.bounds.max, formatValue)}
        minLabel={formatSliderValue(slider.bounds.min, formatValue)}
        showMarkLabels={showMarkLabels}
        showMinMax={showMinMax}
        variant={variant}
      />
    </View>
  );
});
```

### packages/slider/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/slider/src/types/index.ts

```tsx
export * from "./slider.types";
```

### packages/slider/src/types/slider.types.ts

```tsx
import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export type SliderValue = readonly [number, number];

export type SliderThumb = "start" | "end";

interface SliderCommonProps extends ViewProps {
  disabled?: boolean;
  formatValue?: (value: number) => string;
  marks?: readonly number[];
  max?: number;
  min?: number;
  showMarkLabels?: boolean;
  showMinMax?: boolean;
  showValueBubble?: boolean;
  size?: ComponentSize;
  step?: number;
  variant?: SelectionVariant;
}

export interface SliderProps extends SliderCommonProps {
  /** UI-thread worklet receiving continuous drag values before step snapping. */
  onValueChangeWorklet?: (value: number) => void;
  /** Replaces the numeric track fill with supplied content. */
  trackContent?: ReactNode;
  defaultValue?: number;
  onSlidingComplete?: (value: number) => void;
  onSlidingStart?: (value: number) => void;
  onValueChange?: (value: number) => void;
  value?: number;
}

export interface RangeSliderProps extends SliderCommonProps {
  defaultValue?: SliderValue;
  minStepsBetweenThumbs?: number;
  onSlidingComplete?: (value: SliderValue) => void;
  onSlidingStart?: (value: SliderValue) => void;
  onValueChange?: (value: SliderValue) => void;
  value?: SliderValue;
}
```
