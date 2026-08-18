import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareTwoBoldIcon } from "../bold/number-square-two-bold.icon";
import { NumberSquareTwoDuotoneIcon } from "../duotone/number-square-two-duotone.icon";
import { NumberSquareTwoFillIcon } from "../fill/number-square-two-fill.icon";
import { NumberSquareTwoLightIcon } from "../light/number-square-two-light.icon";
import { NumberSquareTwoRegularIcon } from "../regular/number-square-two-regular.icon";
import { NumberSquareTwoThinIcon } from "../thin/number-square-two-thin.icon";

export const NumberSquareTwoIcon = memo(function NumberSquareTwo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareTwoBoldIcon,
      duotone: NumberSquareTwoDuotoneIcon,
      fill: NumberSquareTwoFillIcon,
      light: NumberSquareTwoLightIcon,
      regular: NumberSquareTwoRegularIcon,
      thin: NumberSquareTwoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
