import type { TextInputProps } from "react-native";

import type {
  ControlComponentProps,
  ViewProps,
} from "@impulse-ui-native/primitives";

export interface TextareaProps
  extends
    Omit<TextInputProps, "multiline" | "numberOfLines" | "secureTextEntry">,
    Partial<ControlComponentProps> {
  /** Grows the field with its content until `maxRows` is reached. */
  autoGrow?: boolean;
  /** Styles the bordered textarea container. */
  containerStyle?: ViewProps["style"];
  /** Visible label and accessible-name fallback for the textarea. */
  label?: string;
  /** Maximum visible rows when `autoGrow` is enabled. */
  maxRows?: number;
  /** Initial and minimum visible row count. */
  minRows?: number;
  /** Displays the current character count and `maxLength` when provided. */
  showCharacterCount?: boolean;
}
