import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsInCardinalBold } from "../bold";
import { ArrowsInCardinalDuotone } from "../duotone";
import { ArrowsInCardinalFill } from "../fill";
import { ArrowsInCardinalLight } from "../light";
import { ArrowsInCardinalRegular } from "../regular";
import { ArrowsInCardinalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsInCardinal = memo(function ArrowsInCardinal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInCardinalBold,
      duotone: ArrowsInCardinalDuotone,
      fill: ArrowsInCardinalFill,
      light: ArrowsInCardinalLight,
      regular: ArrowsInCardinalRegular,
      thin: ArrowsInCardinalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
