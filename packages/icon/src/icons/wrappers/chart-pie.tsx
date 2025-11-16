import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartPieBold } from "../bold";
import { ChartPieDuotone } from "../duotone";
import { ChartPieFill } from "../fill";
import { ChartPieLight } from "../light";
import { ChartPieRegular } from "../regular";
import { ChartPieThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartPie = memo(function ChartPie(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartPieBold,
      duotone: ChartPieDuotone,
      fill: ChartPieFill,
      light: ChartPieLight,
      regular: ChartPieRegular,
      thin: ChartPieThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
