import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowClockwiseBoldIcon } from "../bold/arrow-clockwise-bold.icon";
import { ArrowClockwiseDuotoneIcon } from "../duotone/arrow-clockwise-duotone.icon";
import { ArrowClockwiseFillIcon } from "../fill/arrow-clockwise-fill.icon";
import { ArrowClockwiseLightIcon } from "../light/arrow-clockwise-light.icon";
import { ArrowClockwiseRegularIcon } from "../regular/arrow-clockwise-regular.icon";
import { ArrowClockwiseThinIcon } from "../thin/arrow-clockwise-thin.icon";

export const ArrowClockwiseIcon = memo(function ArrowClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowClockwiseBoldIcon,
      duotone: ArrowClockwiseDuotoneIcon,
      fill: ArrowClockwiseFillIcon,
      light: ArrowClockwiseLightIcon,
      regular: ArrowClockwiseRegularIcon,
      thin: ArrowClockwiseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
