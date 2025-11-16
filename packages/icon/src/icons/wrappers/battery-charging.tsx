import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryChargingBold } from "../bold";
import { BatteryChargingDuotone } from "../duotone";
import { BatteryChargingFill } from "../fill";
import { BatteryChargingLight } from "../light";
import { BatteryChargingRegular } from "../regular";
import { BatteryChargingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryCharging = memo(function BatteryCharging(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryChargingBold,
      duotone: BatteryChargingDuotone,
      fill: BatteryChargingFill,
      light: BatteryChargingLight,
      regular: BatteryChargingRegular,
      thin: BatteryChargingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
