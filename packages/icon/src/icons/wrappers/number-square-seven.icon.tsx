import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareSevenBoldIcon } from "../bold/number-square-seven-bold.icon";
import { NumberSquareSevenDuotoneIcon } from "../duotone/number-square-seven-duotone.icon";
import { NumberSquareSevenFillIcon } from "../fill/number-square-seven-fill.icon";
import { NumberSquareSevenLightIcon } from "../light/number-square-seven-light.icon";
import { NumberSquareSevenRegularIcon } from "../regular/number-square-seven-regular.icon";
import { NumberSquareSevenThinIcon } from "../thin/number-square-seven-thin.icon";

export const NumberSquareSevenIcon = memo(function NumberSquareSeven(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareSevenBoldIcon,
      duotone: NumberSquareSevenDuotoneIcon,
      fill: NumberSquareSevenFillIcon,
      light: NumberSquareSevenLightIcon,
      regular: NumberSquareSevenRegularIcon,
      thin: NumberSquareSevenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
