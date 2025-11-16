import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleThreeBold } from "../bold";
import { NumberCircleThreeDuotone } from "../duotone";
import { NumberCircleThreeFill } from "../fill";
import { NumberCircleThreeLight } from "../light";
import { NumberCircleThreeRegular } from "../regular";
import { NumberCircleThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleThree = memo(function NumberCircleThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleThreeBold,
      duotone: NumberCircleThreeDuotone,
      fill: NumberCircleThreeFill,
      light: NumberCircleThreeLight,
      regular: NumberCircleThreeRegular,
      thin: NumberCircleThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
