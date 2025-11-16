import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartDonutBold } from "../bold";
import { ChartDonutDuotone } from "../duotone";
import { ChartDonutFill } from "../fill";
import { ChartDonutLight } from "../light";
import { ChartDonutRegular } from "../regular";
import { ChartDonutThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartDonut = memo(function ChartDonut(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartDonutBold,
      duotone: ChartDonutDuotone,
      fill: ChartDonutFill,
      light: ChartDonutLight,
      regular: ChartDonutRegular,
      thin: ChartDonutThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
