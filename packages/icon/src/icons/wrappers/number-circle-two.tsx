import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleTwoBold } from "../bold";
import { NumberCircleTwoDuotone } from "../duotone";
import { NumberCircleTwoFill } from "../fill";
import { NumberCircleTwoLight } from "../light";
import { NumberCircleTwoRegular } from "../regular";
import { NumberCircleTwoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleTwo = memo(function NumberCircleTwo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleTwoBold,
      duotone: NumberCircleTwoDuotone,
      fill: NumberCircleTwoFill,
      light: NumberCircleTwoLight,
      regular: NumberCircleTwoRegular,
      thin: NumberCircleTwoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
