import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeviceMobileCameraBoldIcon } from "../bold";
import { DeviceMobileCameraDuotoneIcon } from "../duotone";
import { DeviceMobileCameraFillIcon } from "../fill";
import { DeviceMobileCameraLightIcon } from "../light";
import { DeviceMobileCameraRegularIcon } from "../regular";
import { DeviceMobileCameraThinIcon } from "../thin";

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
