import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryPlusVerticalBold } from "../bold";
import { BatteryPlusVerticalDuotone } from "../duotone";
import { BatteryPlusVerticalFill } from "../fill";
import { BatteryPlusVerticalLight } from "../light";
import { BatteryPlusVerticalRegular } from "../regular";
import { BatteryPlusVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryPlusVertical = memo(function BatteryPlusVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryPlusVerticalBold,
      duotone: BatteryPlusVerticalDuotone,
      fill: BatteryPlusVerticalFill,
      light: BatteryPlusVerticalLight,
      regular: BatteryPlusVerticalRegular,
      thin: BatteryPlusVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
