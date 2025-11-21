import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareZeroBoldIcon } from "../bold";
import { NumberSquareZeroDuotoneIcon } from "../duotone";
import { NumberSquareZeroFillIcon } from "../fill";
import { NumberSquareZeroLightIcon } from "../light";
import { NumberSquareZeroRegularIcon } from "../regular";
import { NumberSquareZeroThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareZeroIcon = memo(function NumberSquareZero(
  props: IconWrapperProps
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
