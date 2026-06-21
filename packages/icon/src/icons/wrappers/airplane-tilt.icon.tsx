import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplaneTiltBoldIcon } from "../bold";
import { AirplaneTiltDuotoneIcon } from "../duotone";
import { AirplaneTiltFillIcon } from "../fill";
import { AirplaneTiltLightIcon } from "../light";
import { AirplaneTiltRegularIcon } from "../regular";
import { AirplaneTiltThinIcon } from "../thin";

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
