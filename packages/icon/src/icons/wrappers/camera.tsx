import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CameraBold } from "../bold";
import { CameraDuotone } from "../duotone";
import { CameraFill } from "../fill";
import { CameraLight } from "../light";
import { CameraRegular } from "../regular";
import { CameraThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Camera = memo(function Camera(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CameraBold,
      duotone: CameraDuotone,
      fill: CameraFill,
      light: CameraLight,
      regular: CameraRegular,
      thin: CameraThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
