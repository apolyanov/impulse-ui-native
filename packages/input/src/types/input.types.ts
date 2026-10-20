import { TextInputProps } from "react-native";

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
  containerStyle?: ViewProps["style"];
}
