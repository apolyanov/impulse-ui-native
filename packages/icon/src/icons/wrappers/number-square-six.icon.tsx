import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareSixBoldIcon } from "../bold";
import { NumberSquareSixDuotoneIcon } from "../duotone";
import { NumberSquareSixFillIcon } from "../fill";
import { NumberSquareSixLightIcon } from "../light";
import { NumberSquareSixRegularIcon } from "../regular";
import { NumberSquareSixThinIcon } from "../thin";

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
