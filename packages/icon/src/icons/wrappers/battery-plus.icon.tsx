import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryPlusBoldIcon } from "../bold/battery-plus-bold.icon";
import { BatteryPlusDuotoneIcon } from "../duotone/battery-plus-duotone.icon";
import { BatteryPlusFillIcon } from "../fill/battery-plus-fill.icon";
import { BatteryPlusLightIcon } from "../light/battery-plus-light.icon";
import { BatteryPlusRegularIcon } from "../regular/battery-plus-regular.icon";
import { BatteryPlusThinIcon } from "../thin/battery-plus-thin.icon";

export const BatteryPlusIcon = memo(function BatteryPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryPlusBoldIcon,
      duotone: BatteryPlusDuotoneIcon,
      fill: BatteryPlusFillIcon,
      light: BatteryPlusLightIcon,
      regular: BatteryPlusRegularIcon,
      thin: BatteryPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
