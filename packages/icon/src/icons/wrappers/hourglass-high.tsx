import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassHighBold } from "../bold";
import { HourglassHighDuotone } from "../duotone";
import { HourglassHighFill } from "../fill";
import { HourglassHighLight } from "../light";
import { HourglassHighRegular } from "../regular";
import { HourglassHighThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassHigh = memo(function HourglassHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassHighBold,
      duotone: HourglassHighDuotone,
      fill: HourglassHighFill,
      light: HourglassHighLight,
      regular: HourglassHighRegular,
      thin: HourglassHighThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
