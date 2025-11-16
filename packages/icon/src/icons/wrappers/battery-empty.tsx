import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryEmptyBold } from "../bold";
import { BatteryEmptyDuotone } from "../duotone";
import { BatteryEmptyFill } from "../fill";
import { BatteryEmptyLight } from "../light";
import { BatteryEmptyRegular } from "../regular";
import { BatteryEmptyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryEmpty = memo(function BatteryEmpty(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryEmptyBold,
      duotone: BatteryEmptyDuotone,
      fill: BatteryEmptyFill,
      light: BatteryEmptyLight,
      regular: BatteryEmptyRegular,
      thin: BatteryEmptyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
