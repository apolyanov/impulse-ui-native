import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScribbleLoopBold } from "../bold";
import { ScribbleLoopDuotone } from "../duotone";
import { ScribbleLoopFill } from "../fill";
import { ScribbleLoopLight } from "../light";
import { ScribbleLoopRegular } from "../regular";
import { ScribbleLoopThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ScribbleLoop = memo(function ScribbleLoop(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScribbleLoopBold,
      duotone: ScribbleLoopDuotone,
      fill: ScribbleLoopFill,
      light: ScribbleLoopLight,
      regular: ScribbleLoopRegular,
      thin: ScribbleLoopThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
