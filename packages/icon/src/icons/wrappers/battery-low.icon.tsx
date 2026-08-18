import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryLowBoldIcon } from "../bold/battery-low-bold.icon";
import { BatteryLowDuotoneIcon } from "../duotone/battery-low-duotone.icon";
import { BatteryLowFillIcon } from "../fill/battery-low-fill.icon";
import { BatteryLowLightIcon } from "../light/battery-low-light.icon";
import { BatteryLowRegularIcon } from "../regular/battery-low-regular.icon";
import { BatteryLowThinIcon } from "../thin/battery-low-thin.icon";

export const BatteryLowIcon = memo(function BatteryLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryLowBoldIcon,
      duotone: BatteryLowDuotoneIcon,
      fill: BatteryLowFillIcon,
      light: BatteryLowLightIcon,
      regular: BatteryLowRegularIcon,
      thin: BatteryLowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
