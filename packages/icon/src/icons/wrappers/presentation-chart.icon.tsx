import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PresentationChartBoldIcon } from "../bold/presentation-chart-bold.icon";
import { PresentationChartDuotoneIcon } from "../duotone/presentation-chart-duotone.icon";
import { PresentationChartFillIcon } from "../fill/presentation-chart-fill.icon";
import { PresentationChartLightIcon } from "../light/presentation-chart-light.icon";
import { PresentationChartRegularIcon } from "../regular/presentation-chart-regular.icon";
import { PresentationChartThinIcon } from "../thin/presentation-chart-thin.icon";

export const PresentationChartIcon = memo(function PresentationChart(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PresentationChartBoldIcon,
      duotone: PresentationChartDuotoneIcon,
      fill: PresentationChartFillIcon,
      light: PresentationChartLightIcon,
      regular: PresentationChartRegularIcon,
      thin: PresentationChartThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
