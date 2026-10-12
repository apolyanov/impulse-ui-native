import { memo, useMemo } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Slider } from "@impulse-ui-native/slider";

import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { ColorMotionGradient } from "./motion-gradient";

export const ColorPickerAlphaSlider = memo(function ColorPickerAlphaSlider() {
  const { hsva, disabled, size, gesture, motion } = useColorPickerContext();
  const trackContent = useMemo(
    () => <ColorMotionGradient rgba={motion.rgba} />,
    [motion.rgba],
  );
  const handleComplete = useEventCallback((value: number) => {
    gesture.setAlpha(value);
    motion.finish();
  });

  return (
    <Slider
      min={0}
      max={1}
      step={0.01}
      value={hsva.a}
      onValueChange={gesture.setAlpha}
      onValueChangeWorklet={motion.setAlpha}
      onSlidingComplete={handleComplete}
      disabled={disabled}
      size={size}
      variant="outlined"
      trackContent={trackContent}
    />
  );
});
