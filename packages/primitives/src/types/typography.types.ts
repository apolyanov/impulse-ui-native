import { TextProps as RNTextProps } from "react-native";

import {
  ColorProps,
  FlexProps,
  TypographyProps,
} from "@impulse-ui-native/theme";

export interface TextProps
  extends RNTextProps, TypographyProps, FlexProps, ColorProps {
  numeric?: boolean;
}
