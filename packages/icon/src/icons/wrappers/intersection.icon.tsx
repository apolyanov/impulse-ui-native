import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { IntersectionBoldIcon } from "../bold/intersection-bold.icon";
import { IntersectionDuotoneIcon } from "../duotone/intersection-duotone.icon";
import { IntersectionFillIcon } from "../fill/intersection-fill.icon";
import { IntersectionLightIcon } from "../light/intersection-light.icon";
import { IntersectionRegularIcon } from "../regular/intersection-regular.icon";
import { IntersectionThinIcon } from "../thin/intersection-thin.icon";

export const IntersectionIcon = memo(function Intersection(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IntersectionBoldIcon,
      duotone: IntersectionDuotoneIcon,
      fill: IntersectionFillIcon,
      light: IntersectionLightIcon,
      regular: IntersectionRegularIcon,
      thin: IntersectionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
