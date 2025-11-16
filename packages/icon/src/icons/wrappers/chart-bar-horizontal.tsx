import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartBarHorizontalBold } from "../bold";
import { ChartBarHorizontalDuotone } from "../duotone";
import { ChartBarHorizontalFill } from "../fill";
import { ChartBarHorizontalLight } from "../light";
import { ChartBarHorizontalRegular } from "../regular";
import { ChartBarHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartBarHorizontal = memo(function ChartBarHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartBarHorizontalBold,
      duotone: ChartBarHorizontalDuotone,
      fill: ChartBarHorizontalFill,
      light: ChartBarHorizontalLight,
      regular: ChartBarHorizontalRegular,
      thin: ChartBarHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
