import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryVerticalEmptyBoldIcon } from "../bold";
import { BatteryVerticalEmptyDuotoneIcon } from "../duotone";
import { BatteryVerticalEmptyFillIcon } from "../fill";
import { BatteryVerticalEmptyLightIcon } from "../light";
import { BatteryVerticalEmptyRegularIcon } from "../regular";
import { BatteryVerticalEmptyThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryVerticalEmptyIcon = memo(function BatteryVerticalEmpty(
  props: IconWrapperProps
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
