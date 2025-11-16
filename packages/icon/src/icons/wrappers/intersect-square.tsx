import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IntersectSquareBold } from "../bold";
import { IntersectSquareDuotone } from "../duotone";
import { IntersectSquareFill } from "../fill";
import { IntersectSquareLight } from "../light";
import { IntersectSquareRegular } from "../regular";
import { IntersectSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const IntersectSquare = memo(function IntersectSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IntersectSquareBold,
      duotone: IntersectSquareDuotone,
      fill: IntersectSquareFill,
      light: IntersectSquareLight,
      regular: IntersectSquareRegular,
      thin: IntersectSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
