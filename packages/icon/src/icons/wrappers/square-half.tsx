import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SquareHalfBold } from "../bold";
import { SquareHalfDuotone } from "../duotone";
import { SquareHalfFill } from "../fill";
import { SquareHalfLight } from "../light";
import { SquareHalfRegular } from "../regular";
import { SquareHalfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SquareHalf = memo(function SquareHalf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareHalfBold,
      duotone: SquareHalfDuotone,
      fill: SquareHalfFill,
      light: SquareHalfLight,
      regular: SquareHalfRegular,
      thin: SquareHalfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
