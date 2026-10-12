import { memo, useMemo } from "react";

import { Slider } from "@impulse-ui-native/slider";

import { HueStops } from "../constants/color.constants";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { ColorGradient } from "./gradient";

export const ColorPickerHueSlider = memo(function ColorPickerHueSlider() {
  const { hsva, disabled, size, setHue } = useColorPickerContext();
  const trackContent = useMemo(() => <ColorGradient colors={HueStops} />, []);

  return (
    <Slider
      min={0}
      max={360}
      step={1}
      value={hsva.h}
      onValueChange={setHue}
      disabled={disabled}
      size={size}
      variant="outlined"
      trackContent={trackContent}
    />
  );
});
