import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleFiveBold } from "../bold";
import { NumberCircleFiveDuotone } from "../duotone";
import { NumberCircleFiveFill } from "../fill";
import { NumberCircleFiveLight } from "../light";
import { NumberCircleFiveRegular } from "../regular";
import { NumberCircleFiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleFive = memo(function NumberCircleFive(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleFiveBold,
      duotone: NumberCircleFiveDuotone,
      fill: NumberCircleFiveFill,
      light: NumberCircleFiveLight,
      regular: NumberCircleFiveRegular,
      thin: NumberCircleFiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
