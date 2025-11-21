import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryPlusVerticalBoldIcon } from "../bold";
import { BatteryPlusVerticalDuotoneIcon } from "../duotone";
import { BatteryPlusVerticalFillIcon } from "../fill";
import { BatteryPlusVerticalLightIcon } from "../light";
import { BatteryPlusVerticalRegularIcon } from "../regular";
import { BatteryPlusVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryPlusVerticalIcon = memo(function BatteryPlusVertical(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryPlusVerticalBoldIcon,
      duotone: BatteryPlusVerticalDuotoneIcon,
      fill: BatteryPlusVerticalFillIcon,
      light: BatteryPlusVerticalLightIcon,
      regular: BatteryPlusVerticalRegularIcon,
      thin: BatteryPlusVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
