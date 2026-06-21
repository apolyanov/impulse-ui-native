import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GpsFixBoldIcon } from "../bold";
import { GpsFixDuotoneIcon } from "../duotone";
import { GpsFixFillIcon } from "../fill";
import { GpsFixLightIcon } from "../light";
import { GpsFixRegularIcon } from "../regular";
import { GpsFixThinIcon } from "../thin";

export const GpsFixIcon = memo(function GpsFix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GpsFixBoldIcon,
      duotone: GpsFixDuotoneIcon,
      fill: GpsFixFillIcon,
      light: GpsFixLightIcon,
      regular: GpsFixRegularIcon,
      thin: GpsFixThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
