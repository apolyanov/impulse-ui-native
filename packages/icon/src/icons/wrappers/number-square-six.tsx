import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareSixBold } from "../bold";
import { NumberSquareSixDuotone } from "../duotone";
import { NumberSquareSixFill } from "../fill";
import { NumberSquareSixLight } from "../light";
import { NumberSquareSixRegular } from "../regular";
import { NumberSquareSixThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareSix = memo(function NumberSquareSix(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareSixBold,
      duotone: NumberSquareSixDuotone,
      fill: NumberSquareSixFill,
      light: NumberSquareSixLight,
      regular: NumberSquareSixRegular,
      thin: NumberSquareSixThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
