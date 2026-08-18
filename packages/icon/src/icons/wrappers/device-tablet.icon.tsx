import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeviceTabletBoldIcon } from "../bold/device-tablet-bold.icon";
import { DeviceTabletDuotoneIcon } from "../duotone/device-tablet-duotone.icon";
import { DeviceTabletFillIcon } from "../fill/device-tablet-fill.icon";
import { DeviceTabletLightIcon } from "../light/device-tablet-light.icon";
import { DeviceTabletRegularIcon } from "../regular/device-tablet-regular.icon";
import { DeviceTabletThinIcon } from "../thin/device-tablet-thin.icon";

export const DeviceTabletIcon = memo(function DeviceTablet(
  props: IconWrapperProps,
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
