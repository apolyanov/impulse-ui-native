import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GpsFixBoldIcon } from "../bold/gps-fix-bold.icon";
import { GpsFixDuotoneIcon } from "../duotone/gps-fix-duotone.icon";
import { GpsFixFillIcon } from "../fill/gps-fix-fill.icon";
import { GpsFixLightIcon } from "../light/gps-fix-light.icon";
import { GpsFixRegularIcon } from "../regular/gps-fix-regular.icon";
import { GpsFixThinIcon } from "../thin/gps-fix-thin.icon";

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
