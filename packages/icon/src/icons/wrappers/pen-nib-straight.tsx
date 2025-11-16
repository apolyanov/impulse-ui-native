import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PenNibStraightBold } from "../bold";
import { PenNibStraightDuotone } from "../duotone";
import { PenNibStraightFill } from "../fill";
import { PenNibStraightLight } from "../light";
import { PenNibStraightRegular } from "../regular";
import { PenNibStraightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PenNibStraight = memo(function PenNibStraight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PenNibStraightBold,
      duotone: PenNibStraightDuotone,
      fill: PenNibStraightFill,
      light: PenNibStraightLight,
      regular: PenNibStraightRegular,
      thin: PenNibStraightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
