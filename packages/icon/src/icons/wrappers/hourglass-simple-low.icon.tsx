import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassSimpleLowBoldIcon } from "../bold";
import { HourglassSimpleLowDuotoneIcon } from "../duotone";
import { HourglassSimpleLowFillIcon } from "../fill";
import { HourglassSimpleLowLightIcon } from "../light";
import { HourglassSimpleLowRegularIcon } from "../regular";
import { HourglassSimpleLowThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassSimpleLowIcon = memo(function HourglassSimpleLow(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassSimpleLowBoldIcon,
      duotone: HourglassSimpleLowDuotoneIcon,
      fill: HourglassSimpleLowFillIcon,
      light: HourglassSimpleLowLightIcon,
      regular: HourglassSimpleLowRegularIcon,
      thin: HourglassSimpleLowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
