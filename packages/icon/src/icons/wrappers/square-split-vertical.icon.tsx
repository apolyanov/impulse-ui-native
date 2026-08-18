import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SquareSplitVerticalBoldIcon } from "../bold/square-split-vertical-bold.icon";
import { SquareSplitVerticalDuotoneIcon } from "../duotone/square-split-vertical-duotone.icon";
import { SquareSplitVerticalFillIcon } from "../fill/square-split-vertical-fill.icon";
import { SquareSplitVerticalLightIcon } from "../light/square-split-vertical-light.icon";
import { SquareSplitVerticalRegularIcon } from "../regular/square-split-vertical-regular.icon";
import { SquareSplitVerticalThinIcon } from "../thin/square-split-vertical-thin.icon";

export const SquareSplitVerticalIcon = memo(function SquareSplitVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareSplitVerticalBoldIcon,
      duotone: SquareSplitVerticalDuotoneIcon,
      fill: SquareSplitVerticalFillIcon,
      light: SquareSplitVerticalLightIcon,
      regular: SquareSplitVerticalRegularIcon,
      thin: SquareSplitVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
