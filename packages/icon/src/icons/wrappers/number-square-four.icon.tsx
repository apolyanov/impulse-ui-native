import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareFourBoldIcon } from "../bold/number-square-four-bold.icon";
import { NumberSquareFourDuotoneIcon } from "../duotone/number-square-four-duotone.icon";
import { NumberSquareFourFillIcon } from "../fill/number-square-four-fill.icon";
import { NumberSquareFourLightIcon } from "../light/number-square-four-light.icon";
import { NumberSquareFourRegularIcon } from "../regular/number-square-four-regular.icon";
import { NumberSquareFourThinIcon } from "../thin/number-square-four-thin.icon";

export const NumberSquareFourIcon = memo(function NumberSquareFour(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareFourBoldIcon,
      duotone: NumberSquareFourDuotoneIcon,
      fill: NumberSquareFourFillIcon,
      light: NumberSquareFourLightIcon,
      regular: NumberSquareFourRegularIcon,
      thin: NumberSquareFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
