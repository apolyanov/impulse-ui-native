import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HourglassSimpleBold } from "../bold";
import { HourglassSimpleDuotone } from "../duotone";
import { HourglassSimpleFill } from "../fill";
import { HourglassSimpleLight } from "../light";
import { HourglassSimpleRegular } from "../regular";
import { HourglassSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HourglassSimple = memo(function HourglassSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HourglassSimpleBold,
      duotone: HourglassSimpleDuotone,
      fill: HourglassSimpleFill,
      light: HourglassSimpleLight,
      regular: HourglassSimpleRegular,
      thin: HourglassSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
