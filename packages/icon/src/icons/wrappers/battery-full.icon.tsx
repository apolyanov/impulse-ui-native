import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryFullBoldIcon } from "../bold/battery-full-bold.icon";
import { BatteryFullDuotoneIcon } from "../duotone/battery-full-duotone.icon";
import { BatteryFullFillIcon } from "../fill/battery-full-fill.icon";
import { BatteryFullLightIcon } from "../light/battery-full-light.icon";
import { BatteryFullRegularIcon } from "../regular/battery-full-regular.icon";
import { BatteryFullThinIcon } from "../thin/battery-full-thin.icon";

export const BatteryFullIcon = memo(function BatteryFull(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryFullBoldIcon,
      duotone: BatteryFullDuotoneIcon,
      fill: BatteryFullFillIcon,
      light: BatteryFullLightIcon,
      regular: BatteryFullRegularIcon,
      thin: BatteryFullThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
