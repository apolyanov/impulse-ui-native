import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IntersectThreeBoldIcon } from "../bold";
import { IntersectThreeDuotoneIcon } from "../duotone";
import { IntersectThreeFillIcon } from "../fill";
import { IntersectThreeLightIcon } from "../light";
import { IntersectThreeRegularIcon } from "../regular";
import { IntersectThreeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const IntersectThreeIcon = memo(function IntersectThree(
  props: IconWrapperProps
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
