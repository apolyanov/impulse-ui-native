import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryVerticalFullBoldIcon } from "../bold/battery-vertical-full-bold.icon";
import { BatteryVerticalFullDuotoneIcon } from "../duotone/battery-vertical-full-duotone.icon";
import { BatteryVerticalFullFillIcon } from "../fill/battery-vertical-full-fill.icon";
import { BatteryVerticalFullLightIcon } from "../light/battery-vertical-full-light.icon";
import { BatteryVerticalFullRegularIcon } from "../regular/battery-vertical-full-regular.icon";
import { BatteryVerticalFullThinIcon } from "../thin/battery-vertical-full-thin.icon";

export const BatteryVerticalFullIcon = memo(function BatteryVerticalFull(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalFullBoldIcon,
      duotone: BatteryVerticalFullDuotoneIcon,
      fill: BatteryVerticalFullFillIcon,
      light: BatteryVerticalFullLightIcon,
      regular: BatteryVerticalFullRegularIcon,
      thin: BatteryVerticalFullThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
