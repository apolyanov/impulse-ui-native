import { PressableProps, ViewStyle } from "react-native";

import {
  ComponentSize,
  ComponentVariant,
  TagColor,
  TagColorTokens,
} from "@impulse-ui-native/theme";

export interface TagProps {
  label: string;
  size?: ComponentSize;
  variant?: ComponentVariant;
  color?: TagColor;
  closable?: boolean;
  disabled?: boolean;
  onClose?: () => void;
  style?: ViewStyle;
  onPress?: PressableProps["onPress"];
}

export interface TagThemeProps {
  size: ComponentSize;
  variant: ComponentVariant;
  color: TagColor;
  disabled?: boolean;
}
