import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareTwoBold } from "../bold";
import { NumberSquareTwoDuotone } from "../duotone";
import { NumberSquareTwoFill } from "../fill";
import { NumberSquareTwoLight } from "../light";
import { NumberSquareTwoRegular } from "../regular";
import { NumberSquareTwoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareTwo = memo(function NumberSquareTwo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareTwoBold,
      duotone: NumberSquareTwoDuotone,
      fill: NumberSquareTwoFill,
      light: NumberSquareTwoLight,
      regular: NumberSquareTwoRegular,
      thin: NumberSquareTwoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
