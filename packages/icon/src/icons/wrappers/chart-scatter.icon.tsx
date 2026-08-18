import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartScatterBoldIcon } from "../bold/chart-scatter-bold.icon";
import { ChartScatterDuotoneIcon } from "../duotone/chart-scatter-duotone.icon";
import { ChartScatterFillIcon } from "../fill/chart-scatter-fill.icon";
import { ChartScatterLightIcon } from "../light/chart-scatter-light.icon";
import { ChartScatterRegularIcon } from "../regular/chart-scatter-regular.icon";
import { ChartScatterThinIcon } from "../thin/chart-scatter-thin.icon";

export const ChartScatterIcon = memo(function ChartScatter(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartScatterBoldIcon,
      duotone: ChartScatterDuotoneIcon,
      fill: ChartScatterFillIcon,
      light: ChartScatterLightIcon,
      regular: ChartScatterRegularIcon,
      thin: ChartScatterThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
