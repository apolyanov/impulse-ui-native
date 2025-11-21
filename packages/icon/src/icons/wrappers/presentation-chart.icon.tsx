import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PresentationChartBoldIcon } from "../bold";
import { PresentationChartDuotoneIcon } from "../duotone";
import { PresentationChartFillIcon } from "../fill";
import { PresentationChartLightIcon } from "../light";
import { PresentationChartRegularIcon } from "../regular";
import { PresentationChartThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PresentationChartIcon = memo(function PresentationChart(
  props: IconWrapperProps
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
