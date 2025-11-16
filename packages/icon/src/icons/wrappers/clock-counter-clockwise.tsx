import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockCounterClockwiseBold } from "../bold";
import { ClockCounterClockwiseDuotone } from "../duotone";
import { ClockCounterClockwiseFill } from "../fill";
import { ClockCounterClockwiseLight } from "../light";
import { ClockCounterClockwiseRegular } from "../regular";
import { ClockCounterClockwiseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClockCounterClockwise = memo(function ClockCounterClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockCounterClockwiseBold,
      duotone: ClockCounterClockwiseDuotone,
      fill: ClockCounterClockwiseFill,
      light: ClockCounterClockwiseLight,
      regular: ClockCounterClockwiseRegular,
      thin: ClockCounterClockwiseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
