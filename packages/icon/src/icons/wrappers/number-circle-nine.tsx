import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleNineBold } from "../bold";
import { NumberCircleNineDuotone } from "../duotone";
import { NumberCircleNineFill } from "../fill";
import { NumberCircleNineLight } from "../light";
import { NumberCircleNineRegular } from "../regular";
import { NumberCircleNineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleNine = memo(function NumberCircleNine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleNineBold,
      duotone: NumberCircleNineDuotone,
      fill: NumberCircleNineFill,
      light: NumberCircleNineLight,
      regular: NumberCircleNineRegular,
      thin: NumberCircleNineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
