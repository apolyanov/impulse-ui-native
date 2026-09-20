import type { ReactNode } from "react";
import type {
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from "react-native";

import type {
  AvatarStatus,
  ComponentSize,
  ComponentVariant,
} from "@impulse-ui-native/theme";

import type { ViewProps } from "./view.types";

export interface AvatarImageProps extends Omit<
  ImageProps,
  "accessible" | "source" | "style"
> {
  style?: StyleProp<ImageStyle>;
}

export interface AvatarProps extends Omit<ViewProps, "children"> {
  fallback?: ReactNode;
  imageProps?: AvatarImageProps;
  initials?: string;
  size?: ComponentSize;
  source?: ImageSourcePropType;
  status?: AvatarStatus;
  statusColor?: ViewStyle["backgroundColor"];
  variant?: ComponentVariant;
}
