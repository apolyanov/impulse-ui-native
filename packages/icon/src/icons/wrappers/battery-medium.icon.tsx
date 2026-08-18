import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryMediumBoldIcon } from "../bold/battery-medium-bold.icon";
import { BatteryMediumDuotoneIcon } from "../duotone/battery-medium-duotone.icon";
import { BatteryMediumFillIcon } from "../fill/battery-medium-fill.icon";
import { BatteryMediumLightIcon } from "../light/battery-medium-light.icon";
import { BatteryMediumRegularIcon } from "../regular/battery-medium-regular.icon";
import { BatteryMediumThinIcon } from "../thin/battery-medium-thin.icon";

export const BatteryMediumIcon = memo(function BatteryMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryMediumBoldIcon,
      duotone: BatteryMediumDuotoneIcon,
      fill: BatteryMediumFillIcon,
      light: BatteryMediumLightIcon,
      regular: BatteryMediumRegularIcon,
      thin: BatteryMediumThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
