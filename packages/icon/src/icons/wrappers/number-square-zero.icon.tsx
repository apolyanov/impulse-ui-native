import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareZeroBoldIcon } from "../bold/number-square-zero-bold.icon";
import { NumberSquareZeroDuotoneIcon } from "../duotone/number-square-zero-duotone.icon";
import { NumberSquareZeroFillIcon } from "../fill/number-square-zero-fill.icon";
import { NumberSquareZeroLightIcon } from "../light/number-square-zero-light.icon";
import { NumberSquareZeroRegularIcon } from "../regular/number-square-zero-regular.icon";
import { NumberSquareZeroThinIcon } from "../thin/number-square-zero-thin.icon";

export const NumberSquareZeroIcon = memo(function NumberSquareZero(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareZeroBoldIcon,
      duotone: NumberSquareZeroDuotoneIcon,
      fill: NumberSquareZeroFillIcon,
      light: NumberSquareZeroLightIcon,
      regular: NumberSquareZeroRegularIcon,
      thin: NumberSquareZeroThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
