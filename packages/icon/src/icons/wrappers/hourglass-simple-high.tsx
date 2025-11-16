import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassSimpleHighBold } from "../bold";
import { HourglassSimpleHighDuotone } from "../duotone";
import { HourglassSimpleHighFill } from "../fill";
import { HourglassSimpleHighLight } from "../light";
import { HourglassSimpleHighRegular } from "../regular";
import { HourglassSimpleHighThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassSimpleHigh = memo(function HourglassSimpleHigh(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassSimpleHighBold,
      duotone: HourglassSimpleHighDuotone,
      fill: HourglassSimpleHighFill,
      light: HourglassSimpleHighLight,
      regular: HourglassSimpleHighRegular,
      thin: HourglassSimpleHighThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
