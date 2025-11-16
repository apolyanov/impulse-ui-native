import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrendDownBold } from "../bold";
import { TrendDownDuotone } from "../duotone";
import { TrendDownFill } from "../fill";
import { TrendDownLight } from "../light";
import { TrendDownRegular } from "../regular";
import { TrendDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrendDown = memo(function TrendDown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrendDownBold,
      duotone: TrendDownDuotone,
      fill: TrendDownFill,
      light: TrendDownLight,
      regular: TrendDownRegular,
      thin: TrendDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
