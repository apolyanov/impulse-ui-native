import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { IntersectSquareBoldIcon } from "../bold/intersect-square-bold.icon";
import { IntersectSquareDuotoneIcon } from "../duotone/intersect-square-duotone.icon";
import { IntersectSquareFillIcon } from "../fill/intersect-square-fill.icon";
import { IntersectSquareLightIcon } from "../light/intersect-square-light.icon";
import { IntersectSquareRegularIcon } from "../regular/intersect-square-regular.icon";
import { IntersectSquareThinIcon } from "../thin/intersect-square-thin.icon";

export const IntersectSquareIcon = memo(function IntersectSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IntersectSquareBoldIcon,
      duotone: IntersectSquareDuotoneIcon,
      fill: IntersectSquareFillIcon,
      light: IntersectSquareLightIcon,
      regular: IntersectSquareRegularIcon,
      thin: IntersectSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
