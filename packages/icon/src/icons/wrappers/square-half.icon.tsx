import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SquareHalfBoldIcon } from "../bold/square-half-bold.icon";
import { SquareHalfDuotoneIcon } from "../duotone/square-half-duotone.icon";
import { SquareHalfFillIcon } from "../fill/square-half-fill.icon";
import { SquareHalfLightIcon } from "../light/square-half-light.icon";
import { SquareHalfRegularIcon } from "../regular/square-half-regular.icon";
import { SquareHalfThinIcon } from "../thin/square-half-thin.icon";

export const SquareHalfIcon = memo(function SquareHalf(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareHalfBoldIcon,
      duotone: SquareHalfDuotoneIcon,
      fill: SquareHalfFillIcon,
      light: SquareHalfLightIcon,
      regular: SquareHalfRegularIcon,
      thin: SquareHalfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
