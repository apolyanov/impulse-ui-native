import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryWarningBoldIcon } from "../bold/battery-warning-bold.icon";
import { BatteryWarningDuotoneIcon } from "../duotone/battery-warning-duotone.icon";
import { BatteryWarningFillIcon } from "../fill/battery-warning-fill.icon";
import { BatteryWarningLightIcon } from "../light/battery-warning-light.icon";
import { BatteryWarningRegularIcon } from "../regular/battery-warning-regular.icon";
import { BatteryWarningThinIcon } from "../thin/battery-warning-thin.icon";

export const BatteryWarningIcon = memo(function BatteryWarning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryWarningBoldIcon,
      duotone: BatteryWarningDuotoneIcon,
      fill: BatteryWarningFillIcon,
      light: BatteryWarningLightIcon,
      regular: BatteryWarningRegularIcon,
      thin: BatteryWarningThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
