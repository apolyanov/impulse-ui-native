import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsVerticalBoldIcon } from "../bold";
import { ArrowsVerticalDuotoneIcon } from "../duotone";
import { ArrowsVerticalFillIcon } from "../fill";
import { ArrowsVerticalLightIcon } from "../light";
import { ArrowsVerticalRegularIcon } from "../regular";
import { ArrowsVerticalThinIcon } from "../thin";

export const ArrowsVerticalIcon = memo(function ArrowsVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsVerticalBoldIcon,
      duotone: ArrowsVerticalDuotoneIcon,
      fill: ArrowsVerticalFillIcon,
      light: ArrowsVerticalLightIcon,
      regular: ArrowsVerticalRegularIcon,
      thin: ArrowsVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
