import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsClockwiseBoldIcon } from "../bold";
import { ArrowsClockwiseDuotoneIcon } from "../duotone";
import { ArrowsClockwiseFillIcon } from "../fill";
import { ArrowsClockwiseLightIcon } from "../light";
import { ArrowsClockwiseRegularIcon } from "../regular";
import { ArrowsClockwiseThinIcon } from "../thin";

export const ArrowsClockwiseIcon = memo(function ArrowsClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsClockwiseBoldIcon,
      duotone: ArrowsClockwiseDuotoneIcon,
      fill: ArrowsClockwiseFillIcon,
      light: ArrowsClockwiseLightIcon,
      regular: ArrowsClockwiseRegularIcon,
      thin: ArrowsClockwiseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
