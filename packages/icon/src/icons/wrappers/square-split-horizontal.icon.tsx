import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SquareSplitHorizontalBoldIcon } from "../bold/square-split-horizontal-bold.icon";
import { SquareSplitHorizontalDuotoneIcon } from "../duotone/square-split-horizontal-duotone.icon";
import { SquareSplitHorizontalFillIcon } from "../fill/square-split-horizontal-fill.icon";
import { SquareSplitHorizontalLightIcon } from "../light/square-split-horizontal-light.icon";
import { SquareSplitHorizontalRegularIcon } from "../regular/square-split-horizontal-regular.icon";
import { SquareSplitHorizontalThinIcon } from "../thin/square-split-horizontal-thin.icon";

export const SquareSplitHorizontalIcon = memo(function SquareSplitHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareSplitHorizontalBoldIcon,
      duotone: SquareSplitHorizontalDuotoneIcon,
      fill: SquareSplitHorizontalFillIcon,
      light: SquareSplitHorizontalLightIcon,
      regular: SquareSplitHorizontalRegularIcon,
      thin: SquareSplitHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
