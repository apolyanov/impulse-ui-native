import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareFiveBoldIcon } from "../bold/number-square-five-bold.icon";
import { NumberSquareFiveDuotoneIcon } from "../duotone/number-square-five-duotone.icon";
import { NumberSquareFiveFillIcon } from "../fill/number-square-five-fill.icon";
import { NumberSquareFiveLightIcon } from "../light/number-square-five-light.icon";
import { NumberSquareFiveRegularIcon } from "../regular/number-square-five-regular.icon";
import { NumberSquareFiveThinIcon } from "../thin/number-square-five-thin.icon";

export const NumberSquareFiveIcon = memo(function NumberSquareFive(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareFiveBoldIcon,
      duotone: NumberSquareFiveDuotoneIcon,
      fill: NumberSquareFiveFillIcon,
      light: NumberSquareFiveLightIcon,
      regular: NumberSquareFiveRegularIcon,
      thin: NumberSquareFiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
