import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryVerticalMediumBoldIcon } from "../bold/battery-vertical-medium-bold.icon";
import { BatteryVerticalMediumDuotoneIcon } from "../duotone/battery-vertical-medium-duotone.icon";
import { BatteryVerticalMediumFillIcon } from "../fill/battery-vertical-medium-fill.icon";
import { BatteryVerticalMediumLightIcon } from "../light/battery-vertical-medium-light.icon";
import { BatteryVerticalMediumRegularIcon } from "../regular/battery-vertical-medium-regular.icon";
import { BatteryVerticalMediumThinIcon } from "../thin/battery-vertical-medium-thin.icon";

export const BatteryVerticalMediumIcon = memo(function BatteryVerticalMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalMediumBoldIcon,
      duotone: BatteryVerticalMediumDuotoneIcon,
      fill: BatteryVerticalMediumFillIcon,
      light: BatteryVerticalMediumLightIcon,
      regular: BatteryVerticalMediumRegularIcon,
      thin: BatteryVerticalMediumThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
