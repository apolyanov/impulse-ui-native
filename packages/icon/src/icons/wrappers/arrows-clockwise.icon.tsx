import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsClockwiseBoldIcon } from "../bold";
import { ArrowsClockwiseDuotoneIcon } from "../duotone";
import { ArrowsClockwiseFillIcon } from "../fill";
import { ArrowsClockwiseLightIcon } from "../light";
import { ArrowsClockwiseRegularIcon } from "../regular";
import { ArrowsClockwiseThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsClockwiseIcon = memo(function ArrowsClockwise(
  props: IconWrapperProps
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
