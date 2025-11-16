import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowClockwiseBold } from "../bold";
import { ArrowClockwiseDuotone } from "../duotone";
import { ArrowClockwiseFill } from "../fill";
import { ArrowClockwiseLight } from "../light";
import { ArrowClockwiseRegular } from "../regular";
import { ArrowClockwiseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowClockwise = memo(function ArrowClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowClockwiseBold,
      duotone: ArrowClockwiseDuotone,
      fill: ArrowClockwiseFill,
      light: ArrowClockwiseLight,
      regular: ArrowClockwiseRegular,
      thin: ArrowClockwiseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
