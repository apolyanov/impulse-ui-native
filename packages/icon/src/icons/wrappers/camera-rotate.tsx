import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CameraRotateBold } from "../bold";
import { CameraRotateDuotone } from "../duotone";
import { CameraRotateFill } from "../fill";
import { CameraRotateLight } from "../light";
import { CameraRotateRegular } from "../regular";
import { CameraRotateThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CameraRotate = memo(function CameraRotate(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CameraRotateBold,
      duotone: CameraRotateDuotone,
      fill: CameraRotateFill,
      light: CameraRotateLight,
      regular: CameraRotateRegular,
      thin: CameraRotateThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
