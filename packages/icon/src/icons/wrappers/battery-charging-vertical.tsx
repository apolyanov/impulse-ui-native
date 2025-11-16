import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryChargingVerticalBold } from "../bold";
import { BatteryChargingVerticalDuotone } from "../duotone";
import { BatteryChargingVerticalFill } from "../fill";
import { BatteryChargingVerticalLight } from "../light";
import { BatteryChargingVerticalRegular } from "../regular";
import { BatteryChargingVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryChargingVertical = memo(function BatteryChargingVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryChargingVerticalBold,
      duotone: BatteryChargingVerticalDuotone,
      fill: BatteryChargingVerticalFill,
      light: BatteryChargingVerticalLight,
      regular: BatteryChargingVerticalRegular,
      thin: BatteryChargingVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
