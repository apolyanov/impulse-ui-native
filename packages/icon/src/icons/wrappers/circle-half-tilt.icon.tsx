import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CircleHalfTiltBoldIcon } from "../bold";
import { CircleHalfTiltDuotoneIcon } from "../duotone";
import { CircleHalfTiltFillIcon } from "../fill";
import { CircleHalfTiltLightIcon } from "../light";
import { CircleHalfTiltRegularIcon } from "../regular";
import { CircleHalfTiltThinIcon } from "../thin";

export const CircleHalfTiltIcon = memo(function CircleHalfTilt(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleHalfTiltBoldIcon,
      duotone: CircleHalfTiltDuotoneIcon,
      fill: CircleHalfTiltFillIcon,
      light: CircleHalfTiltLightIcon,
      regular: CircleHalfTiltRegularIcon,
      thin: CircleHalfTiltThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
