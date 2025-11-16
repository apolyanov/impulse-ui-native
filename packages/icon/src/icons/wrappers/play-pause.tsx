import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlayPauseBold } from "../bold";
import { PlayPauseDuotone } from "../duotone";
import { PlayPauseFill } from "../fill";
import { PlayPauseLight } from "../light";
import { PlayPauseRegular } from "../regular";
import { PlayPauseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlayPause = memo(function PlayPause(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlayPauseBold,
      duotone: PlayPauseDuotone,
      fill: PlayPauseFill,
      light: PlayPauseLight,
      regular: PlayPauseRegular,
      thin: PlayPauseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
