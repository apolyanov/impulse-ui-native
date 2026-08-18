import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeviceMobileCameraBoldIcon } from "../bold/device-mobile-camera-bold.icon";
import { DeviceMobileCameraDuotoneIcon } from "../duotone/device-mobile-camera-duotone.icon";
import { DeviceMobileCameraFillIcon } from "../fill/device-mobile-camera-fill.icon";
import { DeviceMobileCameraLightIcon } from "../light/device-mobile-camera-light.icon";
import { DeviceMobileCameraRegularIcon } from "../regular/device-mobile-camera-regular.icon";
import { DeviceMobileCameraThinIcon } from "../thin/device-mobile-camera-thin.icon";

export const DeviceMobileCameraIcon = memo(function DeviceMobileCamera(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceMobileCameraBoldIcon,
      duotone: DeviceMobileCameraDuotoneIcon,
      fill: DeviceMobileCameraFillIcon,
      light: DeviceMobileCameraLightIcon,
      regular: DeviceMobileCameraRegularIcon,
      thin: DeviceMobileCameraThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
