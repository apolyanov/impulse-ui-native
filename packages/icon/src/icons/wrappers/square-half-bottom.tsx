import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SquareHalfBottomBold } from "../bold";
import { SquareHalfBottomDuotone } from "../duotone";
import { SquareHalfBottomFill } from "../fill";
import { SquareHalfBottomLight } from "../light";
import { SquareHalfBottomRegular } from "../regular";
import { SquareHalfBottomThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SquareHalfBottom = memo(function SquareHalfBottom(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareHalfBottomBold,
      duotone: SquareHalfBottomDuotone,
      fill: SquareHalfBottomFill,
      light: SquareHalfBottomLight,
      regular: SquareHalfBottomRegular,
      thin: SquareHalfBottomThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
