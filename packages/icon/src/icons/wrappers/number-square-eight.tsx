import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareEightBold } from "../bold";
import { NumberSquareEightDuotone } from "../duotone";
import { NumberSquareEightFill } from "../fill";
import { NumberSquareEightLight } from "../light";
import { NumberSquareEightRegular } from "../regular";
import { NumberSquareEightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareEight = memo(function NumberSquareEight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareEightBold,
      duotone: NumberSquareEightDuotone,
      fill: NumberSquareEightFill,
      light: NumberSquareEightLight,
      regular: NumberSquareEightRegular,
      thin: NumberSquareEightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
