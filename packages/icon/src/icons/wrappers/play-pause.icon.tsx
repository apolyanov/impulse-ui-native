import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlayPauseBoldIcon } from "../bold/play-pause-bold.icon";
import { PlayPauseDuotoneIcon } from "../duotone/play-pause-duotone.icon";
import { PlayPauseFillIcon } from "../fill/play-pause-fill.icon";
import { PlayPauseLightIcon } from "../light/play-pause-light.icon";
import { PlayPauseRegularIcon } from "../regular/play-pause-regular.icon";
import { PlayPauseThinIcon } from "../thin/play-pause-thin.icon";

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
