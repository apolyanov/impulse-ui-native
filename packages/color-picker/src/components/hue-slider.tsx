import { memo, useMemo } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Slider } from "@impulse-ui-native/slider";

import { HueStops } from "../constants/color.constants";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { ColorGradient } from "./gradient";

export const ColorPickerHueSlider = memo(function ColorPickerHueSlider() {
  const { hsva, disabled, size, gesture, motion } = useColorPickerContext();
  const trackContent = useMemo(() => <ColorGradient colors={HueStops} />, []);
  const handleComplete = useEventCallback((value: number) => {
    gesture.setHue(value);
    motion.finish();
  });

  return (
    <Slider
      min={0}
      max={360}
      step={1}
      value={hsva.h}
      onValueChange={gesture.setHue}
      onValueChangeWorklet={motion.setHue}
      onSlidingComplete={handleComplete}
      disabled={disabled}
      size={size}
      variant="outlined"
      trackContent={trackContent}
    />
  );
});
