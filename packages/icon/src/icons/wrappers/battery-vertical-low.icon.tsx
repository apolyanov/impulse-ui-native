import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryVerticalLowBoldIcon } from "../bold/battery-vertical-low-bold.icon";
import { BatteryVerticalLowDuotoneIcon } from "../duotone/battery-vertical-low-duotone.icon";
import { BatteryVerticalLowFillIcon } from "../fill/battery-vertical-low-fill.icon";
import { BatteryVerticalLowLightIcon } from "../light/battery-vertical-low-light.icon";
import { BatteryVerticalLowRegularIcon } from "../regular/battery-vertical-low-regular.icon";
import { BatteryVerticalLowThinIcon } from "../thin/battery-vertical-low-thin.icon";

export const BatteryVerticalLowIcon = memo(function BatteryVerticalLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalLowBoldIcon,
      duotone: BatteryVerticalLowDuotoneIcon,
      fill: BatteryVerticalLowFillIcon,
      light: BatteryVerticalLowLightIcon,
      regular: BatteryVerticalLowRegularIcon,
      thin: BatteryVerticalLowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
