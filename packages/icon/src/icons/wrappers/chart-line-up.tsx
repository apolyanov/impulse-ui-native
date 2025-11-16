import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartLineUpBold } from "../bold";
import { ChartLineUpDuotone } from "../duotone";
import { ChartLineUpFill } from "../fill";
import { ChartLineUpLight } from "../light";
import { ChartLineUpRegular } from "../regular";
import { ChartLineUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartLineUp = memo(function ChartLineUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartLineUpBold,
      duotone: ChartLineUpDuotone,
      fill: ChartLineUpFill,
      light: ChartLineUpLight,
      regular: ChartLineUpRegular,
      thin: ChartLineUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
