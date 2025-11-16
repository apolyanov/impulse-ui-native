import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryPlusBold } from "../bold";
import { BatteryPlusDuotone } from "../duotone";
import { BatteryPlusFill } from "../fill";
import { BatteryPlusLight } from "../light";
import { BatteryPlusRegular } from "../regular";
import { BatteryPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryPlus = memo(function BatteryPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryPlusBold,
      duotone: BatteryPlusDuotone,
      fill: BatteryPlusFill,
      light: BatteryPlusLight,
      regular: BatteryPlusRegular,
      thin: BatteryPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
