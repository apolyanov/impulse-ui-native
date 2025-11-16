import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareSevenBold } from "../bold";
import { NumberSquareSevenDuotone } from "../duotone";
import { NumberSquareSevenFill } from "../fill";
import { NumberSquareSevenLight } from "../light";
import { NumberSquareSevenRegular } from "../regular";
import { NumberSquareSevenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareSeven = memo(function NumberSquareSeven(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareSevenBold,
      duotone: NumberSquareSevenDuotone,
      fill: NumberSquareSevenFill,
      light: NumberSquareSevenLight,
      regular: NumberSquareSevenRegular,
      thin: NumberSquareSevenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
