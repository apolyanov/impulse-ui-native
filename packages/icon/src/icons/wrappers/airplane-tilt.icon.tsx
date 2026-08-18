import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplaneTiltBoldIcon } from "../bold/airplane-tilt-bold.icon";
import { AirplaneTiltDuotoneIcon } from "../duotone/airplane-tilt-duotone.icon";
import { AirplaneTiltFillIcon } from "../fill/airplane-tilt-fill.icon";
import { AirplaneTiltLightIcon } from "../light/airplane-tilt-light.icon";
import { AirplaneTiltRegularIcon } from "../regular/airplane-tilt-regular.icon";
import { AirplaneTiltThinIcon } from "../thin/airplane-tilt-thin.icon";

export const AirplaneTiltIcon = memo(function AirplaneTilt(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneTiltBoldIcon,
      duotone: AirplaneTiltDuotoneIcon,
      fill: AirplaneTiltFillIcon,
      light: AirplaneTiltLightIcon,
      regular: AirplaneTiltRegularIcon,
      thin: AirplaneTiltThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
