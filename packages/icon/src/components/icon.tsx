import { memo, useMemo } from "react";
import { IconProps } from "../types";

export const Icon = memo(function Icon({
  size = "medium",
  icon,
  ...props
}: IconProps) {
  const Icon = icon;

  const iconSize =
    useMemo(
      () =>
        ({
          small: 14,
          medium: 16,
          large: 16,
        }[size]),
      [size]
    ) ?? 16;

  return <Icon width={iconSize} height={iconSize} {...props} />;
});
