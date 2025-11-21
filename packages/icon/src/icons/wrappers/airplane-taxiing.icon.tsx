import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirplaneTaxiingBoldIcon } from "../bold";
import { AirplaneTaxiingDuotoneIcon } from "../duotone";
import { AirplaneTaxiingFillIcon } from "../fill";
import { AirplaneTaxiingLightIcon } from "../light";
import { AirplaneTaxiingRegularIcon } from "../regular";
import { AirplaneTaxiingThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AirplaneTaxiingIcon = memo(function AirplaneTaxiing(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneTaxiingBoldIcon,
      duotone: AirplaneTaxiingDuotoneIcon,
      fill: AirplaneTaxiingFillIcon,
      light: AirplaneTaxiingLightIcon,
      regular: AirplaneTaxiingRegularIcon,
      thin: AirplaneTaxiingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
