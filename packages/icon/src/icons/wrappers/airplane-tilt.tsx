import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirplaneTiltBold } from "../bold";
import { AirplaneTiltDuotone } from "../duotone";
import { AirplaneTiltFill } from "../fill";
import { AirplaneTiltLight } from "../light";
import { AirplaneTiltRegular } from "../regular";
import { AirplaneTiltThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AirplaneTilt = memo(function AirplaneTilt(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneTiltBold,
      duotone: AirplaneTiltDuotone,
      fill: AirplaneTiltFill,
      light: AirplaneTiltLight,
      regular: AirplaneTiltRegular,
      thin: AirplaneTiltThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
