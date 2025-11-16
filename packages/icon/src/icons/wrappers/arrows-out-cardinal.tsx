import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsOutCardinalBold } from "../bold";
import { ArrowsOutCardinalDuotone } from "../duotone";
import { ArrowsOutCardinalFill } from "../fill";
import { ArrowsOutCardinalLight } from "../light";
import { ArrowsOutCardinalRegular } from "../regular";
import { ArrowsOutCardinalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsOutCardinal = memo(function ArrowsOutCardinal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsOutCardinalBold,
      duotone: ArrowsOutCardinalDuotone,
      fill: ArrowsOutCardinalFill,
      light: ArrowsOutCardinalLight,
      regular: ArrowsOutCardinalRegular,
      thin: ArrowsOutCardinalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
