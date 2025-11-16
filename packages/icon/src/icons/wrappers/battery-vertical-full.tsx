import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryVerticalFullBold } from "../bold";
import { BatteryVerticalFullDuotone } from "../duotone";
import { BatteryVerticalFullFill } from "../fill";
import { BatteryVerticalFullLight } from "../light";
import { BatteryVerticalFullRegular } from "../regular";
import { BatteryVerticalFullThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryVerticalFull = memo(function BatteryVerticalFull(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalFullBold,
      duotone: BatteryVerticalFullDuotone,
      fill: BatteryVerticalFullFill,
      light: BatteryVerticalFullLight,
      regular: BatteryVerticalFullRegular,
      thin: BatteryVerticalFullThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
