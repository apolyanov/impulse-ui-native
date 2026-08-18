import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaintBrushBroadBoldIcon } from "../bold/paint-brush-broad-bold.icon";
import { PaintBrushBroadDuotoneIcon } from "../duotone/paint-brush-broad-duotone.icon";
import { PaintBrushBroadFillIcon } from "../fill/paint-brush-broad-fill.icon";
import { PaintBrushBroadLightIcon } from "../light/paint-brush-broad-light.icon";
import { PaintBrushBroadRegularIcon } from "../regular/paint-brush-broad-regular.icon";
import { PaintBrushBroadThinIcon } from "../thin/paint-brush-broad-thin.icon";

export const PaintBrushBroadIcon = memo(function PaintBrushBroad(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaintBrushBroadBoldIcon,
      duotone: PaintBrushBroadDuotoneIcon,
      fill: PaintBrushBroadFillIcon,
      light: PaintBrushBroadLightIcon,
      regular: PaintBrushBroadRegularIcon,
      thin: PaintBrushBroadThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
