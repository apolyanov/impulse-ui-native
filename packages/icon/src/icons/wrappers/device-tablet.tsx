import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceTabletBold } from "../bold";
import { DeviceTabletDuotone } from "../duotone";
import { DeviceTabletFill } from "../fill";
import { DeviceTabletLight } from "../light";
import { DeviceTabletRegular } from "../regular";
import { DeviceTabletThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceTablet = memo(function DeviceTablet(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceTabletBold,
      duotone: DeviceTabletDuotone,
      fill: DeviceTabletFill,
      light: DeviceTabletLight,
      regular: DeviceTabletRegular,
      thin: DeviceTabletThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
