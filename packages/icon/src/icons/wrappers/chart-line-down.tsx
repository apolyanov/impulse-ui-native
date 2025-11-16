import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartLineDownBold } from "../bold";
import { ChartLineDownDuotone } from "../duotone";
import { ChartLineDownFill } from "../fill";
import { ChartLineDownLight } from "../light";
import { ChartLineDownRegular } from "../regular";
import { ChartLineDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartLineDown = memo(function ChartLineDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartLineDownBold,
      duotone: ChartLineDownDuotone,
      fill: ChartLineDownFill,
      light: ChartLineDownLight,
      regular: ChartLineDownRegular,
      thin: ChartLineDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
