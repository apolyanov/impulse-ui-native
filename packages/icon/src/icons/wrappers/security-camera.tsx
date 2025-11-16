import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SecurityCameraBold } from "../bold";
import { SecurityCameraDuotone } from "../duotone";
import { SecurityCameraFill } from "../fill";
import { SecurityCameraLight } from "../light";
import { SecurityCameraRegular } from "../regular";
import { SecurityCameraThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SecurityCamera = memo(function SecurityCamera(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SecurityCameraBold,
      duotone: SecurityCameraDuotone,
      fill: SecurityCameraFill,
      light: SecurityCameraLight,
      regular: SecurityCameraRegular,
      thin: SecurityCameraThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
