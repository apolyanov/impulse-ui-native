import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryVerticalEmptyBoldIcon } from "../bold/battery-vertical-empty-bold.icon";
import { BatteryVerticalEmptyDuotoneIcon } from "../duotone/battery-vertical-empty-duotone.icon";
import { BatteryVerticalEmptyFillIcon } from "../fill/battery-vertical-empty-fill.icon";
import { BatteryVerticalEmptyLightIcon } from "../light/battery-vertical-empty-light.icon";
import { BatteryVerticalEmptyRegularIcon } from "../regular/battery-vertical-empty-regular.icon";
import { BatteryVerticalEmptyThinIcon } from "../thin/battery-vertical-empty-thin.icon";

export const BatteryVerticalEmptyIcon = memo(function BatteryVerticalEmpty(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalEmptyBoldIcon,
      duotone: BatteryVerticalEmptyDuotoneIcon,
      fill: BatteryVerticalEmptyFillIcon,
      light: BatteryVerticalEmptyLightIcon,
      regular: BatteryVerticalEmptyRegularIcon,
      thin: BatteryVerticalEmptyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
