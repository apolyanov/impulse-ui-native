import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StopCircleBold } from "../bold";
import { StopCircleDuotone } from "../duotone";
import { StopCircleFill } from "../fill";
import { StopCircleLight } from "../light";
import { StopCircleRegular } from "../regular";
import { StopCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StopCircle = memo(function StopCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StopCircleBold,
      duotone: StopCircleDuotone,
      fill: StopCircleFill,
      light: StopCircleLight,
      regular: StopCircleRegular,
      thin: StopCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
