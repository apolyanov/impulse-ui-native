import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignCenterVerticalBoldIcon } from "../bold";
import { AlignCenterVerticalDuotoneIcon } from "../duotone";
import { AlignCenterVerticalFillIcon } from "../fill";
import { AlignCenterVerticalLightIcon } from "../light";
import { AlignCenterVerticalRegularIcon } from "../regular";
import { AlignCenterVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignCenterVerticalIcon = memo(function AlignCenterVertical(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignCenterVerticalBoldIcon,
      duotone: AlignCenterVerticalDuotoneIcon,
      fill: AlignCenterVerticalFillIcon,
      light: AlignCenterVerticalLightIcon,
      regular: AlignCenterVerticalRegularIcon,
      thin: AlignCenterVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
