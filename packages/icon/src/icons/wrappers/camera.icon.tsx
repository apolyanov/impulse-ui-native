import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CameraBoldIcon } from "../bold/camera-bold.icon";
import { CameraDuotoneIcon } from "../duotone/camera-duotone.icon";
import { CameraFillIcon } from "../fill/camera-fill.icon";
import { CameraLightIcon } from "../light/camera-light.icon";
import { CameraRegularIcon } from "../regular/camera-regular.icon";
import { CameraThinIcon } from "../thin/camera-thin.icon";

export const CameraIcon = memo(function Camera(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CameraBoldIcon,
      duotone: CameraDuotoneIcon,
      fill: CameraFillIcon,
      light: CameraLightIcon,
      regular: CameraRegularIcon,
      thin: CameraThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
