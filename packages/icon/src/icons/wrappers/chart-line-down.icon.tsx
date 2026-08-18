import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartLineDownBoldIcon } from "../bold/chart-line-down-bold.icon";
import { ChartLineDownDuotoneIcon } from "../duotone/chart-line-down-duotone.icon";
import { ChartLineDownFillIcon } from "../fill/chart-line-down-fill.icon";
import { ChartLineDownLightIcon } from "../light/chart-line-down-light.icon";
import { ChartLineDownRegularIcon } from "../regular/chart-line-down-regular.icon";
import { ChartLineDownThinIcon } from "../thin/chart-line-down-thin.icon";

export const ChartLineDownIcon = memo(function ChartLineDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartLineDownBoldIcon,
      duotone: ChartLineDownDuotoneIcon,
      fill: ChartLineDownFillIcon,
      light: ChartLineDownLightIcon,
      regular: ChartLineDownRegularIcon,
      thin: ChartLineDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
