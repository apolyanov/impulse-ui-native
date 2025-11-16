import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleOneBold } from "../bold";
import { NumberCircleOneDuotone } from "../duotone";
import { NumberCircleOneFill } from "../fill";
import { NumberCircleOneLight } from "../light";
import { NumberCircleOneRegular } from "../regular";
import { NumberCircleOneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleOne = memo(function NumberCircleOne(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleOneBold,
      duotone: NumberCircleOneDuotone,
      fill: NumberCircleOneFill,
      light: NumberCircleOneLight,
      regular: NumberCircleOneRegular,
      thin: NumberCircleOneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
