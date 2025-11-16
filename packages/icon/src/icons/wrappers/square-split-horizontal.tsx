import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SquareSplitHorizontalBold } from "../bold";
import { SquareSplitHorizontalDuotone } from "../duotone";
import { SquareSplitHorizontalFill } from "../fill";
import { SquareSplitHorizontalLight } from "../light";
import { SquareSplitHorizontalRegular } from "../regular";
import { SquareSplitHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SquareSplitHorizontal = memo(function SquareSplitHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareSplitHorizontalBold,
      duotone: SquareSplitHorizontalDuotone,
      fill: SquareSplitHorizontalFill,
      light: SquareSplitHorizontalLight,
      regular: SquareSplitHorizontalRegular,
      thin: SquareSplitHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
