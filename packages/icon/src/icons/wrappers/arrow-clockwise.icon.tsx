import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowClockwiseBoldIcon } from "../bold";
import { ArrowClockwiseDuotoneIcon } from "../duotone";
import { ArrowClockwiseFillIcon } from "../fill";
import { ArrowClockwiseLightIcon } from "../light";
import { ArrowClockwiseRegularIcon } from "../regular";
import { ArrowClockwiseThinIcon } from "../thin";

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
