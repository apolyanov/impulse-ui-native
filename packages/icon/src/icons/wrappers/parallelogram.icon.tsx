import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ParallelogramBoldIcon } from "../bold/parallelogram-bold.icon";
import { ParallelogramDuotoneIcon } from "../duotone/parallelogram-duotone.icon";
import { ParallelogramFillIcon } from "../fill/parallelogram-fill.icon";
import { ParallelogramLightIcon } from "../light/parallelogram-light.icon";
import { ParallelogramRegularIcon } from "../regular/parallelogram-regular.icon";
import { ParallelogramThinIcon } from "../thin/parallelogram-thin.icon";

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
