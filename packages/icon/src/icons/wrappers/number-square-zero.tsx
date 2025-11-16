import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareZeroBold } from "../bold";
import { NumberSquareZeroDuotone } from "../duotone";
import { NumberSquareZeroFill } from "../fill";
import { NumberSquareZeroLight } from "../light";
import { NumberSquareZeroRegular } from "../regular";
import { NumberSquareZeroThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareZero = memo(function NumberSquareZero(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareZeroBold,
      duotone: NumberSquareZeroDuotone,
      fill: NumberSquareZeroFill,
      light: NumberSquareZeroLight,
      regular: NumberSquareZeroRegular,
      thin: NumberSquareZeroThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
