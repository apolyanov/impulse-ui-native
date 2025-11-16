import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirplaneTaxiingBold } from "../bold";
import { AirplaneTaxiingDuotone } from "../duotone";
import { AirplaneTaxiingFill } from "../fill";
import { AirplaneTaxiingLight } from "../light";
import { AirplaneTaxiingRegular } from "../regular";
import { AirplaneTaxiingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AirplaneTaxiing = memo(function AirplaneTaxiing(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneTaxiingBold,
      duotone: AirplaneTaxiingDuotone,
      fill: AirplaneTaxiingFill,
      light: AirplaneTaxiingLight,
      regular: AirplaneTaxiingRegular,
      thin: AirplaneTaxiingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
