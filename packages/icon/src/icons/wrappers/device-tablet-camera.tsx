import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceTabletCameraBold } from "../bold";
import { DeviceTabletCameraDuotone } from "../duotone";
import { DeviceTabletCameraFill } from "../fill";
import { DeviceTabletCameraLight } from "../light";
import { DeviceTabletCameraRegular } from "../regular";
import { DeviceTabletCameraThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceTabletCamera = memo(function DeviceTabletCamera(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceTabletCameraBold,
      duotone: DeviceTabletCameraDuotone,
      fill: DeviceTabletCameraFill,
      light: DeviceTabletCameraLight,
      regular: DeviceTabletCameraRegular,
      thin: DeviceTabletCameraThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
