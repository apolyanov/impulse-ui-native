import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsSixVerticalBoldIcon } from "../bold";
import { DotsSixVerticalDuotoneIcon } from "../duotone";
import { DotsSixVerticalFillIcon } from "../fill";
import { DotsSixVerticalLightIcon } from "../light";
import { DotsSixVerticalRegularIcon } from "../regular";
import { DotsSixVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsSixVerticalIcon = memo(function DotsSixVertical(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsSixVerticalBoldIcon,
      duotone: DotsSixVerticalDuotoneIcon,
      fill: DotsSixVerticalFillIcon,
      light: DotsSixVerticalLightIcon,
      regular: DotsSixVerticalRegularIcon,
      thin: DotsSixVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
