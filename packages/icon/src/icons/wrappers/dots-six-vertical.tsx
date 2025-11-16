import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsSixVerticalBold } from "../bold";
import { DotsSixVerticalDuotone } from "../duotone";
import { DotsSixVerticalFill } from "../fill";
import { DotsSixVerticalLight } from "../light";
import { DotsSixVerticalRegular } from "../regular";
import { DotsSixVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsSixVertical = memo(function DotsSixVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsSixVerticalBold,
      duotone: DotsSixVerticalDuotone,
      fill: DotsSixVerticalFill,
      light: DotsSixVerticalLight,
      regular: DotsSixVerticalRegular,
      thin: DotsSixVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
