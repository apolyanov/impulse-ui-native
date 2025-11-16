import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsInLineVerticalBold } from "../bold";
import { ArrowsInLineVerticalDuotone } from "../duotone";
import { ArrowsInLineVerticalFill } from "../fill";
import { ArrowsInLineVerticalLight } from "../light";
import { ArrowsInLineVerticalRegular } from "../regular";
import { ArrowsInLineVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsInLineVertical = memo(function ArrowsInLineVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInLineVerticalBold,
      duotone: ArrowsInLineVerticalDuotone,
      fill: ArrowsInLineVerticalFill,
      light: ArrowsInLineVerticalLight,
      regular: ArrowsInLineVerticalRegular,
      thin: ArrowsInLineVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
