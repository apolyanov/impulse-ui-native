import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PauseBold } from "../bold";
import { PauseDuotone } from "../duotone";
import { PauseFill } from "../fill";
import { PauseLight } from "../light";
import { PauseRegular } from "../regular";
import { PauseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pause = memo(function Pause(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PauseBold,
      duotone: PauseDuotone,
      fill: PauseFill,
      light: PauseLight,
      regular: PauseRegular,
      thin: PauseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
