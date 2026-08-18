import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { IntersectBoldIcon } from "../bold/intersect-bold.icon";
import { IntersectDuotoneIcon } from "../duotone/intersect-duotone.icon";
import { IntersectFillIcon } from "../fill/intersect-fill.icon";
import { IntersectLightIcon } from "../light/intersect-light.icon";
import { IntersectRegularIcon } from "../regular/intersect-regular.icon";
import { IntersectThinIcon } from "../thin/intersect-thin.icon";

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
