import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ParallelogramBold } from "../bold";
import { ParallelogramDuotone } from "../duotone";
import { ParallelogramFill } from "../fill";
import { ParallelogramLight } from "../light";
import { ParallelogramRegular } from "../regular";
import { ParallelogramThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Parallelogram = memo(function Parallelogram(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ParallelogramBold,
      duotone: ParallelogramDuotone,
      fill: ParallelogramFill,
      light: ParallelogramLight,
      regular: ParallelogramRegular,
      thin: ParallelogramThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
