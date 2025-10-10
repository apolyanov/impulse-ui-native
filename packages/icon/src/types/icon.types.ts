import { Props } from "@fortawesome/react-native-fontawesome";
import { ComponentSize } from "@impulse-ui-native/theme";
import { ViewStyle } from "react-native";

export interface IconStyle extends ViewStyle {
  color?: string;
}

export interface IconProps extends Omit<Props, "size"> {
  size?: ComponentSize | number;
}
