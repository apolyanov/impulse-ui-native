import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryLowBoldIcon } from "../bold";
import { BatteryLowDuotoneIcon } from "../duotone";
import { BatteryLowFillIcon } from "../fill";
import { BatteryLowLightIcon } from "../light";
import { BatteryLowRegularIcon } from "../regular";
import { BatteryLowThinIcon } from "../thin";

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
