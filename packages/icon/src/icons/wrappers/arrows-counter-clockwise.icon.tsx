import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsCounterClockwiseBoldIcon } from "../bold";
import { ArrowsCounterClockwiseDuotoneIcon } from "../duotone";
import { ArrowsCounterClockwiseFillIcon } from "../fill";
import { ArrowsCounterClockwiseLightIcon } from "../light";
import { ArrowsCounterClockwiseRegularIcon } from "../regular";
import { ArrowsCounterClockwiseThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsCounterClockwiseIcon = memo(function ArrowsCounterClockwise(
  props: IconWrapperProps
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
