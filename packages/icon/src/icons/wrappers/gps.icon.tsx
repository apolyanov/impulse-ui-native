import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GpsBoldIcon } from "../bold/gps-bold.icon";
import { GpsDuotoneIcon } from "../duotone/gps-duotone.icon";
import { GpsFillIcon } from "../fill/gps-fill.icon";
import { GpsLightIcon } from "../light/gps-light.icon";
import { GpsRegularIcon } from "../regular/gps-regular.icon";
import { GpsThinIcon } from "../thin/gps-thin.icon";

export const GpsIcon = memo(function Gps(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GpsBoldIcon,
      duotone: GpsDuotoneIcon,
      fill: GpsFillIcon,
      light: GpsLightIcon,
      regular: GpsRegularIcon,
      thin: GpsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
