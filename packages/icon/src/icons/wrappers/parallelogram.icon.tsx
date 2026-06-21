import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ParallelogramBoldIcon } from "../bold";
import { ParallelogramDuotoneIcon } from "../duotone";
import { ParallelogramFillIcon } from "../fill";
import { ParallelogramLightIcon } from "../light";
import { ParallelogramRegularIcon } from "../regular";
import { ParallelogramThinIcon } from "../thin";

export const ParallelogramIcon = memo(function Parallelogram(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ParallelogramBoldIcon,
      duotone: ParallelogramDuotoneIcon,
      fill: ParallelogramFillIcon,
      light: ParallelogramLightIcon,
      regular: ParallelogramRegularIcon,
      thin: ParallelogramThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
