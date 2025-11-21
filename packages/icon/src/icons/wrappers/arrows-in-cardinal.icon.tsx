import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsInCardinalBoldIcon } from "../bold";
import { ArrowsInCardinalDuotoneIcon } from "../duotone";
import { ArrowsInCardinalFillIcon } from "../fill";
import { ArrowsInCardinalLightIcon } from "../light";
import { ArrowsInCardinalRegularIcon } from "../regular";
import { ArrowsInCardinalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsInCardinalIcon = memo(function ArrowsInCardinal(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInCardinalBoldIcon,
      duotone: ArrowsInCardinalDuotoneIcon,
      fill: ArrowsInCardinalFillIcon,
      light: ArrowsInCardinalLightIcon,
      regular: ArrowsInCardinalRegularIcon,
      thin: ArrowsInCardinalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
