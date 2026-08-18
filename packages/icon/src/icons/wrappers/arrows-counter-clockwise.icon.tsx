import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsCounterClockwiseBoldIcon } from "../bold/arrows-counter-clockwise-bold.icon";
import { ArrowsCounterClockwiseDuotoneIcon } from "../duotone/arrows-counter-clockwise-duotone.icon";
import { ArrowsCounterClockwiseFillIcon } from "../fill/arrows-counter-clockwise-fill.icon";
import { ArrowsCounterClockwiseLightIcon } from "../light/arrows-counter-clockwise-light.icon";
import { ArrowsCounterClockwiseRegularIcon } from "../regular/arrows-counter-clockwise-regular.icon";
import { ArrowsCounterClockwiseThinIcon } from "../thin/arrows-counter-clockwise-thin.icon";

export const ArrowsCounterClockwiseIcon = memo(function ArrowsCounterClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsCounterClockwiseBoldIcon,
      duotone: ArrowsCounterClockwiseDuotoneIcon,
      fill: ArrowsCounterClockwiseFillIcon,
      light: ArrowsCounterClockwiseLightIcon,
      regular: ArrowsCounterClockwiseRegularIcon,
      thin: ArrowsCounterClockwiseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
