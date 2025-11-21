import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareEightBoldIcon } from "../bold";
import { NumberSquareEightDuotoneIcon } from "../duotone";
import { NumberSquareEightFillIcon } from "../fill";
import { NumberSquareEightLightIcon } from "../light";
import { NumberSquareEightRegularIcon } from "../regular";
import { NumberSquareEightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareEightIcon = memo(function NumberSquareEight(
  props: IconWrapperProps
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
