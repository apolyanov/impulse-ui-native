import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartLineBold } from "../bold";
import { ChartLineDuotone } from "../duotone";
import { ChartLineFill } from "../fill";
import { ChartLineLight } from "../light";
import { ChartLineRegular } from "../regular";
import { ChartLineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartLine = memo(function ChartLine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartLineBold,
      duotone: ChartLineDuotone,
      fill: ChartLineFill,
      light: ChartLineLight,
      regular: ChartLineRegular,
      thin: ChartLineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
