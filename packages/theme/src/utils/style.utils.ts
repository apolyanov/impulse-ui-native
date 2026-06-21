import { Platform, ViewStyle } from "react-native";

import { shadowScale, StylePropsSet } from "../constants";
import {
  ShadowLevel,
  ShadowPosition,
  StylePropKey,
  StyleProps,
  ThemeColors,
} from "../types";

const isStylePropKey = (k: string): k is StylePropKey =>
  StylePropsSet.has(k as StylePropKey);

export const extractStyleProps = <Props extends object>(
  props: Props,
): StyleProps => {
  const style: StyleProps = {};

  for (const k in props) {
    if (isStylePropKey(k) && props[k] !== undefined) {
      style[k] = props[k] as any;
    }
  }

  return style;
};

export const createStyleKey = <Props extends object>(props: Props) => {
  let key = "";

  for (const k in props) {
    if (isStylePropKey(k)) {
      key += String(props[k as keyof Props]);
    }
  }

  return key;
};

export const getShadowStyle = (
  level: ShadowLevel = "none",
  position: ShadowPosition = "bottom",
  colors: ThemeColors,
): ViewStyle => {
  const token = shadowScale[level];

  if (level === "none") return {};

  if (Platform.OS === "android") {
    return {
      elevation: token.elevation,
    };
  }

  let offsetY = 0;

  if (position === "bottom") offsetY = token.radius / 2;
  if (position === "top") offsetY = -token.radius / 2;
  if (position === "around") offsetY = 0;

  return {
    shadowColor: colors.black,
    shadowOpacity: token.opacity,
    shadowRadius: token.radius,
    shadowOffset: {
      width: 0,
      height: offsetY,
    },
  };
};
