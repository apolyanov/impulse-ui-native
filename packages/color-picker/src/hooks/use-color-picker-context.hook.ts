import { useContext } from "react";

import { ColorPickerContext } from "../contexts/color-picker.context";

export function useColorPickerContext() {
  const context = useContext(ColorPickerContext);

  if (!context) {
    throw new Error(
      "ColorPicker parts must be rendered inside ColorPicker.Root",
    );
  }

  return context;
}
