import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StarHalfBoldIcon } from "../bold/star-half-bold.icon";
import { StarHalfDuotoneIcon } from "../duotone/star-half-duotone.icon";
import { StarHalfFillIcon } from "../fill/star-half-fill.icon";
import { StarHalfLightIcon } from "../light/star-half-light.icon";
import { StarHalfRegularIcon } from "../regular/star-half-regular.icon";
import { StarHalfThinIcon } from "../thin/star-half-thin.icon";

export const StarHalfIcon = memo(function StarHalf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarHalfBoldIcon,
      duotone: StarHalfDuotoneIcon,
      fill: StarHalfFillIcon,
      light: StarHalfLightIcon,
      regular: StarHalfRegularIcon,
      thin: StarHalfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
