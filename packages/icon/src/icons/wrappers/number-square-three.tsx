import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareThreeBold } from "../bold";
import { NumberSquareThreeDuotone } from "../duotone";
import { NumberSquareThreeFill } from "../fill";
import { NumberSquareThreeLight } from "../light";
import { NumberSquareThreeRegular } from "../regular";
import { NumberSquareThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareThree = memo(function NumberSquareThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareThreeBold,
      duotone: NumberSquareThreeDuotone,
      fill: NumberSquareThreeFill,
      light: NumberSquareThreeLight,
      regular: NumberSquareThreeRegular,
      thin: NumberSquareThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
