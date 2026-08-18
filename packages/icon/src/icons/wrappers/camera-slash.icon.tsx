import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CameraSlashBoldIcon } from "../bold/camera-slash-bold.icon";
import { CameraSlashDuotoneIcon } from "../duotone/camera-slash-duotone.icon";
import { CameraSlashFillIcon } from "../fill/camera-slash-fill.icon";
import { CameraSlashLightIcon } from "../light/camera-slash-light.icon";
import { CameraSlashRegularIcon } from "../regular/camera-slash-regular.icon";
import { CameraSlashThinIcon } from "../thin/camera-slash-thin.icon";

export const CameraSlashIcon = memo(function CameraSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CameraSlashBoldIcon,
      duotone: CameraSlashDuotoneIcon,
      fill: CameraSlashFillIcon,
      light: CameraSlashLightIcon,
      regular: CameraSlashRegularIcon,
      thin: CameraSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
