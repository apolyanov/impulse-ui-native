import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WebcamSlashBold } from "../bold";
import { WebcamSlashDuotone } from "../duotone";
import { WebcamSlashFill } from "../fill";
import { WebcamSlashLight } from "../light";
import { WebcamSlashRegular } from "../regular";
import { WebcamSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WebcamSlash = memo(function WebcamSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WebcamSlashBold,
      duotone: WebcamSlashDuotone,
      fill: WebcamSlashFill,
      light: WebcamSlashLight,
      regular: WebcamSlashRegular,
      thin: WebcamSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
