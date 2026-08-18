import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WebcamSlashBoldIcon } from "../bold/webcam-slash-bold.icon";
import { WebcamSlashDuotoneIcon } from "../duotone/webcam-slash-duotone.icon";
import { WebcamSlashFillIcon } from "../fill/webcam-slash-fill.icon";
import { WebcamSlashLightIcon } from "../light/webcam-slash-light.icon";
import { WebcamSlashRegularIcon } from "../regular/webcam-slash-regular.icon";
import { WebcamSlashThinIcon } from "../thin/webcam-slash-thin.icon";

export const WebcamSlashIcon = memo(function WebcamSlash(
  props: IconWrapperProps,
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
