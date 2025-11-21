import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareTwoBoldIcon } from "../bold";
import { NumberSquareTwoDuotoneIcon } from "../duotone";
import { NumberSquareTwoFillIcon } from "../fill";
import { NumberSquareTwoLightIcon } from "../light";
import { NumberSquareTwoRegularIcon } from "../regular";
import { NumberSquareTwoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareTwoIcon = memo(function NumberSquareTwo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareTwoBoldIcon,
      duotone: NumberSquareTwoDuotoneIcon,
      fill: NumberSquareTwoFillIcon,
      light: NumberSquareTwoLightIcon,
      regular: NumberSquareTwoRegularIcon,
      thin: NumberSquareTwoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
