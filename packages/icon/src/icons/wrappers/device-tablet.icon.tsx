import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceTabletBoldIcon } from "../bold";
import { DeviceTabletDuotoneIcon } from "../duotone";
import { DeviceTabletFillIcon } from "../fill";
import { DeviceTabletLightIcon } from "../light";
import { DeviceTabletRegularIcon } from "../regular";
import { DeviceTabletThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceTabletIcon = memo(function DeviceTablet(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceTabletBoldIcon,
      duotone: DeviceTabletDuotoneIcon,
      fill: DeviceTabletFillIcon,
      light: DeviceTabletLightIcon,
      regular: DeviceTabletRegularIcon,
      thin: DeviceTabletThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
