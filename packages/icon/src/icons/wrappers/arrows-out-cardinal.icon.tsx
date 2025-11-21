import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsOutCardinalBoldIcon } from "../bold";
import { ArrowsOutCardinalDuotoneIcon } from "../duotone";
import { ArrowsOutCardinalFillIcon } from "../fill";
import { ArrowsOutCardinalLightIcon } from "../light";
import { ArrowsOutCardinalRegularIcon } from "../regular";
import { ArrowsOutCardinalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsOutCardinalIcon = memo(function ArrowsOutCardinal(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsOutCardinalBoldIcon,
      duotone: ArrowsOutCardinalDuotoneIcon,
      fill: ArrowsOutCardinalFillIcon,
      light: ArrowsOutCardinalLightIcon,
      regular: ArrowsOutCardinalRegularIcon,
      thin: ArrowsOutCardinalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
