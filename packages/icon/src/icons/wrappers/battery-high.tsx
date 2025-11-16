import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryHighBold } from "../bold";
import { BatteryHighDuotone } from "../duotone";
import { BatteryHighFill } from "../fill";
import { BatteryHighLight } from "../light";
import { BatteryHighRegular } from "../regular";
import { BatteryHighThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryHigh = memo(function BatteryHigh(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryHighBold,
      duotone: BatteryHighDuotone,
      fill: BatteryHighFill,
      light: BatteryHighLight,
      regular: BatteryHighRegular,
      thin: BatteryHighThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
