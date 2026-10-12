import { memo } from "react";

import { ThemeProvider } from "@impulse-ui-native/theme";

import type { ColorPickerExampleProps } from "./types/color-picker-example.types";
import { ColorPickerExampleBody } from "./color-picker-example-body";

export const ColorPickerExample = memo(function ColorPickerExample(
  props: ColorPickerExampleProps,
) {
  if (props.example.scheme !== undefined) {
    return (
      <ThemeProvider scheme={props.example.scheme}>
        <ColorPickerExampleBody {...props} />
      </ThemeProvider>
    );
  }

  return <ColorPickerExampleBody {...props} />;
});
