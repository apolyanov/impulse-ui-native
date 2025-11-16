import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WebcamBold } from "../bold";
import { WebcamDuotone } from "../duotone";
import { WebcamFill } from "../fill";
import { WebcamLight } from "../light";
import { WebcamRegular } from "../regular";
import { WebcamThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Webcam = memo(function Webcam(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WebcamBold,
      duotone: WebcamDuotone,
      fill: WebcamFill,
      light: WebcamLight,
      regular: WebcamRegular,
      thin: WebcamThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
