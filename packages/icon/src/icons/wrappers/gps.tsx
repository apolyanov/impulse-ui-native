import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GpsBold } from "../bold";
import { GpsDuotone } from "../duotone";
import { GpsFill } from "../fill";
import { GpsLight } from "../light";
import { GpsRegular } from "../regular";
import { GpsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Gps = memo(function Gps(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GpsBold,
      duotone: GpsDuotone,
      fill: GpsFill,
      light: GpsLight,
      regular: GpsRegular,
      thin: GpsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
