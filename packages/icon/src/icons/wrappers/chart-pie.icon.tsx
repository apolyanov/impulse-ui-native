import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartPieBoldIcon } from "../bold/chart-pie-bold.icon";
import { ChartPieDuotoneIcon } from "../duotone/chart-pie-duotone.icon";
import { ChartPieFillIcon } from "../fill/chart-pie-fill.icon";
import { ChartPieLightIcon } from "../light/chart-pie-light.icon";
import { ChartPieRegularIcon } from "../regular/chart-pie-regular.icon";
import { ChartPieThinIcon } from "../thin/chart-pie-thin.icon";

export const ChartPieIcon = memo(function ChartPie(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartPieBoldIcon,
      duotone: ChartPieDuotoneIcon,
      fill: ChartPieFillIcon,
      light: ChartPieLightIcon,
      regular: ChartPieRegularIcon,
      thin: ChartPieThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
