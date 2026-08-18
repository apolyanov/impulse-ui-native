import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeviceTabletCameraBoldIcon } from "../bold/device-tablet-camera-bold.icon";
import { DeviceTabletCameraDuotoneIcon } from "../duotone/device-tablet-camera-duotone.icon";
import { DeviceTabletCameraFillIcon } from "../fill/device-tablet-camera-fill.icon";
import { DeviceTabletCameraLightIcon } from "../light/device-tablet-camera-light.icon";
import { DeviceTabletCameraRegularIcon } from "../regular/device-tablet-camera-regular.icon";
import { DeviceTabletCameraThinIcon } from "../thin/device-tablet-camera-thin.icon";

export const DeviceTabletCameraIcon = memo(function DeviceTabletCamera(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceTabletCameraBoldIcon,
      duotone: DeviceTabletCameraDuotoneIcon,
      fill: DeviceTabletCameraFillIcon,
      light: DeviceTabletCameraLightIcon,
      regular: DeviceTabletCameraRegularIcon,
      thin: DeviceTabletCameraThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
