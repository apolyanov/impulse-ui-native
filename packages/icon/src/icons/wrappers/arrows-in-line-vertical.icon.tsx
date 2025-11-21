import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsInLineVerticalBoldIcon } from "../bold";
import { ArrowsInLineVerticalDuotoneIcon } from "../duotone";
import { ArrowsInLineVerticalFillIcon } from "../fill";
import { ArrowsInLineVerticalLightIcon } from "../light";
import { ArrowsInLineVerticalRegularIcon } from "../regular";
import { ArrowsInLineVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsInLineVerticalIcon = memo(function ArrowsInLineVertical(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInLineVerticalBoldIcon,
      duotone: ArrowsInLineVerticalDuotoneIcon,
      fill: ArrowsInLineVerticalFillIcon,
      light: ArrowsInLineVerticalLightIcon,
      regular: ArrowsInLineVerticalRegularIcon,
      thin: ArrowsInLineVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
