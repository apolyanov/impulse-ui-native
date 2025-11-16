import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlayCircleBold } from "../bold";
import { PlayCircleDuotone } from "../duotone";
import { PlayCircleFill } from "../fill";
import { PlayCircleLight } from "../light";
import { PlayCircleRegular } from "../regular";
import { PlayCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlayCircle = memo(function PlayCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlayCircleBold,
      duotone: PlayCircleDuotone,
      fill: PlayCircleFill,
      light: PlayCircleLight,
      regular: PlayCircleRegular,
      thin: PlayCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
