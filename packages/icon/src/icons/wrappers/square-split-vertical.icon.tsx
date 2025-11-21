import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SquareSplitVerticalBoldIcon } from "../bold";
import { SquareSplitVerticalDuotoneIcon } from "../duotone";
import { SquareSplitVerticalFillIcon } from "../fill";
import { SquareSplitVerticalLightIcon } from "../light";
import { SquareSplitVerticalRegularIcon } from "../regular";
import { SquareSplitVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SquareSplitVerticalIcon = memo(function SquareSplitVertical(
  props: IconWrapperProps
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
