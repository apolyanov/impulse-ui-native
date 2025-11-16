import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleSevenBold } from "../bold";
import { NumberCircleSevenDuotone } from "../duotone";
import { NumberCircleSevenFill } from "../fill";
import { NumberCircleSevenLight } from "../light";
import { NumberCircleSevenRegular } from "../regular";
import { NumberCircleSevenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleSeven = memo(function NumberCircleSeven(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleSevenBold,
      duotone: NumberCircleSevenDuotone,
      fill: NumberCircleSevenFill,
      light: NumberCircleSevenLight,
      regular: NumberCircleSevenRegular,
      thin: NumberCircleSevenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
