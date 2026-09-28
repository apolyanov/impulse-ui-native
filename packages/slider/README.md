# @impulse-ui-native/slider

Accessible, token-aware slider and range slider controls for React Native and React Native Web.

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
        accessibilityLabel="Minimum rating"
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
        accessibilityLabels={["Minimum price", "Maximum price"]}
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

Drag or press the track on touch and pointer devices. On web, focused thumbs support arrow keys, Page Up/Down, Home, and End. Native assistive technologies receive adjustable actions and bounded accessibility values. Provide `accessibilityLabel` for `Slider` and descriptive `accessibilityLabels` for both `RangeSlider` thumbs. Use `formatValue` to keep visible and accessible value text consistent, including units or localized formatting.
