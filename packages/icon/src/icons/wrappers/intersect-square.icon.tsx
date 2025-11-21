import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IntersectSquareBoldIcon } from "../bold";
import { IntersectSquareDuotoneIcon } from "../duotone";
import { IntersectSquareFillIcon } from "../fill";
import { IntersectSquareLightIcon } from "../light";
import { IntersectSquareRegularIcon } from "../regular";
import { IntersectSquareThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const IntersectSquareIcon = memo(function IntersectSquare(
  props: IconWrapperProps
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
