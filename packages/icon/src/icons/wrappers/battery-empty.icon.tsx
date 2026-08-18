import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryEmptyBoldIcon } from "../bold/battery-empty-bold.icon";
import { BatteryEmptyDuotoneIcon } from "../duotone/battery-empty-duotone.icon";
import { BatteryEmptyFillIcon } from "../fill/battery-empty-fill.icon";
import { BatteryEmptyLightIcon } from "../light/battery-empty-light.icon";
import { BatteryEmptyRegularIcon } from "../regular/battery-empty-regular.icon";
import { BatteryEmptyThinIcon } from "../thin/battery-empty-thin.icon";

export const BatteryEmptyIcon = memo(function BatteryEmpty(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryEmptyBoldIcon,
      duotone: BatteryEmptyDuotoneIcon,
      fill: BatteryEmptyFillIcon,
      light: BatteryEmptyLightIcon,
      regular: BatteryEmptyRegularIcon,
      thin: BatteryEmptyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
