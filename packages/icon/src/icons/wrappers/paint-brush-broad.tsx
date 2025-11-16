import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaintBrushBroadBold } from "../bold";
import { PaintBrushBroadDuotone } from "../duotone";
import { PaintBrushBroadFill } from "../fill";
import { PaintBrushBroadLight } from "../light";
import { PaintBrushBroadRegular } from "../regular";
import { PaintBrushBroadThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaintBrushBroad = memo(function PaintBrushBroad(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaintBrushBroadBold,
      duotone: PaintBrushBroadDuotone,
      fill: PaintBrushBroadFill,
      light: PaintBrushBroadLight,
      regular: PaintBrushBroadRegular,
      thin: PaintBrushBroadThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
