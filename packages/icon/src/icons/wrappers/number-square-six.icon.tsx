import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareSixBoldIcon } from "../bold/number-square-six-bold.icon";
import { NumberSquareSixDuotoneIcon } from "../duotone/number-square-six-duotone.icon";
import { NumberSquareSixFillIcon } from "../fill/number-square-six-fill.icon";
import { NumberSquareSixLightIcon } from "../light/number-square-six-light.icon";
import { NumberSquareSixRegularIcon } from "../regular/number-square-six-regular.icon";
import { NumberSquareSixThinIcon } from "../thin/number-square-six-thin.icon";

export const NumberSquareSixIcon = memo(function NumberSquareSix(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareSixBoldIcon,
      duotone: NumberSquareSixDuotoneIcon,
      fill: NumberSquareSixFillIcon,
      light: NumberSquareSixLightIcon,
      regular: NumberSquareSixRegularIcon,
      thin: NumberSquareSixThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
