import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryFullBold } from "../bold";
import { BatteryFullDuotone } from "../duotone";
import { BatteryFullFill } from "../fill";
import { BatteryFullLight } from "../light";
import { BatteryFullRegular } from "../regular";
import { BatteryFullThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryFull = memo(function BatteryFull(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryFullBold,
      duotone: BatteryFullDuotone,
      fill: BatteryFullFill,
      light: BatteryFullLight,
      regular: BatteryFullRegular,
      thin: BatteryFullThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
