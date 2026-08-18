import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareThreeBoldIcon } from "../bold/number-square-three-bold.icon";
import { NumberSquareThreeDuotoneIcon } from "../duotone/number-square-three-duotone.icon";
import { NumberSquareThreeFillIcon } from "../fill/number-square-three-fill.icon";
import { NumberSquareThreeLightIcon } from "../light/number-square-three-light.icon";
import { NumberSquareThreeRegularIcon } from "../regular/number-square-three-regular.icon";
import { NumberSquareThreeThinIcon } from "../thin/number-square-three-thin.icon";

export const NumberSquareThreeIcon = memo(function NumberSquareThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareThreeBoldIcon,
      duotone: NumberSquareThreeDuotoneIcon,
      fill: NumberSquareThreeFillIcon,
      light: NumberSquareThreeLightIcon,
      regular: NumberSquareThreeRegularIcon,
      thin: NumberSquareThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
