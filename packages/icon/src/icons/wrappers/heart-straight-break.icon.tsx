import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeartStraightBreakBoldIcon } from "../bold/heart-straight-break-bold.icon";
import { HeartStraightBreakDuotoneIcon } from "../duotone/heart-straight-break-duotone.icon";
import { HeartStraightBreakFillIcon } from "../fill/heart-straight-break-fill.icon";
import { HeartStraightBreakLightIcon } from "../light/heart-straight-break-light.icon";
import { HeartStraightBreakRegularIcon } from "../regular/heart-straight-break-regular.icon";
import { HeartStraightBreakThinIcon } from "../thin/heart-straight-break-thin.icon";

export const HeartStraightBreakIcon = memo(function HeartStraightBreak(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartStraightBreakBoldIcon,
      duotone: HeartStraightBreakDuotoneIcon,
      fill: HeartStraightBreakFillIcon,
      light: HeartStraightBreakLightIcon,
      regular: HeartStraightBreakRegularIcon,
      thin: HeartStraightBreakThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
