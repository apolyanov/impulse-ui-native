import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IntersectionBold } from "../bold";
import { IntersectionDuotone } from "../duotone";
import { IntersectionFill } from "../fill";
import { IntersectionLight } from "../light";
import { IntersectionRegular } from "../regular";
import { IntersectionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Intersection = memo(function Intersection(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IntersectionBold,
      duotone: IntersectionDuotone,
      fill: IntersectionFill,
      light: IntersectionLight,
      regular: IntersectionRegular,
      thin: IntersectionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
