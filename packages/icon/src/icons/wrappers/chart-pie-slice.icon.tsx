import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartPieSliceBoldIcon } from "../bold/chart-pie-slice-bold.icon";
import { ChartPieSliceDuotoneIcon } from "../duotone/chart-pie-slice-duotone.icon";
import { ChartPieSliceFillIcon } from "../fill/chart-pie-slice-fill.icon";
import { ChartPieSliceLightIcon } from "../light/chart-pie-slice-light.icon";
import { ChartPieSliceRegularIcon } from "../regular/chart-pie-slice-regular.icon";
import { ChartPieSliceThinIcon } from "../thin/chart-pie-slice-thin.icon";

export const ChartPieSliceIcon = memo(function ChartPieSlice(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartPieSliceBoldIcon,
      duotone: ChartPieSliceDuotoneIcon,
      fill: ChartPieSliceFillIcon,
      light: ChartPieSliceLightIcon,
      regular: ChartPieSliceRegularIcon,
      thin: ChartPieSliceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
