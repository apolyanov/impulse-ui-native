import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PenNibStraightBoldIcon } from "../bold/pen-nib-straight-bold.icon";
import { PenNibStraightDuotoneIcon } from "../duotone/pen-nib-straight-duotone.icon";
import { PenNibStraightFillIcon } from "../fill/pen-nib-straight-fill.icon";
import { PenNibStraightLightIcon } from "../light/pen-nib-straight-light.icon";
import { PenNibStraightRegularIcon } from "../regular/pen-nib-straight-regular.icon";
import { PenNibStraightThinIcon } from "../thin/pen-nib-straight-thin.icon";

export const PenNibStraightIcon = memo(function PenNibStraight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PenNibStraightBoldIcon,
      duotone: PenNibStraightDuotoneIcon,
      fill: PenNibStraightFillIcon,
      light: PenNibStraightLightIcon,
      regular: PenNibStraightRegularIcon,
      thin: PenNibStraightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
