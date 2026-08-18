import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WindBoldIcon } from "../bold/wind-bold.icon";
import { WindDuotoneIcon } from "../duotone/wind-duotone.icon";
import { WindFillIcon } from "../fill/wind-fill.icon";
import { WindLightIcon } from "../light/wind-light.icon";
import { WindRegularIcon } from "../regular/wind-regular.icon";
import { WindThinIcon } from "../thin/wind-thin.icon";

export const WindIcon = memo(function Wind(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WindBoldIcon,
      duotone: WindDuotoneIcon,
      fill: WindFillIcon,
      light: WindLightIcon,
      regular: WindRegularIcon,
      thin: WindThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
