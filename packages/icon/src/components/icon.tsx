import { memo, useMemo } from "react";

import { useTheme } from "@impulse-ui-native/theme";

import type { IconProps } from "../types";

export const Icon = memo(function Icon({
  size = "medium",
  icon,
  ...props
}: IconProps) {
  const Icon = icon;
  const theme = useTheme();
  const iconTokens = theme.components.icon;
  const color = props.color ?? props.fill ?? theme.colors.text.primary;

  const iconSize = useMemo(
    () => (typeof size === "number" ? size : iconTokens.sizes[size]),
    [iconTokens.sizes, size],
  );

  return (
    <Icon
      {...props}
      color={color}
      width={iconSize}
      height={iconSize}
      fill={color}
    />
  );
});
