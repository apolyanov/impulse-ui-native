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
