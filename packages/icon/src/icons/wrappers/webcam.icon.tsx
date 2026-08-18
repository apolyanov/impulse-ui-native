import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WebcamBoldIcon } from "../bold/webcam-bold.icon";
import { WebcamDuotoneIcon } from "../duotone/webcam-duotone.icon";
import { WebcamFillIcon } from "../fill/webcam-fill.icon";
import { WebcamLightIcon } from "../light/webcam-light.icon";
import { WebcamRegularIcon } from "../regular/webcam-regular.icon";
import { WebcamThinIcon } from "../thin/webcam-thin.icon";

export const WebcamIcon = memo(function Webcam(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WebcamBoldIcon,
      duotone: WebcamDuotoneIcon,
      fill: WebcamFillIcon,
      light: WebcamLightIcon,
      regular: WebcamRegularIcon,
      thin: WebcamThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
