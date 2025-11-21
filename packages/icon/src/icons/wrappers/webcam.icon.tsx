import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WebcamBoldIcon } from "../bold";
import { WebcamDuotoneIcon } from "../duotone";
import { WebcamFillIcon } from "../fill";
import { WebcamLightIcon } from "../light";
import { WebcamRegularIcon } from "../regular";
import { WebcamThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
