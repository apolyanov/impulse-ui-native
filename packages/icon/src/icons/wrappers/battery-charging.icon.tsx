import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryChargingBoldIcon } from "../bold";
import { BatteryChargingDuotoneIcon } from "../duotone";
import { BatteryChargingFillIcon } from "../fill";
import { BatteryChargingLightIcon } from "../light";
import { BatteryChargingRegularIcon } from "../regular";
import { BatteryChargingThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryChargingIcon = memo(function BatteryCharging(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryChargingBoldIcon,
      duotone: BatteryChargingDuotoneIcon,
      fill: BatteryChargingFillIcon,
      light: BatteryChargingLightIcon,
      regular: BatteryChargingRegularIcon,
      thin: BatteryChargingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
