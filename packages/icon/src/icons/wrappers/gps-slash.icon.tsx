import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GpsSlashBoldIcon } from "../bold/gps-slash-bold.icon";
import { GpsSlashDuotoneIcon } from "../duotone/gps-slash-duotone.icon";
import { GpsSlashFillIcon } from "../fill/gps-slash-fill.icon";
import { GpsSlashLightIcon } from "../light/gps-slash-light.icon";
import { GpsSlashRegularIcon } from "../regular/gps-slash-regular.icon";
import { GpsSlashThinIcon } from "../thin/gps-slash-thin.icon";

export const GpsSlashIcon = memo(function GpsSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GpsSlashBoldIcon,
      duotone: GpsSlashDuotoneIcon,
      fill: GpsSlashFillIcon,
      light: GpsSlashLightIcon,
      regular: GpsSlashRegularIcon,
      thin: GpsSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
