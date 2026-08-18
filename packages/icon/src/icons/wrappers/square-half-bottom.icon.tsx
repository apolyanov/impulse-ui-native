import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SquareHalfBottomBoldIcon } from "../bold/square-half-bottom-bold.icon";
import { SquareHalfBottomDuotoneIcon } from "../duotone/square-half-bottom-duotone.icon";
import { SquareHalfBottomFillIcon } from "../fill/square-half-bottom-fill.icon";
import { SquareHalfBottomLightIcon } from "../light/square-half-bottom-light.icon";
import { SquareHalfBottomRegularIcon } from "../regular/square-half-bottom-regular.icon";
import { SquareHalfBottomThinIcon } from "../thin/square-half-bottom-thin.icon";

export const SquareHalfBottomIcon = memo(function SquareHalfBottom(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareHalfBottomBoldIcon,
      duotone: SquareHalfBottomDuotoneIcon,
      fill: SquareHalfBottomFillIcon,
      light: SquareHalfBottomLightIcon,
      regular: SquareHalfBottomRegularIcon,
      thin: SquareHalfBottomThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
