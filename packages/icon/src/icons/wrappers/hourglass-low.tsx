import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassLowBold } from "../bold";
import { HourglassLowDuotone } from "../duotone";
import { HourglassLowFill } from "../fill";
import { HourglassLowLight } from "../light";
import { HourglassLowRegular } from "../regular";
import { HourglassLowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassLow = memo(function HourglassLow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassLowBold,
      duotone: HourglassLowDuotone,
      fill: HourglassLowFill,
      light: HourglassLowLight,
      regular: HourglassLowRegular,
      thin: HourglassLowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
