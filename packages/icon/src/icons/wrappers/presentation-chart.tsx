import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PresentationChartBold } from "../bold";
import { PresentationChartDuotone } from "../duotone";
import { PresentationChartFill } from "../fill";
import { PresentationChartLight } from "../light";
import { PresentationChartRegular } from "../regular";
import { PresentationChartThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PresentationChart = memo(function PresentationChart(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PresentationChartBold,
      duotone: PresentationChartDuotone,
      fill: PresentationChartFill,
      light: PresentationChartLight,
      regular: PresentationChartRegular,
      thin: PresentationChartThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
