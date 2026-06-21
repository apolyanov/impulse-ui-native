import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareFourBoldIcon } from "../bold";
import { NumberSquareFourDuotoneIcon } from "../duotone";
import { NumberSquareFourFillIcon } from "../fill";
import { NumberSquareFourLightIcon } from "../light";
import { NumberSquareFourRegularIcon } from "../regular";
import { NumberSquareFourThinIcon } from "../thin";

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
