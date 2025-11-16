import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareFiveBold } from "../bold";
import { NumberSquareFiveDuotone } from "../duotone";
import { NumberSquareFiveFill } from "../fill";
import { NumberSquareFiveLight } from "../light";
import { NumberSquareFiveRegular } from "../regular";
import { NumberSquareFiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareFive = memo(function NumberSquareFive(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareFiveBold,
      duotone: NumberSquareFiveDuotone,
      fill: NumberSquareFiveFill,
      light: NumberSquareFiveLight,
      regular: NumberSquareFiveRegular,
      thin: NumberSquareFiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
