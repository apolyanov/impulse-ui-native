import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaintBrushBoldIcon } from "../bold";
import { PaintBrushDuotoneIcon } from "../duotone";
import { PaintBrushFillIcon } from "../fill";
import { PaintBrushLightIcon } from "../light";
import { PaintBrushRegularIcon } from "../regular";
import { PaintBrushThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaintBrushIcon = memo(function PaintBrush(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaintBrushBoldIcon,
      duotone: PaintBrushDuotoneIcon,
      fill: PaintBrushFillIcon,
      light: PaintBrushLightIcon,
      regular: PaintBrushRegularIcon,
      thin: PaintBrushThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
