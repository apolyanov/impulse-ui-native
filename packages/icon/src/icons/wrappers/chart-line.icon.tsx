import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartLineBoldIcon } from "../bold/chart-line-bold.icon";
import { ChartLineDuotoneIcon } from "../duotone/chart-line-duotone.icon";
import { ChartLineFillIcon } from "../fill/chart-line-fill.icon";
import { ChartLineLightIcon } from "../light/chart-line-light.icon";
import { ChartLineRegularIcon } from "../regular/chart-line-regular.icon";
import { ChartLineThinIcon } from "../thin/chart-line-thin.icon";

export const ChartLineIcon = memo(function ChartLine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartLineBoldIcon,
      duotone: ChartLineDuotoneIcon,
      fill: ChartLineFillIcon,
      light: ChartLineLightIcon,
      regular: ChartLineRegularIcon,
      thin: ChartLineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
