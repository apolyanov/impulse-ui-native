import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartPieSliceBold } from "../bold";
import { ChartPieSliceDuotone } from "../duotone";
import { ChartPieSliceFill } from "../fill";
import { ChartPieSliceLight } from "../light";
import { ChartPieSliceRegular } from "../regular";
import { ChartPieSliceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartPieSlice = memo(function ChartPieSlice(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartPieSliceBold,
      duotone: ChartPieSliceDuotone,
      fill: ChartPieSliceFill,
      light: ChartPieSliceLight,
      regular: ChartPieSliceRegular,
      thin: ChartPieSliceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
