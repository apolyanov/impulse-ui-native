import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GpsFixBold } from "../bold";
import { GpsFixDuotone } from "../duotone";
import { GpsFixFill } from "../fill";
import { GpsFixLight } from "../light";
import { GpsFixRegular } from "../regular";
import { GpsFixThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GpsFix = memo(function GpsFix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GpsFixBold,
      duotone: GpsFixDuotone,
      fill: GpsFixFill,
      light: GpsFixLight,
      regular: GpsFixRegular,
      thin: GpsFixThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
