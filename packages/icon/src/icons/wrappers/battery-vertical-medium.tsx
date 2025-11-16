import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryVerticalMediumBold } from "../bold";
import { BatteryVerticalMediumDuotone } from "../duotone";
import { BatteryVerticalMediumFill } from "../fill";
import { BatteryVerticalMediumLight } from "../light";
import { BatteryVerticalMediumRegular } from "../regular";
import { BatteryVerticalMediumThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryVerticalMedium = memo(function BatteryVerticalMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalMediumBold,
      duotone: BatteryVerticalMediumDuotone,
      fill: BatteryVerticalMediumFill,
      light: BatteryVerticalMediumLight,
      regular: BatteryVerticalMediumRegular,
      thin: BatteryVerticalMediumThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
