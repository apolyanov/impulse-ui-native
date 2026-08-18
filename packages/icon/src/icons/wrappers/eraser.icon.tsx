import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EraserBoldIcon } from "../bold/eraser-bold.icon";
import { EraserDuotoneIcon } from "../duotone/eraser-duotone.icon";
import { EraserFillIcon } from "../fill/eraser-fill.icon";
import { EraserLightIcon } from "../light/eraser-light.icon";
import { EraserRegularIcon } from "../regular/eraser-regular.icon";
import { EraserThinIcon } from "../thin/eraser-thin.icon";

export const EraserIcon = memo(function Eraser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EraserBoldIcon,
      duotone: EraserDuotoneIcon,
      fill: EraserFillIcon,
      light: EraserLightIcon,
      regular: EraserRegularIcon,
      thin: EraserThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
