import { memo, useMemo } from "react";

import { IconProps } from "../types";

export const Icon = memo(function Icon({
  size = "medium",
  icon,
  ...props
}: IconProps) {
  const Icon = icon;

  const iconSize = useMemo(
    () =>
      ({
        small: 18,
        medium: 24,
        large: 30,
      })[size],
    [size]
  );

  return (
    <Icon {...props} width={iconSize} height={iconSize} fill={props.color} />
  );
});
