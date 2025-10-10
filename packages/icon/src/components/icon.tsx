import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useTheme } from "@impulse-ui-native/theme";
import { memo, PropsWithChildren, useMemo } from "react";
import { IconProps } from "../types";

export const Icon = memo(function Icon({
  size = "medium",
  icon,
  children,
  style,
  ...props
}: PropsWithChildren<IconProps>) {
  const theme = useTheme();
  const iconSize = useMemo(
    () =>
      ({
        small: 14,
        medium: 16,
        large: 16,
      }[size]),
    [theme, size]
  );

  return (
    <FontAwesomeIcon size={iconSize} icon={icon} style={style} {...props} />
  );
});
