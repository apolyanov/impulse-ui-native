# @impulse-ui-native/slider

Token-aware slider and range slider controls for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/slider
```

Render sliders inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Main exports

- `Slider` selects one numeric value.
- `RangeSlider` selects a lower and upper numeric value.
- `SliderProps`, `RangeSliderProps`, and `SliderValue` describe the public API.

## Usage

```tsx
import { useState } from "react";

import { RangeSlider, Slider } from "@impulse-ui-native/slider";

export function PriceControls() {
  const [rating, setRating] = useState(60);
  const [priceRange, setPriceRange] = useState<readonly [number, number]>([
    25, 75,
  ]);

  return (
    <>
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
    </>
  );
}
```

Use `defaultValue` for uncontrolled state. Values are clamped to `min` and `max`, then snapped to `step`. `RangeSlider` keeps its values ordered and can enforce a gap with `minStepsBetweenThumbs`.

`filled`, `outlined`, and `soft` are the supported visual variants. `small`, `medium`, and `large` adjust the track, thumb, marks, and hit slop together. Pass `marks` to render explicit positions; enable `showMarkLabels`, `showMinMax`, and `showValueBubble` only when the extra value context is useful.

Drag or press the track to change the value. Use `formatValue` to customize visible value text, including units or localized formatting.

## Additional theme geometry

Customize `components.slider.markLabelWidth`, `thumbHighlightSize`, and
`valueBubbleMinWidth` through `ThemeProvider`. Defaults remain 48, 4, and 40.
Mark-label centering follows half of the configured width.

## Custom tracks

Slider accepts trackContent for gradient or other custom track visuals. It renders the supplied content inside the clipped track and omits the numeric active fill. Touch handling, thumb, and callbacks remain unchanged. The theme token components.slider.interactionMinHeight defaults to 44 for native touch targets.
