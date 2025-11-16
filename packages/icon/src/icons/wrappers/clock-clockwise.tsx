import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockClockwiseBold } from "../bold";
import { ClockClockwiseDuotone } from "../duotone";
import { ClockClockwiseFill } from "../fill";
import { ClockClockwiseLight } from "../light";
import { ClockClockwiseRegular } from "../regular";
import { ClockClockwiseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClockClockwise = memo(function ClockClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockClockwiseBold,
      duotone: ClockClockwiseDuotone,
      fill: ClockClockwiseFill,
      light: ClockClockwiseLight,
      regular: ClockClockwiseRegular,
      thin: ClockClockwiseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
