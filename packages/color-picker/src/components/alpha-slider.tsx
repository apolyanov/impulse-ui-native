import { memo, useMemo } from "react";

import { Slider } from "@impulse-ui-native/slider";

import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { rgbaToHex } from "../utils/color.utils";
import { ColorGradient } from "./gradient";

export const ColorPickerAlphaSlider = memo(function ColorPickerAlphaSlider() {
  const { rgba, hsva, disabled, size, setAlpha } = useColorPickerContext();
  const colors = useMemo(
    () => [rgbaToHex({ ...rgba, a: 0 }), rgbaToHex({ ...rgba, a: 1 })],
    [rgba],
  );
  const trackContent = useMemo(
    () => <ColorGradient colors={colors} checkerboard />,
    [colors],
  );

  return (
    <Slider
      min={0}
      max={1}
      step={0.01}
      value={hsva.a}
      onValueChange={setAlpha}
      disabled={disabled}
      size={size}
      variant="outlined"
      trackContent={trackContent}
    />
  );
});
