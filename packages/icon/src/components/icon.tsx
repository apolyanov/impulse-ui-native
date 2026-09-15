import { memo, useMemo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { IconProps } from "../types";

export const Icon = memo(function Icon({
  size = "medium",
  icon,
  ...props
}: IconProps) {
  const Icon = icon;
  const tokens = useComponentsTokens();
  const iconTokens = tokens.icon;

  const iconSize = useMemo(
    () => (typeof size === "number" ? size : iconTokens.sizes[size]),
    [iconTokens.sizes, size],
  );

  return (
    <Icon {...props} width={iconSize} height={iconSize} fill={props.color} />
  );
});
