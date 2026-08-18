import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareEightBoldIcon } from "../bold/number-square-eight-bold.icon";
import { NumberSquareEightDuotoneIcon } from "../duotone/number-square-eight-duotone.icon";
import { NumberSquareEightFillIcon } from "../fill/number-square-eight-fill.icon";
import { NumberSquareEightLightIcon } from "../light/number-square-eight-light.icon";
import { NumberSquareEightRegularIcon } from "../regular/number-square-eight-regular.icon";
import { NumberSquareEightThinIcon } from "../thin/number-square-eight-thin.icon";

export const NumberSquareEightIcon = memo(function NumberSquareEight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareEightBoldIcon,
      duotone: NumberSquareEightDuotoneIcon,
      fill: NumberSquareEightFillIcon,
      light: NumberSquareEightLightIcon,
      regular: NumberSquareEightRegularIcon,
      thin: NumberSquareEightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
