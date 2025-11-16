import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryWarningBold } from "../bold";
import { BatteryWarningDuotone } from "../duotone";
import { BatteryWarningFill } from "../fill";
import { BatteryWarningLight } from "../light";
import { BatteryWarningRegular } from "../regular";
import { BatteryWarningThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryWarning = memo(function BatteryWarning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryWarningBold,
      duotone: BatteryWarningDuotone,
      fill: BatteryWarningFill,
      light: BatteryWarningLight,
      regular: BatteryWarningRegular,
      thin: BatteryWarningThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
