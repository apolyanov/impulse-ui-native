import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartPieBoldIcon } from "../bold";
import { ChartPieDuotoneIcon } from "../duotone";
import { ChartPieFillIcon } from "../fill";
import { ChartPieLightIcon } from "../light";
import { ChartPieRegularIcon } from "../regular";
import { ChartPieThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
