import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryLowBold } from "../bold";
import { BatteryLowDuotone } from "../duotone";
import { BatteryLowFill } from "../fill";
import { BatteryLowLight } from "../light";
import { BatteryLowRegular } from "../regular";
import { BatteryLowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryLow = memo(function BatteryLow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryLowBold,
      duotone: BatteryLowDuotone,
      fill: BatteryLowFill,
      light: BatteryLowLight,
      regular: BatteryLowRegular,
      thin: BatteryLowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
