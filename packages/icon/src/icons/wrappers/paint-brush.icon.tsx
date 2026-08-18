import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaintBrushBoldIcon } from "../bold/paint-brush-bold.icon";
import { PaintBrushDuotoneIcon } from "../duotone/paint-brush-duotone.icon";
import { PaintBrushFillIcon } from "../fill/paint-brush-fill.icon";
import { PaintBrushLightIcon } from "../light/paint-brush-light.icon";
import { PaintBrushRegularIcon } from "../regular/paint-brush-regular.icon";
import { PaintBrushThinIcon } from "../thin/paint-brush-thin.icon";

export const PaintBrushIcon = memo(function PaintBrush(
  props: IconWrapperProps,
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
