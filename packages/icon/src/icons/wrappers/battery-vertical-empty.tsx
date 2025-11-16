import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryVerticalEmptyBold } from "../bold";
import { BatteryVerticalEmptyDuotone } from "../duotone";
import { BatteryVerticalEmptyFill } from "../fill";
import { BatteryVerticalEmptyLight } from "../light";
import { BatteryVerticalEmptyRegular } from "../regular";
import { BatteryVerticalEmptyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryVerticalEmpty = memo(function BatteryVerticalEmpty(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalEmptyBold,
      duotone: BatteryVerticalEmptyDuotone,
      fill: BatteryVerticalEmptyFill,
      light: BatteryVerticalEmptyLight,
      regular: BatteryVerticalEmptyRegular,
      thin: BatteryVerticalEmptyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
