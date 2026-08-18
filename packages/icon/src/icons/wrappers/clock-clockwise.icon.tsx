import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClockClockwiseBoldIcon } from "../bold/clock-clockwise-bold.icon";
import { ClockClockwiseDuotoneIcon } from "../duotone/clock-clockwise-duotone.icon";
import { ClockClockwiseFillIcon } from "../fill/clock-clockwise-fill.icon";
import { ClockClockwiseLightIcon } from "../light/clock-clockwise-light.icon";
import { ClockClockwiseRegularIcon } from "../regular/clock-clockwise-regular.icon";
import { ClockClockwiseThinIcon } from "../thin/clock-clockwise-thin.icon";

export const ClockClockwiseIcon = memo(function ClockClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockClockwiseBoldIcon,
      duotone: ClockClockwiseDuotoneIcon,
      fill: ClockClockwiseFillIcon,
      light: ClockClockwiseLightIcon,
      regular: ClockClockwiseRegularIcon,
      thin: ClockClockwiseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
