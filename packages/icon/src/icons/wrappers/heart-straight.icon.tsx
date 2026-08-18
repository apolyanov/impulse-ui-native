import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeartStraightBoldIcon } from "../bold/heart-straight-bold.icon";
import { HeartStraightDuotoneIcon } from "../duotone/heart-straight-duotone.icon";
import { HeartStraightFillIcon } from "../fill/heart-straight-fill.icon";
import { HeartStraightLightIcon } from "../light/heart-straight-light.icon";
import { HeartStraightRegularIcon } from "../regular/heart-straight-regular.icon";
import { HeartStraightThinIcon } from "../thin/heart-straight-thin.icon";

export const HeartStraightIcon = memo(function HeartStraight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartStraightBoldIcon,
      duotone: HeartStraightDuotoneIcon,
      fill: HeartStraightFillIcon,
      light: HeartStraightLightIcon,
      regular: HeartStraightRegularIcon,
      thin: HeartStraightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
