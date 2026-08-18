import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryWarningVerticalBoldIcon } from "../bold/battery-warning-vertical-bold.icon";
import { BatteryWarningVerticalDuotoneIcon } from "../duotone/battery-warning-vertical-duotone.icon";
import { BatteryWarningVerticalFillIcon } from "../fill/battery-warning-vertical-fill.icon";
import { BatteryWarningVerticalLightIcon } from "../light/battery-warning-vertical-light.icon";
import { BatteryWarningVerticalRegularIcon } from "../regular/battery-warning-vertical-regular.icon";
import { BatteryWarningVerticalThinIcon } from "../thin/battery-warning-vertical-thin.icon";

export const BatteryWarningVerticalIcon = memo(function BatteryWarningVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryWarningVerticalBoldIcon,
      duotone: BatteryWarningVerticalDuotoneIcon,
      fill: BatteryWarningVerticalFillIcon,
      light: BatteryWarningVerticalLightIcon,
      regular: BatteryWarningVerticalRegularIcon,
      thin: BatteryWarningVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
