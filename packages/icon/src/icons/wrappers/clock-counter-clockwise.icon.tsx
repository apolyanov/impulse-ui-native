import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClockCounterClockwiseBoldIcon } from "../bold";
import { ClockCounterClockwiseDuotoneIcon } from "../duotone";
import { ClockCounterClockwiseFillIcon } from "../fill";
import { ClockCounterClockwiseLightIcon } from "../light";
import { ClockCounterClockwiseRegularIcon } from "../regular";
import { ClockCounterClockwiseThinIcon } from "../thin";

export const ClockCounterClockwiseIcon = memo(function ClockCounterClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockCounterClockwiseBoldIcon,
      duotone: ClockCounterClockwiseDuotoneIcon,
      fill: ClockCounterClockwiseFillIcon,
      light: ClockCounterClockwiseLightIcon,
      regular: ClockCounterClockwiseRegularIcon,
      thin: ClockCounterClockwiseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
