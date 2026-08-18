import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryVerticalHighBoldIcon } from "../bold/battery-vertical-high-bold.icon";
import { BatteryVerticalHighDuotoneIcon } from "../duotone/battery-vertical-high-duotone.icon";
import { BatteryVerticalHighFillIcon } from "../fill/battery-vertical-high-fill.icon";
import { BatteryVerticalHighLightIcon } from "../light/battery-vertical-high-light.icon";
import { BatteryVerticalHighRegularIcon } from "../regular/battery-vertical-high-regular.icon";
import { BatteryVerticalHighThinIcon } from "../thin/battery-vertical-high-thin.icon";

export const BatteryVerticalHighIcon = memo(function BatteryVerticalHigh(
  props: IconWrapperProps,
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
