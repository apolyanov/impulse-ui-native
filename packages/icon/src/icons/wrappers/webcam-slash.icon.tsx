import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WebcamSlashBoldIcon } from "../bold";
import { WebcamSlashDuotoneIcon } from "../duotone";
import { WebcamSlashFillIcon } from "../fill";
import { WebcamSlashLightIcon } from "../light";
import { WebcamSlashRegularIcon } from "../regular";
import { WebcamSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WebcamSlashIcon = memo(function WebcamSlash(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WebcamSlashBoldIcon,
      duotone: WebcamSlashDuotoneIcon,
      fill: WebcamSlashFillIcon,
      light: WebcamSlashLightIcon,
      regular: WebcamSlashRegularIcon,
      thin: WebcamSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
