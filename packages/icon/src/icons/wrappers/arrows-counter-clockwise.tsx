import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsCounterClockwiseBold } from "../bold";
import { ArrowsCounterClockwiseDuotone } from "../duotone";
import { ArrowsCounterClockwiseFill } from "../fill";
import { ArrowsCounterClockwiseLight } from "../light";
import { ArrowsCounterClockwiseRegular } from "../regular";
import { ArrowsCounterClockwiseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsCounterClockwise = memo(function ArrowsCounterClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsCounterClockwiseBold,
      duotone: ArrowsCounterClockwiseDuotone,
      fill: ArrowsCounterClockwiseFill,
      light: ArrowsCounterClockwiseLight,
      regular: ArrowsCounterClockwiseRegular,
      thin: ArrowsCounterClockwiseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
