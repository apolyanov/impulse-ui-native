import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignCenterVerticalBold } from "../bold";
import { AlignCenterVerticalDuotone } from "../duotone";
import { AlignCenterVerticalFill } from "../fill";
import { AlignCenterVerticalLight } from "../light";
import { AlignCenterVerticalRegular } from "../regular";
import { AlignCenterVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignCenterVertical = memo(function AlignCenterVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignCenterVerticalBold,
      duotone: AlignCenterVerticalDuotone,
      fill: AlignCenterVerticalFill,
      light: AlignCenterVerticalLight,
      regular: AlignCenterVerticalRegular,
      thin: AlignCenterVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
