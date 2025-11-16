import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsOutLineVerticalBold } from "../bold";
import { ArrowsOutLineVerticalDuotone } from "../duotone";
import { ArrowsOutLineVerticalFill } from "../fill";
import { ArrowsOutLineVerticalLight } from "../light";
import { ArrowsOutLineVerticalRegular } from "../regular";
import { ArrowsOutLineVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsOutLineVertical = memo(function ArrowsOutLineVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsOutLineVerticalBold,
      duotone: ArrowsOutLineVerticalDuotone,
      fill: ArrowsOutLineVerticalFill,
      light: ArrowsOutLineVerticalLight,
      regular: ArrowsOutLineVerticalRegular,
      thin: ArrowsOutLineVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
