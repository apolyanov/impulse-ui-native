import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleEightBold } from "../bold";
import { NumberCircleEightDuotone } from "../duotone";
import { NumberCircleEightFill } from "../fill";
import { NumberCircleEightLight } from "../light";
import { NumberCircleEightRegular } from "../regular";
import { NumberCircleEightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleEight = memo(function NumberCircleEight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleEightBold,
      duotone: NumberCircleEightDuotone,
      fill: NumberCircleEightFill,
      light: NumberCircleEightLight,
      regular: NumberCircleEightRegular,
      thin: NumberCircleEightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
