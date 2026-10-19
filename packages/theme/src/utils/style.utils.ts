import { Platform, ViewStyle } from "react-native";

import { ShadowScale, StylePropsSet } from "../constants";
import {
  ShadowLevel,
  ShadowPosition,
  ShadowScaleTokens,
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
  const entries = Object.keys(props)
    .filter(isStylePropKey)
    .sort()
    .map((key) => [key, props[key as keyof Props]]);

  return JSON.stringify(entries);
};

export const getShadowStyle = (
  level: ShadowLevel = "none",
  position: ShadowPosition = "bottom",
  colors: ThemeColors,
  shadows: ShadowScaleTokens = ShadowScale,
): ViewStyle => {
  const token = shadows[level];

  if (level === "none") {
    return {};
  }

  if (Platform.OS === "android") {
    return {
      elevation: token.elevation,
    };
  }

  let offsetY = 0;

  if (position === "bottom") {
    offsetY = token.radius / 2;
  }

  if (position === "top") {
    offsetY = -token.radius / 2;
  }

  if (position === "around") {
    offsetY = 0;
  }

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
