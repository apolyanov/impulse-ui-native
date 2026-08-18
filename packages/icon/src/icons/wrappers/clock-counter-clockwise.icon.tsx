import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClockCounterClockwiseBoldIcon } from "../bold/clock-counter-clockwise-bold.icon";
import { ClockCounterClockwiseDuotoneIcon } from "../duotone/clock-counter-clockwise-duotone.icon";
import { ClockCounterClockwiseFillIcon } from "../fill/clock-counter-clockwise-fill.icon";
import { ClockCounterClockwiseLightIcon } from "../light/clock-counter-clockwise-light.icon";
import { ClockCounterClockwiseRegularIcon } from "../regular/clock-counter-clockwise-regular.icon";
import { ClockCounterClockwiseThinIcon } from "../thin/clock-counter-clockwise-thin.icon";

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
