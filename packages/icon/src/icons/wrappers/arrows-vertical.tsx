import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsVerticalBold } from "../bold";
import { ArrowsVerticalDuotone } from "../duotone";
import { ArrowsVerticalFill } from "../fill";
import { ArrowsVerticalLight } from "../light";
import { ArrowsVerticalRegular } from "../regular";
import { ArrowsVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsVertical = memo(function ArrowsVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsVerticalBold,
      duotone: ArrowsVerticalDuotone,
      fill: ArrowsVerticalFill,
      light: ArrowsVerticalLight,
      regular: ArrowsVerticalRegular,
      thin: ArrowsVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
