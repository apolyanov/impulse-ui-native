import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryHighBoldIcon } from "../bold/battery-high-bold.icon";
import { BatteryHighDuotoneIcon } from "../duotone/battery-high-duotone.icon";
import { BatteryHighFillIcon } from "../fill/battery-high-fill.icon";
import { BatteryHighLightIcon } from "../light/battery-high-light.icon";
import { BatteryHighRegularIcon } from "../regular/battery-high-regular.icon";
import { BatteryHighThinIcon } from "../thin/battery-high-thin.icon";

export const BatteryHighIcon = memo(function BatteryHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryHighBoldIcon,
      duotone: BatteryHighDuotoneIcon,
      fill: BatteryHighFillIcon,
      light: BatteryHighLightIcon,
      regular: BatteryHighRegularIcon,
      thin: BatteryHighThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
