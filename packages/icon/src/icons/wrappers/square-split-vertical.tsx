import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SquareSplitVerticalBold } from "../bold";
import { SquareSplitVerticalDuotone } from "../duotone";
import { SquareSplitVerticalFill } from "../fill";
import { SquareSplitVerticalLight } from "../light";
import { SquareSplitVerticalRegular } from "../regular";
import { SquareSplitVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SquareSplitVertical = memo(function SquareSplitVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareSplitVerticalBold,
      duotone: SquareSplitVerticalDuotone,
      fill: SquareSplitVerticalFill,
      light: SquareSplitVerticalLight,
      regular: SquareSplitVerticalRegular,
      thin: SquareSplitVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
