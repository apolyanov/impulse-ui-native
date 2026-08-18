import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaintRollerBoldIcon } from "../bold/paint-roller-bold.icon";
import { PaintRollerDuotoneIcon } from "../duotone/paint-roller-duotone.icon";
import { PaintRollerFillIcon } from "../fill/paint-roller-fill.icon";
import { PaintRollerLightIcon } from "../light/paint-roller-light.icon";
import { PaintRollerRegularIcon } from "../regular/paint-roller-regular.icon";
import { PaintRollerThinIcon } from "../thin/paint-roller-thin.icon";

export const PaintRollerIcon = memo(function PaintRoller(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaintRollerBoldIcon,
      duotone: PaintRollerDuotoneIcon,
      fill: PaintRollerFillIcon,
      light: PaintRollerLightIcon,
      regular: PaintRollerRegularIcon,
      thin: PaintRollerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
