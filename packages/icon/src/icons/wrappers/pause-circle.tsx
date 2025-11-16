import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PauseCircleBold } from "../bold";
import { PauseCircleDuotone } from "../duotone";
import { PauseCircleFill } from "../fill";
import { PauseCircleLight } from "../light";
import { PauseCircleRegular } from "../regular";
import { PauseCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PauseCircle = memo(function PauseCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PauseCircleBold,
      duotone: PauseCircleDuotone,
      fill: PauseCircleFill,
      light: PauseCircleLight,
      regular: PauseCircleRegular,
      thin: PauseCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
