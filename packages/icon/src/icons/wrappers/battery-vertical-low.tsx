import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryVerticalLowBold } from "../bold";
import { BatteryVerticalLowDuotone } from "../duotone";
import { BatteryVerticalLowFill } from "../fill";
import { BatteryVerticalLowLight } from "../light";
import { BatteryVerticalLowRegular } from "../regular";
import { BatteryVerticalLowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryVerticalLow = memo(function BatteryVerticalLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalLowBold,
      duotone: BatteryVerticalLowDuotone,
      fill: BatteryVerticalLowFill,
      light: BatteryVerticalLowLight,
      regular: BatteryVerticalLowRegular,
      thin: BatteryVerticalLowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
