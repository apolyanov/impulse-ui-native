import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryVerticalHighBoldIcon } from "../bold";
import { BatteryVerticalHighDuotoneIcon } from "../duotone";
import { BatteryVerticalHighFillIcon } from "../fill";
import { BatteryVerticalHighLightIcon } from "../light";
import { BatteryVerticalHighRegularIcon } from "../regular";
import { BatteryVerticalHighThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryVerticalHighIcon = memo(function BatteryVerticalHigh(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalHighBoldIcon,
      duotone: BatteryVerticalHighDuotoneIcon,
      fill: BatteryVerticalHighFillIcon,
      light: BatteryVerticalHighLightIcon,
      regular: BatteryVerticalHighRegularIcon,
      thin: BatteryVerticalHighThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
