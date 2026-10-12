import type { ColorPickerProps } from "@impulse-ui-native/color-picker";

export interface ColorPickerExampleDefinition {
  name: string;
  title: string;
  description: string;
  args: ColorPickerProps;
  controlled?: boolean;
  scheme?: "light" | "dark";
}

export interface ColorPickerExampleProps {
  example: ColorPickerExampleDefinition;
  elevated?: boolean;
}
