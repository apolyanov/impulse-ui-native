import type { ComponentRef, Ref } from "react";
import type { TextInput, TextInputProps } from "react-native";

import {
  ControlComponentCommonProps,
  ControlComponentProps,
  ViewProps,
} from "@impulse-ui-native/primitives";

export interface InputProps
  extends
    Omit<TextInputProps, "placeholder">,
    Partial<ControlComponentProps>,
    ControlComponentCommonProps {
  ref?: Ref<ComponentRef<typeof TextInput>>;
  containerStyle?: ViewProps["style"];
}
