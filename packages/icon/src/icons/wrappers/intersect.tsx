import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IntersectBold } from "../bold";
import { IntersectDuotone } from "../duotone";
import { IntersectFill } from "../fill";
import { IntersectLight } from "../light";
import { IntersectRegular } from "../regular";
import { IntersectThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Intersect = memo(function Intersect(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IntersectBold,
      duotone: IntersectDuotone,
      fill: IntersectFill,
      light: IntersectLight,
      regular: IntersectRegular,
      thin: IntersectThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
