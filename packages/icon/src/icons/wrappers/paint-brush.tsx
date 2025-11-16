import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaintBrushBold } from "../bold";
import { PaintBrushDuotone } from "../duotone";
import { PaintBrushFill } from "../fill";
import { PaintBrushLight } from "../light";
import { PaintBrushRegular } from "../regular";
import { PaintBrushThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaintBrush = memo(function PaintBrush(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaintBrushBold,
      duotone: PaintBrushDuotone,
      fill: PaintBrushFill,
      light: PaintBrushLight,
      regular: PaintBrushRegular,
      thin: PaintBrushThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
