import type { BadgeProps } from "./badge.types";

export interface BadgeAddonProps {
  color: string | undefined;
  Content: BadgeProps["Prefix"];
  hitSlop: number;
  iconSize: number;
  IconComponent: BadgeProps["PrefixIcon"];
  onPress: BadgeProps["onPressPrefix"];
}
