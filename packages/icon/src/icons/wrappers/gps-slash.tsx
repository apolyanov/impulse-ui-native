import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GpsSlashBold } from "../bold";
import { GpsSlashDuotone } from "../duotone";
import { GpsSlashFill } from "../fill";
import { GpsSlashLight } from "../light";
import { GpsSlashRegular } from "../regular";
import { GpsSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GpsSlash = memo(function GpsSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GpsSlashBold,
      duotone: GpsSlashDuotone,
      fill: GpsSlashFill,
      light: GpsSlashLight,
      regular: GpsSlashRegular,
      thin: GpsSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
