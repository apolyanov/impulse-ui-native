import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryChargingBoldIcon } from "../bold/battery-charging-bold.icon";
import { BatteryChargingDuotoneIcon } from "../duotone/battery-charging-duotone.icon";
import { BatteryChargingFillIcon } from "../fill/battery-charging-fill.icon";
import { BatteryChargingLightIcon } from "../light/battery-charging-light.icon";
import { BatteryChargingRegularIcon } from "../regular/battery-charging-regular.icon";
import { BatteryChargingThinIcon } from "../thin/battery-charging-thin.icon";

export const BatteryChargingIcon = memo(function BatteryCharging(
  props: IconWrapperProps,
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
