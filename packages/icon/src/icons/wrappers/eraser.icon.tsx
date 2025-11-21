import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EraserBoldIcon } from "../bold";
import { EraserDuotoneIcon } from "../duotone";
import { EraserFillIcon } from "../fill";
import { EraserLightIcon } from "../light";
import { EraserRegularIcon } from "../regular";
import { EraserThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
