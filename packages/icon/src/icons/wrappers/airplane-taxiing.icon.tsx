import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplaneTaxiingBoldIcon } from "../bold/airplane-taxiing-bold.icon";
import { AirplaneTaxiingDuotoneIcon } from "../duotone/airplane-taxiing-duotone.icon";
import { AirplaneTaxiingFillIcon } from "../fill/airplane-taxiing-fill.icon";
import { AirplaneTaxiingLightIcon } from "../light/airplane-taxiing-light.icon";
import { AirplaneTaxiingRegularIcon } from "../regular/airplane-taxiing-regular.icon";
import { AirplaneTaxiingThinIcon } from "../thin/airplane-taxiing-thin.icon";

export const AirplaneTaxiingIcon = memo(function AirplaneTaxiing(
  props: IconWrapperProps,
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
