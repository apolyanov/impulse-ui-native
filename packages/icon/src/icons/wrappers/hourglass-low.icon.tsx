import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassLowBoldIcon } from "../bold";
import { HourglassLowDuotoneIcon } from "../duotone";
import { HourglassLowFillIcon } from "../fill";
import { HourglassLowLightIcon } from "../light";
import { HourglassLowRegularIcon } from "../regular";
import { HourglassLowThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassLowIcon = memo(function HourglassLow(
  props: IconWrapperProps
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
