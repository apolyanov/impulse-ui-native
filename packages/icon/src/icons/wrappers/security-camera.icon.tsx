import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SecurityCameraBoldIcon } from "../bold/security-camera-bold.icon";
import { SecurityCameraDuotoneIcon } from "../duotone/security-camera-duotone.icon";
import { SecurityCameraFillIcon } from "../fill/security-camera-fill.icon";
import { SecurityCameraLightIcon } from "../light/security-camera-light.icon";
import { SecurityCameraRegularIcon } from "../regular/security-camera-regular.icon";
import { SecurityCameraThinIcon } from "../thin/security-camera-thin.icon";

export const SecurityCameraIcon = memo(function SecurityCamera(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SecurityCameraBoldIcon,
      duotone: SecurityCameraDuotoneIcon,
      fill: SecurityCameraFillIcon,
      light: SecurityCameraLightIcon,
      regular: SecurityCameraRegularIcon,
      thin: SecurityCameraThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
