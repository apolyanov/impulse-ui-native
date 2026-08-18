import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowCounterClockwiseBoldIcon } from "../bold/arrow-counter-clockwise-bold.icon";
import { ArrowCounterClockwiseDuotoneIcon } from "../duotone/arrow-counter-clockwise-duotone.icon";
import { ArrowCounterClockwiseFillIcon } from "../fill/arrow-counter-clockwise-fill.icon";
import { ArrowCounterClockwiseLightIcon } from "../light/arrow-counter-clockwise-light.icon";
import { ArrowCounterClockwiseRegularIcon } from "../regular/arrow-counter-clockwise-regular.icon";
import { ArrowCounterClockwiseThinIcon } from "../thin/arrow-counter-clockwise-thin.icon";

export const ArrowCounterClockwiseIcon = memo(function ArrowCounterClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCounterClockwiseBoldIcon,
      duotone: ArrowCounterClockwiseDuotoneIcon,
      fill: ArrowCounterClockwiseFillIcon,
      light: ArrowCounterClockwiseLightIcon,
      regular: ArrowCounterClockwiseRegularIcon,
      thin: ArrowCounterClockwiseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
