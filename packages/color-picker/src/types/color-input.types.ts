import type { InputProps } from "@impulse-ui-native/input";

export type ColorPickerHexInputProps = Omit<
  InputProps,
  "value" | "defaultValue" | "onChange" | "onChangeText"
>;

export interface ColorInputOptions {
  resetKey: number;
  value: string;
  disabled: boolean;
  commit: (value: string) => string | undefined;
}

export interface ColorInputDraft {
  resetKey: number;
  base: string;
  text: string;
  invalid: boolean;
}
