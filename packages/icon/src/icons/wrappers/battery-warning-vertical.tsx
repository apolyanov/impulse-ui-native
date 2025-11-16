import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryWarningVerticalBold } from "../bold";
import { BatteryWarningVerticalDuotone } from "../duotone";
import { BatteryWarningVerticalFill } from "../fill";
import { BatteryWarningVerticalLight } from "../light";
import { BatteryWarningVerticalRegular } from "../regular";
import { BatteryWarningVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryWarningVertical = memo(function BatteryWarningVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryWarningVerticalBold,
      duotone: BatteryWarningVerticalDuotone,
      fill: BatteryWarningVerticalFill,
      light: BatteryWarningVerticalLight,
      regular: BatteryWarningVerticalRegular,
      thin: BatteryWarningVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
