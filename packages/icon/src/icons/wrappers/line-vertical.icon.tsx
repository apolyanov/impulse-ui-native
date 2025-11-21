import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LineVerticalBoldIcon } from "../bold";
import { LineVerticalDuotoneIcon } from "../duotone";
import { LineVerticalFillIcon } from "../fill";
import { LineVerticalLightIcon } from "../light";
import { LineVerticalRegularIcon } from "../regular";
import { LineVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LineVerticalIcon = memo(function LineVertical(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LineVerticalBoldIcon,
      duotone: LineVerticalDuotoneIcon,
      fill: LineVerticalFillIcon,
      light: LineVerticalLightIcon,
      regular: LineVerticalRegularIcon,
      thin: LineVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
