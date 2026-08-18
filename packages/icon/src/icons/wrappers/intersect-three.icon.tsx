import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { IntersectThreeBoldIcon } from "../bold/intersect-three-bold.icon";
import { IntersectThreeDuotoneIcon } from "../duotone/intersect-three-duotone.icon";
import { IntersectThreeFillIcon } from "../fill/intersect-three-fill.icon";
import { IntersectThreeLightIcon } from "../light/intersect-three-light.icon";
import { IntersectThreeRegularIcon } from "../regular/intersect-three-regular.icon";
import { IntersectThreeThinIcon } from "../thin/intersect-three-thin.icon";

export const IntersectThreeIcon = memo(function IntersectThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IntersectThreeBoldIcon,
      duotone: IntersectThreeDuotoneIcon,
      fill: IntersectThreeFillIcon,
      light: IntersectThreeLightIcon,
      regular: IntersectThreeRegularIcon,
      thin: IntersectThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
