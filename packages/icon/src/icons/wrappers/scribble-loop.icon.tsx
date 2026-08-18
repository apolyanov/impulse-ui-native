import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScribbleLoopBoldIcon } from "../bold/scribble-loop-bold.icon";
import { ScribbleLoopDuotoneIcon } from "../duotone/scribble-loop-duotone.icon";
import { ScribbleLoopFillIcon } from "../fill/scribble-loop-fill.icon";
import { ScribbleLoopLightIcon } from "../light/scribble-loop-light.icon";
import { ScribbleLoopRegularIcon } from "../regular/scribble-loop-regular.icon";
import { ScribbleLoopThinIcon } from "../thin/scribble-loop-thin.icon";

export const ScribbleLoopIcon = memo(function ScribbleLoop(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScribbleLoopBoldIcon,
      duotone: ScribbleLoopDuotoneIcon,
      fill: ScribbleLoopFillIcon,
      light: ScribbleLoopLightIcon,
      regular: ScribbleLoopRegularIcon,
      thin: ScribbleLoopThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
