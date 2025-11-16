import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassSimpleLowBold } from "../bold";
import { HourglassSimpleLowDuotone } from "../duotone";
import { HourglassSimpleLowFill } from "../fill";
import { HourglassSimpleLowLight } from "../light";
import { HourglassSimpleLowRegular } from "../regular";
import { HourglassSimpleLowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassSimpleLow = memo(function HourglassSimpleLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassSimpleLowBold,
      duotone: HourglassSimpleLowDuotone,
      fill: HourglassSimpleLowFill,
      light: HourglassSimpleLowLight,
      regular: HourglassSimpleLowRegular,
      thin: HourglassSimpleLowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
