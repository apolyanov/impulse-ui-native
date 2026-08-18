import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HourglassLowBoldIcon } from "../bold/hourglass-low-bold.icon";
import { HourglassLowDuotoneIcon } from "../duotone/hourglass-low-duotone.icon";
import { HourglassLowFillIcon } from "../fill/hourglass-low-fill.icon";
import { HourglassLowLightIcon } from "../light/hourglass-low-light.icon";
import { HourglassLowRegularIcon } from "../regular/hourglass-low-regular.icon";
import { HourglassLowThinIcon } from "../thin/hourglass-low-thin.icon";

export const HourglassLowIcon = memo(function HourglassLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassLowBoldIcon,
      duotone: HourglassLowDuotoneIcon,
      fill: HourglassLowFillIcon,
      light: HourglassLowLightIcon,
      regular: HourglassLowRegularIcon,
      thin: HourglassLowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
