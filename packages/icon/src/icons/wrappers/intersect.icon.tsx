import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IntersectBoldIcon } from "../bold";
import { IntersectDuotoneIcon } from "../duotone";
import { IntersectFillIcon } from "../fill";
import { IntersectLightIcon } from "../light";
import { IntersectRegularIcon } from "../regular";
import { IntersectThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const IntersectIcon = memo(function Intersect(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IntersectBoldIcon,
      duotone: IntersectDuotoneIcon,
      fill: IntersectFillIcon,
      light: IntersectLightIcon,
      regular: IntersectRegularIcon,
      thin: IntersectThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
