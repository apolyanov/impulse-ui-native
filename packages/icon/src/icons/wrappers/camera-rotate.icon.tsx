import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CameraRotateBoldIcon } from "../bold/camera-rotate-bold.icon";
import { CameraRotateDuotoneIcon } from "../duotone/camera-rotate-duotone.icon";
import { CameraRotateFillIcon } from "../fill/camera-rotate-fill.icon";
import { CameraRotateLightIcon } from "../light/camera-rotate-light.icon";
import { CameraRotateRegularIcon } from "../regular/camera-rotate-regular.icon";
import { CameraRotateThinIcon } from "../thin/camera-rotate-thin.icon";

export const CameraRotateIcon = memo(function CameraRotate(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CameraRotateBoldIcon,
      duotone: CameraRotateDuotoneIcon,
      fill: CameraRotateFillIcon,
      light: CameraRotateLightIcon,
      regular: CameraRotateRegularIcon,
      thin: CameraRotateThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
