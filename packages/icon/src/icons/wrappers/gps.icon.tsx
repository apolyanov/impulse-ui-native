import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GpsBoldIcon } from "../bold";
import { GpsDuotoneIcon } from "../duotone";
import { GpsFillIcon } from "../fill";
import { GpsLightIcon } from "../light";
import { GpsRegularIcon } from "../regular";
import { GpsThinIcon } from "../thin";

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
