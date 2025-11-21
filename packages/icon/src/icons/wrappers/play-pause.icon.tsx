import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlayPauseBoldIcon } from "../bold";
import { PlayPauseDuotoneIcon } from "../duotone";
import { PlayPauseFillIcon } from "../fill";
import { PlayPauseLightIcon } from "../light";
import { PlayPauseRegularIcon } from "../regular";
import { PlayPauseThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlayPauseIcon = memo(function PlayPause(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlayPauseBoldIcon,
      duotone: PlayPauseDuotoneIcon,
      fill: PlayPauseFillIcon,
      light: PlayPauseLightIcon,
      regular: PlayPauseRegularIcon,
      thin: PlayPauseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
