import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeartStraightBreakBold } from "../bold";
import { HeartStraightBreakDuotone } from "../duotone";
import { HeartStraightBreakFill } from "../fill";
import { HeartStraightBreakLight } from "../light";
import { HeartStraightBreakRegular } from "../regular";
import { HeartStraightBreakThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HeartStraightBreak = memo(function HeartStraightBreak(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartStraightBreakBold,
      duotone: HeartStraightBreakDuotone,
      fill: HeartStraightBreakFill,
      light: HeartStraightBreakLight,
      regular: HeartStraightBreakRegular,
      thin: HeartStraightBreakThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
