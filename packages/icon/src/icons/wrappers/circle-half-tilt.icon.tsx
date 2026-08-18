import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CircleHalfTiltBoldIcon } from "../bold/circle-half-tilt-bold.icon";
import { CircleHalfTiltDuotoneIcon } from "../duotone/circle-half-tilt-duotone.icon";
import { CircleHalfTiltFillIcon } from "../fill/circle-half-tilt-fill.icon";
import { CircleHalfTiltLightIcon } from "../light/circle-half-tilt-light.icon";
import { CircleHalfTiltRegularIcon } from "../regular/circle-half-tilt-regular.icon";
import { CircleHalfTiltThinIcon } from "../thin/circle-half-tilt-thin.icon";

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
