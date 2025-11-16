import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LineVerticalBold } from "../bold";
import { LineVerticalDuotone } from "../duotone";
import { LineVerticalFill } from "../fill";
import { LineVerticalLight } from "../light";
import { LineVerticalRegular } from "../regular";
import { LineVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LineVertical = memo(function LineVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LineVerticalBold,
      duotone: LineVerticalDuotone,
      fill: LineVerticalFill,
      light: LineVerticalLight,
      regular: LineVerticalRegular,
      thin: LineVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
