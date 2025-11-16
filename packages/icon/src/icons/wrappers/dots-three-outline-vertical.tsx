import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsThreeOutlineVerticalBold } from "../bold";
import { DotsThreeOutlineVerticalDuotone } from "../duotone";
import { DotsThreeOutlineVerticalFill } from "../fill";
import { DotsThreeOutlineVerticalLight } from "../light";
import { DotsThreeOutlineVerticalRegular } from "../regular";
import { DotsThreeOutlineVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsThreeOutlineVertical = memo(function DotsThreeOutlineVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeOutlineVerticalBold,
      duotone: DotsThreeOutlineVerticalDuotone,
      fill: DotsThreeOutlineVerticalFill,
      light: DotsThreeOutlineVerticalLight,
      regular: DotsThreeOutlineVerticalRegular,
      thin: DotsThreeOutlineVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
