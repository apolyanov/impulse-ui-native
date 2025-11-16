import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryVerticalHighBold } from "../bold";
import { BatteryVerticalHighDuotone } from "../duotone";
import { BatteryVerticalHighFill } from "../fill";
import { BatteryVerticalHighLight } from "../light";
import { BatteryVerticalHighRegular } from "../regular";
import { BatteryVerticalHighThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryVerticalHigh = memo(function BatteryVerticalHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalHighBold,
      duotone: BatteryVerticalHighDuotone,
      fill: BatteryVerticalHighFill,
      light: BatteryVerticalHighLight,
      regular: BatteryVerticalHighRegular,
      thin: BatteryVerticalHighThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
