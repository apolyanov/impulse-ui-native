import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCounterClockwiseBold } from "../bold";
import { ArrowCounterClockwiseDuotone } from "../duotone";
import { ArrowCounterClockwiseFill } from "../fill";
import { ArrowCounterClockwiseLight } from "../light";
import { ArrowCounterClockwiseRegular } from "../regular";
import { ArrowCounterClockwiseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCounterClockwise = memo(function ArrowCounterClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCounterClockwiseBold,
      duotone: ArrowCounterClockwiseDuotone,
      fill: ArrowCounterClockwiseFill,
      light: ArrowCounterClockwiseLight,
      regular: ArrowCounterClockwiseRegular,
      thin: ArrowCounterClockwiseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
