import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsClockwiseBold } from "../bold";
import { ArrowsClockwiseDuotone } from "../duotone";
import { ArrowsClockwiseFill } from "../fill";
import { ArrowsClockwiseLight } from "../light";
import { ArrowsClockwiseRegular } from "../regular";
import { ArrowsClockwiseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsClockwise = memo(function ArrowsClockwise(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsClockwiseBold,
      duotone: ArrowsClockwiseDuotone,
      fill: ArrowsClockwiseFill,
      light: ArrowsClockwiseLight,
      regular: ArrowsClockwiseRegular,
      thin: ArrowsClockwiseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
