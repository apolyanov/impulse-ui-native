import { TextProps as RNTextProps } from "react-native";

import {
  ColorProps,
  FlexProps,
  SpacingProps,
  TypographyProps,
} from "@impulse-ui-native/theme";

export interface TextProps
  extends RNTextProps, TypographyProps, FlexProps, ColorProps, SpacingProps {
  numeric?: boolean;
}
