import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CameraSlashBold } from "../bold";
import { CameraSlashDuotone } from "../duotone";
import { CameraSlashFill } from "../fill";
import { CameraSlashLight } from "../light";
import { CameraSlashRegular } from "../regular";
import { CameraSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CameraSlash = memo(function CameraSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CameraSlashBold,
      duotone: CameraSlashDuotone,
      fill: CameraSlashFill,
      light: CameraSlashLight,
      regular: CameraSlashRegular,
      thin: CameraSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
