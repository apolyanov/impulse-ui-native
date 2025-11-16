import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CircleHalfTiltBold } from "../bold";
import { CircleHalfTiltDuotone } from "../duotone";
import { CircleHalfTiltFill } from "../fill";
import { CircleHalfTiltLight } from "../light";
import { CircleHalfTiltRegular } from "../regular";
import { CircleHalfTiltThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CircleHalfTilt = memo(function CircleHalfTilt(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleHalfTiltBold,
      duotone: CircleHalfTiltDuotone,
      fill: CircleHalfTiltFill,
      light: CircleHalfTiltLight,
      regular: CircleHalfTiltRegular,
      thin: CircleHalfTiltThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
