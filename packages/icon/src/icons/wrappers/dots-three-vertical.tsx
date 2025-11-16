import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsThreeVerticalBold } from "../bold";
import { DotsThreeVerticalDuotone } from "../duotone";
import { DotsThreeVerticalFill } from "../fill";
import { DotsThreeVerticalLight } from "../light";
import { DotsThreeVerticalRegular } from "../regular";
import { DotsThreeVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsThreeVertical = memo(function DotsThreeVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeVerticalBold,
      duotone: DotsThreeVerticalDuotone,
      fill: DotsThreeVerticalFill,
      light: DotsThreeVerticalLight,
      regular: DotsThreeVerticalRegular,
      thin: DotsThreeVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
