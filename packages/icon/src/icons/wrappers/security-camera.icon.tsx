import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SecurityCameraBoldIcon } from "../bold";
import { SecurityCameraDuotoneIcon } from "../duotone";
import { SecurityCameraFillIcon } from "../fill";
import { SecurityCameraLightIcon } from "../light";
import { SecurityCameraRegularIcon } from "../regular";
import { SecurityCameraThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SecurityCameraIcon = memo(function SecurityCamera(
  props: IconWrapperProps
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
