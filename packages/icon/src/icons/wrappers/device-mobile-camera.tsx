import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceMobileCameraBold } from "../bold";
import { DeviceMobileCameraDuotone } from "../duotone";
import { DeviceMobileCameraFill } from "../fill";
import { DeviceMobileCameraLight } from "../light";
import { DeviceMobileCameraRegular } from "../regular";
import { DeviceMobileCameraThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceMobileCamera = memo(function DeviceMobileCamera(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceMobileCameraBold,
      duotone: DeviceMobileCameraDuotone,
      fill: DeviceMobileCameraFill,
      light: DeviceMobileCameraLight,
      regular: DeviceMobileCameraRegular,
      thin: DeviceMobileCameraThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
