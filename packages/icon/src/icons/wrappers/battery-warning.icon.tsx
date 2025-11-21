import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryWarningBoldIcon } from "../bold";
import { BatteryWarningDuotoneIcon } from "../duotone";
import { BatteryWarningFillIcon } from "../fill";
import { BatteryWarningLightIcon } from "../light";
import { BatteryWarningRegularIcon } from "../regular";
import { BatteryWarningThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryWarningIcon = memo(function BatteryWarning(
  props: IconWrapperProps
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
