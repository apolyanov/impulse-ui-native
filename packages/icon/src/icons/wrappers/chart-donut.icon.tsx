import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartDonutBoldIcon } from "../bold/chart-donut-bold.icon";
import { ChartDonutDuotoneIcon } from "../duotone/chart-donut-duotone.icon";
import { ChartDonutFillIcon } from "../fill/chart-donut-fill.icon";
import { ChartDonutLightIcon } from "../light/chart-donut-light.icon";
import { ChartDonutRegularIcon } from "../regular/chart-donut-regular.icon";
import { ChartDonutThinIcon } from "../thin/chart-donut-thin.icon";

export const ChartDonutIcon = memo(function ChartDonut(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartDonutBoldIcon,
      duotone: ChartDonutDuotoneIcon,
      fill: ChartDonutFillIcon,
      light: ChartDonutLightIcon,
      regular: ChartDonutRegularIcon,
      thin: ChartDonutThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
