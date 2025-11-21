import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareSevenBoldIcon } from "../bold";
import { NumberSquareSevenDuotoneIcon } from "../duotone";
import { NumberSquareSevenFillIcon } from "../fill";
import { NumberSquareSevenLightIcon } from "../light";
import { NumberSquareSevenRegularIcon } from "../regular";
import { NumberSquareSevenThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareSevenIcon = memo(function NumberSquareSeven(
  props: IconWrapperProps
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
