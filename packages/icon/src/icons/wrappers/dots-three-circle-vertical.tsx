import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsThreeCircleVerticalBold } from "../bold";
import { DotsThreeCircleVerticalDuotone } from "../duotone";
import { DotsThreeCircleVerticalFill } from "../fill";
import { DotsThreeCircleVerticalLight } from "../light";
import { DotsThreeCircleVerticalRegular } from "../regular";
import { DotsThreeCircleVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsThreeCircleVertical = memo(function DotsThreeCircleVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeCircleVerticalBold,
      duotone: DotsThreeCircleVerticalDuotone,
      fill: DotsThreeCircleVerticalFill,
      light: DotsThreeCircleVerticalLight,
      regular: DotsThreeCircleVerticalRegular,
      thin: DotsThreeCircleVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
