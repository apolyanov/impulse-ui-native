import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IntersectThreeBold } from "../bold";
import { IntersectThreeDuotone } from "../duotone";
import { IntersectThreeFill } from "../fill";
import { IntersectThreeLight } from "../light";
import { IntersectThreeRegular } from "../regular";
import { IntersectThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const IntersectThree = memo(function IntersectThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IntersectThreeBold,
      duotone: IntersectThreeDuotone,
      fill: IntersectThreeFill,
      light: IntersectThreeLight,
      regular: IntersectThreeRegular,
      thin: IntersectThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
